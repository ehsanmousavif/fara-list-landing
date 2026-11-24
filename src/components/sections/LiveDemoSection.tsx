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
}

const TORDAK_PRODUCTS: TordakProduct[] = [
  {
    id: "tordak-1",
    name: "آرد برنج تردک",
    category: "غلات و آردها",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/rice-flour.webp",
    stock: "موجود",
    basePrice: 109500,
  },
  {
    id: "tordak-2",
    name: "آرد سوخاری تردک",
    category: "پودر و آرد سوخاری",
    weight: "بسته ۳۰۰ گرمی",
    image: "/assets/images/tordak/bread-crumbs.webp",
    stock: "موجود",
    basePrice: 64950,
  },
  {
    id: "tordak-3",
    name: "پودر فیله مرغ سوخاری",
    category: "چاشنی و سوخاری",
    weight: "پیاز و آویشن ۲۰۰ گرمی",
    image: "/assets/images/tordak/fried-fillet.webp",
    stock: "موجود",
    basePrice: 79950,
  },
  {
    id: "tordak-4",
    name: "آرد ذرت تردک",
    category: "غلات و نشاسته",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/corn-flour.webp",
    stock: "موجود",
    basePrice: 68950,
  },
  {
    id: "tordak-5",
    name: "پودر سوخاری پفکی تمپورا",
    category: "سوخاری رستورانی",
    weight: "بسته ۲۰۰ گرمی",
    image: "/assets/images/tordak/tempura.webp",
    stock: "موجود",
    basePrice: 64950,
  },
  {
    id: "tordak-6",
    name: "آرد نخودچی اعلا تردک",
    category: "حبوبات و غلات",
    weight: "بسته ۵۰۰ گرمی",
    image: "/assets/images/tordak/chickpea-flour.webp",
    stock: "موجود",
    basePrice: 107950,
  },
];

