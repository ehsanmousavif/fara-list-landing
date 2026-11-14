import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Button } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import {
  Smartphone,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Zap,
  MessageCircle,
  Search,
} from 'lucide-react';

export const CatalogPreviewSection: React.FC = () => {
  return (
    <section id="catalog-preview" className="py-20 md:py-28 bg-white text-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* هدر بخش با آیکون استک */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center"
        >
          <HeaderSections
            icon={<Smartphone className="w-5 h-5" />}
            title="کاتالوگ محصولات شما، دقیقاً این‌گونه در موبایل مشتری دیده می‌شود"
            subtitle="نمایی واقعی از کاتالوگ آنلاین و زنده‌ای که مشتریان شما بدون نیاز به نصب هرگونه اپلیکیشن باز می‌کنند"
          />
        </AnimatedContent>

        {/* ساختار دوتایی: موبایل فریم در یک طرف و توضیحات فرالیست در طرف دیگر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ستون چپ/تصویر: فریم موبایل با کاتالوگ واقعی فرالیست */}
          <div className="lg:col-span-6 flex justify-center items-center relative order-2 lg:order-1">
            {/* هاله نوری ملایم بنفش در پس‌زمینه برای ایجاد عمق تخت */}
            <div
              aria-hidden="true"
              className="absolute w-72 h-96 sm:w-88 sm:h-110 bg-[#3525cd]/10 blur-[100px] rounded-full pointer-events-none -z-10"
            />

            {/* ظرف فریم گوشی موبایل */}
            <div className="relative max-w-[320px] sm:max-w-[360px] md:max-w-[380px] w-full flex flex-col items-center select-none">
              <img
                src="/assets/images/faralist-mobile-catalog.png"
                alt="نمای واقعی کاتالوگ آنلاین فرالیست روی موبایل"
                className="w-full h-auto object-contain border-none shadow-none pointer-events-none"
                loading="lazy"
                width={456}
                height={891}
              />

              {/* چیپ شناور نشانی اینترنتی زنده */}
              <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#eae9fb] text-[#3525cd] text-xs font-mono select-all">
                <span className="w-2 h-2 rounded-full bg-[#3525cd] animate-pulse" />
                <span>faralist.com/tordak/products</span>
              </div>
            </div>
          </div>

          {/* ستون راست/محتوا: توضیحات و مزایای کاتالوگ زنده فرالیست */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2 text-right">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eae9fb] text-[#3525cd] text-xs font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>جایگزین قطعی کاتالوگ کاغذی و PDF</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-tight">
                یک لینک زنده، سبک و سریع که همیشه آخرین نرخ‌ها را نشان می‌دهد
              </h3>

              <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
                با فرالیست، مشتری شما نیازی به دانلود فایل‌های ۲۰ مگابایتی، باز کردن اکسل‌های ناخوانا یا گشتن بین صدها استوری ندارد. با لمس یک لینک اختصاصی در پیام‌رسان‌ها یا اسکن QR Code در ویترین، کاتالوگی روان و زیبا باز می‌شود که مستقیماً به بانک کالاهای شما متصل است.
              </p>
            </div>

            {/* لیست ویژگی‌های کلیدی کاتالوگ موبایل */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f5f4fd] text-right">
                <div className="w-10 h-10 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Share2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-black text-base">لینک ثابت و همیشگی</h4>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal">
                    هر کاتالوگ یک نشانی همیشگی دارد. شما قیمت را تغییر می‌دهید؛ مشتری در همان لینک، نرخ لحظه‌ای را می‌بیند.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f5f4fd] text-right">
                <div className="w-10 h-10 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-black text-base">ارتباط مستقیم با یک لمس</h4>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal">
                    دکمه‌های اختصاصی تماس تلفنی، واتساپ و تلگرام روی خود کاتالوگ قرار دارند تا استعلام و ثبت سفارش بدون معطلی انجام شود.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f5f4fd] text-right">
                <div className="w-10 h-10 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-black text-base">دسته‌بندی و جستجوی آنی</h4>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal">
                    مشتری بین دسته‌ها جابه‌جا می‌شود، نام کالا را تایپ می‌کند و مشخصات، موجودی و قیمت واحد را در کسری از ثانیه می‌بیند.
                  </p>
                </div>
              </div>
            </div>

            {/* دکمه‌های اقدام و اعتمادسازی */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8"
                onClick={() => {
                  const el = document.getElementById('cta');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>ساخت کاتالوگ اختصاصی من</span>
                <ArrowLeft className="w-5 h-5 mr-1" />
              </Button>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-black/70 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3525cd]" />
                <span>۱۰۰٪ وب‌پایه • بدون نیاز به نصب اپلیکیشن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPreviewSection;
