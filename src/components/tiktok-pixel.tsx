"use client";
import Script from "next/script";
import { useEffect } from "react";

const PIXEL_ID = "DBD082JC77U0O9VIJCQ0";

declare global {
  interface Window {
    ttq?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

// Map outbound links to TikTok standard events
function getEvent(href: string): [string, string] | null {
  if (href.includes("wa.me") || href.includes("whatsapp")) return ["Contact", "WhatsApp"];
  if (href.startsWith("tel:")) return ["Contact", "Phone"];
  if (href.startsWith("mailto:")) return ["Contact", "Email"];
  if (href.includes("docs.google.com/forms")) return ["SubmitForm", "Interest Form"];
  return null;
}

export default function TikTokPixel() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      const event = link && getEvent(link.href);
      if (event) window.ttq?.track(event[0], { content_name: event[1] });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Script id="tiktok-pixel" strategy="afterInteractive">
      {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('${PIXEL_ID}');
  ttq.page();
}(window, document, 'ttq');`}
    </Script>
  );
}
