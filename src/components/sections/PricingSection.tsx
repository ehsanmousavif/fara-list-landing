"use client";

import React, { useState, useEffect } from "react";
import AnimatedContent from "@/components/effects/AnimatedContent";
import { Button } from "@/components/ui";
import { PRICING_PLANS } from "@/data/landingData";
import { HeaderSections } from "@/components/common/header-sections";
import { Check, CreditCard, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface PricingCardProps {
  plan: (typeof PRICING_PLANS)[number];
  mode: "gradient" | "white" | "secondary";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/**
 * کامپوننت کارت تعرفه با افکت تعاملی هوشمند و انیمیشن ترنزیشن نرم (Crossfade):
 * - در حالت پیش‌فرض: کارت وسطی (حرفه‌ای) دارای گرادینت سرمه‌ای به بنفش، و دو کارت کناری دارای بک‌گراند secondary هستند.
 * - در صورت هاور روی هر کدام از کارت‌های کناری: آن کارت به نرمی گرادینت پلن وسطی را گرفته و پلن وسطی سفید می‌شود.
 * - هنگام خروج ماوس (Leave): انیمیشن ترنزیشن به نرمی بازمی‌گردد.
 */
const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  mode,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isGradient = mode === "gradient";
  const isWhite = mode === "white";
  const isSecondary = mode === "secondary";

  // متون و تایپوگرافی
  const titleColor = isGradient ? "text-white" : "text-black";
  const descColor = isGradient ? "text-white/80" : "text-black/70";
  const priceColor = isGradient ? "text-white" : "text-black";
  const periodColor = isGradient ? "text-white/70" : "text-black/60";
  const featuresLabelColor = isGradient ? "text-white/90" : "text-black/80";
  const featureItemColor = isGradient ? "text-white/95" : "text-black/90";

  // بج
  let badgeClasses = "bg-white text-[#0d0751]";
  if (isWhite) {
    badgeClasses = "bg-[#eae9fb] text-[#0d0751]";
  } else if (!isGradient) {
    badgeClasses = "bg-white/90 text-[#0d0751]";
  }

  // آیکون تیک امکانات
  let checkIconClasses = "bg-white text-[#0d0751]";
  if (isWhite) {
    checkIconClasses = "bg-[#eae9fb] text-[#0d0751]";
  }

  // دکمه اقدام CTA
  let buttonClasses =
    "w-full cursor-pointer font-bold border-none shadow-none transition-all duration-500 ease-out ";
  if (isGradient) {
    buttonClasses += "bg-white text-[#0d0751] hover:bg-white/90";
  } else if (isWhite) {
    buttonClasses += "bg-[#f5f4fd] text-black hover:bg-[#eae9fb]";
  } else {
    buttonClasses += "bg-white text-[#0d0751] hover:bg-white/90";
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-6 sm:p-8 flex flex-col justify-between h-full rounded-3xl select-none text-right cursor-pointer transition-transform duration-500 ease-out border-none shadow-none ${
        isGradient ? "-translate-y-2" : "translate-y-0"
      }`}
    >
      {/* لایه‌های پس‌زمینه مستقل برای ترنزیشن متقاطع (Crossfade) نرم و بدون پرش گرادینت */}
      {/* ۱. لایه بک‌گراند ثانویه (Secondary) */}
      <div
        className={`absolute inset-0 bg-[#eae9fb] rounded-3xl pointer-events-none transition-opacity duration-500 ease-in-out ${
          isSecondary ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ۲. لایه بک‌گراند سفید (White) */}
      <div
        className={`absolute inset-0 bg-white rounded-3xl shadow-sm pointer-events-none transition-opacity duration-500 ease-in-out ${
          isWhite ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ۳. لایه گرادینت سرمه‌ای به بنفش پرایمری (Gradient) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#0d0751] via-[#1a1175] to-[#3525cd] shadow-2xl shadow-[#0d0751]/20 rounded-3xl pointer-events-none transition-opacity duration-500 ease-in-out ${
          isGradient ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* محتوای کارت روی لایه‌های پس‌زمینه با ترنزیشن رنگی هماهنگ */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3
              className={`text-2xl font-bold transition-colors duration-500 ease-out ${titleColor}`}
            >
              {plan.name}
            </h3>
            {plan.badge && (
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-500 ease-out ${badgeClasses}`}
              >
                {plan.badge}
              </span>
            )}
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-500 ease-out ${descColor}`}
          >
            {plan.description}
          </p>

          <div className="py-2 flex items-baseline gap-2">
            <span
              className={`text-3xl sm:text-4xl font-black transition-colors duration-500 ease-out ${priceColor}`}
            >
              {plan.price}
            </span>
            <span
              className={`text-xs font-medium transition-colors duration-500 ease-out ${periodColor}`}
            >
              {plan.period}
            </span>
          </div>

          <div className="space-y-3 pt-2">
            <span
              className={`text-xs font-semibold block transition-colors duration-500 ease-out ${featuresLabelColor}`}
            >
              امکانات شامل:
            </span>
            {plan.features.map((feature, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 text-sm transition-colors duration-500 ease-out ${featureItemColor}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500 ease-out ${checkIconClasses}`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <Button
            variant={isGradient ? "white" : isWhite ? "surface" : "white"}
            size="md"
            className={buttonClasses}
            onClick={() => {
              const el = document.getElementById("cta");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {plan.ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  /**
   * محاسبه حالت نمایش هر کارت در نمای دسکتاپ بر اساس هاور:
   * هر کارتی که کاربر روی آن هاور کند، گرادینت پلن وسطی را می‌گیرد.
   * اگر کارتی جز وسطی هاور شود، پلن وسطی سفید می‌شود.
   */
  const getDesktopMode = (idx: number): "gradient" | "white" | "secondary" => {
    const activeGradientIdx = hoveredIndex !== null ? hoveredIndex : 1;

    if (idx === activeGradientIdx) {
      return "gradient";
    }
    if (idx === 1) {
      return "white";
    }
    return "secondary";
  };

  /**
   * محاسبه حالت نمایش هر کارت در نمای موبایل و تبلت بر اساس اسلاید فعال
   */
  const getMobileMode = (idx: number): "gradient" | "white" | "secondary" => {
    const activeGradientIdx = current;

    if (idx === activeGradientIdx) {
      return "gradient";
    }
    if (idx === 1) {
      return "white";
    }
    return "secondary";
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش تعرفه‌ها: پلن مناسب خودتو بساز */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<CreditCard className="w-5 h-5 text-[#3525cd]" />}
            title="پلن مناسب خودتو بساز"
            subtitle="بدون هزینه مخفی؛ با پلن رایگان شروع کن و هر زمان نیاز داشتی ارتقا بده"
          />
        </AnimatedContent>

        {/* ۱. نمای دسکتاپ: گرید ۳ ستونه تعاملی با انتقال گرادینت در هاور */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          stagger={0.06}
          staggerFrom="start"
          ease="power2.out"
          className="hidden lg:block text-right"
        >
          <div
            onMouseLeave={() => setHoveredIndex(null)}
            className="grid grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {PRICING_PLANS.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                mode={getDesktopMode(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
              />
            ))}
          </div>
        </AnimatedContent>

        {/* ۲. نمای موبایل و تبلت: کاروسل تعاملی (نمایش در موبایل و تبلت تا قبل از lg) */}
        <div className="block lg:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              direction: "rtl",
              startIndex: 1,
            }}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {PRICING_PLANS.map((plan, idx) => (
                <CarouselItem
                  key={plan.id}
                  className="pl-3 sm:pl-4 basis-[88%] sm:basis-[82%] md:basis-[78%]"
                >
                  <div className="h-full py-1">
                    <PricingCard plan={plan} mode={getMobileMode(idx)} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* کنترل‌های ناوبری کاروسل موبایل با دکمه‌های راست/چپ متناسب با جهت RTL و نقاط نشانگر */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="پلن قبلی"
                className="w-9 h-9 rounded-xl bg-[#f5f4fd] hover:bg-[#eae9fb] text-black flex items-center justify-center transition-colors cursor-pointer border-none shadow-none active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {PRICING_PLANS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${
                      current === idx ? "w-6 bg-[#0d0751]" : "w-2 bg-black/20"
                    }`}
                    aria-label={`رفتن به پلن ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="پلن بعدی"
                className="w-9 h-9 rounded-xl bg-[#f5f4fd] hover:bg-[#eae9fb] text-black flex items-center justify-center transition-colors cursor-pointer border-none shadow-none active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
