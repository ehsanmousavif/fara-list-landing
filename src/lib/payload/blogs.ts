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
 * تبدیل داکیومنت دیتابیس پی‌لود به ساختار تایپ BlogPost فرانت‌اند با فیلدهای سئو
 */
function mapDocToBlogPost(doc: any): BlogPost {
  let imageSrc = '';
  if (doc.image && typeof doc.image === 'object' && doc.image.url) {
    imageSrc = doc.image.url;
  } else if (typeof doc.image === 'string') {
    imageSrc = doc.image;
  } else if (doc.imageUrl) {
    imageSrc = doc.imageUrl;
  } else {
    imageSrc = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80';
  }

  const related = Array.isArray(doc.relatedPosts)
    ? doc.relatedPosts.map((r: any) => (typeof r === 'object' && r?.slug ? r.slug : String(r)))
    : [];

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
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toLocaleDateString('fa-IR') : doc.publishedAt,
    imageUrl: imageSrc,
    featured: Boolean(doc.featured),
    author: {
      name: doc.author || 'تیم تحریریه فرالیست',
      avatar: '/assets/images/jikot-logo.png',
      role: 'متخصص بازاریابی B2B',
    },
    reviewer: doc.reviewer || 'استودیو جیکات وب',
    tags: Array.isArray(doc.tags)
      ? doc.tags.map((t: any) => (typeof t === 'string' ? t : t.tag || ''))
      : [],
    metaTitle: doc.metaTitle || `${doc.title} | فرالیست`,
    metaDescription: doc.metaDescription || doc.excerpt || '',
    canonicalURL: doc.canonicalURL || `https://faralist.com/blog/${doc.slug}`,
    noIndex: Boolean(doc.noIndex),
    relatedPosts: related,
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
        status: { equals: 'published' },
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
 * کاشت دستی یا اسکریپتی دیتای کامل سئو در پایگاه داده
 */
export async function seedBlogDatabase(forceUpdate = false) {
  const payload = await getPayloadClient();
  console.log('🌱 Starting blog database seed with full Persian SEO data...');

  for (const post of BLOG_POSTS) {
    const { docs } = await payload.find({
      collection: 'blogs',
      where: { slug: { equals: post.slug } },
      limit: 1,
    });

    const blogData: any = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      readingTime: post.readingTime,
      publishedAt: post.publishedAt,
      imageUrl: post.imageUrl,
      featured: Boolean(post.featured),
      status: 'published',
      paragraphs: post.content.map((txt) => ({ text: txt })),
      tags: post.tags.map((t) => ({ tag: t })),
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      canonicalURL: post.canonicalURL,
      noIndex: Boolean(post.noIndex),
      author: post.author.name,
      reviewer: post.reviewer,
    };

    if (docs.length === 0) {
      await payload.create({
        collection: 'blogs',
        data: blogData,
      });
      console.log(`  ➕ Created blog: ${post.slug}`);
    } else if (forceUpdate) {
      await payload.update({
        collection: 'blogs',
        id: docs[0].id,
        data: blogData,
      });
      console.log(`  🔄 Updated blog: ${post.slug}`);
    }
  }

  console.log('✅ Blog database seed completed successfully!');
}

/**
 * بررسی و پر کردن اولیه مقالات در صورتی که دیتابیس هنوز خالی باشد
 */
async function seedBlogsIfEmpty(payload: any) {
  try {
    const count = await payload.count({
      collection: 'blogs',
    });

    if (count.totalDocs === 0) {
      await seedBlogDatabase(false);
    }
  } catch (seedErr) {
    console.warn('[Payload Seed Error]:', seedErr);
  }
}
