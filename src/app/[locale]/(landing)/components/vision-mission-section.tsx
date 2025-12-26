"use client";

import { Eye, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function VisionMissionSection() {
  const t = useTranslations("IndexPage.visionMission");

  return (
    <section className="bg-muted/30 relative overflow-hidden py-20 lg:py-32">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-secondary text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </m.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vision Card */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <ExportedImage
                src="/images/saudi-2030-vision.png"
                alt="Vision"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="from-secondary/80 bg-linear-to-t absolute inset-0 to-transparent" />
              <div className="absolute bottom-6 start-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t("vision")}</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("visionText")}
              </p>
            </div>
          </m.div>

          {/* Mission Card */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <ExportedImage
                src="/images/7.jpg"
                alt="Mission"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="from-primary/80 bg-linear-to-t absolute inset-0 to-transparent" />
              <div className="absolute bottom-6 start-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("mission")}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("missionText")}
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
