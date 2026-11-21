import React from "react";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Eye,
  CheckCircle2,
  Zap,
  Globe,
  MessageSquareQuote,
} from "lucide-react";

/**
 * بخش Hero بازنویسی‌شده فرالیست بر اساس معماری ۳ لایه:
 * لایه ۱ (زیرین): گرادیان عمودی از بنفش پررنگ به بنفش ملایم و سپس سفید
 * لایه ۲ (میانی): موکاپ سه‌بعدی موبایل روی پایه در زاویه سه‌رخ (۳/۴)، در مرکز با عرض ۱/۳ کانتینر
 * لایه ۳ (رویی/اولویت بالا):
 *   - سمت راست: نام بولد «فرالیست»، زیرعنوان «محصولاتت رو فقط یکبار بساز»، دکمه‌های اقدام (CTA) و بج اعتمادسازی
 *   - قرینه سمت چپ: توضیحات کوتاه و کلیدی ارزش‌های فرالیست در کارت‌های فلت و چشم‌نواز
 */
export const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-[92vh] lg:min-h-screen relative overflow-hidden flex items-center select-none pt-28 pb-16 lg:py-24 bg-[#191458] to-white">
      {/* هاله نوری محو در پس‌زمینه برای عمق ملایم بدون سایه‌های تند */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6c5af9]/25 blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* کانتینر اصلی ۳ لایه */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* ستون راست (لایه رویی): عنوان اصلی فرالیست، زیرعنوان، دکمه‌های CTA و بج اعتمادسازی */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6 animate-hero-text order-2 lg:order-1">
            {/* عنوان برند با فونت فوق‌العاده بولد و باکیفیت */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                نسل جدید کاتالوگ دیجیتال
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.15]">
                فرالیست
              </h1>
            </div>

            {/* زیرعنوان محوری */}
            <p className="text-white/95 text-lg sm:text-2xl lg:text-2xl leading-relaxed font-bold max-w-md">
              محصولاتت رو فقط یکبار بساز{" "}
              <span className="text-white/80 block text-sm sm:text-base font-normal mt-1.5">
                کاتالوگ آنلاین و لیست قیمت لحظه‌ای؛ بدون نیاز به ارسال مداوم
                فایل‌های سنگین و پی‌دی‌اف.
              </span>
            </p>

            {/* دکمه‌های اقدام به عمل (CTA) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                variant="white"
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-13 text-[#3525cd] bg-white hover:bg-white/90 active:bg-white/80 font-black cursor-pointer shadow-lg shadow-black/10 rounded-2xl"
                onClick={() => {
                  const el = document.getElementById("cta");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>ساخت کاتالوگ من</span>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-base px-6 h-13 text-white bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/20 font-bold cursor-pointer rounded-2xl"
                onClick={() => {
                  const el = document.getElementById("demo");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Eye className="w-5 h-5 ml-2" />
                <span>دیدن نمونه کاتالوگ</span>
              </Button>
            </div>

            {/* خط اعتمادساز زیر دکمه‌ها */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-white/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>بدون نیاز به نصب اپلیکیشن برای مشتری‌هات</span>
            </div>
          </div>

          {/* ستون میانی (لایه ۲): موکاپ موبایل روی پایه در زاویه سه‌رخ (۳/۴)، در موبایل اول نمایش داده می‌شود */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2 py-4 lg:py-0">
            {/* تصویر موکاپ موبایل روی پایه */}
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] flex flex-col items-center">
              <img
                src="/assets/images/hero-phone-stand-3d.png"
                alt="کاتالوگ هوشمند فرالیست روی پایه موبایل در زاویه سه‌رخ"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                width={546}
                height={850}
                loading="eager"
              />

              {/* سایه پایه‌ای واقع‌گرایانه در زیر پایه آلومینیومی */}
              <div
                aria-hidden="true"
                className="w-3/4 h-5 -mt-3 bg-black/20 blur-md rounded-[100%] pointer-events-none"
              />
            </div>
          </div>

          {/* ستون چپ (قرینه موکاپ): توضیحات کوتاه و مزایای کلیدی فرالیست */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:space-y-3.5 order-3 w-full">
            {/* کارت مزیت ۱: سرعت تغییر قیمت */}
            <div className="col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 text-right group cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-xs sm:text-base font-black text-white leading-tight">
                      آپدیت آنی قیمت‌ها
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/25 text-white w-fit shrink-0">
                    ۰.۰۳ ثانیه
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/85 leading-relaxed font-normal">
                  هربار قیمت یا موجودی تغییر کنه، کاتالوگ همه مشتری‌هات در لحظه به‌روز میشه؛ بدون نیاز به فرستادن دوباره فایل جدید.
                </p>
              </div>
            </div>

            {/* کارت مزیت ۲: بدون نیاز به نصب */}
            <div className="col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 text-right group cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-xs sm:text-base font-black text-white leading-tight">
                      یک پیوند ابری و سبک
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/25 text-white w-fit shrink-0">
                    ۱۰۰٪ وب
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/85 leading-relaxed font-normal">
                  مشتری با یک لمس لینک اختصاصی یا اسکن QR، کاتالوگ رو با بالاترین سرعت و بدون دانلود هیچ اپلیکیشنی باز می‌کنه.
                </p>
              </div>
            </div>

            {/* کارت مزیت ۳: سفارش‌گیری مستقیم در چت (در موبایل تمام‌عرض / full screen) */}
            <div className="col-span-2 lg:col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 text-right group cursor-pointer">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <MessageSquareQuote className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    سفارش سریع در چت
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full bg-white/25 text-white shrink-0">
                  تبدیل فوری
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                خریدار کالاهای مورد نظرش رو انتخاب می‌کنه و فاکتور آماده مستقیماً در واتساپ یا تلگرام برات ارسال میشه.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
