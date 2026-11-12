import { defaultLocale } from "@/i18n/config";

const FB_DOMAIN_VERIFICATION = "2060l0ki4xff1q23gkqhx9s4opi7w3";

// With `output: "export"`, `redirect()` only produces a client-side JS
// redirect inside an empty error shell, so crawlers that don't run JS
// (e.g. Meta domain verification) see no <head> tags at the root URL.
// Render a real HTML document carrying the verification tag and an
// instant meta refresh to the default locale instead.
export default function RootPage() {
  const target = `/${defaultLocale}/`;

  return (
    <html lang={defaultLocale} dir="rtl">
      <head>
        <meta
          name="facebook-domain-verification"
          content={FB_DOMAIN_VERIFICATION}
        />
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <title>الجودة العقارية</title>
      </head>
      <body>
        <a href={target}>الجودة العقارية</a>
      </body>
    </html>
  );
}
