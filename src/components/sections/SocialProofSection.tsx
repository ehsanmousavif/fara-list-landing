import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
import { ShieldCheck, Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'دیگه هر هفته لیست قیمت جدید نمی‌فرستم، فقط لینکو دادم دست مشتری‌هام و خیالم راحته که قیمت‌ها همیشه‌بروزه.',
      author: 'عمده‌فروشی پوشاک و منسوجات',
      role: 'بنکدار بازار بزرگ',
      tag: 'عمده‌فروش',
    },
    {
      quote:
        'مشتری‌ها وقتی وارد لینک می‌شن راحت بین دسته‌ها می‌گردن و با یک کلیک روی واتساپ سفارش می‌دن؛ فروش خیلی سریع‌تر شده.',
      author: 'پخش لوازم جانبی دیجیتال',
      role: 'فروشگاه و توزیع آنلاین',
      tag: 'خرده‌فروشی',
    },
    {
      quote:
        'برای همکارام کاتالوگ جدا ساختم و برای مشتری‌های عادی کاتالوگ جدا، بدون اینکه دو بار مشخصات جنس‌ها رو وارد کنم.',
      author: 'تولیدکننده قطعات و یراق‌آلات',
      role: 'کارگاه تولیدی صنعتی',
      tag: 'تولیدکننده',
    },
  ];

  const highlights = [
    { value: '۳ دقیقه', label: 'میانگین ساخت اولین کاتالوگ' },
    { value: '۱ لینک', label: 'یک نشانی ثابت برای همیشه' },
    { value: '۰ نصب', label: 'بدون نیاز به نصب اپلیکیشن' },
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#0d0751] text-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* سربرگ بخش اعتماد و اثبات اجتماعی با استایل معکوس */}
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
            icon={<ShieldCheck className="w-5 h-5" />}
            title="ساخته شده برای کسب‌وکارهایی که خسته‌ی فایل و پیام پراکنده‌ان"
            subtitle="فرالیست برای حل یک درد واقعی روزمره ساخته شده: صرفه‌جویی در ساعت‌ها وقت برای ارسال قیمت و کاتالوگ"
            inverted
          />
        </AnimatedContent>

        {/* سه شاخص کلیدی اعتماد در کارت‌های شیشه‌ای */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.06}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border-none shadow-none flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-white">
                {h.value}
              </span>
              <span className="text-sm font-semibold text-white/80">
                {h.label}
              </span>
            </div>
          ))}
        </AnimatedContent>

        {/* نقل‌قول‌های صاحبان کسب‌وکار */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right"
        >
          {testimonials.map((t, index) => (
            <Card
              key={index}
              variant="surface"
              className="bg-white/10 backdrop-blur-md p-7 space-y-5 border-none shadow-none flex flex-col justify-between rounded-3xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#0d0751] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    {t.tag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  «{t.quote}»
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-white" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-white/70">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};

export default SocialProofSection;
