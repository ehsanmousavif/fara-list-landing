"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BLOG_POSTS, BlogPost } from "@/data/blogData";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Search,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "lucide-react";

interface BlogPageProps {
  posts?: BlogPost[];
  onBackToHome?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts = BLOG_POSTS, onBackToHome }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleBackToLanding = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      router.push("/");
    }
  };

  // فیلتر مقالات بر اساس عبارت جستجو و تگ‌ها (بدون فیلترهای دسته‌بندی)
  const filteredPosts = useMemo(() => {
    const list = posts.length > 0 ? posts : BLOG_POSTS;
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return list;
    }
    return list.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [posts, searchQuery]);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagClick = (tag: string) => {
    setActivePost(null);
    setSearchQuery(tag);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-black selection:bg-[#3525cd] selection:text-white pt-24 sm:pt-28 md:pt-32 pb-16">
      {/* نمایش جزئیات مقاله در صورت انتخاب */}
      {activePost ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
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
            <div className="flex items-center gap-3 flex-wrap">
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
              <div className="flex items-center gap-2 pr-2 border-r border-black/10">
                <img
                  src={activePost.author?.avatar || "/assets/images/jikot-logo.png"}
                  alt={activePost.author?.name || "جیکات وب"}
                  className="w-5 h-5 rounded-full object-contain"
                />
                <span className="text-xs font-bold text-black/80">
                  {activePost.author?.name || "جیکات وب"}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-black/70 leading-relaxed font-normal max-w-4xl">
              {activePost.excerpt}
            </p>
          </div>

          {/* کاور مقاله تمام‌عرض */}
          <div className="rounded-3xl overflow-hidden aspect-[21/9] max-h-[540px] w-full mb-10 bg-[#f5f4fd]">
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

          {/* برچسب‌های مقاله (بدون هیچ اثری از نویسنده، کاربر یا آواتار) */}
          {activePost.tags && activePost.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-black/80">
                <Tag className="w-4 h-4 text-[#3525cd]" />
                <span>برچسب‌های مرتبط:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activePost.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="inline-flex items-center gap-1 text-xs px-3.5 py-1.5 rounded-full bg-[#f5f4fd] hover:bg-[#eae9fb] text-[#0d0751] font-semibold transition-colors cursor-pointer border-none"
                    title={`مشاهده مقالات با تگ ${tag}`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

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
              همین الان کاتالوگ آنلاین خود را بسازید و لینک اختصاصی آن را در
              شبکه‌های اجتماعی به اشتراک بگذارید.
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
        /* لیست مقالات وبلاگ */
        <div className="max-w-6xl mx-auto px-4 space-y-12 w-full">
          {/* عنوان و مقدمه وبلاگ */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
              وبلاگ تخصصی فرالیست
            </h1>
          </div>

          {/* کادر جستجو بین مقالات و برچسب‌ها */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در مقالات و برچسب‌ها..."
                className="w-full h-12 pr-11 pl-4 rounded-2xl bg-[#f5f4fd] text-sm text-black placeholder:text-black/40 outline-none border-none focus:bg-[#eae9fb]/70 transition-colors"
              />
              <Search className="w-4 h-4 text-black/40 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {searchQuery && (
              <div className="flex items-center justify-between text-xs text-black/60 mt-2 px-2">
                <span>نتایج برای: «{searchQuery}»</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#3525cd] font-bold hover:underline cursor-pointer border-none bg-transparent"
                >
                  پاک کردن جستجو
                </button>
              </div>
            )}
          </div>

          {/* گرید مقالات و پیجینیشن */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <span className="text-xs text-black/50">
                {filteredPosts.length} مقاله موجود است
              </span>
            </div>

            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onClick={handlePostClick}
                    />
                  ))}
                </div>

                {/* کامپوننت صفحه‌بندی مقالات وبلاگ (c-pagination-2) */}
                <div className="pt-10 pb-4 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationLink
                          href="#blog"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) => Math.max(1, prev - 1));
                          }}
                          aria-label="صفحه قبلی"
                          size="icon-sm"
                        >
                          <ChevronRightIcon className="w-4 h-4" />
                        </PaginationLink>
                      </PaginationItem>

                      {[1, 2, 3].map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#blog"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(page);
                            }}
                            isActive={currentPage === page}
                          >
                            {page.toLocaleString("fa-IR")}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationLink
                          href="#blog"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((prev) => Math.min(3, prev + 1));
                          }}
                          aria-label="صفحه بعدی"
                          size="icon-sm"
                        >
                          <ChevronLeftIcon className="w-4 h-4" />
                        </PaginationLink>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </>
            ) : (
              <div className="py-20 text-center rounded-3xl bg-[#f5f4fd] space-y-3">
                <p className="text-base font-bold text-black">
                  هیچ مقاله‌ای پیدا نشد!
                </p>
                <p className="text-xs text-black/60">
                  کلمه دیگری را جستجو کنید.
                </p>
                <Button
                  variant="surface"
                  size="sm"
                  onClick={() => setSearchQuery("")}
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
