"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FindingsChart } from "@/components/findings-chart";

const STATS = [
  { value: "1.7M", label: "unique titles scanned" },
  { value: "199/200", label: "clusters required action" },
  { value: "80K", label: "records corrected" },
  { value: "6K", label: "records unpublished" },
];

const EXAMPLES = [
  {
    column: "job_title",
    value: "Chief 2019",
    issue: "A year, not a title",
  },
  {
    column: "job_title",
    value: "Presents",
    issue: "Word fragment, not a role",
  },
  {
    column: "job_title",
    value: "Booster Club President",
    issue: "Volunteer role, not corporate title",
  },
  {
    column: "job_title",
    value: "Founding Team. Sales and Partnerships",
    issue: "Role description, not a title",
  },
  {
    column: "job_title",
    value: "President of Physics and Astronomy Club",
    issue: "Student club — detected via company context",
  },
];

export function CaseStudy() {
  return (
    <section className="py-20 bg-white" id="case-study">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-gray-900">
            Case study
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Cleaning executive title data at a B2B data provider
          </h2>
        </div>

        {/* The story */}
        <div className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            A B2B data provider wanted to validate the quality of their executive-level
            job title data. They had <strong>1.7 million unique titles</strong> tagged
            as senior leadership. Schema checks, null checks, and distribution monitoring
            showed everything was clean.
          </p>
          <p>
            A single Qualantic scan grouped similar records into{" "}
            <strong>clusters</strong> &mdash; groups of titles that share a pattern &mdash;
            and flagged the suspicious ones. An LLM verified each cluster, and the top
            200 most suspicious were sent to domain experts for final review.
          </p>
          <p>
            The result: <strong>199 out of 200 clusters required action.</strong> Only
            one turned out to be clean data.
          </p>
        </div>

        {/* What researchers found — donut chart version */}
        <FindingsChart />

        {/* Old list version (kept for reference):
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What researchers confirmed
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-2xl font-bold text-brand-600 shrink-0 w-16 text-right">76%</div>
              <div>
                <p className="font-medium text-gray-900">of clusters had wrong leadership tags</p>
                <p className="mt-1 text-sm text-gray-600">
                  These were real job titles, but they didn&apos;t belong in the executive category.
                  The tags were corrected in bulk &mdash; <strong>80,000 records updated</strong>.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-2xl font-bold text-brand-600 shrink-0 w-16 text-right">18%</div>
              <div>
                <p className="font-medium text-gray-900">of clusters needed row-by-row review</p>
                <p className="mt-1 text-sm text-gray-600">
                  Mixed clusters where some records were valid and others weren&apos;t.
                  Sent to domain experts for individual classification.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-2xl font-bold text-brand-600 shrink-0 w-16 text-right">6%</div>
              <div>
                <p className="font-medium text-gray-900">of clusters were not job titles at all</p>
                <p className="mt-1 text-sm text-gray-600">
                  Dates, word fragments, descriptions &mdash; data that should never have been
                  in a title field. <strong>6,000 records unpublished</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* Stats summary */}
        <AnimatedStats stats={STATS} />

        {/* Example anomalies found */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Examples of what was found
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 rounded-tl-lg">
                    Column
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100">
                    Value found
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 rounded-tr-lg">
                    What&apos;s wrong
                  </th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLES.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    } hover:bg-brand-50/50 transition-colors`}
                  >
                    <td className="px-4 py-3">
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {row.column}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-red-600 font-medium">
                      {row.value}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.issue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">
            &ldquo;President of Physics and Astronomy Club&rdquo; looks like a
            valid title in isolation. The system flagged it because the company
            field showed a university &mdash; cross-column context reveals what
            single-column checks miss.
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-10 rounded-xl border-2 border-brand-200 bg-brand-50/50 p-6 text-center">
          <p className="text-gray-700">
            These records passed null checks, schema validation, and freshness
            monitoring.{" "}
            <span className="font-semibold text-gray-900">
              They were in production for years.
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Findings verified by domain experts. Only 1 out of 200 clusters
            required no action.
          </p>
        </div>

        {/* Pilot → Operational callout */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-600 shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                That was just the first batch.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                After reviewing the results, the pipeline was integrated into the
                operational workflow. New data is scanned continuously &mdash;
                each batch surfaces fresh clusters, and new members of already-flagged
                patterns are processed automatically. The tool improves over time
                through a feedback loop with domain experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedStats({ stats }: { stats: { value: string; label: string }[] }) {
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="text-center rounded-xl border border-gray-200 bg-gray-50 p-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
            transition: `opacity 500ms ease ${i * 120}ms, transform 500ms ease ${i * 120}ms`,
          }}
        >
          <div className="text-3xl sm:text-4xl font-bold text-brand-600">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
