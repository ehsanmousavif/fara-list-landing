import type { Metadata } from 'next';
import BlogPage from '@/components/blog/BlogPage';
import { getBlogPosts } from '@/lib/payload/blogs';

export const metadata: Metadata = {
  title: 'وبلاگ تخصصی فرالیست | مقالات و راهنماها',
  description:
    'راهنماها، ترفندهای افزایش فروش و جدیدترین راهکارهای دیجیتال‌سازی کاتالوگ و لیست قیمت برای کسب‌وکارهای مدرن.',
};

// بازسازی خودکار کش صفحه هر ۱ دقیقه در صورت انتشار مقاله جدید
export const revalidate = 60;

export default async function BlogRoute() {
  const posts = await getBlogPosts();
  return <BlogPage posts={posts} />;
}
