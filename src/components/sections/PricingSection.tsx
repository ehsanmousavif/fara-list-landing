import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Button, Badge } from '@/components/ui';
import { PRICING_PLANS } from '@/data/landingData';
import { Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2">
            <Badge variant="primary">تعرفه‌های شفاف</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            پلن مناسب کسب‌وکار خود را انتخاب کنید
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            بدون هزینه مخفی؛ با پلن رایگان شروع کنید و هر زمان نیاز داشتید ارتقا دهید.
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              variant="surface"
              className={`p-8 flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'bg-[#030430]'
                  : 'bg-[#030430]/60'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {plan.badge && (
                    <Badge variant="inverted">
                      {plan.badge}
                    </Badge>
                  )}
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {plan.description}
                </p>

                <div className="py-2 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    {plan.price}
                  </span>
                  <span className="text-xs text-white/60 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-white/80 block">امکانات شامل:</span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white/90">
                      <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
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
    </section>
  );
};
