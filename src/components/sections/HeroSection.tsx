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

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-[92vh] lg:min-h-screen relative overflow-hidden flex items-center select-none pt-[calc(env(safe-area-inset-top,0px)+6.5rem)] pb-16 lg:py-24 bg-[#191458] border-none shadow-none">
      {/* کانتینر اصلی */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ستون راست: عنوان فرالیست، زیرعنوان، دکمه‌های اقدام */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6 order-2 lg:order-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-sm">
              فرالیست
            </h1>

            {/* زیرعنوان محوری */}
            <p className="text-white text-lg sm:text-2xl leading-relaxed font-bold max-w-md">
              محصولاتت رو فقط یکبار بساز{" "}
              <span className="text-white/80 block text-sm sm:text-base font-normal mt-1.5">
                یک لینک ثابت که همیشه آخرین نرخ‌ها و موجودی را نشان می‌دهد؛ بدون
                فرستادن فایل‌های تکراری و گیج‌کننده.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                variant="white"
                size="lg"
                className="w-full sm:w-auto text-base px-8 h-13 text-[#191458] bg-white hover:bg-white/90 active:bg-white/80 font-black cursor-pointer shadow-lg shadow-black/10 rounded-2xl"
                onClick={() => {
                  const el = document.getElementById("cta");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>مشاهده دمو</span>
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
                <span>نمونه قیمت‌ها</span>
              </Button>
            </div>

            {/* خط اعتمادساز زیر دکمه‌ها */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-white/90 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>بدون نیاز به نصب اپلیکیشن برای مشتری‌هات</span>
            </div>
          </div>

          {/* ستون میانی: موکاپ موبایل با کاتالوگ آنلاین فرالیست */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2 py-2 lg:py-0 w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] flex items-center justify-center mx-auto select-none transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/images/hero-phone-stand-3d.png"
                alt="نمای هوشمند کاتالوگ آنلاین فرالیست روی استند موبایل"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                width={528}
                height={832}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* ستون چپ: توضیحات کوتاه و مزایای کلیدی */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:space-y-3.5 order-3 w-full">
            {/* کارت مزیت ۱: سرعت تغییر قیمت */}
            <div className="col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 text-right group flex flex-col justify-between">
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
                <p className="text-[11px] sm:text-xs md:text-sm text-white/90 leading-relaxed font-normal">
                  هربار قیمت یا موجودی تغییر کنه، لیست قیمت همه مشتری‌هات در
                  لحظه به‌روز میشه؛ بدون ارسال دوباره فایل.
                </p>
              </div>
            </div>

            {/* کارت مزیت ۲: بدون نیاز به نصب */}
            <div className="col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 transition-all duration-300 text-right group flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-xs sm:text-base font-black text-white leading-tight">
                      یک لینک سبک و ابری
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/25 text-white w-fit shrink-0">
                    ۱۰۰٪ وب
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-white/90 leading-relaxed font-normal">
                  مشتری با یک لمس لینک اختصاصی یا اسکن QR، محصولات رو بدون
                  دانلود هیچ برنامه‌ای آنی باز می‌کنه.
                </p>
              </div>
            </div>

            {/* کارت مزیت ۳: سفارش‌گیری مستقیم */}
            <div className="col-span-2 lg:col-span-1 bg-[#478B8D] hover:bg-[#559ea0] hover:scale-[1.02] active:scale-[0.99] backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 text-right group">
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
                  ارسال فوری
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                خریدار کالاهای مورد نظرش رو انتخاب می‌کنه و فاکتور آماده
                مستقیماً در واتساپ یا تلگرام برات ارسال میشه.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
