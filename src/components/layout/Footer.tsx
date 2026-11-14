import React from 'react';
import { FaralistLogo } from '@/components/logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/60 py-16 transition-colors border-none">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ستون برند */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl">
                <FaralistLogo size={32} animate={false} />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                فرالیست | Fara List
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              فرالیست سریع‌ترین پلتفرم نمایش و به‌روزرسانی لیست قیمت کالاها برای بنکداران، عمده‌فروشان و فروشگاه‌هاست. بدون نیاز به فایل‌های سنگین PDF یا چاپ کاتالوگ کاغذی، قیمت‌های خود را در ۳ ثانیه آپدیت کنید.
            </p>
          </div>

          {/* ستون دسترسی سریع */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  امکانات فرالیست
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  دموی زنده به‌روزرسانی
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  نحوه راه‌اندازی
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  تعرفه‌ها و پلن‌ها
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          {/* ستون تماس و ارتباط */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">پشتیبانی و تماس</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>دفتر مرکزی: تهران، خیابان آزادی</p>
              <p>تلفن پشتیبانی: ۰۲۱-۸۸۸۸۴۴۴۴</p>
              <p>ایمیل: support@faralist.ir</p>
              <p className="text-xs text-white/50 pt-2">پاسخگویی شنبه تا چهارشنبه ۹ الی ۱۸</p>
            </div>
          </div>
        </div>

        {/* خط فوتر و کپی‌رایت فلت */}
        <div className="pt-8 bg-white/[0.04] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} فرالیست (Fara List). تمامی حقوق برای این پلتفرم محفوظ است.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/80 cursor-pointer">حریم خصوصی</span>
            <span className="hover:text-white/80 cursor-pointer">شرایط استفاده</span>
            <span className="hover:text-white/80 cursor-pointer">نقشه سایت</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
