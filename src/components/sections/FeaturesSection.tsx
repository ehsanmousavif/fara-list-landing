import React, { useEffect, useRef, useState } from "react";
import { HeaderSections } from "@/components/common/header-sections";
import {
  Layers,
  Search,
  MessageCircle,
  Smartphone,
  BarChart3,
  Zap,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface TimelineFeature {
  id: string;
  step: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const TIMELINE_FEATURES: TimelineFeature[] = [
  {
    id: "multiple-catalogs",
    step: "۰۱",
    title: "چند کاتالوگ از یک بانک محصول",
    description:
      "یکی برای فروش عمده، یکی برای خرده‌فروشی، یکی برای یک کمپین فصلی؛ بدون اینکه محصولات رو دوباره وارد کنی.",
    badge: "انعطاف‌پذیر و یکپارچه",
    icon: Layers,
  },
  {
    id: "instant-search",
    step: "۰۲",
    title: "جست‌وجو و دسته‌بندی برای مشتری",
    description:
      "مشتری با باز کردن لینک، بین دسته‌ها جابه‌جا می‌شه و محصول مورد نظرش رو در کسری از ثانیه پیدا می‌کنه.",
    badge: "سریع و روان",
    icon: Search,
  },
  {
    id: "direct-contact",
    step: "۰۳",
    title: "ارتباط مستقیم از همون صفحه",
    description:
      "دکمه تماس، واتساپ یا تلگرام روی خود کاتالوگ تعبیه شده؛ مشتری بدون نیاز به رفتن به صفحه دیگه سفارش می‌ده.",
    badge: "تبدیل فوری به فروش",
    icon: MessageCircle,
  },
  {
    id: "no-app-install",
    step: "۰۴",
    title: "بدون نصب اپلیکیشن",
    description:
      "مشتری فقط لینک رو توی مرورگر موبایل یا دسکتاپ باز می‌کنه؛ بدون نیاز به ثبت‌نام یا نصب هیچ‌گونه برنامه‌ای.",
    badge: "۱۰۰٪ وب‌پایه و در دسترس",
    icon: Smartphone,
  },
  {
    id: "real-analytics",
    step: "۰۵",
    title: "آمار واقعی از رفتار مشتری",
    description:
      "چند نفر کاتالوگ رو دیدن، چند نفر روی واتساپ یا تماس کلیک کردن، و لینک شما چند بار کپی و به اشتراک گذاشته شده.",
    badge: "بینش هوشمند کسب‌وکار",
    icon: BarChart3,
  },
];

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thresholdsRef = useRef<number[]>([]);
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 340,
    damping: 32,
    mass: 0.15,
    restDelta: 0.001,
  });

  const beamScaleY = useTransform(springProgress, [0, 1], [0, 1]);

  const calculateThresholds = () => {
    const isDesktop = window.innerWidth >= 768;
    const currentLine = isDesktop ? lineRef.current : mobileLineRef.current;
    if (!currentLine) return;

    const lineRect = currentLine.getBoundingClientRect();
    const lineHeight = lineRect.height;
    if (lineHeight <= 0) return;

    const thresholds = itemRefs.current.map((el) => {
      if (!el) return 1;
      const iconEl = el.querySelector<HTMLElement>("[data-timeline-icon]");
      const target = iconEl || el;
      const targetRect = target.getBoundingClientRect();
      const targetCenter = targetRect.top + targetRect.height / 2.5;
      const ratio = (targetCenter - lineRect.top) / lineHeight;
      return Math.max(0, Math.min(1, ratio));
    });

    thresholdsRef.current = thresholds;
  };

  // همگام‌سازی لحظه‌ای وضعیت فعال‌شدن با نوک متحرک پرتو نور (Spring Beam Tip)
  useEffect(() => {
    calculateThresholds();

    const handleResize = () => {
      calculateThresholds();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleResize, {
      passive: true,
      once: true,
    });

    const unsubscribe = springProgress.on("change", (latestProgress) => {
      if (thresholdsRef.current.length === 0) {
        calculateThresholds();
      }

      const reached: number[] = [];
      thresholdsRef.current.forEach((threshold, index) => {
        // دقیقاً زمانی که نوک خط به محدوده آیکون و محتوا برسد فعال می‌شود
        if (latestProgress >= threshold - 0.01) {
          reached.push(index);
        }
      });

      setActiveItems(reached);
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [springProgress]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-24 md:py-36 bg-transparent text-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* سربرگ بخش امکانات با IconStack */}
        <HeaderSections
          icon={<Zap className="w-5 h-5" />}
          title="همه چیزی که برای نمایش حرفه‌ای محصولاتت لازم داری"
          subtitle="چرا فرالیست فراتر از «یک لیست قیمت ساده»ست و تجربه فروش شما را متحول می‌کند"
        />

        {/* ساختار تایم‌لاین چپ و راست با حرکت فنری (Spring) بدون باکس */}
        <div className="relative mt-16 sm:mt-24 pb-8">
          {/* ۱. خط پس‌زمینه ثابت در مرکز دسکتاپ */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-1 bg-[#eae9fb] rounded-full pointer-events-none hidden md:block"
          />

          {/* خط پس‌زمینه در موبایل */}
          <div
            ref={mobileLineRef}
            aria-hidden="true"
            className="absolute top-6 bottom-6 right-5 w-1 bg-[#eae9fb] rounded-full pointer-events-none md:hidden"
          />

          {/* ۲. خط فعال متحرک اسپرینگ با رنگ اصلی #3525cd در دسکتاپ */}
          <motion.div
            aria-hidden="true"
            className="absolute top-6 left-1/2 -translate-x-1/2 w-1 rounded-full pointer-events-none origin-top hidden md:block"
            style={{
              scaleY: beamScaleY,
              height: "calc(100% - 3rem)",
              background:
                "linear-gradient(to bottom, #3525cd 0%, #3525cd 85%, #5a4ee3 100%)",
            }}
          />

          {/* خط فعال اسپرینگ در موبایل */}
          <motion.div
            aria-hidden="true"
            className="absolute top-6 right-5 w-1 rounded-full pointer-events-none origin-top md:hidden"
            style={{
              scaleY: beamScaleY,
              height: "calc(100% - 3rem)",
              background:
                "linear-gradient(to bottom, #3525cd 0%, #3525cd 85%, #5a4ee3 100%)",
            }}
          />

          {/* ۳. لیست آیتم‌ها: چیدمان متناوب چپ و راست بدون کادر و باکس */}
          <div className="flex flex-col space-y-16 sm:space-y-28 relative">
            {TIMELINE_FEATURES.map((item, index) => {
              const isReached = activeItems.includes(index);
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative flex items-center w-full"
                >
                  {/* آیکون نقطه عطف در مرکز دسکتاپ و راست موبایل */}
                  <div
                    data-timeline-icon="true"
                    className={`absolute z-10 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl transition-all duration-300 select-none border-none shadow-none right-0.5 md:right-auto md:left-1/2 md:-translate-x-1/2 ${
                      isReached
                        ? "bg-[#3525cd] text-white scale-110 shadow-md"
                        : "bg-[#eae9fb] text-[#3525cd]/40 scale-95"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* چیدمان متناوب: در دسکتاپ یکی راست، یکی چپ، بدون هیچ باکسی */}
                  <div className="w-full flex flex-col md:flex-row items-center">
                    {isEven ? (
                      <>
                        {/* ستون راست (محتوای آیتم‌های زوج) */}
                        <div
                          className={`w-full md:w-1/2 pr-14 md:pr-0 md:pl-16 text-right transition-all duration-300 ease-out select-none ${
                            isReached
                              ? "opacity-100 blur-0 translate-y-0"
                              : "opacity-25 blur-[0.5px] translate-y-2 pointer-events-none"
                          }`}
                        >
                          <div className="space-y-3">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                                isReached
                                  ? "bg-[#eae9fb] text-[#3525cd]"
                                  : "bg-[#eae9fb]/60 text-[#3525cd]/40"
                              }`}
                            >
                              <span>{item.step}</span>
                              <span>•</span>
                              <span>{item.badge}</span>
                            </span>

                            <h3
                              className={`text-2xl sm:text-3xl font-black tracking-tight leading-tight transition-colors ${
                                isReached ? "text-black" : "text-black/50"
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p
                              className={`text-base sm:text-lg leading-relaxed font-normal max-w-lg transition-colors ${
                                isReached ? "text-black/75" : "text-black/35"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* اسپیسر ستون چپ در دسکتاپ برای حفظ تقارن خط وسط */}
                        <div
                          aria-hidden="true"
                          className="hidden md:block md:w-1/2"
                        />
                      </>
                    ) : (
                      <>
                        {/* اسپیسر ستون راست در دسکتاپ برای قرارگیری محتوا در سمت چپ */}
                        <div
                          aria-hidden="true"
                          className="hidden md:block md:w-1/2"
                        />

                        {/* ستون چپ (محتوای آیتم‌های فرد) */}
                        <div
                          className={`w-full md:w-1/2 pr-14 md:pr-16 md:pl-0 text-right md:text-left transition-all duration-300 ease-out select-none ${
                            isReached
                              ? "opacity-100 blur-0 translate-y-0"
                              : "opacity-25 blur-[0.5px] translate-y-2 pointer-events-none"
                          }`}
                        >
                          <div className="space-y-3 flex flex-col items-start md:items-end">
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                                isReached
                                  ? "bg-[#eae9fb] text-[#3525cd]"
                                  : "bg-[#eae9fb]/60 text-[#3525cd]/40"
                              }`}
                            >
                              <span>{item.step}</span>
                              <span>•</span>
                              <span>{item.badge}</span>
                            </span>

                            <h3
                              className={`text-2xl sm:text-3xl font-black tracking-tight leading-tight transition-colors ${
                                isReached ? "text-black" : "text-black/50"
                              }`}
                            >
                              {item.title}
                            </h3>

                            <p
                              className={`text-base sm:text-lg leading-relaxed font-normal max-w-lg transition-colors text-right md:text-left ${
                                isReached ? "text-black/75" : "text-black/35"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
