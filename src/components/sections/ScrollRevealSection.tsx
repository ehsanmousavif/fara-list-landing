import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { HeaderSections } from "@/components/common/header-sections";
import { Link2 } from "lucide-react";

export const ScrollRevealSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-white text-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center space-y-8">
        {/* هدر بخش راه‌حل با IconStack */}
        <HeaderSections
          icon={<Link2 className="w-5 h-5" />}
          title="یک لینک ثابت، که همیشه آخرین نسخه رو نشون می‌ده"
          subtitle="تغییر بنیادی در شیوه ارسال قیمت و کاتالوگ برای مشتریان"
        />

        {/* متن تعاملی راه‌حل منطبق با بخش ۳ سند محتوا */}
        <ScrollReveal
          highlightColor="#3525cd"
          mode="scrub"
          splitBy="words"
          effect="fade"
          stagger={0.025}
          duration={0.8}
          smoothing={2}
          baseOpacity={0.2}
          baseRotation={1}
          baseOffset={0}
          enableBlur
          blurStrength={4}
          textClassName="text-black"
        >
          با فرالیست، محصولات، قیمت، موجودی و دسته‌بندی‌هات رو یک‌بار وارد می‌کنی
          و از روی همون اطلاعات، یک یا چند کاتالوگ آنلاین می‌سازی. هر کاتالوگ
          یک لینک مخصوص خودش داره که می‌تونی توی واتساپ، تلگرام، اینستاگرام،
          پیامک یا حتی روی یک QR Code توی مغازه بذاریش. از اون به بعد، هر
          تغییری که توی فرالیست بدی — قیمت، موجودی، عکس، محصول جدید — همون
          لحظه روی همون لینک قدیمی هم دیده می‌شه. مشتری هیچ‌وقت فایل کهنه دستش
          نمی‌مونه.
        </ScrollReveal>

        {/* چیپ‌های کلیدی راه‌حل */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-black">
          <span className="px-4 py-2.5 rounded-xl bg-[#eae9fb] text-[#3525cd]">
            🔗 یک لینک دائمی برای هر کاتالوگ
          </span>
          <span className="px-4 py-2.5 rounded-xl bg-[#eae9fb] text-[#3525cd]">
            ⚡ بروزرسانی لحظه‌ای بدون ارسال فایل
          </span>
          <span className="px-4 py-2.5 rounded-xl bg-[#eae9fb] text-[#3525cd]">
            📱 مشاهده سریع در مرورگر همه گوشی‌ها
          </span>
        </div>
      </div>
    </section>
  );
};
