"use client";

import { useEffect } from "react";
import Script from "next/script";
import { captureAttribution } from "@/lib/attribution";

const GA_ID = "G-9ZDBJPX3GS";

export default function GoogleAnalytics() {
  // Record the campaign that brought this visit before the visitor navigates
  // away from the landing page and the utm_* parameters are gone.
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
