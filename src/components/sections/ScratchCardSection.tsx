import React, { useState, useCallback } from "react";
import { Ticket, Copy, Check, RotateCcw, Sparkles, Gift } from "lucide-react";
import { ScratchCard } from "@/components/ui/ScratchCard";

export const ScratchCardSection: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("FARALIST10").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, []);

  const handleReset = useCallback(() => {
    setResetKey((key) => key + 1);
    setIsRevealed(false);
    setIsCopied(false);
  }, []);

  return (
    <section
      id="discount"
      className="w-full py-16 md:py-24 bg-[#191458] text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* کانتینر اصلی بخش تخفیف با چیدمان چپ و راستی و طراحی تخت */}
        <div className="relative rounded-3xl bg-white/10 p-8 sm:p-12 lg:p-16 border-none shadow-none overflow-hidden">
          {/* هاله پس‌زمینه ملایم برند */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ستون متن و توضیحات در سمت راست */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold">
                <Sparkles className="h-4 w-4" />
                <span>هدیه ویژه شروع کسب‌وکار</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                کاتالوگ آنلاینت رو با ۱۰٪ تخفیف اختصاصی بساز
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                برای همراهی در مسیر مدرن‌سازی و دیجیتال‌کردن لیست قیمت و محصولاتت، این کارت تخفیف اختصاصی برای شما آماده شده است. با کشیدن ماوس یا لمس دست روی کارت مقابل، کد تخفیف را آشکار کنید و موقع فعال‌سازی پلن از آن بهره‌مند شوید.
              </p>

              {/* ویژگی‌های کلیدی کد تخفیف */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
                <div className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>قابل استفاده در تمام پلن‌ها</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>فعال‌سازی آنی پس از ثبت‌نام</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>بدون محدودیت تعداد محصولات</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-white/90 font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>فرصت محدود برای ۱۰۰ کاربر اول</span>
                </div>
              </div>

              {/* راهنما و وضعیت تعاملی */}
              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70">
                <Gift className="h-4 w-4 text-white shrink-0" />
                <span>
                  {isRevealed
                    ? "کد تخفیف شما آماده است؛ با کلیک روی دکمه آن را کپی کنید."
                    : "با حرکت نشانگر ماوس یا لمس دست، لایه بنفش کارت را بتراشید."}
                </span>
              </div>
            </div>

            {/* ستون کارت اسکرچ در سمت چپ */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
              <ScratchCard
                key={resetKey}
                brushSize={36}
                revealThreshold={0.4}
                overlayColor="#3525cd"
                overlayLabelColor="#ffffff"
                particleColor="#eae9fb"
                overlayLabel="برای مشاهده تخفیف بکشید"
                className="w-full max-w-[340px] bg-white rounded-2xl border-none shadow-none"
                ariaLabel="کارت تخفیف ۱۰ درصدی فرالیست"
                revealAnnouncement="کد تخفیف شما: FARALIST10 برای ۱۰٪ تخفیف"
                onReveal={() => setIsRevealed(true)}
              >
                <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eae9fb] border-none shadow-none">
                    <Ticket
                      className="h-6 w-6 text-[#3525cd]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3525cd]">
                    کد تخفیف فعال شد
                  </span>
                  <span className="text-3xl font-black tracking-tight text-neutral-900 font-sans">
                    ۱۰٪ تخفیف
                  </span>
                  <p className="text-xs text-neutral-500 font-medium">
                    قابل اعمال بر روی فاکتور خرید
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="mt-1 flex items-center gap-2 rounded-xl bg-[#3525cd] text-white px-5 py-2.5 text-sm font-bold transition-all hover:bg-[#2719a0] cursor-pointer border-none shadow-none active:scale-95"
                  >
                    <span className="tracking-wide">FARALIST10</span>
                    {isCopied ? (
                      <Check
                        className="h-4 w-4 text-emerald-300"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="text-xs font-normal">
                      {isCopied ? "کپی شد" : "کپی"}
                    </span>
                  </button>
                </div>
              </ScratchCard>

              {isRevealed && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-[#eae9fb] hover:text-[#3525cd] cursor-pointer border-none shadow-none"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>تراشیدن مجدد</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScratchCardSection;
