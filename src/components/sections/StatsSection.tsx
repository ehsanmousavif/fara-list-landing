import React from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { Card } from "@/components/ui";
import { STATS_DATA } from "@/data/landingData";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedContent
          distance={150}
          blur={12}
          wipe="none"
          staggerFrom="end"
          duration={1}
          stagger={0.06}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {STATS_DATA.map((item) => (
            <Card
              key={item.id}
              variant="surface"
              className="bg-[#030430] p-6 flex flex-col items-center justify-center space-y-2"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight">
                {item.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {item.label}
              </span>
              <span className="text-xs text-white/70">{item.desc}</span>
            </Card>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};
