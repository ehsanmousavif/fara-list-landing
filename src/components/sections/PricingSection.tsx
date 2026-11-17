'use client';

import React, { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Button } from '@/components/ui';
import { PixelCard } from '@/components/ui/PixelCard';
import { PRICING_PLANS } from '@/data/landingData';
import { HeaderSections } from '@/components/common/header-sections';
import { Check, CreditCard } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

/**
 * کامپوننت کارت تعرفه با افکت PixelCard (ReactBits با سرعت speed=39)
 * طراحی کاملاً تخت بدون بوردر و بدون سایه طبق Flat Design System فرالیست
 */
const PricingCard: React.FC<{ plan: (typeof PRICING_PLANS)[number] }> = ({ plan }) => (
  <PixelCard
    speed={39}
    colors={
      plan.isPopular
        ? ['#3525cd', '#6858ee', '#a498fd']
        : ['#3525cd', '#8f84fc', '#d6d2fc']
    }
    glowColor="#3525cd"
    theme="light"
    radius={24}
    className={`p-6 sm:p-8 flex flex-col justify-between h-full relative border-none shadow-none rounded-3xl select-none text-right transition-all duration-300 hover:-translate-y-1 ${
      plan.isPopular ? 'bg-[#eae9fb]' : 'bg-[#f5f4fd]'
    }`}
  >
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
        {plan.badge && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3525cd] text-white">
            {plan.badge}
          </span>
        )}
      </div>

      <p className="text-black/70 text-xs sm:text-sm leading-relaxed font-normal">
        {plan.description}
      </p>

      <div className="py-2 flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-black text-black">
          {plan.price}
        </span>
        <span className="text-xs text-black/60 font-medium">
          {plan.period}
        </span>
      </div>

      <div className="space-y-3 pt-2">
        <span className="text-xs font-semibold text-black/80 block">امکانات شامل:</span>
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-black/90">
            <div className="w-5 h-5 rounded-full bg-[#3525cd] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="pt-8">
      <Button
        variant={plan.isPopular ? 'primary' : 'secondary'}
        size="md"
        className="w-full cursor-pointer"
        onClick={() => {
          const el = document.getElementById('cta');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {plan.ctaText}
      </Button>
    </div>
  </PixelCard>
);

export const PricingSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

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

        {/* ۱. نمای دسکتاپ: گرید ۳ ستونه با کارت‌های پیکسلی */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch text-right"
        >
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </AnimatedContent>

        {/* ۲. نمای موبایل: کاروسل بر پایه @reui/c-carousel-6 (نمایش فقط در صفحه موبایل md:hidden) */}
        <div className="block md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              direction: 'rtl',
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent className="-ml-3">
              {PRICING_PLANS.map((plan) => (
                <CarouselItem key={plan.id} className="pl-3 basis-[88%] sm:basis-[82%]">
                  <div className="h-full py-1">
                    <PricingCard plan={plan} />
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
                      current === idx ? 'w-6 bg-[#3525cd]' : 'w-2 bg-black/20'
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
