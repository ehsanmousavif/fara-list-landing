'use client';

import React, { lazy, Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';

// سکشن‌های بالای fold رو eager بارگذاری می‌کنیم
import { StatsSection } from '@/components/sections/StatsSection';
import { ScrollRevealSection } from '@/components/sections/ScrollRevealSection';

// سکشن‌های پایین‌تر lazy load می‌شن — کاهش JS bundle اولیه
const LiveDemoSection = lazy(() =>
  import('@/components/sections/LiveDemoSection').then((m) => ({ default: m.LiveDemoSection }))
);
const HowItWorksSection = lazy(() =>
  import('@/components/sections/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection }))
);
const FeaturesSection = lazy(() =>
  import('@/components/sections/FeaturesSection').then((m) => ({ default: m.FeaturesSection }))
);
const AudienceSection = lazy(() =>
  import('@/components/sections/AudienceSection').then((m) => ({ default: m.AudienceSection }))
);
const ComparisonSection = lazy(() =>
  import('@/components/sections/ComparisonSection').then((m) => ({ default: m.ComparisonSection }))
);
const SocialProofSection = lazy(() =>
  import('@/components/sections/SocialProofSection').then((m) => ({ default: m.SocialProofSection }))
);
const PricingSection = lazy(() =>
  import('@/components/sections/PricingSection').then((m) => ({ default: m.PricingSection }))
);
const FaqSection = lazy(() =>
  import('@/components/sections/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const CtaSection = lazy(() =>
  import('@/components/sections/CtaSection').then((m) => ({ default: m.CtaSection }))
);
const ScratchCardSection = lazy(() =>
  import('@/components/sections/ScratchCardSection').then((m) => ({ default: m.ScratchCardSection }))
);
const Particles = lazy(() => import('@/components/ui/Particles'));

const SectionFallback = () => <div className="py-20" aria-hidden />;

export const LandingPage: React.FC = () => {
  return (
    <>
      <div className="relative z-20 bg-white">
        <HeroSection />
      </div>

      <Suspense fallback={null}>
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        >
          <Particles
            particleColors={['#3525cd', '#6858ee', '#a498fd']}
            particleCount={60}
            particleSpread={12}
            speed={0.08}
            particleBaseSize={80}
            sizeRandomness={0.7}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
            lightMode={true}
            opacity={0.3}
            className="w-full h-full"
          />
        </div>
      </Suspense>

      <div className="relative z-10 flex flex-col">
        <StatsSection />
        <ScrollRevealSection />

        <Suspense fallback={<SectionFallback />}>
          <LiveDemoSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <HowItWorksSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <AudienceSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ComparisonSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SocialProofSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CtaSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ScratchCardSection />
        </Suspense>
      </div>
    </>
  );
};

export default LandingPage;
