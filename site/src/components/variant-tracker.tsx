"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import type { Variant } from "@/lib/ab-test";

export function VariantTracker({ variant }: { variant: Variant }) {
  useEffect(() => {
    posthog.capture("variant_assigned", { variant });
  }, [variant]);

  return null;
}
