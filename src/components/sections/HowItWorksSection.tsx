import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Badge } from '@/components/ui';
import { HOW_IT_WORKS_STEPS } from '@/data/landingData';
import { ArrowLeft } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-black text-white">
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
            <Badge variant="primary">مراحل راه‌اندازی سریع</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            فرالیست چطور کار می‌کند؟
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            در کمتر از ۳ دقیقه کاتالوگ آنلاین خود را بسازید و برای مشتریانتان ارسال کنید.
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <Card
              key={step.step}
              variant="surface"
              className="bg-[#030430] p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-white font-mono tracking-tighter">
                    {step.step}
                  </span>
                  <Badge variant="surface" className="text-xs">
                    {step.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white pt-2">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < 2 && (
                <div className="hidden md:flex items-center gap-2 text-white/80 text-xs font-semibold mt-6 pt-4">
                  <span>مرحله بعد</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              )}
            </Card>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};
