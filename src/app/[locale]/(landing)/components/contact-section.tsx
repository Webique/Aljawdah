"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

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
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="pattern-dots absolute inset-0 opacity-30" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            {t("title")}
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-secondary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {t("subtitle")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            {t("description")}
          </m.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="border-border bg-card hover:border-primary/30 group flex items-start gap-4 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300">
                      <item.icon className="text-primary group-hover:text-secondary h-6 w-6 transition-colors" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 text-sm">
                        {item.label}
                      </div>
                      <div
                        className="text-secondary font-medium"
                        dir={item.icon === Phone ? "ltr" : undefined}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="border-border bg-card flex items-start gap-4 rounded-2xl border p-6">
                    <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 text-sm">
                        {item.label}
                      </div>
                      <div className="text-secondary font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </m.div>
            ))}
          </m.div>

          {/* WhatsApp QR Code */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="border-border bg-card rounded-3xl border p-8 text-center shadow-lg">
              <div className="mb-6">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl">
                  <ExportedImage
                    src="/images/whatsapp-qr.jpeg"
                    alt="WhatsApp QR Code"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-secondary mb-2 text-lg font-bold">
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm">
                Scan to chat with us
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
