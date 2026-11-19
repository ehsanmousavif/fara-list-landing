"use client";

import React, { useState, useEffect } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui";
import { PRICING_PLANS } from "@/data/landingData";
import { HeaderSections } from "@/components/common/header-sections";
import { Check, CreditCard } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface PricingCardProps {
  plan: (typeof PRICING_PLANS)[number];
  mode: "gradient" | "white" | "secondary" | "idle";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/**
 * کامپوننت کارت تعرفه با افکت تعاملی هاور و تغییر هوشمند استایل:
 * - پلن وسطی (حرفه‌ای): در حالت پیش‌فرض دارای پس‌زمینه گرادینت سرمه‌ای به بنفش پرایمری.
 * - دو پلن دیگر (شروع و تجاری): در حالت عادی بدون پس‌زمینه (idle).
 * - در صورت هاور روی هر کدام از دو پلن دیگر: کارت هاور شده رنگ secondary گرفته و پلن وسطی سفید می‌شود.
 */
const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  mode,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isGradient = mode === "gradient";
  const isSecondary = mode === "secondary";
  const isWhite = mode === "white";

  // کلاس‌های کانتینر کارت
  let containerClasses = "bg-transparent text-black border-none shadow-none";
  if (isGradient) {
    containerClasses =
      "bg-gradient-to-br from-[#0d0751] via-[#1a1175] to-[#3525cd] text-white shadow-2xl shadow-[#0d0751]/20 -translate-y-1.5";
  } else if (isSecondary) {
    containerClasses =
      "bg-[#eae9fb] text-black shadow-lg shadow-[#eae9fb]/60 -translate-y-1.5";
  } else if (isWhite) {
    containerClasses = "bg-white text-black shadow-sm";
  } else {
    // حالت idle برای دو پلن کناری
    containerClasses = "bg-transparent text-black hover:bg-[#eae9fb]/70";
  }

  // متون و تایپوگرافی
  const titleColor = isGradient ? "text-white" : "text-black";
  const descColor = isGradient ? "text-white/80" : "text-black/70";
  const priceColor = isGradient ? "text-white" : "text-black";
  const periodColor = isGradient ? "text-white/70" : "text-black/60";
  const featuresLabelColor = isGradient ? "text-white/90" : "text-black/80";
  const featureItemColor = isGradient ? "text-white/95" : "text-black/90";

  // بج
  let badgeClasses = "bg-[#eae9fb] text-[#0d0751]";
  if (isGradient) {
    badgeClasses = "bg-white text-[#0d0751]";
  } else if (isSecondary) {
    badgeClasses = "bg-[#0d0751] text-white";
  }

  // آیکون تیک امکانات
  let checkIconClasses = "bg-[#f5f4fd] text-[#0d0751]";
  if (isGradient) {
    checkIconClasses = "bg-white text-[#0d0751]";
  } else if (isSecondary) {
    checkIconClasses = "bg-[#0d0751] text-white";
  } else if (isWhite) {
    checkIconClasses = "bg-[#eae9fb] text-[#0d0751]";
  }

  // دکمه اقدام CTA
  let buttonClasses =
    "w-full cursor-pointer transition-all duration-300 font-bold border-none shadow-none ";
  if (isGradient) {
    buttonClasses += "bg-white text-[#0d0751] hover:bg-white/90";
  } else if (isSecondary) {
    buttonClasses += "bg-[#0d0751] text-white hover:bg-[#1a1175]";
  } else {
    buttonClasses += "bg-[#f5f4fd] text-black hover:bg-[#eae9fb]";
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-6 sm:p-8 flex flex-col justify-between h-full relative border-none shadow-none rounded-3xl select-none text-right transition-all duration-400 ease-out cursor-pointer ${containerClasses}`}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3
            className={`text-2xl font-bold transition-colors duration-300 ${titleColor}`}
          >
            {plan.name}
          </h3>
          {plan.badge && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${badgeClasses}`}
            >
              {plan.badge}
            </span>
          )}
        </div>

        <p
          className={`text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-300 ${descColor}`}
        >
          {plan.description}
        </p>

        <div className="py-2 flex items-baseline gap-2">
          <span
            className={`text-3xl sm:text-4xl font-black transition-colors duration-300 ${priceColor}`}
          >
            {plan.price}
          </span>
          <span
            className={`text-xs font-medium transition-colors duration-300 ${periodColor}`}
          >
            {plan.period}
          </span>
        </div>

        <div className="space-y-3 pt-2">
          <span
            className={`text-xs font-semibold block transition-colors duration-300 ${featuresLabelColor}`}
          >
            امکانات شامل:
          </span>
          {plan.features.map((feature, i) => (
            <div
              key={i}
              className={`flex items-start gap-2 text-sm transition-colors duration-300 ${featureItemColor}`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${checkIconClasses}`}
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
          variant={
            isGradient ? "white" : isSecondary ? "primary" : "surface"
          }
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
   * محاسبه حالت نمایش هر کارت در نمای دسکتاپ بر اساس هاور کاربر
   */
  const getDesktopMode = (
    idx: number
  ): "gradient" | "white" | "secondary" | "idle" => {
    if (idx === 1) {
      // پلن وسطی: اگر کاربر روی هر یک از دو پلن کناری هاور کند، سفید می‌شود
      if (hoveredIndex === 0 || hoveredIndex === 2) {
        return "white";
      }
      return "gradient";
    } else {
      // دو پلن کناری: در صورت هاور شدن رنگ secondary می‌گیرند، در غیر این صورت بدون بک‌گراند (idle) هستند
      if (hoveredIndex === idx) {
        return "secondary";
      }
      return "idle";
    }
  };

  /**
   * محاسبه حالت نمایش هر کارت در نمای موبایل و تبلت بر اساس اسلاید فعال
   */
  const getMobileMode = (
    idx: number
  ): "gradient" | "white" | "secondary" | "idle" => {
    if (idx === 1) {
      if (current === 0 || current === 2) {
        return "white";
      }
      return "gradient";
    } else {
      if (current === idx) {
        return "secondary";
      }
      return "idle";
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش تعرفه‌ها: پلن مناسب خودتو بساز */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center"
        >
          <HeaderSections
            icon={<CreditCard className="w-5 h-5 text-[#3525cd]" />}
            title="پلن مناسب خودتو بساز"
            subtitle="بدون هزینه مخفی؛ با پلن رایگان شروع کن و هر زمان نیاز داشتی ارتقا بده"
          />
        </AnimatedContent>

        {/* ۱. نمای دسکتاپ: گرید ۳ ستونه تعاملی با تغییر رنگ هوشمند در هاور */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
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

            {/* کنترل‌های ناوبری کاروسل موبایل با دکمه‌های قبلی/بعدی و نقاط نشانگر */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="static inset-auto translate-y-0 w-9 h-9 rounded-xl bg-[#f5f4fd] hover:bg-[#eae9fb] text-black border-none" />
              <div className="flex items-center gap-1.5">
                {PRICING_PLANS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 border-none p-0 cursor-pointer ${
                      current === idx ? "w-6 bg-[#0d0751]" : "w-2 bg-black/20"
                    }`}
                    aria-label={`رفتن به پلن ${idx + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static inset-auto translate-y-0 w-9 h-9 rounded-xl bg-[#f5f4fd] hover:bg-[#eae9fb] text-black border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
