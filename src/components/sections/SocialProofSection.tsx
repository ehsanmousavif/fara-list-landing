import React from "react";
import { HeaderSections } from "@/components/common/header-sections";
import { Marquee } from "@/components/ui/marquee";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  tag: string;
  rating: number;
}

export const SocialProofSection: React.FC = () => {
  const testimonialsRow1: Testimonial[] = [
    {
      quote:
        "دیگه هر هفته لیست قیمت جدید نمی‌فرستم، فقط لینکو دادم دست مشتری‌هام و خیالم راحته که قیمت‌ها همیشه‌بروزه.",
      author: "عمده‌فروشی پوشاک و منسوجات",
      role: "بنکدار بازار بزرگ تهران",
      tag: "عمده‌فروش",
      rating: 5,
    },
    {
      quote:
        "مشتری‌ها وقتی وارد لینک می‌شن راحت بین دسته‌ها می‌گردن و با یک کلیک روی واتساپ سفارش می‌دن؛ فروش خیلی سریع‌تر شده.",
      author: "پخش لوازم جانبی دیجیتال",
      role: "فروشگاه و توزیع آنلاین",
      tag: "خرده‌فروشی",
      rating: 5,
    },
    {
      quote:
        "برای همکارام کاتالوگ جدا ساختم و برای مشتری‌های عادی کاتالوگ جدا، بدون اینکه دو بار مشخصات جنس‌ها رو وارد کنم.",
      author: "تولیدکننده قطعات و یراق‌آلات",
      role: "کارگاه تولیدی صنعتی",
      tag: "تولیدکننده",
      rating: 5,
    },
  ];

  const testimonialsRow2: Testimonial[] = [
    {
      quote:
        "نوسان قیمت‌ها هر روز دیوونه‌مون می‌کرد؛ الان تو ۳۰ ثانیه از توی ماشین با گوشی همه قیمت‌ها رو یکجا درصدی آپدیت می‌کنم.",
      author: "بازرگانی مواد غذایی و پروتئین",
      role: "پخش عمده استانی",
      tag: "پخش عمده",
      rating: 5,
    },
    {
      quote:
        "بیش از ۷۰۰ قلم کالا داریم. قبلاً پی‌دی‌اف ما ۵۰ مگابایت بود و هیچ‌کس دانلود نمی‌کرد، الان با یک لمس سبک باز میشه.",
      author: "گالری تخصصی آرایشی ماهان",
      role: "نمایندگی رسمی برند",
      tag: "آرایشی و بهداشتی",
      rating: 5,
    },
    {
      quote:
        "مشتریا بدون نیاز به نصب هیچ اپلیکیشنی روی آیفون و اندروید کاتالوگ رو باز می‌کنن و فاکتور نهایی رو توی واتساپ می‌فرستن.",
      author: "تولیدی کفش و چرم تبریز",
      role: "کارگاه و فروشگاه مرکزی",
      tag: "تولیدی",
      rating: 5,
    },
  ];

  const highlights = [
    { value: "۳ دقیقه", label: "میانگین ساخت اولین کاتالوگ" },
    { value: "۱ لینک", label: "یک نشانی ثابت برای همیشه" },
    { value: "۰ نصب", label: "بدون نیاز به نصب اپلیکیشن" },
  ];

  const renderCard = (t: Testimonial, idx: number) => (
    <div
      key={idx}
      dir="rtl"
      className="w-[280px] sm:w-[350px] shrink-0 bg-white/10 hover:bg-white/15 backdrop-blur-md p-5 sm:p-6 rounded-3xl border-none shadow-none flex flex-col justify-between text-right transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {t.tag}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
          «{t.quote}»
        </p>
      </div>

      <div className="pt-3 mt-3 border-t border-white/10 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs shrink-0">
          {t.author.slice(0, 1)}
        </div>
        <div className="overflow-hidden text-right">
          <h4 className="font-bold text-white text-xs sm:text-sm truncate">
            {t.author}
          </h4>
          <p className="text-[11px] text-white/70 truncate">{t.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="trust"
      className="py-20 md:py-28 bg-[#191458] text-white overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-12 mb-10">
        {/* سربرگ نظرات مشتریان */}
        <div className="text-center">
          <HeaderSections
            icon={<Quote className="w-5 h-5" />}
            title="نظرات مشتریان"
            subtitle="تجربه واقعی کسب‌وکارهایی که فرآیند فروش و اشتراک‌گذاری قیمت‌هایشان را با فرالیست متحول کردند"
            inverted
          />
        </div>

        {/* سه شاخص کلیدی اعتماد */}
      </div>

      {/* نوارهای مارکی دو جهته با فاصله مناسب و محوشدگی نرم لبه‌ها */}
      <div className="relative w-full overflow-hidden space-y-6 sm:space-y-8">
        {/* گرادیان محوکننده سمت راست */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#191458] to-transparent z-10"
        />
        {/* گرادیان محوکننده سمت چپ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#191458] to-transparent z-10"
        />

        {/* ردیف اول مارکی: حرکت به سمت راست */}
        <Marquee
          reverse={true}
          duration="34s"
          gap="2rem"
          pauseOnHover={true}
          repeat={4}
        >
          {testimonialsRow1.map((t, idx) => renderCard(t, idx))}
        </Marquee>

        {/* ردیف دوم مارکی: حرکت به سمت چپ */}
        <Marquee
          reverse={false}
          duration="36s"
          gap="2rem"
          pauseOnHover={true}
          repeat={4}
        >
          {testimonialsRow2.map((t, idx) => renderCard(t, idx))}
        </Marquee>
      </div>
    </section>
  );
};

export default SocialProofSection;
