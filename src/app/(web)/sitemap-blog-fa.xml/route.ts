import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/payload/blogs';

export const revalidate = 3600; // ساعتی

export async function GET() {
  const posts = await getBlogPosts();
  const eligiblePosts = posts.filter((post) => !post.noIndex);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${eligiblePosts
  .map((post) => {
    const loc = post.canonicalURL || `https://faralist.com/blog/${post.slug}`;
    const lastmod = new Date().toISOString();
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${post.featured ? '0.9' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
