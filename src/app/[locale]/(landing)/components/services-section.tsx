"use client";

import {
  Building,
  Building2,
  HandCoins,
  Home,
  Key,
  MessageSquare
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.services");

  const services = [
    {
      icon: Building,
      title: t("sale.title"),
      description: t("sale.description")
    },
    {
      icon: Home,
      title: t("buy.title"),
      description: t("buy.description")
    },
    {
      icon: Key,
      title: t("rent.title"),
      description: t("rent.description")
    },
    {
      icon: MessageSquare,
      title: t("consulting.title"),
      description: t("consulting.description")
    },
    {
      icon: Building2,
      title: t("management.title"),
      description: t("management.description")
    },
    {
      icon: HandCoins,
      title: t("investment.title"),
      description: t("investment.description")
    }
  ];

  return (
    <section
      id="services"
      className="bg-muted relative overflow-hidden py-16 lg:py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="from-background to-background bg-linear-to-b absolute inset-0 via-transparent" />
      </div>

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

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border-border bg-card hover:border-primary/30 h-full rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl">
                <div className="bg-primary/10 group-hover:bg-primary mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-lg">
                  <service.icon className="text-primary group-hover:text-secondary h-7 w-7 transition-colors" />
                </div>

                <h3 className="text-secondary mb-3 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
