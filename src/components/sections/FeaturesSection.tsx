import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card } from '@/components/ui';
import { FEATURES_DATA } from '@/data/landingData';
import { HeaderSections } from '@/components/common/header-sections';
import {
  Layers,
  Search,
  MessageCircle,
  Smartphone,
  BarChart3,
  Zap,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Search,
  MessageCircle,
  Smartphone,
  BarChart3,
  Zap,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش امکانات با IconStack */}
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
            icon={<Zap className="w-5 h-5" />}
            title="همه چیزی که برای نمایش حرفه‌ای محصولاتت لازم داری"
            subtitle="چرا فرالیست فراتر از یک لیست قیمت ساده است و تجربه فروش شما را متحول می‌کند"
          />
        </AnimatedContent>

        {/* کارت‌های امکانات بدون بوردر و بدون سایه */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES_DATA.map((feature) => {
            const IconComponent = ICON_MAP[feature.iconName] || Zap;

            return (
              <Card
                key={feature.id}
                variant="surface"
                className="bg-[#f5f4fd] hover:bg-[#ebe9fb] transition-colors p-7 flex flex-col justify-between group border-none shadow-none text-right"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#3525cd] text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {feature.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#eae9fb] text-[#3525cd]">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-black group-hover:text-[#3525cd] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-black/70 text-sm leading-relaxed font-normal">
                    {feature.description}
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
