"use client";

import { Award, Target } from "lucide-react";
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
      {/* Background Pattern */}
      <div className="pattern-dots absolute inset-0 opacity-50" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 relative overflow-hidden rounded-3xl">
              <ExportedImage
                src="/images/3.jpg"
                alt="About Al-Jawdah"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="from-secondary/40 bg-linear-to-t absolute inset-0 to-transparent" />
            </div>

            {/* Floating Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -end-6 rounded-2xl bg-white p-6 shadow-xl lg:-end-12"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Award className="text-primary h-7 w-7" />
                </div>
                <div>
                  <div className="text-secondary text-2xl font-bold">15+</div>
                  <div className="text-muted-foreground text-sm">
                    {t("vision")}
                  </div>
                </div>
              </div>
            </m.div>

            {/* Decorative element */}
            <div className="border-primary/20 absolute -start-4 -top-4 h-24 w-24 rounded-2xl border-4" />
          </m.div>

          {/* Content Side */}
          <div>
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
              className="text-secondary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              {t("subtitle")}
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 text-lg leading-relaxed"
            >
              {t("description")}
            </m.p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="border-border bg-card hover:border-primary/30 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Target className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-secondary text-lg font-bold">
                    {t("mission")}
                  </h3>
                </div>
                <p className="text-muted-foreground">{t("missionText")}</p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-border bg-card hover:border-primary/30 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Award className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-secondary text-lg font-bold">
                    {t("vision")}
                  </h3>
                </div>
                <p className="text-muted-foreground">{t("visionText")}</p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
