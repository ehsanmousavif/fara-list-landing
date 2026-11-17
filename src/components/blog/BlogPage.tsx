'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '@/data/blogData';
import { BlogCard } from './BlogCard';
import { Button } from '@/components/ui';
import {
  Search,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Tag,
  Sparkles,
} from 'lucide-react';

interface BlogPageProps {
  onBackToHome?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
}) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('همه مقالات');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const handleBackToLanding = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      router.push('/');
    }
  };

  // فیلتر مقالات بر اساس دسته‌بندی و عبارت جستجو
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'همه مقالات' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        post.title.includes(searchQuery) ||
        post.excerpt.includes(searchQuery) ||
        post.tags.some((tag) => tag.includes(searchQuery));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // مقاله برگزیده برای بخش هدر وبلاگ
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  // سایر مقالات بدون مقاله برگزیده وقتی فیلتری اعمال نشده باشد
  const regularPosts = useMemo(() => {
    if (selectedCategory !== 'همه مقالات' || searchQuery.trim() !== '') {
      return filteredPosts;
    }
    return filteredPosts.filter((p) => p.id !== featuredPost?.id);
  }, [filteredPosts, selectedCategory, searchQuery, featuredPost]);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-black selection:bg-[#3525cd] selection:text-white pt-24 sm:pt-28 md:pt-32 pb-16">
      {/* نمایش جزئیات پست در صورت انتخاب یک مقاله */}
      {activePost ? (
        <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
          {/* دکمه بازگشت به لیست مقالات */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3525cd] hover:underline cursor-pointer border-none bg-transparent"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به مقالات وبلاگ</span>
            </button>

            <button
              onClick={handleBackToLanding}
              className="inline-flex items-center gap-1.5 text-xs text-black/60 hover:text-black cursor-pointer border-none bg-transparent"
            >
              <span>صفحه اصلی فرالیست</span>
            </button>
          </div>

          {/* سربرگ مقاله */}
          <div className="space-y-4 text-right mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#eae9fb] text-[#3525cd]">
                {activePost.category}
              </span>
              <span className="text-xs text-black/50 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>زمان مطالعه: {activePost.readingTime}</span>
              </span>
              <span className="text-xs text-black/50 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activePost.publishedAt}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight tracking-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-black/70 leading-relaxed font-normal">
              {activePost.excerpt}
            </p>
          </div>

          {/* کاور مقاله */}
          <div className="rounded-3xl overflow-hidden aspect-video w-full mb-10 bg-[#f5f4fd]">
            <img
              src={activePost.imageUrl}
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* محتوای مقاله */}
          <div className="prose prose-lg max-w-none text-right space-y-6 text-black/80 leading-relaxed">
            {activePost.content.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg leading-loose">
                {paragraph}
              </p>
            ))}
          </div>

          {/* نویسنده و برچسب‌ها */}
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-right">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#eae9fb] shrink-0">
                <img
                  src={activePost.author.avatar}
                  alt={activePost.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-black">{activePost.author.name}</p>
                <p className="text-xs text-black/60">{activePost.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#f5f4fd] text-black/70 font-medium"
                >
                  <Tag className="w-3 h-3 text-[#3525cd]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* باکس فراخوان عمل انتهایی مقاله */}
          <div className="mt-12 p-8 rounded-3xl bg-[#070712] text-white text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8f84fc]" />
              <span>فرالیست؛ دستیار هوشمند کاتالوگ شما</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              می‌خواهید محصولات خود را به این شیوه مدرن نمایش دهید؟
            </h3>
            <p className="text-sm text-white/70 max-w-md mx-auto">
              همین الان کاتالوگ آنلاین خود را بسازید و لینک اختصاصی آن را در شبکه‌های اجتماعی به اشتراک بگذارید.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                variant="white"
                size="md"
                onClick={handleBackToLanding}
                className="font-bold px-8 cursor-pointer"
              >
                شروع رایگان فرالیست
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* لیست مقالات */
        <div className="max-w-6xl mx-auto px-4 space-y-12 w-full">
          {/* عنوان و مقدمه وبلاگ */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae9fb] text-[#3525cd] text-xs font-bold">
              <BookOpen className="w-4 h-4" />
              <span>دانستنی‌ها، آموزش‌ها و اخبار فرالیست</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
              وبلاگ تخصصی فرالیست
            </h1>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              راهنماها، ترفندهای افزایش فروش و جدیدترین راهکارهای دیجیتال‌سازی کاتالوگ و لیست قیمت برای کسب‌وکارهای مدرن.
            </p>
          </div>

          {/* نوار جستجو و فیلتر دسته‌بندی‌ها */}
          <div className="space-y-4">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در بین مقالات و موضوعات..."
                className="w-full h-12 pr-11 pl-4 rounded-2xl bg-[#f5f4fd] text-sm text-black placeholder:text-black/40 outline-none border-none focus:bg-[#eae9fb]/70 transition-colors"
              />
              <Search className="w-4 h-4 text-black/40 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* چیپ‌های دسته‌بندی */}
            <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all border-none cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#3525cd] text-white'
                      : 'bg-[#f5f4fd] text-black/70 hover:bg-[#eae9fb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* مقاله برگزیده ویژه */}
          {selectedCategory === 'همه مقالات' && searchQuery.trim() === '' && featuredPost && (
            <div
              onClick={() => handlePostClick(featuredPost)}
              className="cursor-pointer group rounded-3xl overflow-hidden bg-[#f5f4fd] transition-all hover:bg-[#eae9fb]/70"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 md:p-10">
                <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-white">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4 text-right">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#3525cd] text-white">
                      مقاله ویژه
                    </span>
                    <span className="text-xs text-black/60">{featuredPost.category}</span>
                    <span className="text-xs text-black/40">•</span>
                    <span className="text-xs text-black/60">{featuredPost.readingTime} مطالعه</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black leading-tight group-hover:text-[#3525cd] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-black">
                        {featuredPost.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-[#3525cd] flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                      <span>مطالعه کامل مقاله</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* لیست مقالات عادی */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <h3 className="text-lg font-bold text-black">
                {selectedCategory === 'همه مقالات' ? 'تازه‌ترین مقالات' : selectedCategory}
              </h3>
              <span className="text-xs text-black/50">
                {regularPosts.length} مقاله موجود است
              </span>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={handlePostClick}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center rounded-3xl bg-[#f5f4fd] space-y-3">
                <p className="text-base font-bold text-black">هیچ مقاله‌ای پیدا نشد!</p>
                <p className="text-xs text-black/60">
                  کلمه دیگری را جستجو کنید یا دسته‌بندی دیگری را انتخاب نمایید.
                </p>
                <Button
                  variant="surface"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('همه مقالات');
                    setSearchQuery('');
                  }}
                >
                  مشاهده همه مقالات
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
