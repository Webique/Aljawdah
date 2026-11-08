"use client";
import Script from "next/script";

const GTM_ID = "GTM-TM6QK9C4";

export default function GoogleTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());`}
      </Script>
    </>
  );
}
