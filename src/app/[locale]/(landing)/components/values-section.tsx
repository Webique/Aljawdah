"use client";

import { Building2, Globe, Handshake, TrendingUp } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
  const t = useTranslations("IndexPage.values");

  const values = [
    {
      titleKey: "value1.title" as const,
      descKey: "value1.description" as const,
      icon: TrendingUp,
      image: "/images/10.jpg"
    },
    {
      titleKey: "value2.title" as const,
      descKey: "value2.description" as const,
      icon: Building2,
      image: "/images/17.jpg"
    },
    {
      titleKey: "value3.title" as const,
      descKey: "value3.description" as const,
      icon: Handshake,
      image: "/images/20.jpg"
    },
    {
      titleKey: "value4.title" as const,
      descKey: "value4.description" as const,
      icon: Globe,
      image: "/images/21.jpg"
    }
  ];

  return (
    <section className="bg-background relative overflow-hidden py-20 lg:py-32">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="bg-primary/10 text-primary mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            {t("title")}
          </div>
          <h2 className="text-secondary text-3xl font-bold md:text-4xl">
            {t("subtitle")}
          </h2>
        </m.div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <m.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <ExportedImage
                    src={value.image}
                    alt={t(value.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="from-secondary/90 via-secondary/50 bg-linear-to-t absolute inset-0 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-secondary mb-2 text-lg font-bold">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
