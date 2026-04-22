"use client";

import { useEffect, useState } from "react";
import { getVariantFromCookie, type Variant } from "@/lib/ab-test";
import { VariantA } from "./variants/variant-a";
import { VariantB } from "./variants/variant-b";
import posthog from "posthog-js";

export default function Home() {
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = getVariantFromCookie();
    setVariant(v);
    posthog.capture("variant_assigned", { variant: v });
  }, []);

  // Brief loading state while reading cookie
  if (!variant) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return variant === "a" ? <VariantA /> : <VariantB />;
}
