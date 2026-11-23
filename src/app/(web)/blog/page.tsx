import type { Metadata } from 'next';
import BlogPage from '@/components/blog/BlogPage';
import { getBlogPosts } from '@/lib/payload/blogs';

export const metadata: Metadata = {
  title: 'وبلاگ تخصصی فرالیست | مقالات مدیریت کاتالوگ و لیست قیمت B2B',
  description:
    'راهنماها، ترفندهای افزایش فروش عمده، تغییر درصدی قیمت‌ها و راهکارهای نوین ساخت کاتالوگ آنلاین برای بنکداران و تولیدکنندگان.',
  alternates: {
    canonical: 'https://faralist.com/blog',
  },
  openGraph: {
    title: 'وبلاگ تخصصی فرالیست | مقالات مدیریت کاتالوگ و لیست قیمت B2B',
    description:
      'راهنماها، ترفندهای افزایش فروش عمده، تغییر درصدی قیمت‌ها و راهکارهای نوین ساخت کاتالوگ آنلاین برای بنکداران و تولیدکنندگان.',
    url: 'https://faralist.com/blog',
    siteName: 'فرالیست',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://faralist.com/assets/images/faralist-logo-original.png',
        width: 800,
        height: 600,
        alt: 'وبلاگ تخصصی فرالیست',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// بازسازی هوشمند کش صفحه (ISR) هر ۱ دقیقه
export const revalidate = 60;

export default async function BlogRoute() {
  const posts = await getBlogPosts();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: 'https://faralist.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'وبلاگ فرالیست',
        item: 'https://faralist.com/blog',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'وبلاگ تخصصی فرالیست',
    description:
      'مجموعه مقالات تخصصی پیرامون کاتالوگ آنلاین، مدیریت قیمت لحظه‌ای، بهینه‌سازی فروش عمده و فرآیندهای B2B.',
    url: 'https://faralist.com/blog',
    inLanguage: 'fa-IR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'فرالیست',
      url: 'https://faralist.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogPage posts={posts} />
    </>
  );
}
