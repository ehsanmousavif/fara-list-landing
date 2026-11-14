import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Button } from '@/components/ui';
import { PRICING_PLANS, AUDIENCE_DATA } from '@/data/landingData';
import { HeaderSections } from '@/components/common/header-sections';
import { Check, CreditCard, Users2 } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {/* بخش ۶ سند محتوا: اگه محصول می‌فروشی، فرالیست برای توئه */}
        <div className="space-y-12">
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
              icon={<Users2 className="w-5 h-5" />}
              title="اگه محصول می‌فروشی، فرالیست برای توئه"
              subtitle="برای هر کسب‌وکاری که با تنوع کالا، تغییر نرخ ارز یا به‌روزرسانی موجودی سر و کار دارد"
            />
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            blur={12}
            wipe="none"
            staggerFrom="end"
            duration={1}
            stagger={0.07}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-right"
          >
            {AUDIENCE_DATA.map((aud) => (
              <Card
                key={aud.id}
                variant="surface"
                className="bg-[#f5f4fd] p-6 space-y-3 border-none shadow-none flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#eae9fb] text-[#3525cd] inline-block">
                    {aud.badge}
                  </span>
                  <h4 className="text-base font-bold text-black pt-1">
                    {aud.title}
                  </h4>
                  <p className="text-xs text-black/70 leading-relaxed font-normal">
                    {aud.desc}
                  </p>
                </div>
              </Card>
            ))}
          </AnimatedContent>
        </div>

        {/* بخش تعرفه‌ها و پلن‌ها */}
        <div className="space-y-12">
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
              icon={<CreditCard className="w-5 h-5" />}
              title="پلن مناسب خودت رو انتخاب کن"
              subtitle="بدون هزینه مخفی؛ با پلن رایگان شروع کن و هر زمان نیاز داشتی ارتقا بده"
            />
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            blur={12}
            wipe="none"
            staggerFrom="end"
            duration={1}
            stagger={0.08}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch text-right"
          >
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.id}
                variant="surface"
                className={`p-8 flex flex-col justify-between relative border-none shadow-none ${
                  plan.isPopular
                    ? 'bg-[#eae9fb]'
                    : 'bg-[#f5f4fd]'
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
                    <span className="text-3xl sm:text-4xl font-black text-black font-mono">
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
                    className="w-full"
                    onClick={() => {
                      const el = document.getElementById('cta');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </Card>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
