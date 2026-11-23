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
        "flex flex-col items-center justify-center text-center space-y-4 max-w-3xl mx-auto mb-10 select-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center mb-1",
          inverted ? "bg-transparent" : "bg-white",
        )}
      >
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
              inverted ? "bg-white text-[#0d0751]" : "bg-[#3525cd] text-white",
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
            "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight",
            inverted ? "text-white" : "text-black",
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
            inverted ? "text-white/85" : "text-black/70",
          )}
        >
          {mainDescription}
        </p>
      )}
    </div>
  );
}

export const SectionHeader = HeaderSections;
