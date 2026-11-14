import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScratchCardSection } from "@/components/sections/ScratchCardSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LiveDemoSection } from "@/components/sections/LiveDemoSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ScrollRevealSection } from "@/components/sections/ScrollRevealSection";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-black text-white selection:bg-[#030430] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* لودینگ انیمیشنی لوگو در ابتدای ورود */}
      <LoadingScreen
        isLoading={isLoading}
        onFinish={() => setIsLoading(false)}
        durationMs={2200}
      />

      {/* نوار ناوبری */}
      {/* <Navbar onTriggerLoading={() => setIsLoading(true)} /> */}

      {/* ۱. بخش هیرو با پس‌زمینه AeroShards */}
      <HeroSection />

      {/* ۲. سکشن کارت اسکرچ تخفیف ۱۰ درصدی (Spectrum UI ScratchCard) */}
      <ScratchCardSection />

      {/* ۳. آمار کلیدی */}
      <StatsSection />

      {/* ۴. ویژگی‌های کلیدی فرالیست */}
      <FeaturesSection />

      {/* ۵. بخش نمایش متنی متحرک */}
      <ScrollRevealSection />

      {/* ۶. دموی تعاملی لیست قیمت زنده */}
      <LiveDemoSection />

      {/* ۷. نحوه کارکرد */}
      <HowItWorksSection />

      {/* ۸. جدول مقایسه روش سنتی با فرالیست */}
      <ComparisonSection />

      {/* ۹. تعرفه‌ها و پلن‌ها */}
      <PricingSection />

      {/* ۱۰. سوالات متداول */}
      <FaqSection />

      {/* ۱۱. اقدام به عمل و دانلود */}
      <CtaSection />

      {/* ۱۲. پاورقی */}
      <Footer />
    </div>
  );
}
