import type { Metadata } from 'next';
import BlogPage from '@/components/blog/BlogPage';

export const metadata: Metadata = {
  title: 'وبلاگ تخصصی فرالیست | مقالات و راهنماها',
  description:
    'راهنماها، ترفندهای افزایش فروش و جدیدترین راهکارهای دیجیتال‌سازی کاتالوگ و لیست قیمت برای کسب‌وکارهای مدرن.',
};

export default function BlogRoute() {
  return <BlogPage />;
}
