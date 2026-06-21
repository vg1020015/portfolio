import React from "react";
import useOnScreen from "../hooks/useOnScreen.js";
import useCountUp from "../hooks/useCountUp.js";
import SectionWrapper from "./SectionWrapper.jsx";

const STATS = [
  {
    label: "Years of Experience",
    value: 3,
    suffix: "+",
  },
  {
    label: "Shopify Projects Delivered",
    value: 40,
    suffix: "+",
  },
  {
    label: "Performance Improvement",
    value: 40,
    suffix: "%",
  },
  {
    label: "Client Satisfaction",
    value: 100,
    suffix: "%",
  },
];

function StatItem({ label, value, suffix, isVisible }) {
  const count = useCountUp(value, {
    duration: 1600,
    start: isVisible,
  });

  return (
    <div
      className="
        text-center
        p-6
        rounded-2xl
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        hover:scale-105 transition
      "
    >
      <p className="font-display text-4xl md:text-5xl font-bold text-terracotta">
        {count}
        <span className="text-gold">{suffix}</span>
      </p>

      <p className="mt-3 text-xs md:text-sm tracking-wide text-ink/60 dark:text-paper/60 uppercase">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <SectionWrapper
      id="stats"
      eyebrow="impact_metrics"
      title="Results That Matter"
      className="bg-paper-surface dark:bg-ink-surface"
    >
      <div ref={ref} className="relative">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-orange-500/10 blur-[150px]" />
          <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-yellow-500/10 blur-[150px]" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              {...stat}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}