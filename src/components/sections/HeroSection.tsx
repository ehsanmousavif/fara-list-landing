import React from "react";
import GhostFibers from "@/components/GhostFibers";
import GradientWaves from "@/components/GradientWaves";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Eye, Sparkles, CheckCircle2 } from "lucide-react";
import Threads from "../Threads";

/**
 * بخش Hero فول‌اسکرین سفید فرالیست (Full Screen White Hero)
 * سمت چپ: لاین‌های نوری GhostFibers با ارتفاع کامل از بالا تا پایین + تیتر اصلی و دکمه‌های اقدام به عمل
 * سمت راست: کامپوننت GradientWaves با امواج بنفش و جدول ماکت پرسپکتیو ۳بعدی (1400x900) شناور روی آن
 * پایین وسط: آیکون اسکرول ماوس بنفش
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-[98vh] justify-between relative lg:min-h-screen bg-white text-black overflow-hidden flex flex-col select-none">
      <div className="w-full h-screen relative">
        <Threads
          color={"#8c8efc" as any}
          lineCount={84}
          thickness={0.2}
          softness={3}
          amplitude={1.8}
          distance={0.4}
          waves={0.75}
          speed={0.1}
          split={0.07}
          fray={0.75}
          angle={25}
          taper={0.85}
          brightness={2}
          parting={0.25}
          fade={0}
          opacity={1}
          seed={0}
        />
      </div>
      <div className="w-3/4 h-screen absolute -left-10 bottom-30 rotate-90">
        <Threads
          color={"#8c8efc" as any}
          lineCount={84}
          thickness={0.2}
          softness={3}
          amplitude={1.8}
          distance={0.1}
          waves={0.4}
          speed={0.1}
          split={0.07}
          fray={0.75}
          angle={25}
          taper={0.85}
          brightness={2}
          parting={0.25}
          fade={10}
          opacity={1}
          seed={0}
        />
      </div>

      {/* لایه محوکننده و سایه گرادیان سفید در پایین هیرو برای حذف کامل خط کات */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 sm:h-64 md:h-80 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.98) 20%, rgba(255, 255, 255, 0.7) 55%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* محتوای متنی و دکمه‌های هیرو روی پس‌زمینه Threads */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center flex flex-col items-center space-y-6 md:space-y-8 animate-hero-text">
          {/* چشم عنوان اصلی */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.2] max-w-4xl">
            <span className="text-[#3525cd] font-black">فرالیست </span>
            محصولاتت رو فقط یکبار بساز{" "}
          </h1>

          {/* زیرعنوان توضیحی هیرو */}
          <p className="text-black/75 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            فرالیست فایل‌های PDF و اکسل قدیمی و پیام‌های پراکنده توی واتساپ و
            تلگرام رو با یک لینک زنده جایگزین می‌کنه. هر وقت قیمت یا موجودی عوض
            شد، فقط توی فرالیست ویرایشش کن؛ همون لینکی که قبلاً فرستادی خودش
            بروز می‌شه.
          </p>

          {/* دکمه‌های اقدام به عمل (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto pointer-events-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base px-8 h-13"
              onClick={() => {
                const el = document.getElementById("cta");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>ساخت کاتالوگ من</span>
              <ArrowLeft className="w-5 h-5 mr-1" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base px-7 h-13"
              onClick={() => {
                const el = document.getElementById("demo");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Eye className="w-5 h-5 ml-1" />
              <span>دیدن یک نمونه کاتالوگ</span>
            </Button>
          </div>

          {/* خط اعتمادساز زیر دکمه‌ها */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-black/60 font-medium pointer-events-auto">
            <CheckCircle2 className="w-4 h-4 text-[#3525cd]" />
            <span>بدون نیاز به نصب اپلیکیشن برای مشتری‌هات</span>
          </div>
        </div>
      </div>
    </section>
  );
};
