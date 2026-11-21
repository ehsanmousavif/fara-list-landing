"use client";

import React, { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { RockerSwitch } from "@/components/ui/RockerSwitch";
import { INITIAL_DEMO_PRODUCTS } from "@/data/landingData";
import { ProductMock } from "@/types/landing";
import { HeaderSections } from "@/components/common/header-sections";
import { Zap, Clock, Sparkles } from "lucide-react";

export const LiveDemoSection: React.FC = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductMock[]>(
    INITIAL_DEMO_PRODUCTS,
  );
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsUpdating(true);
    setIsUpdated(checked);

    setTimeout(() => {
      if (checked) {
        setProducts(
          INITIAL_DEMO_PRODUCTS.map((p) => ({
            ...p,
            currentPrice: Math.round(p.basePrice * 1.15),
            lastUpdated: "هم‌اکنون آپدیت شد (آنلاین)",
          })),
        );
      } else {
        setProducts(INITIAL_DEMO_PRODUCTS);
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
                  leftLabel="افزایش ۱۵٪"
                  rightLabel="قیمت پایه"
                />
              </div>
            </div>
          </div>

          {/* جدول محصولات تخت در کانتینر سفید */}
          <div className="bg-white overflow-hidden p-3 border-none shadow-none rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-[#eae9fb] text-black/75 text-xs font-semibold">
                    <th className="py-3.5 px-4 rounded-r-2xl">نام محصول</th>
                    <th className="py-3.5 px-4">وضعیت انبار</th>
                    <th className="py-3.5 px-4 rounded-l-2xl">قیمت جاری</th>
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
                        <td className="py-4 px-4 font-bold text-black flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0D0751]" />
                          <span>{p.name}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`text-xs px-2.5 py-1 font-medium rounded-xl ${
                              p.stock === "موجود"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {p.stock}
                          </span>
                        </td>
                        <td className="py-4 px-4">
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
                              } ${diff > 0 ? "text-[#0D0751]" : "text-black"}`}
                            >
                              {p.currentPrice.toLocaleString("fa-IR")} تومان
                            </span>
                            {diff > 0 && (
                              <span className="text-[11px] text-[#0D0751] font-semibold mt-0.5 inline-flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                <span>
                                  +۱۵٪ ({diff.toLocaleString("fa-IR")} تومان
                                  تغییر آنی)
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

            {/* فوتر اطلاعات لایو دمو */}
            <div className="p-4 bg-[#f5f4fd] mt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-black/70 gap-2 rounded-2xl">
              <span>
                💡 این جدول مستقیماً شبیه‌ساز پنل مدیریت شما در فرالیست است.
              </span>
              <span className="text-black font-semibold">
                سرعت پردازش و پخش تغییرات: ~ ۰.۰۳ ثانیه
              </span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default LiveDemoSection;
