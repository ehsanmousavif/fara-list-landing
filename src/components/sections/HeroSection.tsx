import React from "react";
import { Button } from "@/components/ui";
import { ArrowLeft, Sparkles, CheckCircle2, Eye } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-white text-black">
      {/* گرادیان خطی اختصاصی پررنگ‌تر تلفیقی از Primary (#3525cd) و Secondary (#eae9fb) - با ماسک محوشوندگی تدریجی بدون خط کات */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[68%] pointer-events-none select-none overflow-hidden z-0 animate-gradient-soft"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        {/* لایه اصلی گرادیان خطی غنی‌تر با زاویه متمایل به بالا-چپ */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(150deg, rgba(53, 37, 205, 0.42) 0%, rgba(85, 70, 222, 0.32) 28%, rgba(234, 233, 251, 0.9) 55%, rgba(234, 233, 251, 0.4) 80%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* لایه نوری پررنگ‌تر و نرم متمرکز بر سمت بالا-چپ */}
        <div
          className="absolute -top-16 -left-12 w-[75vw] max-w-4xl h-96 rounded-full blur-[100px] pointer-events-none opacity-90 animate-ambient-drift"
          style={{
            background:
              "linear-gradient(320deg, rgba(255, 255, 255, 0) 0%, rgba(234, 233, 251, 0.75) 35%, rgba(53, 37, 205, 0.48) 100%)",
          }}
        />

        {/* لایه اطمینان از محوشوندگی نرم از پایین به بالا برای رفع هرگونه خط کات */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>

      {/* محتوای اصلی هیرو بر اساس سند متن فرالیست (انیمیشن ورود موقتاً کامنت شد) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-24 md:py-32 text-center flex flex-col items-center">
        <div className="w-full flex flex-col items-center space-y-6 md:space-y-8">
          {/* نشان بالای هیرو */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm py-1.5 px-4 rounded-full bg-[#eae9fb] text-[#3525cd] font-semibold flex items-center border-none shadow-none">
              <Sparkles className="w-3.5 h-3.5 ml-1.5 inline text-[#3525cd]" />
              جایگزین دائمی PDF و اکسل‌های قدیمی قیمت
            </span>
          </div>

          {/* چشم عنوان (H1) اصلی و متقاعدکننده */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.2] max-w-4xl">
            لیست قیمت و کاتالوگ محصولاتت رو یک بار بساز،{" "}
            <span className="text-[#3525cd]">دیگه هیچ‌وقت از اول نساز</span>
          </h1>

          {/* زیرعنوان توضیحی هیرو */}
          <p className="text-black/75 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            فرالیست فایل‌های PDF و اکسل قدیمی و پیام‌های پراکنده توی واتساپ و
            تلگرام رو با یک لینک زنده جایگزین می‌کنه. هر وقت قیمت یا موجودی عوض
            شد، فقط توی فرالیست ویرایشش کن؛ همون لینکی که قبلاً فرستادی خودش
            بروز می‌شه.
          </p>

          {/* دکمه‌های اقدام به عمل (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
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
          <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-black/60 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#3525cd]" />
            <span>بدون نیاز به نصب اپلیکیشن برای مشتری‌هات</span>
          </div>
        </div>
      </div>
    </section>
  );
};
