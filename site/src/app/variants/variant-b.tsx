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
              <span className="block">Missing piece of your text data quality is here.</span>
              <span className="block">Start monitoring semantic quality with Qualantic.</span>
            </>
          }
          subheadline="Text data correctness can’t rely only on rule-based or aggregate checks. Qualantic scans your text columns record by record at scale and points you to the rows that shouldn’t exist in production."
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
