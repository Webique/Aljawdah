"use client";

import { Award, HeadphonesIcon, Shield, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const features = [
  { key: "trust", icon: Shield },
  { key: "experience", icon: Award },
  { key: "quality", icon: Star },
  { key: "support", icon: HeadphonesIcon }
];

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.features");

  return (
    <section className="bg-secondary relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(227,185,80,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(227,185,80,0.05),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/20 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            {t("title")}
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            {t("subtitle")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            {t("description")}
          </m.p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <m.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="hover:border-primary/30 h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <div className="bg-primary/20 group-hover:bg-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:shadow-lg">
                  <feature.icon className="text-primary group-hover:text-secondary h-8 w-8 transition-colors" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {t(`${feature.key}.title`)}
                </h3>

                <p className="text-white/70">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
