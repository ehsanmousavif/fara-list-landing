# ==========================================
# 1. Base Image with Alpine & PNPM
# ==========================================
FROM node:26.13-alpine3.24 AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm directly via npm (reliable across all Alpine versions)
RUN npm install -g pnpm

# ==========================================
# 2. Dependencies Stage
# ==========================================
FROM base AS deps
WORKDIR /app

# Copy package manifests and workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies strictly matching lockfile
RUN pnpm install --frozen-lockfile

# ==========================================
# 3. Builder Stage
# ==========================================
FROM base AS builder
WORKDIR /app

# Copy installed dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build flags
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Compile standalone Next.js bundle
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

# Create a dedicated non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Create required directories for persistent storage
RUN mkdir -p /app/public/uploads /app/data

# Copy static assets and standalone server
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy payload.db if it exists in the build context (wildcard prevents build failure if absent)
COPY --from=builder --chown=nextjs:nodejs /app/payload.db* ./

# Ensure write permissions for non-root user on database and uploads
RUN touch ./payload.db && chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
