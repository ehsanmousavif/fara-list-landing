"use client";

import React, { useState } from "react";
import AnimatedContent from "@/components/effects/AnimatedContent";
import { RockerSwitch } from "@/components/ui/RockerSwitch";
import { HeaderSections } from "@/components/common/header-sections";
import { Zap, Clock, Sparkles } from "lucide-react";

interface TordakProduct {
  id: string;
  name: string;
  category: string;
  weight: string;
  image: string;
  stock: string;
  basePrice: number;
  currentPrice: number;
}

const TORDAK_PRODUCTS: TordakProduct[] = [
  {
    id: "tordak-1",
    name: "آرد برنج تردک",
    category: "غلات و آردها",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/rice-flour.webp",
    stock: "موجود در انبار",
    basePrice: 109500,
    currentPrice: 109500,
  },
  {
    id: "tordak-2",
    name: "آرد سوخاری تردک",
    category: "پودر و آرد سوخاری",
    weight: "بسته ۳۰۰ گرمی",
    image: "/assets/images/tordak/bread-crumbs.webp",
    stock: "موجود در انبار",
    basePrice: 64950,
    currentPrice: 64950,
  },
  {
    id: "tordak-3",
    name: "پودر آماده فیله مرغ سوخاری",
    category: "چاشنی و سوخاری",
    weight: "پیاز و آویشن ۲۰۰ گرمی",
    image: "/assets/images/tordak/fried-fillet.webp",
    stock: "موجود در انبار",
    basePrice: 79950,
    currentPrice: 79950,
  },
  {
    id: "tordak-4",
    name: "آرد ذرت تردک",
    category: "غلات و نشاسته",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/corn-flour.webp",
    stock: "موجود در انبار",
    basePrice: 68950,
    currentPrice: 68950,
  },
  {
    id: "tordak-5",
    name: "پودر سوخاری پفکی تمپورا",
    category: "سوخاری رستورانی",
    weight: "بسته ۲۰۰ گرمی",
    image: "/assets/images/tordak/tempura.webp",
    stock: "موجود در انبار",
    basePrice: 64950,
    currentPrice: 64950,
  },
  {
    id: "tordak-6",
    name: "آرد نخودچی اعلا تردک",
    category: "حبوبات و غلات",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/chickpea-flour.webp",
    stock: "موجود در انبار",
    basePrice: 107950,
    currentPrice: 107950,
  },
];

