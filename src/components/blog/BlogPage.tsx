import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '@/data/blogData';
import { BlogCard } from './BlogCard';
import { Button } from '@/components/ui';
import { FaralistLogo } from '@/components/logo';
import { Footer } from '@/components/layout/Footer';
import {
  Search,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Share2,
  Tag,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface BlogPageProps {
  onBackToHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
  onNavigateSection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه مقالات');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

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
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#3525cd] selection:text-white">
      {/* هدر اختصاصی صفحه وبلاگ - شناور و مات بدون بوردر */}
      <header className="fixed top-3 sm:top-4 lg:top-5 inset-x-3 sm:inset-x-6 lg:inset-x-8 max-w-6xl mx-auto z-40 transition-all pointer-events-none">
        <div className="w-full h-16 sm:h-18 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-white/85 backdrop-blur-2xl backdrop-saturate-180 border-none shadow-none flex items-center justify-between gap-4 pointer-events-auto">
          {/* لوگو و بازگشت به خانه */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer border-none bg-transparent"
              aria-label="بازگشت به صفحه اصلی فرالیست"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#f5f4fd] rounded-xl overflow-hidden shrink-0">
                <FaralistLogo size={32} animate={false} />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-base sm:text-lg font-black tracking-tight text-black group-hover:text-[#3525cd] transition-colors leading-tight">
                  فرالیست
                </span>
                <span className="text-[10px] text-black/50 tracking-wider uppercase font-semibold">
                  Fara List
                </span>
              </div>
            </button>

            <span className="hidden sm:inline-block w-px h-6 bg-black/10 mx-1" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#eae9fb] text-[#3525cd]">
                وبلاگ اختصاصی
              </span>
            </div>
          </div>

          {/* لینک‌های ناوبری به سکشن‌های صفحه اصلی */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={onBackToHome}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer"
            >
              صفحه اصلی
            </button>
            <button
              onClick={() => onNavigateSection('features')}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer"
            >
              ویژگی‌ها
            </button>
            <button
              onClick={() => onNavigateSection('demo')}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer"
            >
              دموی زنده
            </button>
            <button
              onClick={() => onNavigateSection('pricing')}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer"
            >
              تعرفه‌ها
            </button>
            <button
              onClick={() => onNavigateSection('faq')}
              className="text-sm font-medium px-3.5 py-2 rounded-xl text-black/70 hover:text-black hover:bg-[#f5f4fd] transition-colors border-none bg-transparent cursor-pointer"
            >
              سوالات متداول
            </button>
          </nav>

          {/* دکمه بازگشت */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={onBackToHome}
              className="flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به لندینگ</span>
            </Button>
          </div>
        </div>
      </header>

      {/* نمایش جزئیات پست در صورت انتخاب یک مقاله */}
      {activePost ? (
        <main className="flex-1 max-w-4xl mx-auto px-4 pt-28 pb-12 sm:pt-32 w-full">
          {/* دکمه بازگشت به لیست مقالات */}
          <div className="mb-8">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f5f4fd] text-[#3525cd] hover:bg-[#eae9fb] font-bold text-sm transition-colors cursor-pointer border-none"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به تمام مقالات</span>
            </button>
          </div>

          <article className="space-y-8">
            {/* عنوان و متادیتا */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#eae9fb] text-[#3525cd]">
                  {activePost.category}
                </span>
                <span className="text-xs text-black/50 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readingTime} مطالعه
                </span>
                <span className="text-black/30">•</span>
                <span className="text-xs text-black/50 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePost.publishedAt}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
                {activePost.title}
              </h1>

              {/* مشخصات نویسنده */}
              <div className="flex items-center justify-between py-4 border-y border-black/5">
                <div className="flex items-center gap-3">
                  <img
                    src={activePost.author.avatar}
                    alt={activePost.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-black">
                      {activePost.author.name}
                    </h4>
                    <p className="text-xs text-black/60">{activePost.author.role}</p>
                  </div>
                </div>

                <Button
                  variant="surface"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert('لینک مقاله در حافظه کپی شد!');
                  }}
                  className="flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>اشتراک‌گذاری</span>
                </Button>
              </div>
            </div>

            {/* تصویر شاخص */}
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden bg-black/5">
              <img
                src={activePost.imageUrl}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* خلاصه برجسته */}
            <div className="p-6 rounded-2xl bg-[#f5f4fd] text-[#3525cd] font-semibold text-base sm:text-lg leading-relaxed">
              {activePost.excerpt}
            </div>

            {/* متن اصلی مقاله */}
            <div className="space-y-6 text-base sm:text-lg text-black/85 leading-loose">
              {activePost.content.map((paragraph, idx) => (
                <p key={idx} className="font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* تگ‌های مقاله */}
            <div className="pt-6 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-black/40 ml-1" />
              {activePost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-xl bg-[#f5f4fd] text-black/80 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* کارت دعوت به اقدام در انتهای مقاله */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#eae9fb] text-black text-center space-y-4 my-12">
              <div className="w-12 h-12 rounded-2xl bg-[#3525cd] text-white mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                همین حالا کاتالوگ دیجیتال اختصاصی خودت رو بساز
              </h3>
              <p className="text-sm text-black/70 max-w-lg mx-auto">
                بدون نیاز به طراح یا اپلیکیشن، در کمتر از ۳ دقیقه تمام محصولاتت رو به یک
                لینک هوشمند و همیشه به‌روز تبدیل کن.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onBackToHome();
                    setTimeout(() => {
                      const el = document.getElementById('demo');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  تست رایگان فرالیست
                </Button>
                <Button
                  variant="surface"
                  size="md"
                  onClick={() => setActivePost(null)}
                >
                  سایر مقالات
                </Button>
              </div>
            </div>
          </article>
        </main>
      ) : (
        /* لیست اصلی مقالات وبلاگ */
        <main className="flex-1 max-w-7xl mx-auto px-4 pt-28 pb-12 sm:pt-32 md:pb-16 w-full space-y-12">
          {/* هدر وبلاگ */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm py-1.5 px-4 rounded-full bg-[#eae9fb] text-[#3525cd] font-semibold flex items-center">
                <BookOpen className="w-4 h-4 ml-1.5 inline" />
                دانستنی‌ها و آموزش‌های فرالیست
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
              وبلاگ تخصصی لیست قیمت و کاتالوگ آنلاین
            </h1>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
              راهنماها، تحلیل‌ها و روش‌های مدرن فروش برای کسب‌وکارهایی که می‌خواهند از شر
              فایل‌های قدیمی و پراکنده خلاص شوند.
            </p>
          </div>

          {/* نوار جستجو و فیلتر دسته‌بندی */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* اینپوت جستجو بدون بوردر و سایه (تخت) */}
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در بین مقالات، آموزش‌ها، ترفندها..."
                className="w-full pr-12 pl-4 py-3.5 rounded-2xl bg-[#f5f4fd] text-black placeholder:text-black/40 text-sm focus:outline-none focus:bg-[#eae9fb] transition-colors border-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-black/40 hover:text-black bg-transparent border-none cursor-pointer"
                >
                  پاک کردن
                </button>
              )}
            </div>

            {/* چیپ‌های دسته‌بندی */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all whitespace-nowrap border-none cursor-pointer select-none ${
                    selectedCategory === category
                      ? 'bg-[#3525cd] text-white'
                      : 'bg-[#f5f4fd] text-black/70 hover:bg-[#eae9fb] hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* مقاله ویژه (تنها وقتی فیلتری اعمال نشده باشد) */}
          {selectedCategory === 'همه مقالات' && searchQuery.trim() === '' && featuredPost && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-black flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3525cd]" />
                  مقاله ویژه هفته
                </h2>
              </div>
              <BlogCard
                post={featuredPost}
                onClick={handlePostClick}
                isFeatured={true}
              />
            </div>
          )}

          {/* گرید مقالات بر پایه کامپوننت @reui/c-card-8 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                {selectedCategory === 'همه مقالات' ? 'جدیدترین مقالات' : selectedCategory}
                <span className="text-xs font-normal text-black/50 mr-2">
                  ({regularPosts.length} مقاله)
                </span>
              </h2>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </main>
      )}

      {/* فوتر وبلاگ */}
      <Footer />
    </div>
  );
};
