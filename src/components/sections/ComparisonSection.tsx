import React from 'react';
import AnimatedContent from '@/components/effects/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { XCircle, CheckCircle2, FileSpreadsheet, Sparkles, Layers } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش: فرالیست جای فروشگاه نیست، جای فایلهای قیمت است */}
        <AnimatedContent distance={24} duration={0.5} className="text-center">
          <HeaderSections
            icon={<FileSpreadsheet className="w-5 h-5 text-[#3525cd]" />}
            title="فرالیست جای فروشگاه نیست، جای فایل‌های قیمت است"
            subtitle="فرالیست سیستم پیچیده فروشگاه‌سازی با سبد خرید و درگاه بانکی نیست؛ جایگزین سریع، مدرن و همیشه‌بروز فایل‌های سنگین PDF و اکسل‌های شلوغ است."
          />
        </AnimatedContent>

        {/* دو کارت تصویری مقایسه در کنار هم: یکی فایل‌های شلوغ اکسل/PDF و دیگری فرالیست بدون موکاپ */}
        <AnimatedContent
          distance={24}
          duration={0.5}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-right"
        >
          {/* کارت ۱: ارسال فایل‌های PDF و اکسل */}
          <Card
            variant="surface"
            className="bg-[#f4f4f7] p-6 sm:p-7 space-y-6 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* سربرگ کارت ۱ */}
              <div className="pb-3 border-b border-black/5">
                <h3 className="font-black text-lg text-black/90">
                  ارسال فایل‌های PDF و اکسل
                </h3>
              </div>

              {/* تصویر ۱: پی‌دی‌اف‌های زیاد و اکسل‌های شلوغ */}
              <div className="rounded-2xl overflow-hidden bg-black/5 border border-black/5 aspect-[16/10] w-full">
                <img
                  src="/assets/images/messy-price-files.jpg"
                  alt="فایل‌های شلوغ اکسل و پی‌دی‌اف‌های متعدد قیمت"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* توضیحات مختصر زیر تصویر ۱ */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 text-xs sm:text-sm text-black/80 font-normal">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>فایل‌های حجیم و ناخوانا در موبایل که مشتری رغبتی به دانلود آن‌ها ندارد</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 text-xs sm:text-sm text-black/80 font-normal">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>بی‌اعتبار شدن فوری قیمت‌ها به محض نوسان بازار و سوختن فایل‌های ارسال‌شده</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 text-xs sm:text-sm text-black/80 font-normal">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>سردرگمی خریدار بین ده‌ها نسخه پیام («لیست نهایی»، «قیمت جدید امروز»)</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 text-xs sm:text-sm text-black/80 font-normal">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>بدون امکان جستجوی سریع کالا یا ثبت سفارش آسان در پیام‌رسان‌ها</span>
                </div>
              </div>
            </div>
          </Card>

          {/* کارت ۲: فرالیست (کاتالوگ و لیست قیمت آنلاین بدون موکاپ) */}
          <Card
            variant="surface"
            className="bg-[#eae9fb] p-6 sm:p-7 space-y-6 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* سربرگ کارت ۲ */}
              <div className="pb-3 border-b border-[#3525cd]/10">
                <h3 className="font-black text-lg text-[#3525cd]">
                  کاتالوگ آنلاین فرالیست
                </h3>
              </div>

              {/* تصویر ۲: عکس تمیز فرالیست بدون موکاپ */}
              <div className="rounded-2xl overflow-hidden bg-white/80 border border-[#3525cd]/15 aspect-[16/10] w-full">
                <img
                  src="/assets/images/faralist-clean-catalog.jpg"
                  alt="لیست قیمت و کاتالوگ آنلاین فرالیست بدون موکاپ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* توضیحات مختصر زیر تصویر ۲ */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white text-xs sm:text-sm text-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                  <span>یک لینک ثابت و همیشگی؛ بدون نیاز به دانلود هیچ فایلی یا نصب اپلیکیشن</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white text-xs sm:text-sm text-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                  <span>تغییر آنی و درصدی تمام قیمت‌ها با یک کلیک در همان لینک دست مشتریان</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white text-xs sm:text-sm text-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                  <span>نمایش فوق‌العاده سریع، منظم و سبک در هر گوشی موبایل و کامپیوتر</span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white text-xs sm:text-sm text-black font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                  <span>جستجوی آنی کالاها و ارسال مستقیم فاکتور به واتساپ و تلگرام با یک لمس</span>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ComparisonSection;
