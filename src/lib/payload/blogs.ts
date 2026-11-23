import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { BLOG_POSTS, BlogPost } from '@/data/blogData';

/**
 * دریافت نمونه متصل به پی‌لود لوکال (Local API)
 */
export async function getPayloadClient() {
  return await getPayload({ config: configPromise });
}

/**
 * تبدیل داکیومنت دیتابیس پی‌لود به ساختار تایپ BlogPost فرانت‌اند
 */
function mapDocToBlogPost(doc: any): BlogPost {
  return {
    id: String(doc.id),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt || '',
    content: Array.isArray(doc.paragraphs) && doc.paragraphs.length > 0
      ? doc.paragraphs.map((p: any) => (typeof p === 'string' ? p : p.text || ''))
      : Array.isArray(doc.content)
      ? doc.content
      : [doc.excerpt || ''],
    category: doc.category || 'آموزش',
    readingTime: doc.readingTime || '۳ دقیقه',
    publishedAt: doc.publishedAt || 'آبان ۱۴۰۳',
    imageUrl: doc.imageUrl || (doc.media?.url ?? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80'),
    featured: Boolean(doc.featured),
    author: {
      name: doc.author?.name || 'تیم فرالیست',
      role: doc.author?.role || 'کارشناس محتوا',
      avatar: doc.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    tags: Array.isArray(doc.tags)
      ? doc.tags.map((t: any) => (typeof t === 'string' ? t : t.tag || ''))
      : [],
  };
}

/**
 * واکشی تمام مقالات با Local API و اعمال فیلترهای اختیاری
 */
export async function getBlogPosts(options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
}): Promise<BlogPost[]> {
  try {
    const payload = await getPayloadClient();

    // بررسی و پر کردن اولیه مقالات در صورت خالی بودن دیتابیس
    await seedBlogsIfEmpty(payload);

    const where: any = {
      status: { equals: 'published' },
    };

    if (options?.category && options.category !== 'همه مقالات') {
      where.category = { equals: options.category };
    }

    if (options?.featured !== undefined) {
      where.featured = { equals: options.featured };
    }

    const { docs } = await payload.find({
      collection: 'blogs',
      where,
      limit: options?.limit || 50,
      sort: '-createdAt',
    });

    if (docs && docs.length > 0) {
      return docs.map(mapDocToBlogPost);
    }
  } catch (error) {
    console.warn('[Payload Local API] Fetch blogs fallback to static data:', error);
  }

  // داده‌های پشتیبان در صورت هرگونه قطعی یا مشکل ارتباطی
  return BLOG_POSTS;
}

/**
 * واکشی یک مقاله بر اساس Slug با Local API
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'blogs',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    });

    if (docs && docs.length > 0) {
      return mapDocToBlogPost(docs[0]);
    }
  } catch (error) {
    console.warn(`[Payload Local API] Fetch blog by slug "${slug}" fallback:`, error);
  }

  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

/**
 * کاشت خودکار دیتای اولیه در پایگاه‌داده در صورتی که دیتابیس هنوز خالی باشد
 */
async function seedBlogsIfEmpty(payload: any) {
  try {
    const count = await payload.count({
      collection: 'blogs',
    });

    if (count.totalDocs === 0) {
      console.log('🌱 Seeding initial blog posts into SQLite via Payload Local API...');
      for (const post of BLOG_POSTS) {
        await payload.create({
          collection: 'blogs',
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            category: post.category,
            readingTime: post.readingTime,
            publishedAt: post.publishedAt,
            imageUrl: post.imageUrl,
            featured: Boolean(post.featured),
            status: 'published',
            author: {
              name: post.author?.name || 'تیم فرالیست',
              role: post.author?.role || 'مشاور فرالیست',
              avatar: post.author?.avatar || '',
            },
            paragraphs: post.content.map((txt) => ({ text: txt })),
            tags: post.tags.map((t) => ({ tag: t })),
          },
        });
      }
      console.log('✅ Seeding completed successfully!');
    }
  } catch (seedErr) {
    // خطا در سید مشکلی ایجاد نمی‌کند
    console.warn('[Payload Seed Error]:', seedErr);
  }
}
