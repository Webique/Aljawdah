"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("features"), href: "#features" },
    { label: t("contact"), href: "#contact" }
  ];

  return (
    <footer className="bg-secondary relative text-white">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(254,133,161,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(58,0,15,0.2),transparent_50%)]" />
      </div>

      {/* Decorative top border */}
      <div className="via-secondary bg-linear-to-r absolute start-0 top-0 h-1 w-full from-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Larger Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <Logo imgClassName="w-36 sm:w-40" className="mb-6" />
            <p className="mb-6 max-w-md text-lg leading-relaxed text-white/90">
              {t("companyDescription")}
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span
                className="text-brand-pink text-base font-semibold italic"
                style={{ fontFamily: "serif" }}
              >
                &ldquo;Parce que votre nuit mérite d&rsquo;être belle&rdquo;
              </span>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/70">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-pink group inline-flex items-center text-base text-white/80 transition-all duration-300 hover:translate-x-1 rtl:hover:-translate-x-1"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-brand-pink absolute bottom-0 start-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white/70">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                className="hover:text-brand-pink group flex items-center gap-3 text-sm text-white/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="bg-brand-pink/20 ring-brand-pink/30 group-hover:bg-brand-pink/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all">
                  <Phone className="text-brand-pink h-4 w-4" />
                </div>
                <div dir="ltr">{siteConfig.support.phone}</div>
              </m.a>

              <m.a
                href={`mailto:${siteConfig.support.email}`}
                className="hover:text-brand-pink group flex items-center gap-3 text-sm text-white/80 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="bg-brand-pink/20 ring-brand-pink/30 group-hover:bg-brand-pink/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all">
                  <Mail className="text-brand-pink h-4 w-4" />
                </div>
                <div className="break-all">{siteConfig.support.email}</div>
              </m.a>

              <div className="flex items-center gap-3 text-sm text-white/80">
                <div className="bg-brand-pink/20 ring-brand-pink/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1">
                  <MapPin className="text-brand-pink h-4 w-4" />
                </div>
                <div>{t("location")}</div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
              <p className="text-sm text-white/70">
                {t("copyright", { year: currentYear })}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Made with ♡ for elegant nights</span>
            </div>
          </div>
        </m.div>
      </div>

      {/* Bottom gradient accent */}
      <div className="via-secondary bg-linear-to-r absolute bottom-0 start-0 h-px w-full from-transparent to-transparent" />
    </footer>
  );
};

export default Footer;
