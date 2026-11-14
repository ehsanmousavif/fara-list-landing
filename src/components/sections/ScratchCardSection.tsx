import React, { useState, useCallback } from "react";
import { Ticket, Copy, Check, RotateCcw } from "lucide-react";
import { ScratchCard } from "@/components/ui/ScratchCard";
import { HeaderSections } from "../common/header-sections";

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
      className="w-full !flex flex-col items-center justify-center bg-black"
    >
      <HeaderSections icon={<Ticket className="h-6 w-6" />} />
      <div className="w-full flex items-center justify-center gap-4 py-8">
        <p>lorem</p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-neutral-400">برای دیدن تخفیف بخراشید </p>
          <ScratchCard
            key={resetKey}
            className="w-full max-w-[500px] bg-neutral-900 border-none shadow-none"
            ariaLabel="Scratch to reveal your coupon code. Press Enter to reveal."
            revealAnnouncement="Coupon revealed: FARALIST10 for 10% off"
            onReveal={() => setIsRevealed(true)}
          >
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 border-none shadow-none">
                <Ticket
                  className="h-5 w-5 text-neutral-300"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Coupon unlocked
              </span>
              <span className="text-3xl font-semibold tracking-tight text-neutral-100 font-sans">
                10% off
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="mt-1 flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 font-mono text-sm text-neutral-300 transition-colors hover:bg-neutral-700 cursor-pointer border-none shadow-none"
              >
                FARALIST10
                {isCopied ? (
                  <Check
                    className="h-3.5 w-3.5 text-emerald-400"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {isCopied ? "Copied to clipboard" : "Copy coupon code"}
                </span>
              </button>
            </div>
          </ScratchCard>
        </div>

        {isRevealed && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700 cursor-pointer border-none shadow-none"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Scratch again
          </button>
        )}
      </div>
    </section>
  );
};

export default ScratchCardSection;
