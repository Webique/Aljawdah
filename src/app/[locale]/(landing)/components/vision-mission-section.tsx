"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function VisionMissionSection() {
  const t = useTranslations("IndexPage.visionMission");

  return (
    <section className="bg-muted/30 relative overflow-hidden py-16 lg:py-20">
      <div className="container relative mx-auto px-4">
        {/* Vision Row */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/3 relative overflow-hidden rounded-3xl shadow-2xl">
              <ExportedImage
                src="/images/vision.jpg"
                alt="Vision"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-secondary/20 absolute -end-6 -top-6 -z-10 h-full w-full rounded-3xl" />
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              {t("vision")}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("visionText")}
            </p>
          </m.div>
        </div>

        {/* Mission Row - Reversed */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              {t("mission")}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("missionText")}
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-4/3 relative overflow-hidden rounded-3xl shadow-2xl">
              <ExportedImage
                src="/images/mission.jpg"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-primary/20 absolute -start-6 -top-6 -z-10 h-full w-full rounded-3xl" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
