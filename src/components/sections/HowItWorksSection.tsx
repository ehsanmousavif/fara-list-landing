import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card } from '@/components/ui';
import { HOW_IT_WORKS_STEPS } from '@/data/landingData';
import { HeaderSections } from '@/components/common/header-sections';
import { Layers } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* هدر بخش با IconStack */}
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
            icon={<Layers className="w-5 h-5" />}
            title="ساختنش سه دقیقه طول می‌کشه"
            subtitle="فرآیند ۴ قدمی ساده بدون پیچیدگی فنی؛ از تعریف اولین کالا تا تحویل لینک به مشتریان"
          />
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {HOW_IT_WORKS_STEPS.map((step) => (
            <Card
              key={step.step}
              variant="surface"
              className="bg-[#f5f4fd] p-7 flex flex-col justify-between relative overflow-hidden border-none shadow-none text-right"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#3525cd]/30 font-mono tracking-tighter">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#eae9fb] text-[#3525cd]">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black pt-2">
                  {step.title}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </Card>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};
