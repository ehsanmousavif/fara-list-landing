import React from "react";
import AnimatedContent from "@/components/effects/AnimatedContent";
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
    <section className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش مشکل روی پس‌زمینه کاملاً سفید */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<AlertCircle className="h-5 w-5" />}
            title="هر بار قیمت عوض می‌شه، باید دوباره یه فایل جدید بفرستی"
            subtitle="اگه محصول می‌فروشی، این ماجرا برات آشناست: یه فایل اکسل یا عکس از لیست قیمت داری، هر چند وقت یه بار قیمت‌ها عوض می‌شه و باید دوباره فایل رو بسازی و برای همه مخاطب‌هات بفرستی. بعضی از مشتری‌ها هنوز نسخه چند ماه پیش رو دارن و با قیمت قدیمی تماس می‌گیرن."
          />
        </AnimatedContent>

        {/* ۳ درد اصلی فروشندگان در کارت‌های تخت با پس‌زمینه ملایم و خوانا */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          stagger={0.08}
          staggerFrom="start"
          ease="power2.out"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROBLEMS_DATA.map((item) => {
            const Icon = PROBLEM_ICONS[item.iconName] || FileX;
            return (
              <Card
                key={item.id}
                variant="surface"
                className="bg-[#f5f4fd] hover:bg-[#eae9fb] p-7 flex flex-col space-y-4 border-none shadow-none text-right rounded-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#3525cd] text-white flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">
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