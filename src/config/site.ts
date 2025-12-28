export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/Aljawdahco1",
    snapchat: "https://www.snapchat.com/add/Aljawdah_sa",
    tiktok: "https://www.tiktok.com/@Aljawdahco",
    whatsapp: "https://wa.me/966506040210",
    maps: "https://maps.app.goo.gl/JbeSYV8mkR1zH88J7?g_st=ic"
  },

  support: {
    phone: "+966 50 604 0210",
    email: "info@aljawdah.sa",
    whatsapp: "+966506040210",
    landline: "920020960"
  },

  location: {
    city: "Jeddah",
    district: "Al-Mohammadiyah",
    country: "Saudi Arabia"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
