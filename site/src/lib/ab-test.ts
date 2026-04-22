export type Variant = "a" | "b";

export function getVariantFromCookie(): Variant {
  if (typeof document === "undefined") return "a";
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("ab-variant="));
  const value = match?.split("=")[1];
  if (value === "a" || value === "b") return value;
  return "a";
}
