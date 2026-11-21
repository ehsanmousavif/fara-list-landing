import React, { useId, useRef, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { HeaderSections } from '@/components/common/header-sections';
import { Button } from '@/components/ui/Button';
import { Frame, FramePanel } from '@/components/reui/frame';
import { IconTile } from '@/components/reui/icon-tile';
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperTitle,
  StepperTrigger,
} from '@/components/reui/stepper';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  PackagePlus,
  LayoutGrid,
  Share2,
  RefreshCw,
  Check,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

interface StepData {
  step: number;
  stepLabel: string;
  title: string;
  shortDetail: string;
  fullDesc: string;
  icon: React.ReactNode;
  badge: string;
  highlight: string;
}

const STEPS: StepData[] = [
  {
    step: 1,
    stepLabel: 'قدم اول',
    title: 'محصولاتت رو وارد کن',
    shortDetail: 'عکس، قیمت، موجودی و دسته‌بندی کالاها را ثبت کن',
    fullDesc:
      'می‌توانید تمام محصولات خود را به صورت تکی یا از طریق فایل اکسل تنها با یک کلیک وارد پنل فرالیست کنید. نام کالا، تصویر باکیفیت، قیمت و وضعیت موجودی به صورت خودکار دسته‌بندی و مرتب می‌شوند.',
    icon: <PackagePlus className="w-4 h-4" />,
    badge: 'ورود سریع کالا',
    highlight: 'پشتیبانی کامل از فایل اکسل و فرم سریع موبایل',
  },
  {
    step: 2,
    stepLabel: 'قدم دوم',
    title: 'کاتالوگ بساز',
    shortDetail: 'قالب نمایش دلخواهت رو انتخاب و کالاها رو بچین',
    fullDesc:
      'کالاهای مورد نظرتان را انتخاب کنید و قالب اختصاصی فروشگاه خود را برگزینید. همچنین می‌توانید برای خریداران عادی و همکاران تجاری، کاتالوگ‌های مجزا با سطوح دسترسی و قیمت‌های متفاوت تعریف کنید.',
    icon: <LayoutGrid className="w-4 h-4" />,
    badge: 'طراحی خودکار',
    highlight: 'بدون نیاز به طراح گرافیک و نرم‌افزارهای سنگین',
  },
  {
    step: 3,
    stepLabel: 'قدم سوم',
    title: 'لینک رو بفرست',
    shortDetail: 'توی واتساپ، تلگرام، اینستاگرام یا QR Code پخش کن',
    fullDesc:
      'فرالیست یک پیوند هوشمند و کد QR اختصاصی به شما می‌دهد. مشتریان بدون نیاز به دانلود هیچ فایل سنگینی یا نصب اپلیکیشن، کاتالوگ زنده شما را مستقیماً در مرورگر موبایل خود ورق می‌زنند.',
    icon: <Share2 className="w-4 h-4" />,
    badge: 'یک پیوند همیشگی',
    highlight: 'مناسب برای بیو اینستاگرام، کانال تلگرام و پیام‌رسان‌ها',
  },
  {
    step: 4,
    stepLabel: 'قدم چهارم',
    title: 'هر وقت خواستی، ویرایش کن',
    shortDetail: 'همون لینک قبلی خودکار بروز می‌شه؛ بدون ارسال دوباره فایل',
    fullDesc:
      'با نوسان بازار، هر زمان قیمت یا موجودی تغییر کرد، فقط کافیست در پنل تغییرات را اعمال کنید یا با یک کلیک درصدی بالا و پایین ببرید. لینک دست مشتریان در همان لحظه به‌روز می‌شود؛ بدون هیچ فایل سوخته‌ای!',
    icon: <RefreshCw className="w-4 h-4" />,
    badge: 'به‌روزرسانی آنی',
    highlight: 'خداحافظی دائمی با فایل‌های منقضی و PDFهای سنگین',
  },
];

const completedIcon = <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />;

