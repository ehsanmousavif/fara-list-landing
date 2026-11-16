import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ScrollRevealSection } from "@/components/sections/ScrollRevealSection";
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
import { BlogPage } from "@/components/blog/BlogPage";
import Particles from "@/components/ui/Particles";

export default function Page() {
  const [currentView, setCurrentView] = useState<"landing" | "blog">(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/blog" || hash === "#blog") {
        return "blog";
      }
    }
    return "landing";
  });

  // همگام‌سازی کلیدهای Back / Forward مرورگر
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/blog" || hash === "#blog") {
        setCurrentView("blog");
      } else {
        setCurrentView("landing");
        if (hash && hash !== "#blog") {
          const sectionId = hash.replace("#", "");
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 80);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // ناوبری هوشمند بین لندینگ، سکشن‌ها و صفحه وبلاگ
  const navigateTo = (view: "landing" | "blog", sectionId?: string) => {
    setCurrentView(view);
    if (view === "blog") {
      window.history.pushState(null, "", "/blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.pushState(null, "", sectionId ? `/#${sectionId}` : "/");
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {currentView === "blog" ? (
        <BlogPage
          onBackToHome={() => navigateTo("landing")}
          onNavigateSection={(sectionId) => navigateTo("landing", sectionId)}
        />
      ) : (
        <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#3525cd] selection:text-white antialiased overflow-x-hidden relative">
          {/* هدر شیشه‌ای و مات (Blur Header) */}
          <Navbar
            onOpenBlog={() => navigateTo("blog")}
            onNavigateSection={(sectionId) => navigateTo("landing", sectionId)}
            isBlogPage={false}
          />

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

          {/* سایر بخش‌های لندینگ با محتوای نسبی */}
          <div className="relative z-10 flex flex-col gap-10">
            {/* ۲. بخش مشکل و آمار */}
            <StatsSection />

            {/* ۳. راه‌حل: انیمیشن چت و متن متحرک */}
            <ScrollRevealSection />

            {/* دموی تعاملی سرعت تغییر قیمت در فرالیست */}
            <LiveDemoSection />

            {/* ۴. روش کار: استپرهای تعاملی */}
            <HowItWorksSection />

            {/* ۵. امکانات و تایم‌لاین */}
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

            {/* فوتر مینیمال */}
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
