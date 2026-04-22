"use client";

import { useEffect, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import posthog from "posthog-js";

const CAL_LINK = "kamil-koziol-qualantic/30min";

export function Booking() {
  const tracked = useRef(false);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    if (!tracked.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            posthog.capture("booking_section_viewed");
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      const el = document.getElementById("booking");
      if (el) observer.observe(el);
      tracked.current = true;

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="py-20 bg-white" id="booking">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Ready to see what&apos;s hiding in your data?
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-xl mx-auto">
          Book a 30-minute pilot call. We&apos;ll discuss your dataset and
          whether a scan makes sense.
        </p>

        <div className="mt-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
          <Cal
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Can&apos;t find a time that works?{" "}
          <a
            href="mailto:contact@qualantic.com"
            className="text-brand-600 hover:text-brand-700 underline"
          >
            Email us
          </a>
        </p>
      </div>
    </section>
  );
}