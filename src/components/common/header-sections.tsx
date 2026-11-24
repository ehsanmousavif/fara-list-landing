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
  inverted?: boolean;
}

export function HeaderSections({
  icon,
  text,
  title,
  subtitle,
  description,
  badge,
  className,
  inverted = false,
}: HeaderSectionsProps) {
  const mainTitle = text || title;
  const mainDescription = description || subtitle;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 select-none",
        className,
      )}
    >
      <div className="flex items-center justify-center mb-2 bg-transparent">
        <IconStack
          aria-hidden="true"
          className={cn(
            "h-20 w-18",
            inverted ? "text-white" : "text-[#3525cd]",
          )}
        >
          <div
            className={cn(
              "flex size-8 items-center justify-center rounded-xl border-none shadow-none",
              inverted
                ? "bg-white text-[#191458] [&>svg]:text-[#191458] [&>svg]:stroke-[#191458]"
                : "bg-[#3525cd] text-white [&>svg]:text-white [&>svg]:stroke-white",
            )}
          >
            {icon}
          </div>
        </IconStack>
      </div>

      {/* عنوان اصلی سکشن */}
      {mainTitle && (
        <h2
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3",
            inverted ? "text-white" : "text-[#191458]",
          )}
        >
          {mainTitle}
        </h2>
      )}

      {/* توضیحات تکمیلی */}
      {mainDescription && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal",
            inverted ? "text-white/85" : "text-slate-600",
          )}
        >
          {mainDescription}
        </p>
      )}
    </div>
  );
}

export const SectionHeader = HeaderSections;
