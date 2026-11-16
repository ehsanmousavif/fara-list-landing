import React, { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui";
import { RockerSwitch } from "@/components/ui/RockerSwitch";
import { INITIAL_DEMO_PRODUCTS } from "@/data/landingData";
import { ProductMock } from "@/types/landing";
import { HeaderSections } from "@/components/common/header-sections";
import { Zap, Clock, Copy, Check } from "lucide-react";

export const LiveDemoSection: React.FC = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductMock[]>(
    INITIAL_DEMO_PRODUCTS,
  );
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsUpdating(true);
    setIsUpdated(checked);
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر سکشن با تایتل درخواستی کاربر */}
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
            icon={<Zap className="w-5 h-5 text-[#3525cd]" />}
            title="اپدیت کلی قیمتا فقط با کلیک روی یک دکمه"
            subtitle="با تغییر وضعیت کلید زیر، تمام قیمت‌های کاتالوگ فروشگاه به صورت آنی و خودکار تغییر می‌کنند."
          />
        </AnimatedContent>

        {/* پنل کلید سه بعدی و جدول محصولات */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          delay={0.1}
          className="space-y-6"
        >
          {/* باکس تعاملی کلید سه‌بعدی dry-rabbit-69 */}
          <div className="bg-[#f5f4fd] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-none shadow-none rounded-2xl">
            {/* توضیحات و وضعیت کلید */}
            <div className="flex items-center gap-4 text-right">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isUpdated
                    ? "bg-[#3525cd] text-white scale-105"
                    : "bg-[#eae9fb] text-[#3525cd]"
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
                  در کمترین زمان و نمایش به صروت لیستی
                </p>
              </div>
            </div>

            {/* کامپوننت کلید سه‌بعدی راکر و دکمه‌های کمکی */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="hidden sm:flex flex-col items-center gap-4">
                <RockerSwitch
                  checked={isUpdated}
                  onChange={handleToggle}
                  leftLabel="اعمال"
                  rightLabel="چپه"
                />
              </div>
            </div>
          </div>

          {/* جدول محصولات تخت */}
          <div className="bg-[#f5f4fd] overflow-hidden p-2 border-none shadow-none rounded-">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-[#eae9fb] text-black/75 text-xs font-semibold">
                    <th className="py-3 px-4 rounded-r-xl">نام محصول</th>
                    <th className="py-3 px-4">وضعیت انبار</th>
                    <th className="py-3 px-4">قیمت جاری</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {products.map((p, idx) => {
                    const diff = p.currentPrice - p.basePrice;
                    const isEven = idx % 2 === 0;

                    return (
                      <tr
                        key={p.id}
                        className={`transition-colors duration-200 rounded- ${
                          isEven ? "bg-white/60" : "bg-transparent"
                        } hover:bg-[#eae9fb]/50`}
                      >
                        <td className="py-4 px-4 font-bold text-black flex items-center gap-2 rounded-">
                          <span className="w-2 h-2 rounded-full bg-[#3525cd]" />
                          <span>{p.name}</span>
                        </td>
                        <td className="py-4 px-4 rounded-">
                          <span className="text-xs px-2.5 py-1 font-medium bg-[#eae9fb] text-[#3525cd] rounded-">
                            {p.stock}
                          </span>
                        </td>
                        <td className="py-4 px-4 rounded-">
                          <div className="flex flex-col">
                            <span
                              className={`text-base font-black transition-all text-black ${
                                isUpdating
                                  ? "opacity-50 scale-95"
                                  : "opacity-100 scale-100"
                              } ${diff > 0 ? "text-[#3525cd]" : ""}`}
                            >
                              {p.currentPrice.toLocaleString("fa-IR")} تومان
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* فوتر اطلاعات لایو دمو */}
            <div className="p-4 bg-white/80 mt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-black/70 gap-2 rounded-">
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
