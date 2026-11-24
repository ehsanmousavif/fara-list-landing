import React from 'react';
import AnimatedContent from '@/components/effects/AnimatedContent';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQ_DATA } from '@/data/landingData';
import { HeaderSections } from '@/components/common/header-sections';
import { HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[#191458] text-white">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {/* هدر بخش سوالات متداول با استایل معکوس */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="text-center"
        >
          <HeaderSections
            icon={<HelpCircle className="w-5 h-5" />}
            title="پرسش‌های متداول درباره فرالیست"
            subtitle="پاسخ سریع به متداول‌ترین سوالات شما در مورد امکانات و نحوه استفاده از پلتفرم."
            inverted
          />
        </AnimatedContent>

        {/* کامپوننت آکاردئون با تم معکوس و شیشه‌ای روی پس‌زمینه پرایمری */}
        <AnimatedContent
          distance={36}
          blur={0}
          duration={0.65}
          ease="power2.out"
          className="w-full"
        >
          <Accordion multiple={false} defaultValue={[FAQ_DATA[0]?.id || 'faq-1']}>
            {FAQ_DATA.map((item) => (
              <AccordionItem key={item.id} value={item.id} inverted>
                <AccordionTrigger inverted>{item.question}</AccordionTrigger>
                <AccordionContent inverted>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default FaqSection;
