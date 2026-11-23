import { NextResponse } from 'next/server';

export const revalidate = 86400; // روزانه

export async function GET() {
  const now = new Date().toISOString();

  const pages = [
    {
      url: 'https://faralist.com',
      lastmod: now,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: 'https://faralist.com/blog',
      lastmod: now,
      changefreq: 'daily',
      priority: '0.9',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
