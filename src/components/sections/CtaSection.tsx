import React, { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Button } from '@/components/ui';
import Scanner from '@/components/ui/Scanner';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
        >
          <div className="relative rounded-3xl overflow-hidden bg-[#070712] p-8 sm:p-14 md:p-20 text-center flex flex-col items-center justify-center min-h-[380px] border-none shadow-none">
            {/* ReactBits Scanner Canvas Background */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <Scanner
                color1="#3525cd"
                color2="#8f84fc"
                color3="#ffffff"
                scanDirection="horizontal"
                speed={0.3}
                sweepSpeed={0.2}
                sweepWidth={1.8}
                scale={1.3}
                ripple={0.24}
                bandDensity={10}
                lineWidth={1.2}
                glow={0.7}
                brightness={1.15}
                opacity={0.85}
                mouseInteraction={true}
                className="w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070712]/75 via-transparent to-[#070712]/75 pointer-events-none" />
            </div>

            {/* محتوای سکشن اقدام به عمل */}
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#8f84fc]" />
                <span>شروع فوری بدون دردسر</span>
              </div>

              {/* عنوان منطبق با بخش ۱۰ مستندات */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight text-balance">
                دیگه لازم نیست برای هر تغییر قیمت، یه فایل جدید بسازی
              </h2>

              {/* زیرعنوان */}
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-balance">
                همین الان کاتالوگ خودت رو بساز و یک لینک ثابت برای همیشه داشته باش.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center gap-2 text-sm font-semibold border-none">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>درخواست شما ثبت شد! کاتالوگ اختصاصی شما در حال آماده‌سازی است.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 pt-2"
                >
                  <input
                    type="text"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="شماره موبایل یا ایمیل شما..."
                    required
                    className="flex-1 h-12 px-4 rounded-xl bg-white/10 text-white placeholder:text-white/40 text-sm outline-none border-none focus:bg-white/15 backdrop-blur-md transition-colors"
                  />
                  <Button
                    type="submit"
                    variant="white"
                    size="md"
                    className="h-12 px-7 font-bold shrink-0 border-none shadow-none cursor-pointer"
                  >
                    <span>ساخت کاتالوگ من</span>
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
