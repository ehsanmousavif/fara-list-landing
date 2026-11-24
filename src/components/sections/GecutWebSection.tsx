import React from "react";
import Image from "next/image";
import AnimatedContent from "@/components/effects/AnimatedContent";
import { HeaderSections } from "@/components/common/header-sections";
import {
  ExternalLink,
  Laptop,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { Frame } from "../reui/frame";

export const JikotWebSection: React.FC = () => {
  return (
    <section
      id="jikot-web"
      className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* سربرگ استاندارد بخش معرفی شرکت طراحی سایت جیکات وب */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<Laptop className="w-5 h-5" />}
            title="فرالیست؛ محصولی از شرکت طراحی وب‌سایت جیکات"
            subtitle="فرالیست به عنوان یکی از راهکارهای نوآورانه نرم‌افزاری، توسط تیم تخصصی شرکت طراحی وب‌سایت جیکات وب طراحی، مهندسی و پیاده‌سازی شده است."
          />
        </AnimatedContent>

        {/* کانتینر اصلی معرفی شرکت جیکات وب */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          delay={0.08}
        >
          <div className="relative rounded-3xl bg-[#f8f7ff] border border-[#e8e6fb] p-7 sm:p-10 lg:p-12 overflow-hidden shadow-none">
            {/* هاله پس‌زمینه ملایم */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-80 h-80 bg-[#3525cd]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-80 h-80 bg-[#6858ee]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* ستون راست: توضیحات شرکت طراحی سایت جیکات و خدمات */}
              <div className="lg:col-span-7 flex flex-col items-start text-right space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae9fb] text-[#3525cd] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>طراحی و اجرا توسط شرکت طراحی وب‌سایت جیکات</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#191458] tracking-tight leading-tight">
                  جیکات وب؛ شرکت تخصصی طراحی وب‌سایت‌های شرکتی، فروشگاهی و
                  پلتفرم‌های مدرن اینترنتی
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  شرکت طراحی وب‌سایت جیکات وب (Gecut)، مجری پروژه‌های حرفه‌ای
                  طراحی سایت و سیستم‌های تحت وب، سامانه فرالیست را با هدف
                  ساده‌سازی نمایش لیست قیمت و کاتالوگ آنلاین خلق کرده است. اگر
                  برای معرفی خدمات و برند خود یا راه‌اندازی فروشگاه اینترنتی
                  نیازمند یک وب‌سایت اختصاصی، زیبا و پرسرعت هستید، جیکات وب
                  بهترین راهکارها را متناسب با نیاز کسب‌وکار شما ارائه می‌دهد.
                </p>

                {/* حوزه‌های تخصصی شرکت طراحی وب‌سایت جیکات */}
                <div className="space-y-3 w-full pt-1">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#3525cd] shrink-0 mt-0.5" />
                    <span>
                      طراحی اختصاصی انواع وب‌سایت‌های شرکتی، تجاری و فروشگاه‌های
                      آنلاین
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#3525cd] shrink-0 mt-0.5" />
                    <span>
                      رابط کاربری مدرن (UI/UX)، کاملاً واکنش‌گرا (Responsive) و
                      مطابق استانداردهای روز سئو
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#3525cd] shrink-0 mt-0.5" />
                    <span>
                      بالاترین سرعت بارگذاری صفحات، امنیت پایدار و پشتیبانی فنی
                      مداوم
                    </span>
                  </div>
                </div>
              </div>

              {/* ستون چپ: کارت شیک هویت بصری شرکت طراحی وب‌سایت جیکات */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-sm bg-white rounded-3xl p-7 sm:p-9 flex flex-col items-center text-center space-y-5">
                  <div className="w-20 h-20 rounded-2xl bg-[#f5f4fd] p-3 flex items-center justify-center">
                    <Image
                      src="/assets/images/jikot-logo.png"
                      alt="لوگو شرکت طراحی وب‌سایت جیکات وب"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-[#191458]">
                      شرکت طراحی وب‌سایت جیکات وب
                    </h4>
                    <p className="text-xs text-slate-400 font-changa tracking-wider">
                      GECUT WEB DESIGN COMPANY
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    طراحی و توسعه وب‌سایت‌های مدرن، فروشگاه‌های آنلاین اختصاصی و
                    پلتفرم‌های نوین تحت وب برای کسب‌وکارهای پیشرو
                  </p>

                  <a
                    href="https://gecut.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#eae9fb] text-[#3525cd] text-xs font-bold transition-colors border border-slate-200/70"
                  >
                    <Globe className="w-4 h-4" />
                    <span>ورود به وب‌سایت رسمی gecut.ir</span>
                    <ArrowLeft className="w-3.5 h-3.5 mr-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default JikotWebSection;
