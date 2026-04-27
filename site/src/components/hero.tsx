"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";

interface HeroProps {
  headline: React.ReactNode;
  subheadline: string;
  ctaText: string;
  ctaHref?: string;
  variant: "a" | "b";
}

function fadeUp(mounted: boolean, delayMs: number): React.CSSProperties {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 600ms ease-out ${delayMs}ms, transform 600ms ease-out ${delayMs}ms`,
  };
}

export function Hero({
  headline,
  subheadline,
  ctaText,
  ctaHref = "#booking",
  variant,
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
          style={fadeUp(mounted, 100)}
        >
          {headline}
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          style={fadeUp(mounted, 250)}
        >
          {subheadline}
        </p>
        <div className="mt-10" style={fadeUp(mounted, 400)}>
          <a
            href={ctaHref}
            onClick={() => {
              posthog.capture("cta_click", {
                location: "hero",
                variant,
                cta_text: ctaText,
              });
            }}
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-700 hover:shadow-xl transition-all duration-200"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
