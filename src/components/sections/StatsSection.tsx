import React from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { Card } from "@/components/ui";
import { PROBLEMS_DATA } from "@/data/landingData";
import { HeaderSections } from "@/components/common/header-sections";
import { AlertCircle, FileX, RefreshCw, MessageSquareX } from "lucide-react";

const PROBLEM_ICONS: Record<string, React.ElementType> = {
  FileX,
  RefreshCw,
  MessageSquareX,
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0d0751] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش مشکل با IconStack معکوس روی پس‌زمینه پرایمری */}
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
            icon={<AlertCircle className="h-5 w-5" />}
            title="هر بار قیمت عوض می‌شه، باید دوباره یه فایل جدید بفرستی"
            subtitle="اگه محصول می‌فروشی، این ماجرا برات آشناست: یه فایل اکسل یا عکس از لیست قیمت داری، هر چند وقت یه بار قیمت‌ها عوض می‌شه و باید دوباره فایل رو بسازی و برای همه مخاطب‌هات بفرستی. بعضی از مشتری‌ها هنوز نسخه چند ماه پیش رو دارن و با قیمت قدیمی تماس می‌گیرن."
            inverted
          />
        </AnimatedContent>

        {/* ۳ درد اصلی فروشندگان در کارت‌های شیشه‌ای و سفید */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.07}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROBLEMS_DATA.map((item) => {
            const Icon = PROBLEM_ICONS[item.iconName] || FileX;
            return (
              <Card
                key={item.id}
                variant="surface"
                className="bg-white/10 backdrop-blur-md p-7 flex flex-col space-y-4 border-none shadow-none text-right rounded-3xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-[#0d0751] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
};

export default StatsSection;
