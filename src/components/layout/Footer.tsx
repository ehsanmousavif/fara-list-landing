import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaralistLogo } from "@/components/logo";
import { ExternalLink, MessageCircle, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative bg-[#191458] text-white overflow-hidden">
      {/* هاله پس‌زمینه ملایم */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 blur-3xl pointer-events-none rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3525cd]/20 blur-3xl pointer-events-none rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-[calc(env(safe-area-inset-bottom,0px)+3rem)]">
        {/* ردیف اصلی فوتر */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* ستون اول: معرفی فرالیست */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <FaralistLogo size={36} />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white">
                  فرالیست
                </span>
                <span className="text-xs text-white/60 font-changa tracking-wider">
                  FARALIST
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/80 max-w-sm font-light">
              سامانه هوشمند ساخت کاتالوگ آنلاین و لیست قیمت لحظه‌ای؛ به‌جای فایل‌های سنگین PDF و پیام‌های پراکنده، یک لینک همیشه به‌روز و دردسترس داشته باشید.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/faralist_support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
              >
                <MessageCircle size={15} />
                <span>پشتیبانی تلگرام</span>
              </a>
              <a
                href="mailto:info@faralist.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
              >
                <Mail size={15} />
                <span>تماس با ما</span>
              </a>
            </div>
          </div>

          {/* ستون دوم: دسترسی سریع */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white/95 tracking-wide">
              دسترسی سریع
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-white transition-colors inline-block"
                >
                  ویژگی‌های فرالیست
                </Link>
              </li>
              <li>
                <Link
                  href="/#interactive-demo"
                  className="hover:text-white transition-colors inline-block"
                >
                  دموی زنده و تعاملی
                </Link>
              </li>
              <li>
                <Link
                  href="/#comparison"
                  className="hover:text-white transition-colors inline-block"
                >
                  مقایسه با روش سنتی
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors inline-block"
                >
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors inline-block"
                >
                  وبلاگ و مقالات
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون سوم: امکانات */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white/95 tracking-wide">
              امکانات کلیدی
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/75">
              <li className="hover:text-white transition-colors">
                لینک اختصاصی و ثابت
              </li>
              <li className="hover:text-white transition-colors">
                تغییر لحظه‌ای قیمت‌ها
              </li>
              <li className="hover:text-white transition-colors">
                بارگذاری سریع در موبایل
              </li>
              <li className="hover:text-white transition-colors">
                کیو‌آرکد (QR Code) اختصاصی
              </li>
              <li className="hover:text-white transition-colors">
                مدیریت محصولات بدون پیچیدگی
              </li>
            </ul>
          </div>

          {/* ستون چهارم: معرفی و لوگوی جیکات */}
          <div className="lg:col-span-3 flex flex-col items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/assets/images/jikot-logo.png"
                  alt="لوگو جیکات وب"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">جیکات وب</span>
                <span className="text-[11px] text-white/60">
                  توسعه و زیرساخت محصول
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-white/75 font-light">
              طراحی، توسعه فنی و اجرای پروژه فرالیست با استاندارد‌های روز توسط استودیو خلاق جیکات انجام شده است.
            </p>

            <a
              href="https://gecut.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium group mt-1"
            >
              <span>مشاهده وب‌سایت gecut.ir</span>
              <ExternalLink
                size={13}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* نوار پایینی کپی‌رایت */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© ۱۴۰۳ فرالیست. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-2">
            <span>طراحی و اجرا:</span>
            <a
              href="https://gecut.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white font-medium transition-colors"
            >
              استودیو جیکات (GECUT WEB)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
