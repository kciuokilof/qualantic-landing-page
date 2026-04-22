import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProblemTable } from "@/components/problem-table";
import { CaseStudy } from "@/components/case-study";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { Results } from "@/components/results";
import { Pricing } from "@/components/pricing";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export function VariantA() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero
          headline={
            <>
              <span className="block">Feeling that your data quality for text is missing something?</span>
              <span className="block">That's probably Qualantic.</span>
            </>
          }
          subheadline="Qualantic finds semantically broken records that rule based checks, schema checks, and distribution monitoring can't catch. It's a scalable workflow for large datasets. Start monitoring semantic correctness of your data with clear Qualantic reports."
          ctaText="Book a Pilot Call"
          variant="a"
        />
        <ProblemTable />
        <CaseStudy />
        <HowItWorks />
        <UseCases />
        <Results />
        <Pricing variant="a" />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
