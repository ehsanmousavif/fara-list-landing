"use client";

import React, { lazy, Suspense } from "react";

// ==========================================
// سکشن‌های Eager (بارگذاری مستقیم جهت حداکثر سرعت رندر و سئو)
// ==========================================
import { HeroSection } from "@/components/sections/HeroSection"; // مهمترین بخش صفحه و اولین محتوای قابل مشاهده
import { StatsSection } from "@/components/sections/StatsSection"; // نزدیک به بالای صفحه
import { ScrollRevealSection } from "@/components/sections/ScrollRevealSection"; // محتوای اصلی صفحه
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"; // محتوای مهم برای معرفی محصول
import { FeaturesSection } from "@/components/sections/FeaturesSection"; // اهمیت محتوایی و SEO
import { AudienceSection } from "@/components/sections/AudienceSection"; // محتوای معرفی محصول
import { ComparisonSection } from "@/components/sections/ComparisonSection"; // محتوای تصمیم‌گیری کاربر
import { SocialProofSection } from "@/components/sections/SocialProofSection"; // اعتمادسازی
import { PricingSection } from "@/components/sections/PricingSection"; // بسیار مهم برای Conversion
import { FaqSection } from "@/components/sections/FaqSection"; // محتوای مهم و پاسخ به سؤالات
import { CtaSection } from "@/components/sections/CtaSection"; // افزایش Conversion
import { JikotWebSection } from "@/components/sections/GecutWebSection"; // معرفی استودیو خلاق جیکات وب

// ==========================================
// سکشن‌های Dynamic (بارگذاری پویا برای بخش‌های تعاملی و سنگین)
// ==========================================
const LiveDemoSection = lazy(() =>
  import("@/components/sections/LiveDemoSection").then((m) => ({
    default: m.LiveDemoSection,
  })),
); // تعاملی و سنگین (کلید راکر و جدول لحظه‌ای)

const ScratchCardSection = lazy(() =>
  import("@/components/sections/ScratchCardSection").then((m) => ({
    default: m.ScratchCardSection,
  })),
); // قابلیت تعاملی کانواس و غیرضروری در بارگذاری اولیه

const SectionFallback = () => <div className="py-20" aria-hidden />;

export const LandingPage: React.FC = () => {
  return (
    <>
      {/* هیرو سکشن: آبی پرایمری */}
      <div className="relative z-20 bg-[#191458]">
        <HeroSection />
      </div>

      {/* هاله ملایم پس‌زمینه با CSS خالص جهت روانی اسکرول */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#3525cd]/5 blur-[120px]" />
        <div className="absolute top-[60%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6858ee]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* ۱. Stats (سفید - Eager) */}
        <StatsSection />

        {/* ۲. ScrollReveal (بنفش/سرمه‌ای - Eager) */}
        <ScrollRevealSection />

        {/* ۳. LiveDemo (سفید - Dynamic) */}
        <Suspense fallback={<SectionFallback />}>
          <LiveDemoSection />
        </Suspense>

        {/* ۴. HowItWorks (بنفش/سرمه‌ای - Eager) */}
        <HowItWorksSection />

        {/* ۵. Features (سفید - Eager) */}
        <FeaturesSection />

        {/* ۶. Audience (بنفش/سرمه‌ای - Eager) */}
        <AudienceSection />

        {/* ۷. Comparison (سفید - Eager) */}
        <ComparisonSection />

        {/* ۸. SocialProof (بنفش/سرمه‌ای - Eager) */}
        <SocialProofSection />

        {/* ۹. Pricing (سفید - Eager) */}
        <PricingSection />

        {/* ۱۰. FAQ (بنفش/سرمه‌ای - Eager) */}
        <FaqSection />

        {/* ۱۱. ScratchCard (کد تخفیف: سفید - Dynamic) */}
        <Suspense fallback={<SectionFallback />}>
          <ScratchCardSection />
        </Suspense>

        {/* ۱۲. CTA (بنفش/سرمه‌ای - Eager) */}
        <CtaSection />

        {/* ۱۳. JikotWeb (سفید - معرفی جیکات وب و ارجاع به gecut.ir) */}
        <JikotWebSection />
      </div>
    </>
  );
};

export default LandingPage;
