---
name: faralist-seo
description: Implement and maintain Persian SEO for Faralist's marketing pages and blog using Next.js and Payload CMS. Protect the existing application routes and follow the actual project architecture.
---

# Faralist SEO Skill

## 1. Project Context

Faralist is a SaaS product for managing large product lists, online catalogs, and bulk product price updates.

### Business goals
- Acquire organic traffic from Google.
- Increase successful user registrations.
- Target wholesalers as the primary audience.
- Attract businesses managing large product inventories.
- Convert organic visitors into free registrations and eventually paid subscriptions.

### Product capabilities
- Bulk product creation and editing.
- Bulk price updates.
- Online product catalogs.
- Dedicated product-list URLs.
- Excel import/export.
- Product image management.
- Product variants.
- Product list sharing.
- Product search and filtering.

### Technology
- Frontend: Next.js
- CMS: Payload CMS
- Rendering: Hybrid SSR / SSG
- Cache: Existing caching and revalidation implementation.

## 2. Current SEO Scope

IMPORTANT: This project currently targets Persian SEO only.

- Primary language: Persian (`fa`)
- HTML language: `fa-IR`
- Text direction: RTL
- Market: Iran
- English content: Not implemented.
- English routes: Do not create.
- Hreflang: Not required at this stage.
- International SEO: Out of scope.

Do not implement English localization or multilingual SEO unless explicitly requested.

## 3. Domain and Application Separation

Domain:

`https://faralist.com`

IMPORTANT:

The root domain currently serves the Faralist application.

The marketing Landing Page does not have an assigned URL yet.

Rules:

1. Never assume `/` is the marketing Landing Page.
2. Never replace, modify, or break the existing application homepage.
3. Never apply marketing SEO metadata to application routes.
4. Do not index private dashboard, authentication, account, or user-specific application pages.
5. Do not invent a Landing Page route.
6. Keep the Landing Page SEO implementation separate until its actual URL is specified.
7. Include the Landing Page in the sitemap only after its route exists and is publicly indexable.

Before making changes, inspect the existing routing architecture and identify application routes versus public marketing routes.

## 4. Sitemap Architecture

Required sitemap endpoints:

- `/sitemap.xml`
- `/sitemap-pages.xml`
- `/sitemap-blog-fa.xml`

Expected responsibility:

### sitemap.xml
Sitemap index referencing the child sitemaps.

### sitemap-pages.xml
Contains eligible public static marketing pages.

### sitemap-blog-fa.xml
Contains eligible published Persian blog articles.

Rules:

- Include only canonical URLs.
- Exclude drafts and unpublished content.
- Exclude private application routes.
- Exclude authentication and dashboard routes.
- Exclude redirecting URLs.
- Exclude 404 URLs.
- Exclude `noindex` pages.
- Use absolute HTTPS URLs.
- Use real content modification dates for `lastmod`.
- Do not generate URLs for nonexistent pages.
- Avoid duplicate URLs and trailing-slash inconsistencies.
- Update sitemap data when published content changes.

Inspect the current Next.js version and sitemap implementation before choosing the implementation method.

Do not create duplicate sitemap routes if an existing implementation already handles them.

## 5. Technical SEO Requirements

### Metadata

Every public indexable page must have appropriate metadata.

Required fields:

- Title
- Description
- Canonical URL
- Robots directives
- Open Graph metadata
- Social sharing image where appropriate

Rules:

- Metadata must be unique per page.
- Do not use generic titles for every article.
- Never generate metadata from undefined or empty values.
- Do not duplicate metadata between unrelated pages.
- Use Persian naturally.
- Avoid keyword stuffing.

Use Next.js Metadata API and the existing project conventions.

For dynamic pages, use `generateMetadata` where appropriate.

### Canonical

Rules:

- Every indexable page must have an absolute canonical URL.
- Canonical should reference the preferred URL of that page.
- Do not canonicalize all blog articles to the blog homepage.
- Normalize trailing slashes consistently.
- Avoid indexing duplicate query-parameter URLs.

### Robots

Implement `/robots.txt`.

Rules:

- Allow crawling of public marketing and blog content.
- Do not block essential public assets.
- Protect private application routes from indexing using appropriate `noindex` controls.
- Do not rely on robots.txt alone to prevent indexing of private pages.
- Reference the main sitemap index.

### Structured Data

Implement valid Schema.org JSON-LD when appropriate.

Recommended types:

- Organization
- WebSite
- SoftwareApplication
- BlogPosting
- BreadcrumbList

Rules:

- Schema must match visible page content.
- Never invent ratings, reviews, prices, authors, or product information.
- Avoid duplicate structured data.
- Validate JSON-LD output.
- Do not add unsupported or irrelevant schemas.

### HTTP and Indexability

Check:

- Correct HTTP status codes.
- 200 for valid public pages.
- 301 for permanent redirects.
- 404 for nonexistent content.
- 410 only when content is intentionally permanently removed.
- Noindex for private or non-search pages.
- No accidental redirect loops.
- No accidental soft 404 pages.

