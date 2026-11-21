import React from "react";
import { Card } from "@/components/ui/Card";
import { BlogPost } from "@/data/blogData";
import { Clock, ArrowLeft } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
  className?: string;
  isFeatured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  onClick,
  className = "",
  isFeatured = false,
}) => {
  return (
    <Card
      onClick={() => onClick(post)}
      className={`group/card relative w-full overflow-hidden border-none shadow-none rounded-2xl cursor-pointer bg-black/90 select-none ${
        isFeatured ? "h-[440px] md:h-[480px]" : "h-[420px] sm:h-[440px]"
      } ${className}`}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
      />

      {/* لایه گرادیان تیره پایین برای خوانایی عالی متن */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-500 group-hover/card:from-black/100" />

      {/* نشان دسته‌بندی و زمان مطالعه در بالا */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-white border-none transition-colors group-hover/card:bg-[#3525cd]">
          {post.category}
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-xl bg-black/40 backdrop-blur-md text-white/90 flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#eae9fb]" />
          <span>{post.readingTime}</span>
        </span>
      </div>

      {/* محتوای کارت در پایین */}
      <div className="relative flex h-full flex-col justify-end p-5 sm:p-6 z-10 text-right">
        {/* برچسب ویژه اگر پست ویژه باشد */}
        {isFeatured && (
          <span className="inline-block self-start text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#3525cd] text-white mb-2">
            مقاله برگزیده فرالیست
          </span>
        )}

        {/* عنوان مقاله */}
        <h3
          className={`font-black text-white leading-snug transition-colors group-hover/card:text-[#eae9fb] line-clamp-3 ${
            isFeatured
              ? "text-xl sm:text-2xl md:text-3xl"
              : "text-lg sm:text-xl"
          }`}
        >
          {post.title}
        </h3>

        {/* خلاصه مقاله */}
        <p className="mt-2 text-xs sm:text-sm text-white/80 line-clamp-3 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        <div className="mt-4 pt-3 flex items-center justify-between text-xs text-white/70">
          {post.tags && post.tags.length > 0 ? (
            <div className="flex items-center gap-1.5 flex-wrap">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-white/80 bg-white/15 backdrop-blur-xs px-2 py-0.5 rounded-md font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-1 text-[#eae9fb] font-semibold text-xs group-hover/card:text-white transition-colors">
            <span>مطالعه</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover/card:-translate-x-1" />
          </div>
        </div>
      </div>
    </Card>
  );
};
