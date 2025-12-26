"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import Whatsapp from "@/assets/icons/whatsapp-2.svg";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.contact");

  const contactInfo = [
    {
      icon: Phone,
      label: t("phone"),
      value: siteConfig.support.phone,
      href: `tel:${siteConfig.support.phone}`
    },
    {
      icon: Mail,
      label: t("email"),
      value: siteConfig.support.email,
      href: `mailto:${siteConfig.support.email}`
    },
    {
      icon: MapPin,
      label: t("location"),
      value: t("locationValue"),
      href: null
    },
    {
      icon: Clock,
      label: t("workingHours"),
      value: t("workingHoursValue"),
      href: null
    }
  ];

  return (
    <section
      id="contact"
      className="from-primary/5 via-background to-background bg-linear-to-b relative overflow-hidden py-24 lg:py-36"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-40 -start-40 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            {t("title")}
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-secondary mb-6 text-4xl font-bold md:text-5xl"
          >
            {t("subtitle")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {t("description")}
          </m.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Info Cards */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item, index) => {
                  const CardContent = (
                    <>
                      <div className="bg-primary/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                        <item.icon className="text-primary h-5 w-5" />
                      </div>
                      <p className="text-muted-foreground mb-1 text-sm font-medium">
                        {item.label}
                      </p>
                      <p
                        className="text-secondary text-base font-semibold"
                        dir={item.icon === Phone ? "ltr" : undefined}
                      >
                        {item.value}
                      </p>
                    </>
                  );

                  return (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card hover:shadow-primary/5 group block h-full rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                        >
                          {CardContent}
                        </a>
                      ) : (
                        <div className="border-border/50 bg-card/50 h-full rounded-2xl border p-6 backdrop-blur-sm">
                          {CardContent}
                        </div>
                      )}
                    </m.div>
                  );
                })}
              </div>
            </m.div>

            {/* WhatsApp Card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="border-primary/20 from-primary/10 to-primary/5 bg-linear-to-br flex h-full flex-col items-center justify-center rounded-2xl border p-8 text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl border-4 border-white/80 p-2 shadow-lg">
                  <ExportedImage
                    src="/images/whatsapp-qr.jpeg"
                    alt="WhatsApp QR Code"
                    width={180}
                    height={180}
                    className="object-cover"
                  />
                </div>

                <div className="bg-primary/10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full">
                  <Whatsapp className="text-primary h-5 w-5" />
                </div>

                <h3 className="text-secondary mb-2 text-xl font-bold">
                  {t("whatsapp")}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t("scanToChat")}
                </p>

                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <Whatsapp className="h-4 w-4" />
                  {t("chatNow")}
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
