export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/bellanotte_sa",
    facebook: "https://www.facebook.com/bellanotte.sa",
    whatsapp: "https://wa.me/966888888888"
  },

  support: {
    phone: "+966 88 888 8888",
    email: "hello@bellanotte.sa",
    whatsapp: "+966888888888"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
