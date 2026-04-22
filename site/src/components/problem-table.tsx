import { Badge } from "@/components/ui/badge";

const EXAMPLES = [
  {
    column: "job_title",
    value: "01/2019 - Present",
    issue: "Date range parsed as job title",
  },
  {
    column: "first_name",
    value: "THC Pharmacy",
    issue: "Organization, not a person",
  },
  {
    column: "company_name",
    value: "John Smith",
    issue: "Person name in company field",
  },
  {
    column: "job_title",
    value: "Classification Cutsoms Brokarage",
    issue: "Garbled / spelling errors",
  },
  {
    column: "first_name",
    value: "Nephrology",
    issue: "Medical specialty, not a name",
  },
  {
    column: "region",
    value: "United States",
    issue: "Country in a region field",
  },
];

interface ProblemTableProps {
  heading?: string;
  subtitle?: string;
}

export function ProblemTable({
  heading = "The records your checks miss",
  subtitle,
}: ProblemTableProps) {
  return (
    <section className="py-20 bg-gray-50" id="problem">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          {heading}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 rounded-tl-lg">
                  Column
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100">
                  Value
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 rounded-tr-lg">
                  What&apos;s Wrong
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

        <p className="mt-8 text-center text-gray-500 text-sm max-w-xl mx-auto">
          These records pass null checks. They pass schema validation. They pass
          freshness monitoring. They exist in your production database right now.
        </p>
      </div>
    </section>
  );
}
