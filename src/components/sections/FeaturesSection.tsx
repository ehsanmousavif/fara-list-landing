import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Badge } from '@/components/ui';
import { FEATURES_DATA } from '@/data/landingData';
import {
  TrendingUp,
  QrCode,
  FileSpreadsheet,
  ShieldCheck,
  Search,
  Zap,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  QrCode,
  FileSpreadsheet,
  ShieldCheck,
  Search,
  Zap,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش ویژگی‌ها با wipe="none" */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2">
            <Badge variant="primary">امکانات کلیدی محصول</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            چرا فروشندگان و بنکداران به فرالیست نیاز دارند؟
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            دیگر نیازی به چاپ کاتالوگ‌های کاغذی گران‌قیمت یا ارسال فایل‌های سنگین PDF که سریعاً منسوخ می‌شوند ندارید.
          </p>
        </AnimatedContent>

        {/* کارت‌های ویژگی‌ها */}
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
                className="bg-[#030430] hover:bg-[#030430]/85 transition-colors p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {feature.badge && (
                      <Badge variant="surface" className="text-[11px]">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 flex items-center gap-2 text-xs font-semibold text-white/80">
                  <span>عملکرد هوشمند</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </Card>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
};