export const LiveDemoSection: React.FC = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [products, setProducts] = useState<TordakProduct[]>(TORDAK_PRODUCTS);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = (checked: boolean) => {
    // بازخورد لرزشی (Haptic Vibration) هنگام کلیک
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([30, 20, 30]);
      } catch {
        // نادیده گرفتن در صورت عدم پشتیبانی مرورگر
      }
    }

    setIsUpdating(true);
    setIsUpdated(checked);

    setTimeout(() => {
      if (checked) {
        setProducts(
          TORDAK_PRODUCTS.map((p) => ({
            ...p,
            currentPrice: Math.round(p.basePrice * 1.15),
          }))
        );
      } else {
        setProducts(TORDAK_PRODUCTS);
      }
      setIsUpdating(false);
    }, 180);
  };

  return (
    <section
      id="demo"
      className="py-20 md:py-28 bg-[#0D0751] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر سکشن با استایل اینورت‌شده روی پس‌زمینه بنفش فرالیست */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<Zap className="w-5 h-5 text-[#0D0751]" />}
            title="آپدیت کلی قیمت‌ها فقط با کلیک روی یک دکمه"
            subtitle="با تغییر وضعیت کلید زیر، تمام قیمت‌های کاتالوگ فروشگاه به صورت آنی و خودکار تغییر می‌کنند."
            inverted
          />
        </AnimatedContent>

        {/* پنل کلید سه بعدی و جدول محصولات */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          delay={0.05}
          className="space-y-6"
        >
          {/* باکس تعاملی کلید سه‌بعدی راکر در کارد سفید تخت */}
          <div className="bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-none shadow-none rounded-3xl">
            {/* توضیحات و وضعیت کلید */}
            <div className="flex items-center gap-4 text-right">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isUpdated
                    ? "bg-[#0D0751] text-white scale-105"
                    : "bg-[#eae9fb] text-[#0D0751]"
                }`}
              >
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-black">
                    آپدیت محصولات با یک کلیک!
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-black/60 mt-1">
                  در کمترین زمان و نمایش به صورت لیستی زنده
                </p>
              </div>
            </div>

            {/* کامپوننت کلید سه‌بعدی راکر */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="flex flex-col items-center gap-4">
                <RockerSwitch
                  checked={isUpdated}
                  onChange={handleToggle}
                  leftLabel="تغییر"
                  rightLabel="پایه"
                />
              </div>
            </div>
          </div>

          {/* جدول محصولات دیتای واقعی تردک در کانتینر سفید */}
          <div className="bg-white overflow-hidden p-3 border-none shadow-none rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-[#eae9fb] text-black/75 text-xs font-semibold">
                    <th className="py-3.5 px-4 rounded-r-2xl w-16 text-center">تصویر</th>
                    <th className="py-3.5 px-4">نام کالا و مشخصات</th>
                    <th className="py-3.5 px-4 hidden sm:table-cell">دسته‌بندی</th>
                    <th className="py-3.5 px-4">وضعیت موجودی</th>
                    <th className="py-3.5 px-4 rounded-l-2xl">قیمت مصرف‌کننده</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {products.map((p, idx) => {
                    const diff = p.currentPrice - p.basePrice;
                    const isEven = idx % 2 === 0;

                    return (
                      <tr
                        key={p.id}
                        className={`transition-colors duration-200 ${
                          isEven ? "bg-[#f8f7ff]" : "bg-transparent"
                        } hover:bg-[#eae9fb]/50`}
                      >
                        {/* تصویر محصول */}
                        <td className="py-3 px-4 text-center">
                          <div className="w-12 h-12 mx-auto rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden border border-black/5">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        </td>

                        {/* نام و وزن */}
                        <td className="py-3.5 px-4 font-bold text-black">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-black">{p.name}</span>
                            <span className="text-xs text-black/50 font-normal mt-0.5">{p.weight}</span>
                          </div>
                        </td>

                        {/* دسته‌بندی */}
                        <td className="py-3.5 px-4 text-black/70 text-xs hidden sm:table-cell">
                          <span className="bg-black/5 px-2.5 py-1 rounded-lg">
                            {p.category}
                          </span>
                        </td>

                        {/* وضعیت موجودی */}
                        <td className="py-3.5 px-4">
                          <span className="text-xs px-2.5 py-1 font-medium rounded-xl bg-emerald-100 text-emerald-800">
                            {p.stock}
                          </span>
                        </td>

                        {/* قیمت و تغییرات */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            {diff > 0 && (
                              <span className="text-xs text-black/40 line-through">
                                {p.basePrice.toLocaleString("fa-IR")} تومان
                              </span>
                            )}
                            <span
                              className={`text-base font-black transition-all ${
                                isUpdating
                                  ? "opacity-50 scale-95"
                                  : "opacity-100 scale-100"
                              } ${diff > 0 ? "text-[#3525cd]" : "text-black"}`}
                            >
                              {p.currentPrice.toLocaleString("fa-IR")} تومان
                            </span>
                            {diff > 0 && (
                              <span className="text-[11px] text-[#3525cd] font-semibold mt-0.5 inline-flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                <span>
                                  +۱۵٪ ({diff.toLocaleString("fa-IR")} تومان تغییر آنی)
                                </span>
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* فوتر اطلاعات لایو دمو با رنگ برند bg-primary (#3525cd) */}
            <div className="p-4 bg-[#3525cd] text-white mt-3 flex flex-col sm:flex-row items-center justify-between text-xs gap-3 rounded-2xl shadow-none">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">
                  کاتالوگ آنلاین صنایع غذایی تردک (faralist.com/tordak)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/80">سرعت پردازش و پخش تغییرات:</span>
                <span className="text-white font-bold bg-white/20 px-2.5 py-1 rounded-xl">
                  ~ ۰.۰۳ ثانیه
                </span>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default LiveDemoSection;
