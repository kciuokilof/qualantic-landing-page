const SCENARIOS = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Buying or acquiring text data?",
    description:
      "You used to celebrate when a vendor delivered millions of records. Volume was the metric. But how many of those records actually make sense? A manual spot-check of 1,000 rows tells you almost nothing about the other 999,000. Qualantic scans the entire dataset and shows you exactly what you bought.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Already reviewing data manually?",
    description:
      "Manual validation doesn't scale. You can review hundreds of records a day, maybe a thousand. Qualantic pre-screens your entire dataset and surfaces the clusters that need attention. Your team focuses on what matters instead of scrolling through rows.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Relying on rules and dashboards?",
    description:
      "Your null checks pass. Your regex rules pass. Schema validation, freshness monitoring, format checks — all green. But inside those records, a job title says \"01/2019 - Present\" and a first name says \"THC Pharmacy.\" Rule-based checks can't catch what's semantically wrong. Qualantic adds the layer your current tools are missing.",
  },
];

export function Results() {
  return (
    <section className="py-20 bg-white" id="results">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Sound familiar?
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Every team working with large text datasets hits the same wall.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {SCENARIOS.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-50 mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
