import React, { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Button, Badge } from '@/components/ui';
import { INITIAL_DEMO_PRODUCTS } from '@/data/landingData';
import { ProductMock } from '@/types/landing';
import { HeaderSections } from '@/components/common/header-sections';
import {
  TrendingUp,
  Percent,
  RotateCcw,
  QrCode,
  Copy,
  Check,
  Zap,
  Clock,
  Sparkles,
} from 'lucide-react';

export const LiveDemoSection: React.FC = () => {
  const [products, setProducts] = useState<ProductMock[]>(INITIAL_DEMO_PRODUCTS);
  const [customPercent, setCustomPercent] = useState<string>('8');
  const [lastAction, setLastAction] = useState<string>('قیمت‌های پایه فعال است');
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const applyPercentage = (percent: number, label: string) => {
    setIsUpdating(true);
    const factor = 1 + percent / 100;

    setTimeout(() => {
      setProducts((prev) =>
        prev.map((item) => ({
          ...item,
          currentPrice: Math.round((item.currentPrice * factor) / 1000) * 1000,
          lastUpdated: 'همین لحظه (آنلاین)',
        }))
      );
      setLastAction(`تغییر ${percent > 0 ? `+${percent}%` : `${percent}%`} (${label})`);
      setIsUpdating(false);
    }, 120);
  };

  const resetPrices = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setProducts(INITIAL_DEMO_PRODUCTS);
      setLastAction('قیمت‌ها به حالت اولیه بازنشانی شدند');
      setIsUpdating(false);
    }, 100);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.('https://faralist.ir/demo-store');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر سکشن با IconStack */}
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
            icon={<Sparkles className="w-5 h-5" />}
            title="سرعت فرالیست را همین الان امتحان کنید!"
            subtitle="روی یکی از دکمه‌های زیر کلیک کنید تا ببینید قیمت صدها محصول چطور در کسری از ثانیه به‌روزرسانی و در لینک مشتریان اعمال می‌شود."
          />
        </AnimatedContent>

        {/* پنل ابزار و جدول محصولات */}
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
          {/* نوار ابزار تغییر قیمت و اعمال سریع */}
          <div className="bg-[#f5f4fd] rounded-2xl p-5 sm:p-6 space-y-4 border-none shadow-none">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3525cd] text-white flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">ابزار تغییر سریع نرخ</h3>
                  <p className="text-xs text-black/60 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#3525cd]" />
                    <span>وضعیت: {lastAction}</span>
                  </p>
                </div>
              </div>

              {/* اکشن‌های اشتراک‌گذاری */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyLink}
                  className="text-xs flex-1 sm:flex-initial"
                >
                  {copiedLink ? <Check className="w-4 h-4 ml-1" /> : <Copy className="w-4 h-4 ml-1" />}
                  <span>{copiedLink ? 'کپی شد!' : 'کپی لینک کاتالوگ'}</span>
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowQrModal(true)}
                  className="text-xs"
                >
                  <QrCode className="w-4 h-4 ml-1" />
                  <span>کیوآرکد</span>
                </Button>
              </div>
            </div>

            {/* کلیدهای تغییر درصدی آماده */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => applyPercentage(10, 'نوسان بازار')}
              >
                <TrendingUp className="w-4 h-4 ml-1" />
                <span>+۱۰٪ افزایش کلی</span>
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => applyPercentage(5, 'تورم هفتگی')}
              >
                <TrendingUp className="w-4 h-4 ml-1" />
                <span>+۵٪ افزایش نرخ</span>
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => applyPercentage(-5, 'تخفیف ویژه')}
              >
                <Percent className="w-4 h-4 ml-1" />
                <span>-۵٪ تخفیف حراج</span>
              </Button>

              {/* ورودی درصد دلخواه */}
              <div className="flex items-center bg-[#eae9fb] rounded-xl px-3 py-1 gap-2">
                <span className="text-xs text-[#3525cd] font-medium">درصد دلخواه:</span>
                <input
                  type="number"
                  value={customPercent}
                  onChange={(e) => setCustomPercent(e.target.value)}
                  className="w-14 bg-transparent text-sm text-center font-bold text-black outline-none"
                  placeholder="%"
                />
                <button
                  type="button"
                  onClick={() => applyPercentage(Number(customPercent) || 0, 'درصد سفارشی')}
                  className="text-xs font-bold bg-[#3525cd] text-white hover:bg-[#2d1fb5] px-2.5 py-1 rounded-lg transition-colors cursor-pointer border-none"
                >
                  اعمال
                </button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={resetPrices}
                className="text-black/60 hover:text-black mr-auto"
              >
                <RotateCcw className="w-3.5 h-3.5 ml-1" />
                <span>بازنشانی</span>
              </Button>
            </div>
          </div>

          {/* جدول محصولات تخت */}
          <div className="bg-[#f5f4fd] rounded-2xl overflow-hidden p-2 border-none shadow-none">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-[#eae9fb] text-black/75 text-xs font-semibold">
                    <th className="py-3 px-4 rounded-r-xl">نام محصول</th>
                    <th className="py-3 px-4">دسته‌بندی</th>
                    <th className="py-3 px-4">وضعیت انبار</th>
                    <th className="py-3 px-4">قیمت جاری</th>
                    <th className="py-3 px-4 rounded-l-xl">آخرین به‌روزرسانی</th>
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
                          isEven ? 'bg-white/60' : 'bg-transparent'
                        } hover:bg-[#eae9fb]/50`}
                      >
                        <td className="py-4 px-4 font-bold text-black flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#3525cd]" />
                          <span>{p.name}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-xs bg-[#eae9fb] text-[#3525cd] px-2.5 py-1 rounded-lg font-medium">
                            {p.category}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-xs px-2.5 py-1 rounded-lg font-medium bg-[#eae9fb] text-[#3525cd]">
                            {p.stock}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-col">
                            <span
                              className={`text-base font-black transition-all text-black ${
                                isUpdating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                              }`}
                            >
                              {p.currentPrice.toLocaleString('fa-IR')} تومان
                            </span>
                            {diff !== 0 && (
                              <span className="text-[11px] text-[#3525cd] font-semibold mt-0.5">
                                {diff > 0 ? '+' : ''}
                                {diff.toLocaleString('fa-IR')} نسبت به پایه
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-xs text-black/60">
                          <span className="inline-flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#3525cd]" />
                            {p.lastUpdated}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* فوتر اطلاعات لایو دمو */}
            <div className="p-4 bg-white/80 rounded-xl mt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-black/70 gap-2">
              <span>💡 این جدول مستقیماً شبیه‌ساز پنل مدیریت شما در فرالیست است.</span>
              <span className="text-black font-semibold">سرعت پردازش و پخش تغییرات: ~ ۰.۰۳ ثانیه</span>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* مدال کیوآرکد نمایشی */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 border-none shadow-none text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-black">کیوآرکد کاتالوگ شما</h3>
            <p className="text-xs text-black/70">
              این کد را پرینت کنید و روی پیشخوان فروشگاه یا کاتالوگ قرار دهید تا مشتریان فوراً قیمت‌های لحظه‌ای را اسکن کنند.
            </p>

            <div className="bg-[#f5f4fd] p-6 rounded-2xl flex items-center justify-center mx-auto w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                <rect width="100" height="100" fill="#f5f4fd" />
                <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" />
                <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" />
                <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" />
                <rect x="45" y="10" width="8" height="25" />
                <rect x="10" y="45" width="25" height="8" />
                <rect x="45" y="45" width="10" height="10" />
                <rect x="65" y="55" width="15" height="8" />
                <rect x="55" y="70" width="35" height="10" />
                <rect x="75" y="45" width="15" height="8" />
              </svg>
            </div>

            <div className="bg-[#eae9fb] p-2.5 rounded-xl text-xs font-mono text-[#3525cd] select-all">
              https://faralist.ir/store/tehran-tech
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowQrModal(false)}
              className="w-full"
            >
              بستن
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
