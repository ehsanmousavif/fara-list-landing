import React, { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Badge } from '@/components/ui';
import { FAQ_DATA } from '@/data/landingData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
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
            <Badge variant="surface">
              راهنما و سوالات متداول
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            پرسش‌های متداول درباره فرالیست
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            پاسخ سریع به متداول‌ترین سوالات شما در مورد امکانات و استفاده از پلتفرم.
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.06}
          className="space-y-4"
        >
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <Card
                key={item.id}
                variant="surface"
                className={`p-0 overflow-hidden transition-colors ${
                  isOpen ? 'bg-[#030430]' : 'bg-[#030430]/60 hover:bg-[#030430]/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none border-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/80 leading-relaxed">
                    <p className="p-4 rounded-xl bg-white/[0.04]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
};
