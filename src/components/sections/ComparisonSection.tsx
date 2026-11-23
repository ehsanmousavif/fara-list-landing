import React from 'react';
import AnimatedContent from '@/components/effects/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { XCircle, CheckCircle2, Store, Clock, Zap, ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const storeComparison = [
    {
      label: 'هدف اصلی',
      traditional: 'سیستم سنگین سبد خرید و حسابداری پیچیده',
      faralist: 'نمایش سریع، شیک و همیشه‌بروز محصولات در یک لینک',
    },
    {
      label: 'زمان راه‌اندازی',
      traditional: 'هفته‌ها معطلی برای نماد اعتماد و درگاه بانکی',
      faralist: 'راه‌اندازی در ۳ دقیقه بدون نیاز به درگاه یا مجوز',
    },
    {
      label: 'تجربه مشتری',
      traditional: 'ثبت‌نام اجباری، فرم‌های طولانی آدرس و درگاه که مشتری را خسته می‌کند',
      faralist: 'مشاهده آنی بدون نصب و ثبت سفارش با یک پیام در واتساپ یا تلگرام',
    },
    {
      label: 'تغییر قیمت‌ها',
      traditional: 'ویرایش تکی و کند در منوهای تو در تو',
      faralist: 'تغییر درصدی و آنی قیمت کل محصولات با یک کلیک',
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش */}
        <AnimatedContent distance={24} duration={0.5} className="text-center">
          <HeaderSections
            icon={<Store className="w-5 h-5" />}
            title="فرالیست جای فروشگاه نیست، جای فایل‌های قیمت است"
            subtitle="فرالیست سیستم پیچیده فروشگاه‌سازی با درگاه بانکی نیست؛ جایگزین مدرن و همیشه به‌روز فایل‌های اکسل و پیام‌های پراکنده است."
          />
        </AnimatedContent>

        {/* کارت‌های مقایسه تصویری دوگانه */}
        <AnimatedContent
          distance={24}
          duration={0.5}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-right"
        >
          {/* ستون فروشگاه‌سازهای سنتی و پیچیده با تصویر */}
          <Card
            variant="surface"
            className="bg-[#f4f4f7] p-6 sm:p-8 space-y-6 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    ✕
                  </div>
                  <h3 className="font-black text-lg text-black/90">
                    سایت‌های فروشگاهی و سنتی
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-black/60 font-semibold">
                  کند و پیچیده
                </span>
              </div>

              {/* تصویر شماتیک روش سنتی */}
              <div className="relative rounded-2xl overflow-hidden bg-black/5 border border-black/5 p-4 flex items-center justify-center min-h-[140px] text-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-50 text-red-600 text-xs font-bold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>موانع خرید سنتی</span>
                  </div>
                  <p className="text-xs text-black/60 max-w-xs mx-auto leading-relaxed">
                    فایل‌های سنگین PDF، اکسل‌های ناخوانا، ثبت‌نام اجباری مشتری و نوسانات بدون آپدیت
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {storeComparison.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/70 space-y-1 text-xs sm:text-sm"
                  >
                    <span className="text-black/50 font-semibold block text-[11px]">
                      {item.label}
                    </span>
                    <p className="text-black/80 flex items-start gap-1.5 font-normal">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* ستون فرالیست با تصویر و استایل مدرن */}
          <Card
            variant="surface"
            className="bg-[#eae9fb] p-6 sm:p-8 space-y-6 border-none shadow-none rounded-3xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#3525cd]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#3525cd] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-black text-lg text-[#3525cd]">
                    رویکرد هوشمند فرالیست
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#3525cd]/15 text-[#3525cd] font-bold">
                  سریع و آنی
                </span>
              </div>

              {/* تصویر نمای کاتالوگ موبایل فرالیست */}
              <div className="relative rounded-2xl overflow-hidden bg-white/60 border border-[#3525cd]/15 p-4 flex items-center justify-between gap-4 min-h-[140px]">
                <div className="text-right space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#3525cd] text-white">
                    <Sparkles className="w-3 h-3" />
                    <span>یک لینک برای همیشه</span>
                  </span>
                  <h4 className="font-black text-sm text-black">کاتالوگ و قیمت زنده</h4>
                  <p className="text-xs text-black/70 leading-relaxed">
                    مشتری در لحظه قیمت را می‌بیند و با یک لمس فاکتور را در چت می‌فرستد.
                  </p>
                </div>
                <div className="w-20 shrink-0">
                  <img
                    src="/assets/images/faralist-mobile-catalog.png"
                    alt="نمای کاتالوگ فرالیست"
                    className="w-full h-auto object-contain drop-shadow-md rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {storeComparison.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white space-y-1 text-xs sm:text-sm"
                  >
                    <span className="text-[#3525cd] font-bold block text-[11px]">
                      {item.label}
                    </span>
                    <p className="text-black font-semibold flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                      <span>{item.faralist}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ComparisonSection;
