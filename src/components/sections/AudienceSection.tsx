import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { AUDIENCE_DATA } from '@/data/landingData';
import { Users2, ShoppingBag, Factory, Warehouse, PackageCheck } from 'lucide-react';

const AUDIENCE_ICONS: Record<string, React.ElementType> = {
  retail: ShoppingBag,
  manufacturers: Factory,
  wholesalers: Warehouse,
  'product-business': PackageCheck,
};

export const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 md:py-28 bg-[#0d0751] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش مخاطبان با استایل معکوس سفید روی پرایمری */}
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
            inverted
          />
        </AnimatedContent>

        {/* ۴ گروه اصلی مخاطبان به تفکیک در کارت‌های شیشه‌ای مدرن */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right"
        >
          {AUDIENCE_DATA.map((aud) => {
            const Icon = AUDIENCE_ICONS[aud.id] || ShoppingBag;

            return (
              <Card
                key={aud.id}
                variant="surface"
                className="bg-white/10 backdrop-blur-md p-7 space-y-4 border-none shadow-none flex flex-col justify-between rounded-3xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#0d0751] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white pt-1">
                    {aud.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {aud.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
};

export default AudienceSection;
