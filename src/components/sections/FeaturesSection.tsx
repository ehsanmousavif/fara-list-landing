import React, { useEffect, useRef, useState, useCallback } from "react";
import { HeaderSections } from "@/components/common/header-sections";
import {
  Layers,
  Search,
  MessageCircle,
  Smartphone,
  BarChart3,
  Zap,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

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
  const timelineWrapperRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgPathRef = useRef<SVGPathElement>(null);

  const [isDesktop, setIsDesktop] = useState(true);
  const [pathData, setPathData] = useState<string>("");
  const [svgSize, setSvgSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [thresholds, setThresholds] = useState<number[]>([
    0.0, 0.25, 0.5, 0.75, 1.0,
  ]);
  const [activeItems, setActiveItems] = useState<number[]>([0]);
  const [headPos, setHeadPos] = useState<{ x: number; y: number } | null>(null);
  const [progressVal, setProgressVal] = useState<number>(0);

  // تارگت مستقیم روی کانتینر تایم‌لاین با آفست دقیق‌تر برای واکنش سریع به اسکرول
  const { scrollYProgress } = useScroll({
    target: timelineWrapperRef,
    offset: ["start 65%", "end 60%"],
  });

  // حذف تاخیر و لگ اسپرینگ با جرم بسیار کم و سختی بالا (پاسخ سریع به اسکرول)
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 520,
    damping: 38,
    mass: 0.04,
    restDelta: 0.0005,
  });

  // بررسی وضعیت دسکتاپ یا موبایل
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop, { passive: true });
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // محاسبه و ساخت مسیر مواج S شکل: دقیقاً از اولین آیکون تا آخرین آیکون (بدون بیرون‌زدگی)
  const updateWavePath = useCallback(() => {
    const wrapper = timelineWrapperRef.current;
    if (!wrapper) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const w = wrapperRect.width;
    const h = wrapperRect.height;
    if (w <= 0 || h <= 0) return;

    setSvgSize({ width: w, height: h });

    const points: { x: number; y: number }[] = [];
    iconRefs.current.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        points.push({
          x: rect.left - wrapperRect.left + rect.width / 2,
          y: rect.top - wrapperRect.top + rect.height / 2,
        });
      }
    });

    if (points.length < 2) return;

    // مسیر دقیقاً از مرکز اولین آیکون شروع می‌شود (بدون بیرون‌زدگی بالا)
    let d = `M ${points[0].x} ${points[0].y}`;

    // ساخت منحنی‌های نرم S شکل بین آیکون‌های متناوب
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dy = p2.y - p1.y;

      const cp1x = p1.x;
      const cp1y = p1.y + dy * 0.5;
      const cp2x = p2.x;
      const cp2y = p2.y - dy * 0.5;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    // مسیر دقیقاً در مرکز آخرین آیکون به پایان می‌رسد (بدون بیرون‌زدگی پایین)
    setPathData(d);
  }, []);

  // محاسبه آستانه‌های فعال‌سازی آیتم‌ها بر روی طول دقیق مسیر SVG
  useEffect(() => {
    if (!pathData) return;

    const tempPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    tempPath.setAttribute("d", pathData);
    const totalLength = tempPath.getTotalLength();
    if (totalLength <= 0) return;

    const wrapper = timelineWrapperRef.current;
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();

    const newThresholds = iconRefs.current.map((el, i) => {
      // اولین آیکون در همان شروع مسیر است
      if (i === 0) return 0;
      // آخرین آیکون در انتهای مسیر است
      if (i === iconRefs.current.length - 1) return 0.98;

      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const targetY = rect.top - wrapperRect.top + rect.height / 2;

      let low = 0;
      let high = totalLength;
      for (let step = 0; step < 24; step++) {
        const mid = (low + high) / 2;
        const pt = tempPath.getPointAtLength(mid);
        if (pt.y < targetY) {
          low = mid;
        } else {
          high = mid;
        }
      }

      return Math.max(0, Math.min(1, low / totalLength));
    });

    setThresholds(newThresholds);
  }, [pathData]);

  // رهگیری نوک متحرک پرتو نور روی مسیر و همگام‌سازی لحظه‌ای
  useEffect(() => {
    const unsubscribe = springProgress.on("change", (latestProgress) => {
      setProgressVal(latestProgress);

      const pathEl = bgPathRef.current;
      if (pathEl) {
        const totalLength = pathEl.getTotalLength();
        if (totalLength > 0) {
          const currentLength = Math.max(
            0,
            Math.min(totalLength, latestProgress * totalLength),
          );
          const pt = pathEl.getPointAtLength(currentLength);
          setHeadPos({ x: pt.x, y: pt.y });
        }
      }

      const reached: number[] = [];
      thresholds.forEach((th, index) => {
        // آیتم اول همیشه از ابتدا آماده است و بقیه با رسیدن خط فعال می‌شوند
        if (index === 0 || latestProgress >= th - 0.02) {
          reached.push(index);
        }
      });
      setActiveItems(reached);
    });

    return () => unsubscribe();
  }, [springProgress, thresholds]);

  // به‌روزرسانی مداوم هندسه مسیر با ریسایز
  useEffect(() => {
    updateWavePath();

    const wrapper = timelineWrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(() => {
      updateWavePath();
    });
    observer.observe(wrapper);

    window.addEventListener("resize", updateWavePath, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWavePath);
    };
  }, [updateWavePath, isDesktop]);

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

        {/* ساختار تایم‌لاین با مسیر مواج S شکل */}
        <div
          ref={timelineWrapperRef}
          className="relative mt-16 sm:mt-24 pb-4"
        >
          {/* لایه برداری SVG مسیر مواج S شکل: دقیقاً بین آیکون اول و آخر */}
          {svgSize.width > 0 && pathData && (
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="features-wave-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3525cd" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#3525cd" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6858ee" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* ۱. خط راهنمای پس‌زمینه با فرم مواج S بدون بیرون‌زدگی */}
              <path
                ref={bgPathRef}
                d={pathData}
                fill="none"
                stroke="#eae9fb"
                strokeWidth={3.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ۲. مسیر حرکتی فعال نورانی همگام با اسکرول کاربر */}
              <motion.path
                d={pathData}
                fill="none"
                stroke="url(#features-wave-gradient)"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  pathLength: springProgress,
                }}
              />

              {/* ۳. نوک نورانی متحرک روی مسیر؛ در حالت شروع یا پایان کامل پنهان می‌شود تا بیرون نزند */}
              {headPos && progressVal > 0.02 && progressVal < 0.98 && (
                <g transform={`translate(${headPos.x}, ${headPos.y})`}>
                  <circle r={14} fill="#3525cd" opacity={0.16} />
                  <circle r={8} fill="#3525cd" opacity={0.35} />
                  <circle
                    r={4}
                    fill="#ffffff"
                    stroke="#3525cd"
                    strokeWidth={2.5}
                  />
                </g>
              )}
            </svg>
          )}

          {/* لیست آیتم‌ها و نقاط عطف متناوب روی موج */}
          <div className="flex flex-col space-y-16 sm:space-y-28 relative z-10">
            {TIMELINE_FEATURES.map((item, index) => {
              const isReached = activeItems.includes(index);
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="relative flex items-center w-full"
                >
                  {/* آیکون نقطه عطف قرارگرفته دقیقاً روی قله موج S شکل */}
                  <div
                    ref={(el) => {
                      iconRefs.current[index] = el;
                    }}
                    data-timeline-icon="true"
                    style={
                      isDesktop
                        ? {
                            left: "50%",
                            right: "auto",
                            transform: `translateX(calc(-50% + ${
                              isEven ? "52px" : "-52px"
                            }))`,
                          }
                        : {
                            // در موبایل موج تقویت‌شده (انحراف بیشتر بین ۲۸ پیکسل و ۴ پیکسل)
                            right: isEven ? "28px" : "4px",
                            left: "auto",
                            transform: "none",
                          }
                    }
                    className={`absolute z-20 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl transition-all duration-300 select-none border-none shadow-none ${
                      isReached
                        ? "bg-[#3525cd] text-white scale-110"
                        : "bg-[#eae9fb] text-[#3525cd]/40 scale-95"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* چیدمان متناوب متن‌ها: چپ و راست با فاصله هماهنگ با انحنای موج */}
                  <div className="w-full flex flex-col md:flex-row items-center">
                    {isEven ? (
                      <>
                        {/* ستون راست (محتوای آیتم‌های زوج) */}
                        <div
                          className={`w-full md:w-1/2 pr-20 md:pr-0 md:pl-24 lg:md:pl-28 text-right transition-all duration-300 ease-out select-none ${
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

                        {/* اسپیسر ستون چپ در دسکتاپ */}
                        <div
                          aria-hidden="true"
                          className="hidden md:block md:w-1/2"
                        />
                      </>
                    ) : (
                      <>
                        {/* اسپیسر ستون راست در دسکتاپ */}
                        <div
                          aria-hidden="true"
                          className="hidden md:block md:w-1/2"
                        />

                        {/* ستون چپ (محتوای آیتم‌های فرد) */}
                        <div
                          className={`w-full md:w-1/2 pr-20 md:pr-24 lg:md:pr-28 md:pl-0 text-right md:text-left transition-all duration-300 ease-out select-none ${
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
