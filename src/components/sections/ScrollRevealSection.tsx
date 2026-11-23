import React from "react";
import AnimatedContent from "@/components/effects/AnimatedContent";
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  MessageSquare,
  Phone,
  MoreVertical,
  Send,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui";
import { HeaderSections } from "../common/header-sections";
import { LightbulbIcon } from "@solar-icons/react/line-duotone";

export const ScrollRevealSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-transparent text-black relative overflow-hidden">
      <HeaderSections icon={<LightbulbIcon />} />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
            <AnimatedContent distance={60} blur={8} wipe="none" duration={0.8}>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eae9fb] text-[#3525cd] text-xs font-bold">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>راه‌حل فرالیست: یک لینک ثابت و همیشگی</span>
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.25]">
                  یک لینک ثابت، که همیشه آخرین نسخه رو نشون می‌ده
                </h2>

                {/* متن پاراگراف منطبق با بخش ۳ سند محتوا */}
                <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
                  با فرالیست، محصولات، قیمت، موجودی و دسته‌بندی‌هات رو یک‌بار
                  وارد می‌کنی و از روی همون اطلاعات، یک یا چند کاتالوگ آنلاین
                  می‌سازی. هر کاتالوگ یک لینک مخصوص خودش داره که می‌تونی توی
                  واتساپ، تلگرام، اینستاگرام، پیامک یا حتی روی یک QR Code
                  بذاریش.
                </p>

                <p className="text-black/75 text-base sm:text-lg leading-relaxed font-normal">
                  از اون به بعد، هر تغییری که توی فرالیست بدی — قیمت، موجودی،
                  عکس، محصول جدید — همون لحظه روی همون لینک قبلی هم دیده می‌شه.
                  مشتری هیچ‌وقت فایل کهنه دستش نمی‌مونه.
                </p>

                {/* مزایای برجسته */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f5f4fd] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#3525cd] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-black">
                      آپدیت محصولات در کمترین زمان !{" "}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f5f4fd] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#eae9fb] text-[#3525cd] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-black">
                      بدون نیاز به به انجام عملیات های تکراری
                    </div>
                  </div>
                </div>

                {/* دکمه اقدام */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto px-7 h-12"
                    onClick={() => {
                      const el = document.getElementById("cta");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>ساخت کاتالوگ من</span>
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                  </Button>
                  <span className="text-xs text-black/60 font-medium">
                    ✓ لینک مشتری‌ها خودکار به‌روزرسانی می‌شود
                  </span>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* ستون چپ: فریم موبایل با چت دو نفره کوچک و فشرده */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
            {/* هاله نوری ملایم پشت گوشی */}
            <div
              aria-hidden="true"
              className="absolute w-64 h-80 bg-[#3525cd]/12 blur-[90px] rounded-full pointer-events-none -z-10"
            />

            {/* ماکت فریم گوشی موبایل */}
            <div className="relative w-[300px] sm:w-[320px] aspect-[444/880] select-none">
              {/* صفحه نمایش داخلی گوشی */}
              <div className="absolute top-[2.2%] bottom-[2.5%] left-[5.5%] right-[5.5%] rounded-[36px] bg-[#f8f7ff] overflow-hidden flex flex-col justify-between shadow-inner">
                {/* نوار وضعیت بالای گوشی و داینامیک آیلند */}
                <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-bold text-black/80 shrink-0 select-none z-10">
                  <span>9:41</span>
                  {/* داینامیک آیلند فضا */}
                  <div className="w-20 h-5" />
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <div className="w-4 h-2 rounded-sm border border-black/60 p-0.5 flex items-center">
                      <div className="w-full h-full bg-black rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* سربرگ پیام‌رسان در گوشی */}
                <div className="px-3.5 py-2 bg-white/90 backdrop-blur-md border-b border-black/5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#eae9fb] text-[#3525cd] flex items-center justify-center font-black text-xs">
                      ف
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-black flex items-center gap-1">
                        <span>مدیر فروشگاه</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-black/50">
                    <Phone className="w-3.5 h-3.5" />
                    <MoreVertical className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* بدنه چت دو نفره */}
                <div className="flex-1 p-3 space-y-3 overflow-y-auto text-right text-xs leading-relaxed flex flex-col justify-center">
                  {/* تاریخ گفتگو */}
                  <div className="text-center my-0.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/5 text-[10px] text-black/60 font-medium">
                      امروز
                    </span>
                  </div>

                  {/* پیام اول مدیر */}
                  <div className="flex flex-col items-start gap-1 max-w-[88%] self-start">
                    <div className="text-[10px] font-bold text-black/60 px-1">
                      • ۱۰:۱۵
                    </div>
                    <div className="p-2.5 rounded-2xl rounded-tl-sm bg-white text-black shadow-xs text-[11px] sm:text-xs">
                      سلام، نرخ ارز بالا رفته؛ باید قیمت ۱۰۰ تا محصول رو سریعاً
                      توی لیست قیمت آپدیت کنی.
                    </div>
                  </div>

                  {/* پیام دوم مدیر (عجله و فوریت) */}
                  <div className="flex flex-col items-start gap-1 max-w-[85%] self-start">
                    <div className="p-2.5 rounded-2xl rounded-tl-sm bg-white text-black shadow-xs text-[11px] sm:text-xs">
                      خیلی فوریه و عجله دارم، مشتری‌ها و نمایندگی‌ها منتظر
                      کاتالوگ جدیدن!
                    </div>
                    <div className="text-[9px] text-black/40 px-1">۱۰:۱۶</div>
                  </div>

                  {/* پاسخ ادمین فرالیست */}
                  <div className="flex flex-col items-end gap-1 max-w-[90%] self-end">
                    <div className="text-[10px] font-bold text-[#3525cd] px-1">
                      ادمین فرالیست • ۱۰:۳۱
                    </div>
                    <div className="p-2.5 rounded-2xl rounded-tr-sm bg-[#3525cd] text-white shadow-xs text-[11px] sm:text-xs leading-relaxed">
                      سلام، انجام شد! تمام ۱۰۰ تا محصول یکجا در فرالیست آپدیت
                      شدند و همون لینکی که دست مشتری‌هاست خودکار بروز شد؛ نیازی
                      به ساخت و ارسال فایل جدید نیست.
                    </div>
                    <div className="text-[9px] text-black/50 px-1 flex items-center gap-1">
                      <span>خوانده شد ۱۰:۳۱</span>
                      <CheckCheck className="w-3 h-3 text-[#3525cd]" />
                    </div>
                  </div>
                </div>

                {/* نوار اینپوت چت در پایین گوشی */}
                <div className="p-2 bg-white/95 border-t border-black/5 flex items-center gap-1.5 shrink-0">
                  <div className="flex-1 h-7 px-2.5 rounded-full bg-[#f4f3fb] text-[10px] text-black/40 flex items-center">
                    پیام جدید...
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#3525cd] text-white flex items-center justify-center shrink-0">
                    <Send className="w-3 h-3 rotate-180" />
                  </div>
                </div>

                {/* نوار پایین iOS (Home Bar) */}
                <div className="pb-1 pt-0.5 flex justify-center shrink-0">
                  <div className="w-24 h-1 bg-black/30 rounded-full" />
                </div>
              </div>

              {/* لایه پوسته فریم موبایل اصلی ارسالی با حاشیه تیتانیوم بنفش و داینامیک آیلند شفاف */}
              <img
                src="/assets/images/phone-frame-overlay.png"
                alt="فریم موبایل فرالیست"
                className="absolute inset-0 w-full h-full pointer-events-none z-20 select-none object-fill drop-shadow-sm"
                width={444}
                height={880}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealSection;
