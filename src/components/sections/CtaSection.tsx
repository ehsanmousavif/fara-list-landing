import React, { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Card, Button, Badge } from '@/components/ui';
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
    <section id="cta" className="py-20 md:py-28 bg-black text-white">
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
            className="bg-[#030430] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center space-y-6 relative overflow-hidden"
          >
            <Badge variant="primary" className="bg-white/15 text-white">
              <Sparkles className="w-3.5 h-3.5 ml-1.5 inline" />
              همین امروز شروع کنید
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl">
              لیست قیمت کسب‌وکار خود را در ۲ دقیقه آنلاین کنید!
            </h2>

            <p className="max-w-xl text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
              بدون نیاز به کارت بانکی، در فرالیست ثبت‌نام کنید و اولین لیست قیمت هوشمند خود را با لینک و کیوآرکد اختصاصی بسازید.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-white/10 text-white flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>درخواست شما ثبت شد! همکاران فرالیست به زودی با شما تماس می‌گیرند.</span>
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
                  className="flex-1 h-12 px-4 rounded-xl bg-white/10 text-white placeholder:text-white/40 text-sm outline-none border-none focus:bg-white/15"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="h-12 px-6"
                >
                  <span>ثبت‌نام رایگان</span>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                </Button>
              </form>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
              <span>✓ پلن رایگان بدون محدودیت زمانی</span>
              <span>✓ ورود سریع با شماره موبایل</span>
              <span>✓ پشتیبانی آنلاین فارسی</span>
            </div>
          </Card>
        </AnimatedContent>
      </div>
    </section>
  );
};
