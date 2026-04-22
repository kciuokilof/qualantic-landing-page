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

export function VariantB() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero
          headline={
            <>
              <span className="block">Great data quality begins with granular inspection.</span>
              <span className="block">Now you can do it for your text data with Qualantic.</span>
            </>
          }
          subheadline="Qualantic finds semantically broken records that rule based checks, schema checks, and distribution monitoring can't catch. It's a scalable workflow for large datasets. Start monitoring semantic correctness of your data with clear Qualantic reports."
          ctaText="Book a Pilot Call"
          variant="b"
        />
        <ProblemTable
          heading="The records your data observability platform miss"
          subtitle="When records have wrong data in wrong columns, aggregate metrics show nothing. These issues are sparse, semantic, and invisible to schema checks — but obvious to your customers."
        />
        <CaseStudy />
        <Results />
        <UseCases />
        <HowItWorks />
        <Pricing variant="b" />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