## 6. Payload CMS SEO Integration

Inspect existing Payload collections before changing their schemas.

The blog should support the following SEO fields:

- metaTitle
- metaDescription
- slug
- featuredImage
- canonicalURL (optional)
- noIndex
- publishedAt
- updatedAt
- author
- reviewer
- category
- relatedPosts

Requirements:

1. SEO fields must be manageable from the CMS.
2. Draft content must not appear in public queries or sitemaps.
3. Published content must have stable URLs.
4. Slug changes must be handled safely.
5. Metadata must be retrieved from Payload.
6. Revalidation must occur after relevant content changes.
7. `updatedAt` must represent a real modification.
8. Do not introduce unnecessary duplicate fields.
9. Validate required SEO fields before publication where appropriate.

Do not rebuild the existing CMS architecture.

## 7. Persian Content SEO

The main audience consists of wholesalers and businesses with many products.

Primary content themes:

- Product list management.
- Product price management.
- Bulk price updates.
- Online product catalogs.
- Bulk product editing.
- Excel-based product management.
- Product sharing.
- Wholesale business management.

### Content rules

Every article should have:

- One descriptive H1.
- Logical H2 and H3 hierarchy.
- Unique title and description.
- Search-intent alignment.
- Natural Persian writing.
- Relevant internal links.
- Descriptive image alt text.
- Useful and accurate information.
- Relevant CTA when appropriate.

Avoid:

- Keyword stuffing.
- Automatically generated low-value content.
- Duplicate articles.
- Artificial keyword variations.
- Unnecessary tags and thin category pages.
- Unnatural exact-match anchors.

## 8. Internal Linking

Build contextual links between:

- Blog articles.
- Blog categories.
- Public marketing pages.
- The actual Landing Page once its URL is assigned.

Rules:

- Use descriptive anchor text.
- Link only to existing public routes.
- Avoid excessive links.
- Prioritize relevant content relationships.
- Do not link to private application pages as SEO destinations.
- Prevent orphaned articles.

## 9. Performance and Rendering

Preserve the existing Hybrid Rendering architecture.

Check:

- Server-rendered HTML contains meaningful content.
- Metadata is available in the initial response.
- Images use appropriate optimization.
- Images have dimensions.
- Fonts are optimized.
- Unnecessary client-side JavaScript is avoided.
- Layout shifts are minimized.
- Cache invalidation works after publishing or updating content.

Core Web Vitals targets:

- LCP: <= 2.5 seconds
- INP: <= 200 milliseconds
- CLS: <= 0.1

Evaluate at the 75th percentile when field data is available.

Do not change rendering strategies without a technical reason.

## 10. Implementation Workflow

Always follow this sequence:

### Phase 1: Repository Inspection

Inspect:

- Next.js version.
- App Router or Pages Router.
- Existing route structure.
- Existing metadata implementation.
- Existing sitemap and robots implementation.
- Payload collections.
- Blog queries.
- Cache and revalidation logic.
- Existing redirects.

Do not assume file locations or project structure.

### Phase 2: SEO Audit

Identify:

- Missing metadata.
- Duplicate metadata.
- Incorrect canonical URLs.
- Indexability problems.
- Missing structured data.
- Sitemap errors.
- Broken internal links.
- Rendering problems.
- Missing image alt attributes.

Classify findings:

- Critical
- Important
- Recommended

### Phase 3: Implementation

Implement only confirmed requirements.

Preserve existing functionality.

Do not:

- Rewrite unrelated components.
- Change the application UI.
- Modify authentication.
- Change business logic.
- Invent routes.
- Introduce unnecessary dependencies.
- Break existing caching behavior.

### Phase 4: Validation

Validate:

- Sitemap XML syntax.
- Robots.txt accessibility.
- Canonical URLs.
- Metadata output.
- Structured Data validity.
- HTTP status codes.
- Internal links.
- HTML language and direction.
- Noindex behavior.
- Build and TypeScript checks.

### Phase 5: Final Report

Report:

1. What was inspected.
2. What was implemented.
3. Files modified.
4. SEO problems discovered.
5. Tests performed.
6. Remaining issues.
7. Requirements needing human decisions.

Never claim an SEO requirement is implemented unless it has actually been verified.

## 11. Priority Order

Follow this priority:

1. Protect the existing application.
2. Ensure public routes are crawlable.
3. Implement correct metadata and canonical.
4. Implement robots.txt and sitemap architecture.
5. Integrate Payload SEO fields.
6. Implement structured data.
7. Improve Persian content structure.
8. Improve internal linking.
9. Optimize performance.
10. Prepare for future Landing Page SEO.

## 12. Important Constraints

This is a Persian-only SEO project for the current phase.

Do not implement:

- English routes.
- English translations.
- Hreflang.
- International SEO.
- Unrequested Landing Page URLs.
- Unrequested changes to the application homepage.

Always inspect before modifying.

Prefer minimal, maintainable, production-ready changes over unnecessary abstractions.

The existing application and its functionality have higher priority than SEO changes.
