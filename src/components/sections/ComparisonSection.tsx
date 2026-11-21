import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { XCircle, CheckCircle2, Store } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const storeComparison = [
    {
      label: 'هدف اصلی پلتفرم',
      traditional: 'سیستم پیچیده سبد خرید، اتصال به درگاه بانکی و حسابداری سنگین',
      faralist: 'نمایش حرفه‌ای، سریع و همیشه‌بروز محصولات و قیمت‌ها در یک لینک ساده',
    },
    {
      label: 'زمان و فرآیند راه‌اندازی',
      traditional: 'هفته‌ها انتظار برای طراحی سایت، دریافت نماد اعتماد و مجوزهای بانکی',
      faralist: 'راه‌اندازی در کمتر از ۳ دقیقه بدون نیاز به درگاه یا مدارک پیچیده',
    },
    {
      label: 'نحوه سفارش مشتری',
      traditional: 'ثبت‌نام اجباری، فرم‌های طولانی آدرس و درگاه پرداخت که مشتری را منصرف می‌کند',
      faralist: 'مشاهده سریع کاتالوگ و تماس یا پیام مستقیم در واتساپ و تلگرام با یک کلیک',
    },
    {
      label: 'کاربرد در نوسان بازار',
      traditional: 'تغییر قیمت دستی و کند در پنل‌های پیچیده فروشگاهی',
      faralist: 'به‌روزرسانی درصدی و آنی صدها کالا هم‌زمان با تغییرات بازار',
    },
    {
      label: 'فروش همکار و عمده',
      traditional: 'پیچیدگی در تفکیک دسترسی همکار از قیمت‌های عادی مصرف‌کننده',
      faralist: 'امکان ساخت کاتالوگ‌های اختصاصی و جداگانه برای عمده‌فروشان و همکاران',
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* هدر بخش منطبق با بخش ۷ سند محتوا */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<Store className="w-5 h-5" />}
            title="فرالیست جای فروشگاه اینترنتی رو نمی‌گیره، جای فایل قیمت رو می‌گیره"
            subtitle="اگه دنبال یه سیستم کامل فروشگاه‌سازی با سبد خرید و درگاه پرداخت هستید، فرالیست اون نیست. کار فرالیست ساده‌تر و مشخص‌تره: نمایش حرفه‌ای، سریع و همیشه‌بروز محصولات و قیمت‌هات در یک لینک قابل اشتراک. همون قدمی که همین الان با فایل و عکس و پیام انجامش می‌دی، فقط بهتر و بدون سردرگمی."
          />
        </AnimatedContent>

        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          stagger={0.06}
          staggerFrom="start"
          ease="power2.out"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-right"
        >
          {/* ستون فروشگاه‌سازهای سنتی و پیچیده */}
          <Card
            variant="surface"
            className="bg-[#f4f4f7] p-8 space-y-6 border-none shadow-none"
          >
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-black/10 text-black/70 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-black">فروشگاه‌سازهای پیچیده</h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/10 text-black/70">
                پیچیده و کند
              </span>
            </div>

            <div className="space-y-4">
              {storeComparison.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/70 space-y-1">
                  <span className="text-xs font-semibold text-black/50 block">{item.label}</span>
                  <div className="flex items-start gap-2 pt-1 text-sm text-black/80">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ستون فرالیست */}
          <Card
            variant="surface"
            className="bg-[#eae9fb] p-8 space-y-6 border-none shadow-none"
          >
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#3525cd] text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">فرالیست (لینک کاتالوگ زنده)</h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3525cd] text-white">
                سبک، سریع و مستقیم
              </span>
            </div>

            <div className="space-y-4">
              {storeComparison.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/90 space-y-1">
                  <span className="text-xs font-semibold text-[#3525cd] block">{item.label}</span>
                  <div className="flex items-start gap-2 pt-1 text-sm text-black font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                    <span>{item.faralist}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};
