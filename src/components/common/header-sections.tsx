import React from "react";
import { IconStack } from "@/components/reui/icon-stack";
import { cn } from "@/lib/utils";

export interface HeaderSectionsProps {
  icon: React.ReactNode;
  text?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  className?: string;
}

/**
 * هدر بخش‌های صفحه با کامپوننت سه‌بعدی تخت IconStack در بالا
 * ورودی: آیکون و متن (title یا text) به همراه توضیحات اختیاری
 * بدون بوردر، بدون سایه - کاملاً مطابق با سیستم طراحی تخت Faralist
 */
export function HeaderSections({
  icon,
  text,
  title,
  subtitle,
  description,
  badge,
  className,
}: HeaderSectionsProps) {
  const mainTitle = text || title;
  const mainDescription = description || subtitle;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto mb-10 select-none",
        className
      )}
    >
      {/* فقط آیکون استک در بالاترین نقطه هدر هر سکشن */}
      <div className="flex items-center justify-center mb-1">
        <IconStack
          aria-hidden="true"
          className="text-[#3525cd] h-20 w-18"
        >
          <div className="bg-[#3525cd] text-white flex size-8 items-center justify-center rounded-xl border-none shadow-none">
            {icon}
          </div>
        </IconStack>
      </div>

      {/* عنوان اصلی سکشن (مشکی خالص و برجسته) */}
      {mainTitle && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
          {mainTitle}
        </h2>
      )}

      {/* توضیحات تکمیلی (مشکی با شفافیت خوانا) */}
      {mainDescription && (
        <p className="text-black/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          {mainDescription}
        </p>
      )}
    </div>
  );
}

export const SectionHeader = HeaderSections;
