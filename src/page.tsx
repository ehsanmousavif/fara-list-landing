import React from "react";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ScrollRevealSection } from "@/components/sections/ScrollRevealSection";
import { CatalogPreviewSection } from "@/components/sections/CatalogPreviewSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { LiveDemoSection } from "@/components/sections/LiveDemoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ScratchCardSection } from "@/components/sections/ScratchCardSection";
import Particles from "@/components/ui/Particles";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-white text-black selection:bg-[#3525cd] selection:text-white antialiased overflow-x-hidden relative">
      {/* ۱. Hero: لیست قیمت و کاتالوگ محصولاتت رو یک بار بساز، دیگه هیچ‌وقت از اول نساز */}
      <div className="relative z-20 bg-white">
        <HeroSection />
      </div>

      {/* پس‌زمینه ذرات ری‌اکت‌بیتز (ReactBits Particles) برای کل وب‌سایت به جز Hero */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <Particles
          particleColors={["#3525cd", "#6858ee", "#a498fd"]}
          particleCount={100}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={85}
          sizeRandomness={0.7}
          moveParticlesOnHover={true}
          particleHoverFactor={0.8}
          alphaParticles={true}
          disableRotation={false}
          lightMode={true}
          opacity={0.35}
          className="w-full h-full"
        />
      </div>

      {/* سایر بخش‌های سایت با محتوای نسبی روی پس‌زمینه ذرات */}
      <div className="relative z-10 flex flex-col gap-10">
        {/* ۲. مشکل: هر بار قیمت عوض می‌شه، باید دوباره یه فایل جدید بفرستی */}
        <StatsSection />

        {/* ۳. راه‌حل: مکالمه دو نفره در فریم موبایل در راستای افقی با متن فرالیست */}
        <ScrollRevealSection />

        {/* ۳ (مکمل). ماکت کاتالوگ واقعی روی موبایل و معرفی پیوند زنده */}
        <CatalogPreviewSection />

        {/* دموی تعاملی سرعت تغییر قیمت در فرالیست */}
        <LiveDemoSection />

        {/* ۴. روش کار: ساختنش سه دقیقه طول می‌کشه (۴ قدم ساده) */}
        <HowItWorksSection />

        {/* ۵. امکانات: تایم‌لاین چپ و راست با فیزیک Spring و کنترل همگام اوپاسیتی */}
        <FeaturesSection />

        {/* ۶. برای چه کسب‌وکارهایی مناسبه */}
        <AudienceSection />

        {/* ۷. چرا فرالیست فروشگاه‌ساز نیست */}
        <ComparisonSection />

        {/* ۸. اعتماد و اثبات اجتماعی */}
        <SocialProofSection />

        {/* تعرفه‌ها و پلن‌های فرالیست */}
        <PricingSection />

        {/* ۹. سوالات متداول (FAQ) */}
        <FaqSection />

        {/* ۱۰. CTA پایانی با اسکنر اختصاصی */}
        <CtaSection />

        {/* کارت تخفیف ویژه ۱۰ درصدی */}
        <ScratchCardSection />

        {/* فوتر مینیمال با متن بزرگ FaraList */}
        <Footer />
      </div>
    </div>
  );
}
