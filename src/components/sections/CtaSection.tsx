import React, { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Button } from '@/components/ui';
import { HeaderSections } from '@/components/common/header-sections';
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
    <section id="cta" className="py-20 md:py-28 bg-white text-black">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
        >
          <Card
            variant="surface"
            className="bg-[#f5f4fd] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center space-y-6 relative overflow-hidden border-none shadow-none"
          >
            {/* عنوان و زیرعنوان منطبق با بخش ۱۰ سند محتوا */}
            <HeaderSections
              icon={<Sparkles className="w-5 h-5" />}
              title="دیگه لازم نیست برای هر تغییر قیمت، یه فایل جدید بسازی"
              subtitle="همین الان کاتالوگ خودت رو بساز و یک لینک ثابت برای همیشه داشته باش."
            />

            {submitted ? (
              <div className="p-4 rounded-xl bg-[#eae9fb] text-[#3525cd] flex items-center gap-2 text-sm font-semibold border-none">
                <CheckCircle2 className="w-5 h-5 text-[#3525cd]" />
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
                  className="flex-1 h-12 px-4 rounded-xl bg-white text-black placeholder:text-black/40 text-sm outline-none border-none focus:bg-white"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="h-12 px-6"
                >
                  <span>ساخت کاتالوگ من</span>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>
              </form>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-black/70">
              <span>✓ پلن رایگان برای شروع</span>
              <span>✓ ورود سریع با شماره موبایل</span>
              <span>✓ بدون نیاز به نصب اپلیکیشن برای مشتری‌هات</span>
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};
