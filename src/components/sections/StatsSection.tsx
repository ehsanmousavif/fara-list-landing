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
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* سربرگ بخش مشکل */}
        <AnimatedContent distance={24} duration={0.5} className="text-center">
          <HeaderSections
            icon={<AlertCircle className="h-5 w-5" />}
            title="هر تغییر قیمت، یعنی ساخت و ارسال دوباره فایل"
            subtitle="فرستادن مکرر فایل اکسل و پی‌دی‌اف، هم وقت شما رو تلف می‌کنه و هم مشتری‌ها رو با قیمت‌های قبلی سردرگم می‌کنه."
          />
        </AnimatedContent>

        {/* ۳ درد اصلی فروشندگان */}
        <AnimatedContent
          distance={24}
          duration={0.5}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PROBLEMS_DATA.map((item) => {
            const Icon = PROBLEM_ICONS[item.iconName] || FileX;
            return (
              <Card
                key={item.id}
                variant="surface"
                className="bg-[#f5f4fd] hover:bg-[#eae9fb] p-6 flex flex-col space-y-3.5 border-none shadow-none text-right rounded-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#3525cd] text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
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
