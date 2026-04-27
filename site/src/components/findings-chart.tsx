"use client";

import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  {
    percent: 76,
    label: "Wrong leadership tags",
    detail:
      "Real job titles that didn\u2019t belong in the executive category. Tags corrected in bulk \u2014 80,000 records updated.",
    color: "var(--color-brand-600)",
    colorClass: "bg-brand-600",
  },
  {
    percent: 18,
    label: "Needed row-by-row review",
    detail:
      "Mixed clusters where some records were valid and others weren\u2019t. Sent to domain experts for individual classification.",
    color: "var(--color-brand-400)",
    colorClass: "bg-brand-400",
  },
  {
    percent: 6,
    label: "Not job titles at all",
    detail:
      "Dates, word fragments, descriptions \u2014 data that should never have been in a title field. 6,000 records removed.",
    color: "var(--color-brand-200)",
    colorClass: "bg-brand-200",
  },
];

// SVG donut chart using stroke-dasharray/dashoffset on circles.
// Each segment is a circle with a partial stroke.
const SIZE = 200;
const STROKE = 32;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ANIMATION_DURATION = 1200; // ms for the full draw-in
const COUNT_DURATION = 1000; // ms for the number count-up

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);

  return value;
}

function DonutChart({ animate }: { animate: boolean }) {
  let cumulativePercent = 0;

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="shrink-0"
    >
      {SEGMENTS.map((seg, i) => {
        const dashLength = (seg.percent / 100) * CIRCUMFERENCE;
        const dashOffset = -((cumulativePercent / 100) * CIRCUMFERENCE);
        cumulativePercent += seg.percent;

        // Stagger each segment's animation
        const segmentDelay = (i / SEGMENTS.length) * (ANIMATION_DURATION * 0.4);

        return (
          <circle
            key={seg.label}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={seg.color}
            strokeWidth={STROKE}
            strokeDasharray={`${dashLength} ${CIRCUMFERENCE - dashLength}`}
            strokeDashoffset={
              animate ? dashOffset : dashOffset + dashLength
            }
            strokeLinecap="butt"
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            style={{
              transition: `stroke-dashoffset ${ANIMATION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${segmentDelay}ms`,
            }}
          />
        );
      })}
      {/* Center text */}
      <text
        x={SIZE / 2}
        y={SIZE / 2 - 8}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-gray-900 text-3xl font-bold"
        style={{ fontSize: 32, fontWeight: 700 }}
      >
        <CountUpText target={199} duration={COUNT_DURATION} active={animate} />
      </text>
      <text
        x={SIZE / 2}
        y={SIZE / 2 + 16}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-gray-500 text-xs"
        style={{
          fontSize: 12,
          opacity: animate ? 1 : 0,
          transition: `opacity 400ms ease ${ANIMATION_DURATION * 0.3}ms`,
        }}
      >
        of 200 clusters
      </text>
    </svg>
  );
}

function CountUpText({
  target,
  duration,
  active,
}: {
  target: number;
  duration: number;
  active: boolean;
}) {
  const value = useCountUp(target, duration, active);
  return <>{active ? value : 0}</>;
}

export function FindingsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-8">
        What researchers confirmed
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <DonutChart animate={visible} />
        <div className="flex-1 space-y-4">
          {SEGMENTS.map((seg, i) => (
            <div
              key={seg.label}
              className="flex items-start gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(12px)",
                transition: `opacity 500ms ease ${600 + i * 150}ms, transform 500ms ease ${600 + i * 150}ms`,
              }}
            >
              <span
                className={`${seg.colorClass} mt-1.5 shrink-0 block w-3 h-3 rounded-full`}
              />
              <div>
                <p className="font-medium text-gray-900">
                  <span className="font-bold">{seg.percent}%</span>{" "}
                  {seg.label}
                </p>
                <p className="mt-0.5 text-sm text-gray-600">{seg.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
