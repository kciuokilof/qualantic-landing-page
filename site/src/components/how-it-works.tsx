import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Onboarding
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Describe your columns. We scan every record. You get a report in five
          business days.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Left: What you provide */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/you-icon.png" alt="Your input" width={40} height={40} className="w-10 h-10 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-900">
                What you provide
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-500 mt-0.5 shrink-0"
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
                <div>
                  <span className="font-medium text-gray-900">
                    Your dataset
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    CSV file or database access — up to 1M records
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-500 mt-0.5 shrink-0"
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
                <div>
                  <span className="font-medium text-gray-900">
                    Column descriptions
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Tell us what each column should contain — e.g. &ldquo;director job
                    titles&rdquo;, &ldquo;person first names&rdquo;,
                    &ldquo;finance company names&rdquo;
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-500 mt-0.5 shrink-0"
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
                <div>
                  <span className="font-medium text-gray-900">
                    15-30 minute kickoff call
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    We align on what &ldquo;bad data&rdquo; means for your
                    specific use case
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: What you receive */}
          <div className="rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/small-icon.png" alt="Qualantic deliverables" width={40} height={40} className="w-10 h-10 rounded-full" />
              <h3 className="text-xl font-semibold text-gray-900">
                What you receive
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
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
                <div>
                  <span className="font-medium text-gray-900">
                    Cluster Overview
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Named groups of bad data — each with an AI-generated
                    description, size, and example records
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
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
                <div>
                  <span className="font-medium text-gray-900">
                    Record Details
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Every flagged record with its cluster, an AI explanation of
                    what&apos;s wrong, and columns for your team&apos;s review
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
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
                <div>
                  <span className="font-medium text-gray-900">
                    30-minute walkthrough call
                  </span>
                  <p className="text-sm text-gray-500 mt-0.5">
                    We walk you through the findings, explain each cluster type,
                    and discuss next steps
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Delivered as an Excel report — ready for your team to review,
              annotate, and act on.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
