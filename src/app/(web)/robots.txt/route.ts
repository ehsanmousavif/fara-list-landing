import { NextResponse } from 'next/server';

export const revalidate = 86400; // روزانه

export async function GET() {
  const content = `User-agent: *
Allow: /
Allow: /blog
Allow: /blog/*
Disallow: /admin
Disallow: /admin/*
Disallow: /api
Disallow: /api/*

Host: https://faralist.com
Sitemap: https://faralist.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
