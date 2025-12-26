"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section
      id="about"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
      <div className="pattern-dots absolute inset-0 opacity-50" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-4/5 relative overflow-hidden rounded-3xl shadow-2xl">
              <ExportedImage
                src="/images/3.jpg"
                alt="About Al-Jawdah"
                fill
                className="object-cover"
              />
              <div className="from-secondary/40 bg-linear-to-t absolute inset-0 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="border-primary/30 absolute -start-4 -top-4 h-24 w-24 rounded-2xl border-4" />
            <div className="bg-primary/10 absolute -bottom-8 -start-8 -z-10 h-32 w-32 rounded-full blur-2xl" />
          </m.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
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
              className="text-secondary mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            >
              {t("subtitle")}
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6 text-lg leading-relaxed"
            >
              {t("description")}
            </m.p>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {t("descriptionExtended")}
            </m.p>

            {/* Stats row */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-border mt-10 grid grid-cols-3 gap-6 border-t pt-8"
            >
              <div className="text-center">
                <div className="text-primary text-3xl font-bold">47+</div>
                <div className="text-muted-foreground text-sm">مشروع منجز</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-bold">264+</div>
                <div className="text-muted-foreground text-sm">وحدة عقارية</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-bold">2012</div>
                <div className="text-muted-foreground text-sm">سنة التأسيس</div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