/**
 * ۱. استپر دسکتاپ بر پایه کامپوننت @reui/c-stepper-37
 * نمایش افقی ۴ کارتی در گرید با پنل محتوای کامل زیرین (نمایش اختصاصی دسکتاپ lg:block)
 */
const DesktopStepper: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const allDone = current > STEPS.length;

  const goTo = (step: number) => {
    setCurrent(step);
    if (step === 1) nextRef.current?.focus();
    if (step > STEPS.length) prevRef.current?.focus();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Stepper
        value={current}
        onValueChange={setCurrent}
        indicators={{ completed: completedIcon }}
        className="@container flex flex-col gap-6 pt-2 select-none"
        aria-label="مراحل ساخت کاتالوگ در فرالیست"
      >
        {/* نوار ۴ گانه کارتی c-stepper-37 */}
        <Frame spacing="xs" className="border-none bg-transparent p-0 shadow-none">
          <StepperNav className="grid grid-cols-4 gap-3">
            {STEPS.map((item) => {
              const done = item.step < current;
              const active = item.step === current;

              return (
                <StepperItem key={item.step} step={item.step} className="isolate">
                  <StepperTrigger
                    tabIndex={allDone && item.step === STEPS.length ? 0 : undefined}
                    render={<FramePanel />}
                    className={cn(
                      'min-w-0 gap-3 overflow-visible rounded-2xl px-3.5 py-3.5 transition-all cursor-pointer border-none shadow-none text-right',
                      active
                        ? 'bg-[#eae9fb] text-[#3525cd]'
                        : done
                        ? 'bg-[#f5f4fd] text-black hover:bg-[#eae9fb]'
                        : 'bg-[#f5f4fd] text-black/70 hover:bg-[#eae9fb]'
                    )}
                  >
                    <IconTile
                      variant={done ? 'solid' : 'outline'}
                      size="sm"
                      className={cn(
                        'shrink-0 rounded-xl border-none shadow-none',
                        done
                          ? 'bg-[#3525cd] text-white'
                          : active
                          ? 'bg-[#3525cd]/15 text-[#3525cd]'
                          : 'bg-black/5 text-black/60'
                      )}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </IconTile>

                    <div className="flex min-w-0 flex-col">
                      <StepperTitle
                        className={cn(
                          'truncate text-sm font-bold leading-5',
                          active ? 'text-[#3525cd]' : 'text-black'
                        )}
                      >
                        {item.title}
                      </StepperTitle>
                      <StepperDescription className="truncate text-xs text-black/50 font-normal">
                        {item.stepLabel}
                      </StepperDescription>
                      {done && <span className="sr-only">, تکمیل شده</span>}
                    </div>

                    {/* تیک تایید در گوشه کارت پس از انجام */}
                    <StepperIndicator className="absolute start-2 top-2 size-4.5 rounded-full bg-[#3525cd] text-white border-none shadow-none not-data-[state=completed]:hidden flex items-center justify-center" />
                  </StepperTrigger>
                </StepperItem>
              );
            })}
          </StepperNav>
        </Frame>

        {/* پنل محتوای تعاملی زیر استپر ۳۷ */}
        <StepperPanel className="rounded-3xl bg-[#f5f4fd] p-8 md:p-10 text-right space-y-6 border-none shadow-none">
          {STEPS.map((item) => (
            <StepperContent key={item.step} value={item.step}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3525cd] text-white">
                      {item.stepLabel}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#eae9fb] text-[#3525cd]">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-3xl font-black text-[#3525cd]/25 tracking-tighter">
                    ۰{item.step}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-black">
                  {item.title}
                </h3>

                <p className="text-black/80 text-base leading-relaxed font-normal max-w-3xl">
                  {item.fullDesc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#3525cd] bg-white/70 w-fit px-3.5 py-1.5 rounded-xl">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </StepperContent>
          ))}

          {/* محتوای اتمام مراحل */}
          <StepperContent value={STEPS.length + 1}>
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#3525cd] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-black">
                کاتالوگ دیجیتال شما در ۳ دقیقه آماده است!
              </h3>
              <p className="text-black/70 text-sm max-w-md mx-auto leading-relaxed">
                تمام مراحل با موفقیت به پایان رسید. اکنون می‌توانید لیست قیمت خود را با یک لمس منتشر کنید.
              </p>
            </div>
          </StepperContent>

          {/* دکمه‌های کنترل */}
          <div className="pt-4 flex items-center justify-between border-t border-black/5">
            <div className="flex items-center gap-2">
              <Button
                ref={prevRef}
                variant="surface"
                size="md"
                disabled={current === 1}
                onClick={() => goTo(current - 1)}
                className="gap-2 bg-white text-black hover:bg-[#eae9fb]"
              >
                <ArrowRight className="w-4 h-4" />
                <span>قدم قبلی</span>
              </Button>

              {!allDone ? (
                <Button
                  ref={nextRef}
                  variant="primary"
                  size="md"
                  onClick={() => goTo(current + 1)}
                  className="gap-2"
                >
                  <span>قدم بعدی</span>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    const el = document.getElementById('demo');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="gap-2"
                >
                  <span>شروع رایگان فرالیست</span>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
            </div>

            {allDone && (
              <button
                type="button"
                onClick={() => goTo(1)}
                className="text-xs font-semibold text-black/60 hover:text-black flex items-center gap-1.5 border-none bg-transparent cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>شروع مجدد از قدم اول</span>
              </button>
            )}
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};

/**
 * ۲. استپر اختصاصی موبایل بر پایه کامپوننت @reui/c-stepper-39
 * طراحی عمودی (orientation="vertical") کاملاً منطبق بر c-stepper-39
 * دارای کارت‌های عمودی در بالا، سپریتور مجزا و پنل توضیحات گام در زیر
 */
const MobileStepper: React.FC = () => {
  const id = useId();
  const panelId = `${id}-panel`;
  const [current, setCurrent] = useState(1);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const allDone = current > STEPS.length;

  const goTo = (step: number) => {
    setCurrent(step);
    if (step === 1) nextRef.current?.focus();
    if (step > STEPS.length) prevRef.current?.focus();
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Stepper
        value={current}
        onValueChange={setCurrent}
        orientation="vertical"
        indicators={{ completed: completedIcon }}
        className="w-full pt-1 select-none"
        aria-label="مراحل ساخت کاتالوگ فرالیست در موبایل"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {/* ستون عمودی کارت‌های ناوبری گام‌ها طبق ساختار c-stepper-39 */}
          <Frame
            spacing="xs"
            className="w-full sm:max-w-64 shrink-0 border-none bg-transparent p-0 shadow-none"
          >
            <StepperNav className="flex flex-col gap-2">
              {STEPS.map((item) => {
                const done = item.step < current;
                const active = item.step === current;

                return (
                  <StepperItem
                    key={item.step}
                    step={item.step}
                    className="relative isolate"
                  >
                    <StepperTrigger
                      tabIndex={allDone && item.step === STEPS.length ? 0 : undefined}
                      id={`${id}-tab-${item.step}`}
                      aria-controls={panelId}
                      render={<FramePanel />}
                      className={cn(
                        'w-full gap-3 rounded-2xl px-3.5 py-3 transition-all cursor-pointer border-none shadow-none text-right',
                        active
                          ? 'bg-[#eae9fb] text-[#3525cd]'
                          : done
                          ? 'bg-[#f5f4fd] text-black active:bg-[#eae9fb]'
                          : 'bg-[#f5f4fd] text-black/70 active:bg-[#eae9fb]'
                      )}
                    >
                      <IconTile
                        variant={done ? 'solid' : 'outline'}
                        size="xs"
                        className={cn(
                          'shrink-0 rounded-xl border-none shadow-none',
                          done
                            ? 'bg-[#3525cd] text-white'
                            : active
                            ? 'bg-[#3525cd]/15 text-[#3525cd]'
                            : 'bg-black/5 text-black/60'
                        )}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </IconTile>

                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-center justify-between">
                          <StepperTitle
                            className={cn(
                              'truncate text-sm font-bold leading-5',
                              active ? 'text-[#3525cd]' : 'text-black'
                            )}
                          >
                            {item.title}
                          </StepperTitle>
                          <span className="text-[11px] text-black/45 font-semibold">
                            {item.stepLabel}
                          </span>
                        </div>
                        <StepperDescription className="truncate text-xs text-black/60 font-normal mt-0.5">
                          {item.shortDetail}
                        </StepperDescription>
                        {done && <span className="sr-only">, انجام شده</span>}
                      </div>

                      {/* نشانگر تیک تایید گوشه کارت */}
                      <StepperIndicator className="pointer-events-none absolute start-2 top-2 z-10 size-4.5 rounded-full bg-[#3525cd] text-white border-none shadow-none not-data-[state=completed]:hidden flex items-center justify-center" />
                    </StepperTrigger>
                  </StepperItem>
                );
              })}
            </StepperNav>
          </Frame>

          {/* خط جداکننده (Separator) دقیقاً طبق c-stepper-39 */}
          <Separator aria-hidden="true" className="sm:hidden my-1 bg-black/10 border-none h-px" />
          <Separator
            aria-hidden="true"
            orientation="vertical"
            className="hidden sm:block self-stretch w-px bg-black/10 border-none"
          />

          {/* پنل جزئیات و کنترل‌های استپر ۳۹ */}
          <div className="flex-1 rounded-2xl bg-[#f5f4fd] p-5 text-right space-y-4 border-none shadow-none">
            <StepperPanel>
              {STEPS.map((item) => (
                <StepperContent key={item.step} value={item.step}>
                  <div id={panelId} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3525cd] text-white">
                        {item.stepLabel}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#eae9fb] text-[#3525cd]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-black">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-normal">
                      {item.fullDesc}
                    </p>

                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#3525cd]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </StepperContent>
              ))}

              <StepperContent value={STEPS.length + 1}>
                <div id={panelId} className="text-center py-3 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#3525cd] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-black">
                    کاتالوگ شما در ۳ دقیقه آماده است!
                  </h4>
                  <p className="text-xs text-black/70 leading-relaxed">
                    همه مراحل انجام شد. اکنون می‌توانید اولین لیست قیمت خود را منتشر کنید.
                  </p>
                </div>
              </StepperContent>
            </StepperPanel>

            {/* دکمه‌های ناوبری قبلی و بعدی در موبایل */}
            <div className="pt-3 flex items-center justify-between border-t border-black/5">
              <Button
                ref={prevRef}
                variant="surface"
                size="sm"
                disabled={current === 1}
                onClick={() => goTo(current - 1)}
                className="bg-white text-black hover:bg-[#eae9fb] text-xs h-9"
              >
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
                <span>قبلی</span>
              </Button>

              {!allDone ? (
                <Button
                  ref={nextRef}
                  variant="primary"
                  size="sm"
                  onClick={() => goTo(current + 1)}
                  className="text-xs h-9"
                >
                  <span>قدم بعدی</span>
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const el = document.getElementById('demo');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs h-9"
                >
                  <span>شروع رایگان</span>
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Stepper>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* هدر بخش با آیکون Layers */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<Layers className="w-5 h-5" />}
            title="ساختنش سه دقیقه طول می‌کشه"
            subtitle="فرآیند ۴ قدمی ساده بدون پیچیدگی فنی؛ از تعریف اولین کالا تا تحویل لینک زنده به مشتریان"
          />
        </AnimatedContent>

        {/* ۱. نمای دسکتاپ بر پایه کامپوننت @reui/c-stepper-37 (نمایش اختصاصی در دسکتاپ lg:block) */}
        <div className="hidden lg:block">
          <AnimatedContent
            distance={36}
            blur={0}
            duration={0.65}
            ease="power2.out"
          >
            <DesktopStepper />
          </AnimatedContent>
        </div>

        {/* ۲. نمای موبایل بر پایه کامپوننت @reui/c-stepper-39 (نمایش در موبایل و تبلت lg:hidden به جای c-stepper-37) */}
        <div className="block lg:hidden">
          <MobileStepper />
        </div>
      </div>
    </section>
  );
};
