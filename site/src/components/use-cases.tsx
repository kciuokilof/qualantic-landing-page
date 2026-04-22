const SECONDARY_USE_CASES = [
  {
    title: "HR & Recruiting Data",
    description:
      "Job title normalization across millions of profiles. Date ranges, company names, and gibberish end up in the title field. Semantic analysis catches what standard validation can't.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Web Scraping Operations",
    description:
      "Column shifts, parsing errors, field contamination. When a fraction of scraped records have wrong data in wrong columns, aggregate metrics will never show it.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Compliance & Governance",
    description:
      "Regulatory reporting depends on record accuracy. Wrong entity types in screening systems or KYC fields with data from adjacent columns go beyond data quality.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section className="py-20 bg-gray-50" id="use-cases">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Built for teams that move data at scale
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          If you have text columns with millions of rows, you have broken
          records.
        </p>

        {/* Hero use case — B2B Data Providers */}
        <div className="mt-12 rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-50 text-brand-600">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              B2B Data Providers
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            You aggregate millions of contact records from dozens of sources. A
            LinkedIn scrape puts a person&apos;s name in the employer field. A
            vendor sends organization names in the first_name column. A job
            title field contains &ldquo;01/2019 - Present&rdquo; instead of an
            actual title. Those records ship to your customers, degrade their
            models, and trigger support escalations. Qualantic catches them
            before they leave your pipeline.
          </p>
        </div>

        {/* Secondary use cases — compact row */}
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider text-center mb-6">
            Also works for
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {SECONDARY_USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-gray-500">
                    {uc.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {uc.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
