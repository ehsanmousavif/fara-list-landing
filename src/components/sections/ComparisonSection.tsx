import React from 'react';
import AnimatedContent from '@/components/effects/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { FileSpreadsheet } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش مقایسه */}
        <AnimatedContent distance={24} duration={0.5} className="text-center">
          <HeaderSections
            icon={<FileSpreadsheet className="w-5 h-5 text-[#3525cd]" />}
            title="فرالیست جای فروشگاه نیست، جای فایل‌های قیمت است"
            subtitle="فرالیست سیستم پیچیده فروشگاه‌سازی با سبد خرید و درگاه بانکی نیست؛ جایگزین سریع، مدرن و همیشه‌بروز فایل‌های سنگین PDF و اکسل‌های شلوغ است."
          />
        </AnimatedContent>

        {/* دو کارت تصویری مقایسه در کنار هم همراه با توضیح کوتاه در پایین تصویر */}
        <AnimatedContent
          distance={24}
          duration={0.5}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-right"
        >
          {/* کارت ۱: روش سنتی (فایل‌های اکسل و PDF) */}
          <Card
            variant="surface"
            className="bg-[#f4f4f7] p-5 sm:p-6 space-y-4 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            {/* تصویر مانیتور اکسل */}
            <div className="rounded-2xl overflow-hidden bg-black/5 aspect-4/3 w-full flex items-center justify-center">
              <img
                src="/assets/images/spreadsheet-chaos-pricing.jpg"
                alt="روش سنتی مدیریت قیمت با فایل‌های شلوغ اکسل و پی‌دی‌اف"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* توضیح کوتاه در قسمت پایین */}
            <div className="pt-1 text-right space-y-1.5">
              <span className="inline-block text-xs font-bold text-red-600 bg-red-100 px-2.5 py-1 rounded-lg">
                روش سنتی و دردسرساز
              </span>
              <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-normal">
                فایل‌های سنگین و جدول‌های شلوغ اکسل که با هر تغییر قیمت، نیازمند ادیت دستی و ارسال مجدد به مشتریان است.
              </p>
            </div>
          </Card>

          {/* کارت ۲: فرالیست (کاتالوگ آنلاین و زنده) */}
          <Card
            variant="surface"
            className="bg-[#eae9fb] p-5 sm:p-6 space-y-4 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            {/* تصویر موبایل کاتالوگ آنلاین */}
            <div className="rounded-2xl overflow-hidden bg-white aspect-4/3 w-full flex items-center justify-center p-2 sm:p-3">
              <img
                src="/assets/images/faralist-live-catalog-mobile.jpg"
                alt="کاتالوگ آنلاین و لیست قیمت فرالیست"
                className="h-full w-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>

            {/* توضیح کوتاه در قسمت پایین */}
            <div className="pt-1 text-right space-y-1.5">
              <span className="inline-block text-xs font-bold text-[#191458] bg-white px-2.5 py-1 rounded-lg">
                فرالیست؛ سریع و همیشه‌بروز
              </span>
              <p className="text-xs sm:text-sm text-[#191458]/85 leading-relaxed font-normal">
                یک لینک ثابت و سبک که مشتری بدون نیاز به دانلود، همیشه آخرین نرخ و موجودی کالاها را در موبایل می‌بیند.
              </p>
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ComparisonSection;
