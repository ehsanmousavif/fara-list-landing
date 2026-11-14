import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui";
import { Sparkles } from "lucide-react";

export const ScrollRevealSection: React.FC = () => {
  return (
    <section className="py-28 md:py-44 bg-black text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center space-y-8">
        {/* نشان معرفی مانیفست فرالیست */}
        <div className="inline-flex items-center gap-2">
          <Badge
            variant="primary"
            className="bg-[#030430] text-white py-1.5 px-4 text-xs sm:text-sm"
          >
            <Sparkles className="w-3.5 h-3.5 ml-1.5 inline" />
            انقلاب در مدیریت و اعلام قیمت
          </Badge>
        </div>

        <ScrollReveal
          highlightColor="#7a7aff"
          mode="scrub"
          splitBy="words"
          effect="fade"
          stagger={0.025}
          duration={0.8}
          smoothing={2}
          baseOpacity={1}
          baseRotation={1}
          baseOffset={0}
          enableBlur
          blurStrength={4}
        >
          فرالیست راهکاری ساده، هوشمند و کاربردی برای مدیریت فهرست محصولات و
          به‌روزرسانی سریع قیمت‌هاست. با فرالیست می‌توانید تمام محصولات خود را
          در یک فضای منظم و یکپارچه ثبت و مدیریت کنید، به اطلاعات آن‌ها دسترسی
          داشته باشید و بدون اتلاف وقت، قیمت‌ها را به‌روزرسانی کنید.
        </ScrollReveal>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-white/80">
          <span className="px-4 py-2 rounded-xl bg-[#030430]">
            ⚡ به‌روزرسانی آنی قیمت‌ها
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#030430]">
            🔗 لینک دائمی و هوشمند
          </span>
          <span className="px-4 py-2 rounded-xl bg-[#030430]">
            📱 بدون نیاز به نصب اپلیکیشن
          </span>
        </div>
      </div>
    </section>
  );
};
