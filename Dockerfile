# ==========================================
# 1. Base Image with Alpine & Corepack (pnpm)
# ==========================================
FROM node:26.13-alpine3.24 AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable pnpm via corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

# ==========================================
# 2. Dependencies Stage
# ==========================================
FROM base AS deps
WORKDIR /app

# Copy lockfiles and package manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies strictly matching the lockfile
RUN pnpm install --frozen-lockfile

# ==========================================
# 3. Builder Stage
# ==========================================
FROM base AS builder
WORKDIR /app

# Copy cached dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment for production build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Next.js build produces standalone output in .next/standalone
RUN pnpm build

# ==========================================
# 4. Production Runner Stage
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a dedicated non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Create persistent storage directories
RUN mkdir -p /app/data && \
    chown -R nextjs:nodejs /app/data

# Copy static assets and standalone server output
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy default initial payload.db if available
COPY --from=builder --chown=nextjs:nodejs /app/payload.db ./payload.db

# Ensure permissions on workspace and SQLite database
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
