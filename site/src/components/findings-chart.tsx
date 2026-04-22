"use client";

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

function DonutChart() {
  let cumulativePercent = 0;

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="shrink-0"
    >
      {SEGMENTS.map((seg) => {
        const dashLength = (seg.percent / 100) * CIRCUMFERENCE;
        const dashOffset = -((cumulativePercent / 100) * CIRCUMFERENCE);
        cumulativePercent += seg.percent;

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
            strokeDashoffset={dashOffset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
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
        199
      </text>
      <text
        x={SIZE / 2}
        y={SIZE / 2 + 16}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-gray-500 text-xs"
        style={{ fontSize: 12 }}
      >
        of 200 clusters
      </text>
    </svg>
  );
}

export function FindingsChart() {
  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-8">
        What researchers confirmed
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <DonutChart />
        <div className="flex-1 space-y-4">
          {SEGMENTS.map((seg) => (
            <div key={seg.label} className="flex items-start gap-3">
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
