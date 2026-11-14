import React from "react";
import AeroShards from "@/components/AeroShards";
import AnimatedContent from "@/components/AnimatedContent";
import { Button, Badge } from "@/components/ui";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-black">
      {/* لایه ۱: پس‌زمینه AeroShards با رنگ #030430 روی زمینه مشکی */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AeroShards
          mouseStrength={0.43}
          shardColor="#1a0c34"
          accentColor="#7c3aed"
          backgroundColor="#000000"
          material="chrome"
          markers="dots"
          twist={1.3}
          speed={1.05}
          glow={0.54}
          vignette={0.49}
          grain={0.09}
          scale={1.09}
          className="w-full h-full"
        />
      </div>

      {/* لایه ۲: لایه مشکی با شفافیت ۳۰٪ (opacity/30) */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* لایه ۳: متن و محتوای فرالیست با AnimatedContent (با wipe="none" طبق دستور) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-20 md:py-32 text-center flex flex-col items-center">
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          trigger="mount"
          className="w-full flex flex-col items-center space-y-6 md:space-y-8"
        >
          {/* بج معرفی فرالیست */}
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="primary"
              className="text-xs sm:text-sm py-1.5 px-4 bg-[#030430] text-white"
            >
              <Sparkles className="w-3.5 h-3.5 ml-1.5 inline" />
              نسل نوین لیست قیمت آنلاین و هوشمند
            </Badge>
          </div>

          {/* عنوان اصلی فرالیست */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.15]">
            فـرالـیـسـت
          </h1>

          <div></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => {
                const el = document.getElementById("demo");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>مشاهده دموی زنده تغییر قیمت</span>
              <ArrowLeft className="w-5 h-5 mr-1" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => {
                const el = document.getElementById("pricing");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              شروع رایگان بدون نیاز به کارت
            </Button>
          </div>

          {/* مزایای فوری */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-5 md:gap-10 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>به‌روزرسانی در ۳ ثانیه</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>اشتراک با لینک و QR Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>پشتیبانی کامل از فایل اکسل</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
