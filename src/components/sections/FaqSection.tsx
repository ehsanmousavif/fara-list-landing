import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
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
    <section id="faq" className="py-20 md:py-28 bg-transparent text-black">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {/* هدر بخش با IconStack */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.05}
          className="text-center"
        >
          <HeaderSections
            icon={<HelpCircle className="w-5 h-5" />}
            title="پرسش‌های متداول درباره فرالیست"
            subtitle="پاسخ سریع به متداول‌ترین سوالات شما در مورد امکانات و نحوه استفاده از پلتفرم."
          />
        </AnimatedContent>

        {/* کامپوننت آکاردئون c-accordion-1 پیاده‌سازی شده برای فرالیست */}
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.06}
          className="w-full"
        >
          <Accordion multiple={false} defaultValue={[FAQ_DATA[0]?.id || 'faq-1']}>
            {FAQ_DATA.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default FaqSection;
