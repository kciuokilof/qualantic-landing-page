import { cookies } from "next/headers";
import type { Variant } from "@/lib/ab-test";
import { VariantA } from "./variants/variant-a";
import { VariantB } from "./variants/variant-b";
import { VariantTracker } from "@/components/variant-tracker";

export default async function Home() {
  const cookieStore = await cookies();
  const variant = (cookieStore.get("ab-variant")?.value as Variant) || "a";

  return (
    <>
      <VariantTracker variant={variant} />
      {variant === "a" ? <VariantA /> : <VariantB />}
    </>
  );
}
