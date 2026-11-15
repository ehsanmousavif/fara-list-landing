import React, { useState, useCallback } from "react";
import { Ticket, Copy, Check, RotateCcw } from "lucide-react";
import { ScratchCard } from "@/components/ui/ScratchCard";
import { HeaderSections } from "@/components/common/header-sections";

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
      className="w-full py-16 md:py-24 flex flex-col items-center justify-center bg-transparent text-black"
    >
      <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center">
        {/* هدر بخش با آیکون استک و عنوان بر اساس کانتکست معرفی */}
        <HeaderSections
          icon={<Ticket className="h-5 w-5" />}
          title="کارت تخفیف ۱۰ درصدی برای شروع کاتالوگ آنلاین"
          subtitle="برای دریافت کد تخفیف ویژه، با ماوس یا لمس روی کارت زیر بکشید"
        />

        {/* کارت اسکرچ کاملاً مطابق کامپوننت Spectrum UI */}
        <div className="flex flex-col items-center gap-6 mt-2">
          <ScratchCard
            key={resetKey}
            brushSize={36}
            revealThreshold={0.4}
            overlayColor="#3525cd"
            overlayLabelColor="#ffffff"
            particleColor="#eae9fb"
            overlayLabel="برای مشاهده تخفیف بکشید"
            className="w-full max-w-[340px] bg-[#f5f4fd] rounded-2xl border-none shadow-none"
            ariaLabel="کارت تخفیف ۱۰ درصدی فرالیست"
            revealAnnouncement="کد تخفیف شما: FARALIST10 برای ۱۰٪ تخفیف"
            onReveal={() => setIsRevealed(true)}
          >
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eae9fb] border-none shadow-none">
                <Ticket
                  className="h-5 w-5 text-[#3525cd]"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#3525cd]">
                کد تخفیف فعال شد
              </span>
              <span className="text-3xl font-black tracking-tight text-black font-sans">
                ۱۰٪ تخفیف
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="mt-1 flex items-center gap-2 rounded-xl bg-[#eae9fb] px-4 py-2 text-sm text-[#3525cd] font-bold transition-colors hover:bg-[#dedcf9] cursor-pointer border-none shadow-none"
              >
                FARALIST10
                {isCopied ? (
                  <Check
                    className="h-3.5 w-3.5 text-emerald-600"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {isCopied ? "کپی شد" : "کپی کد تخفیف"}
                </span>
              </button>
            </div>
          </ScratchCard>

          {isRevealed && (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 rounded-xl bg-[#f5f4fd] px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-[#eae9fb] hover:text-[#3525cd] cursor-pointer border-none shadow-none"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              تراشیدن مجدد
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScratchCardSection;
