import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/payload/blogs';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  ShieldCheck,
  Tag,
  Share2,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// تولید پیش‌فرض پارامترها در زمان بیلد (SSG)
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// به‌روزرسانی کش هوشمند (ISR)
export const revalidate = 60;
export const dynamicParams = true;

// متادیتای داینامیک و بهینه سئو برای هر مقاله
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'مقاله پیدا نشد | فرالیست',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = post.canonicalURL || `https://faralist.com/blog/${post.slug}`;
  const title = post.metaTitle || `${post.title} | وبلاگ فرالیست`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !post.noIndex,
      follow: !post.noIndex,
      googleBot: {
        index: !post.noIndex,
        follow: !post.noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'فرالیست',
      locale: 'fa_IR',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = post.canonicalURL || `https://faralist.com/blog/${post.slug}`;

  // اسکیما و داده‌های ساخت‌یافته Schema.org برای مقاله
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.imageUrl],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: 'fa-IR',
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://faralist.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'فرالیست',
      url: 'https://faralist.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://faralist.com/assets/images/faralist-logo-original.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

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
        name: 'وبلاگ',
        item: 'https://faralist.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  // واکشی مقالات مرتبط بر اساس برچسب‌ها یا اسلاگ‌های پیشنهادی
  const allPosts = await getBlogPosts({ limit: 6 });
  const relatedList = allPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      (post.relatedPosts?.includes(p.slug) || p.category === post.category)
  ).slice(0, 3);

  return (
    <>
      {/* درج داده‌های ساخت‌یافته JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full bg-white text-black pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* نوار ناوبری بردکرامب (Breadcrumbs) */}
          <nav
            aria-label="مسیر راهنما"
            className="flex items-center gap-2 text-xs text-black/60 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-black transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">
              وبلاگ فرالیست
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-black/85 font-medium truncate max-w-xs sm:max-w-md">
              {post.category}
            </span>
          </nav>

          {/* دسته‌بندی و اطلاعات متای بالا */}
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-[#eae9fb] text-[#3525cd]">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-black/60">
              <Clock className="w-3.5 h-3.5 text-[#3525cd]" />
              <span>مدت زمان مطالعه: {post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-black/60">
              <Calendar className="w-3.5 h-3.5 text-[#3525cd]" />
              <span>انتشار: {post.publishedAt}</span>
            </div>
          </div>

          {/* تگ اصلی H1 منحصر‌به‌فرد مقاله مطابق استانداردهای سئو */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight sm:leading-tight md:leading-tight mb-6">
            {post.title}
          </h1>

          {/* خلاصه مقاله (Excerpt) */}
          <p className="text-base sm:text-lg text-black/75 leading-relaxed font-normal mb-8 border-r-4 border-[#3525cd] pr-4 bg-[#fbfbff] py-3 rounded-l-2xl">
            {post.excerpt}
          </p>

          {/* نویسنده و بازبینی‌کننده */}
          <div className="flex items-center justify-between border-y border-black/10 py-4 mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-black/5 flex items-center justify-center">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-black">{post.author.name}</span>
                <span className="text-xs text-black/50">{post.author.role || 'کارشناس تحریریه فرالیست'}</span>
              </div>
            </div>

            {post.reviewer && (
              <div className="flex items-center gap-1.5 text-xs text-black/70 bg-green-50 text-green-800 px-3 py-1.5 rounded-xl border border-green-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>بازبینی‌شده توسط: <strong>{post.reviewer}</strong></span>
              </div>
            )}
          </div>

          {/* تصویر شاخص با تگ Alt بهینه‌شده سئو */}
          <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden mb-10 bg-black/5">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* محتوای متنی مقاله */}
          <div className="space-y-6 text-black/85 text-base sm:text-lg leading-loose font-normal">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-justify leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* برچسب‌های سئو */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-black/10">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-black/70">
                <Tag className="w-3.5 h-3.5 text-[#3525cd]" />
                <span>برچسب‌های مرتبط:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-xl bg-[#f5f4fd] text-[#3525cd] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* بخش CTA ویژه فرالیست (Call-To-Action) */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-br from-[#191458] to-[#3525cd] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>رایگان امتحان کنید</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                کاتالوگ آنلاین و لیست قیمت لحظه‌ای خود را در ۳ دقیقه بسازید
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                بدون نیاز به فایل سنگین PDF یا پیام‌های پراکنده، لینک همیشه به‌روز فرالیست را به مشتریان و همکارانتان بدهید.
              </p>
            </div>
            <Button
              variant="white"
              size="lg"
              className="shrink-0 bg-white text-[#191458] hover:bg-white/90 font-bold px-6"
              onClick={undefined}
            >
              <Link href="/#pricing" className="flex items-center gap-2">
                <span>شروع رایگان فرالیست</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* مقالات مرتبط (Internal Linking) */}
          {relatedList.length > 0 && (
            <div className="mt-16 pt-10 border-t border-black/10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 text-right">
                مقالات مرتبط و پیشنهادی
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedList.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col bg-[#fbfbff] rounded-2xl overflow-hidden hover:bg-[#f5f4fd] transition-colors border border-black/5 p-4 text-right"
                  >
                    <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden mb-3 bg-black/10">
                      <Image
                        src={rel.imageUrl}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#3525cd] mb-1">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-black line-clamp-2 leading-snug group-hover:text-[#3525cd] transition-colors">
                      {rel.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* بازگشت به وبلاگ */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#f5f4fd] text-[#3525cd] font-bold text-sm hover:bg-[#eae9fb] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              <span>مشاهده تمام مقالات وبلاگ</span>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
