'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ScrollRevealSection } from '@/components/sections/ScrollRevealSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { LiveDemoSection } from '@/components/sections/LiveDemoSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ScratchCardSection } from '@/components/sections/ScratchCardSection';
import Particles from '@/components/ui/Particles';

export const LandingPage: React.FC = () => {
  return (
    <>
      {/* ۱. Hero: لیست قیمت و کاتالوگ با پس‌زمینه Threads */}
      <div className="relative z-20 bg-white">
        <HeroSection />
      </div>

      {/* پس‌زمینه ذرات ری‌اکت‌بیتز (ReactBits Particles) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <Particles
          particleColors={['#3525cd', '#6858ee', '#a498fd']}
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

      <div className="relative z-10 flex flex-col">
        {/* ۲. بخش مشکل و آمار */}
        <StatsSection />

        {/* ۳. راه‌حل: انیمیشن چت و متن متحرک */}
        <ScrollRevealSection />

        {/* دموی تعاملی سرعت تغییر قیمت در فرالیست با PixelCard */}
        <LiveDemoSection />

        {/* ۴. روش کار: استپرهای تعاملی */}
        <HowItWorksSection />

        {/* ۵. امکانات و تایم‌لاین مواج */}
        <FeaturesSection />

        {/* ۶. مخاطبان فرالیست */}
        <AudienceSection />

        {/* ۷. جدول مقایسه فرالیست با روش سنتی */}
        <ComparisonSection />

        {/* ۸. اعتمادسازی و اثبات اجتماعی */}
        <SocialProofSection />

        {/* ۹. تعرفه‌ها و پلن‌های فرالیست با کاروسل موبایل */}
        <PricingSection />

        {/* ۱۰. سوالات متداول */}
        <FaqSection />

        {/* ۱۱. CTA پایانی */}
        <CtaSection />

        {/* کارت تخفیف ویژه */}
        <ScratchCardSection />
      </div>
    </>
  );
};

export default LandingPage;
