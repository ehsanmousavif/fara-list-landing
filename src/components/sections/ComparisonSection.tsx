import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Badge } from '@/components/ui';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      label: 'سرعت به‌روزرسانی قیمت‌ها',
      traditional: 'ساعت‌ها کار با اکسل، ویرایش دستی و بی‌اطلاعی خریداران',
      faralist: 'تغییر درصدی و آنی صدها کالا در کمتر از ۳ ثانیه',
    },
    {
      label: 'شیوه اطلاع‌رسانی به خریداران',
      traditional: 'ارسال مجدد فایل‌های سنگین PDF در واتساپ و تلگرام',
      faralist: 'لینک دائمی و کد QR؛ مشتری همیشه جدیدترین نرخ را می‌بیند',
    },
    {
      label: 'تماس‌های تکراری استعلام قیمت',
      traditional: 'ده‌ها تماس در روز: «این جنس هنوز همون قیمته؟ موجود دارید؟»',
      faralist: 'مشاهده لحظه‌ای موجودی و نرخ واقعی بدون نیاز به تماس',
    },
    {
      label: 'هزینه چاپ و نگهداری کاتالوگ',
      traditional: 'میلیون‌ها تومان هزینه ماهانه چاپ کاتالوگ‌های بلااستفاده',
      faralist: 'کاتالوگ دیجیتال ۱۰۰٪ پایدار با هزینه ماهانه بسیار ناچیز',
    },
    {
      label: 'حریم خصوصی قیمت همکار',
      traditional: 'خطر لو رفتن قیمت خرید یا عمده در بین مشتریان خرد',
      faralist: 'تفکیک دسترسی همکار با رمز عبور اختصاصی',
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2">
            <Badge variant="primary">مقایسه کارایی</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            فرالیست در برابر روش سنتی
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            تفاوت اصلی فرالیست در سرعت، سهولت و حذف خطای انسانی است.
          </p>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* ستون روش سنتی */}
          <Card
            variant="surface"
            className="bg-[#030430]/50 p-8 space-y-6"
          >
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 text-white/70 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">روش‌های قدیمی و دستی</h3>
              </div>
              <Badge variant="surface" className="text-xs">
                پرهزینه و کند
              </Badge>
            </div>

            <div className="space-y-4">
              {comparisonItems.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] space-y-1">
                  <span className="text-xs font-semibold text-white/50 block">{item.label}</span>
                  <div className="flex items-start gap-2 pt-1 text-sm text-white/80">
                    <XCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                    <span>{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ستون فرالیست */}
          <Card
            variant="surface"
            className="bg-[#030430] p-8 space-y-6"
          >
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white text-[#030430] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#030430]" />
                </div>
                <h3 className="text-xl font-bold text-white">پلتفرم هوشمند فرالیست</h3>
              </div>
              <Badge variant="inverted" className="text-xs">
                فوق‌سریع و پایدار
              </Badge>
            </div>

            <div className="space-y-4">
              {comparisonItems.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.06] space-y-1">
                  <span className="text-xs font-semibold text-white/70 block">{item.label}</span>
                  <div className="flex items-start gap-2 pt-1 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
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
