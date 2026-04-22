"use client";

import posthog from "posthog-js";

interface PricingProps {
  ctaText?: string;
  variant: "a" | "b";
}

const FEATURES = [
  "One dataset, up to 3 text columns",
  "Up to 2M unique records",
  "Full anomaly report with clustered findings",
  "30-min walkthrough call",
  "Full integration designs options",
];

export function Pricing({
  ctaText = "Book a Pilot Call",
  variant,
}: PricingProps) {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="mx-auto max-w-lg px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Pilot Data Scan
        </h2>
        <p className="mt-4 text-center text-gray-600">
          See what&apos;s hiding in your data. One scan, one report.
        </p>

        <div className="mt-10 rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-lg">
          <div className="text-center">
            <span className="text-5xl font-bold text-gray-900">$3,000</span>
            <span className="ml-2 text-gray-500">one-time</span>
          </div>

          <ul className="mt-8 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            onClick={() => {
              posthog.capture("cta_click", {
                location: "pricing",
                variant,
                cta_text: ctaText,
              });
            }}
            className="mt-8 block w-full text-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
          >
            {ctaText}
          </a>

          <p className="mt-4 text-center text-xs text-gray-500">
            Need more? Let&apos;s talk about implementation &amp; managed service
            options.
          </p>
        </div>
      </div>
    </section>
  );
}