export const LiveDemoSection: React.FC = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const handleToggle = (checked: boolean) => {
    // بازخورد لرزشی (Haptic Vibration) هنگام کلیک
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate([30, 20, 30]);
      } catch {
        // نادیده گرفتن در صورت عدم پشتیبانی مرورگر
      }
    }

    // تغییر وضعیت فوری بدون تعویض جدول یا ایجاد لگ
    setIsUpdated(checked);
  };

  return (
    <section
      id="demo"
      className="py-16 md:py-28 bg-white text-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 space-y-8 sm:space-y-12">
        {/* هدر سکشن */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<Zap className="w-5 h-5 text-[#3525cd]" />}
            title="آپدیت کلی قیمت‌ها فقط با کلیک روی یک دکمه"
            subtitle="با تغییر وضعیت کلید زیر، تمام قیمت‌های کاتالوگ فروشگاه به صورت آنی و خودکار تغییر می‌کنند."
          />
        </AnimatedContent>

        {/* پنل کلید سه بعدی و جدول محصولات */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          delay={0.05}
          className="space-y-4 sm:space-y-6"
        >
          {/* باکس تعاملی کلید راکر در کارد تخت و کامپکت */}
          <div className="bg-[#f5f4fd] p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 border-none shadow-none rounded-2xl sm:rounded-3xl">
            {/* توضیحات و وضعیت کلید با تایتل وسط‌چین */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-3 sm:gap-4 w-full md:w-auto">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isUpdated
                    ? "bg-[#0D0751] text-white scale-105"
                    : "bg-[#eae9fb] text-[#0D0751]"
                }`}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight text-center">
                  آپدیت محصولات با یک کلیک!
                </h3>
                <p className="text-xs sm:text-sm text-black/60 mt-1 text-center">
                  در کمترین زمان و نمایش به صورت لیستی زنده
                </p>
              </div>
            </div>

            {/* کامپوننت کلید سه‌بعدی راکر */}
            <div className="flex items-center justify-center shrink-0">
              <RockerSwitch
                checked={isUpdated}
                onChange={handleToggle}
                leftLabel="تغییر"
                rightLabel="پایه"
              />
            </div>
          </div>

          {/* جدول ثابت محصولات دیتای واقعی تردک در کانتینر سفید */}
          <div className="bg-white p-2 sm:p-4 border-none shadow-none rounded-2xl sm:rounded-3xl">
            <div className="w-full">
              <table className="w-full text-right text-xs sm:text-sm table-fixed sm:table-auto">
                <thead>
                  <tr className="bg-[#eae9fb] text-black/75 text-[11px] sm:text-xs font-semibold">
                    <th className="py-2.5 px-1.5 sm:px-3 rounded-r-xl sm:rounded-r-2xl w-11 sm:w-16 text-center">
                      تصویر
                    </th>
                    <th className="py-2.5 px-2 sm:px-3 text-center sm:text-right">
                      نام کالا
                    </th>
                    <th className="py-2.5 px-3 hidden md:table-cell text-center">
                      دسته‌بندی
                    </th>
                    <th className="py-2.5 px-1.5 sm:px-3 w-16 sm:w-24 text-center">
                      وضعیت
                    </th>
                    <th className="py-2.5 px-2 sm:px-3 rounded-l-xl sm:rounded-l-2xl w-28 sm:w-40 text-center sm:text-right">
                      قیمت (تومان)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {TORDAK_PRODUCTS.map((p, idx) => {
                    const isEven = idx % 2 === 0;
                    const newPrice = Math.round(p.basePrice * 1.15);

                    return (
                      <tr
                        key={p.id}
                        className={`transition-colors duration-200 ${
                          isEven ? "bg-[#f8f7ff]" : "bg-transparent"
                        } hover:bg-[#eae9fb]/50`}
                      >
                        {/* تصویر محصول */}
                        <td className="py-2 px-1.5 sm:px-3 text-center align-middle">
                          <div className="w-8 h-8 sm:w-11 sm:h-11 mx-auto rounded-lg sm:rounded-xl bg-white p-0.5 sm:p-1 flex items-center justify-center overflow-hidden border border-black/5">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        </td>

                        {/* نام و وزن کالا */}
                        <td className="py-2 px-2 sm:px-3 align-middle min-w-0">
                          <div className="flex flex-col min-w-0">
                            <span className="text-[11px] sm:text-sm font-bold text-black truncate leading-tight">
                              {p.name}
                            </span>
                            <span className="text-[10px] sm:text-xs text-black/50 font-normal truncate mt-0.5 leading-tight">
                              {p.weight}
                            </span>
                          </div>
                        </td>

                        {/* دسته‌بندی در نمایش‌های بزرگتر */}
                        <td className="py-2 px-3 text-black/70 text-xs hidden md:table-cell align-middle">
                          <span className="bg-black/5 px-2.5 py-1 rounded-lg">
                            {p.category}
                          </span>
                        </td>

                        {/* وضعیت موجودی */}
                        <td className="py-2 px-1.5 sm:px-3 text-center align-middle whitespace-nowrap">
                          <span className="text-[10px] sm:text-xs px-2 py-0.5 font-bold rounded-lg bg-emerald-100 text-emerald-800 whitespace-nowrap inline-block">
                            {p.stock}
                          </span>
                        </td>

                        {/* قیمت: خط خوردن قیمت قبلی و آمدن قیمت جدید در زیر آن بدون لود جدول جدید */}
                        <td className="py-2 px-2 sm:px-3 align-middle text-left sm:text-right whitespace-nowrap">
                          <div className="flex flex-col items-end sm:items-start whitespace-nowrap leading-tight">
                            {isUpdated ? (
                              <>
                                {/* ۱. قیمت قبلی با خط رویش */}
                                <span className="text-[10px] sm:text-xs text-black/45 line-through decoration-red-500 font-semibold transition-all duration-200">
                                  {p.basePrice.toLocaleString("fa-IR")} تومان
                                </span>
                                {/* ۲. قیمت جدید در زیر آن */}
                                <span className="text-xs sm:text-sm md:text-base font-black text-[#3525cd] transition-all duration-200 mt-0.5">
                                  {newPrice.toLocaleString("fa-IR")}{" "}
                                  <span className="text-[10px] sm:text-xs font-normal text-[#3525cd]/80">تومان</span>
                                </span>
                                {/* ۳. نشانگر افزایش درصدی */}
                                <span className="text-[9px] sm:text-[10px] text-emerald-600 font-bold mt-0.5 inline-flex items-center gap-0.5">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  <span>+۱۵٪ جدید</span>
                                </span>
                              </>
                            ) : (
                              /* حالت پیش‌فرض پایه */
                              <span className="text-xs sm:text-sm md:text-base font-black text-black transition-all duration-200">
                                {p.basePrice.toLocaleString("fa-IR")}{" "}
                                <span className="text-[10px] sm:text-xs font-normal text-black/60">تومان</span>
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
            <div className="p-3 sm:p-4 bg-[#3525cd] text-white mt-2.5 sm:mt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs gap-2 rounded-xl sm:rounded-2xl shadow-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-white truncate">
                  کاتالوگ آنلاین صنایع غذایی تردک (faralist.com/tordak)
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-white/80">سرعت آپدیت:</span>
                <span className="text-white font-bold bg-white/20 px-2 py-0.5 rounded-lg">
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
