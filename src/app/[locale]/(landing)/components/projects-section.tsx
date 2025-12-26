"use client";

import { MapPin } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const projects = [
  { image: "/images/6.jpg", location: "جدة - حي الروضة" },
  { image: "/images/7.jpg", location: "جدة - حي الشاطئ" },
  { image: "/images/9.jpg", location: "جدة - حي النعيم" },
  { image: "/images/10.jpg", location: "جدة - حي السلامة" },
  { image: "/images/13.jpg", location: "جدة - حي الحمراء" },
  { image: "/images/17.jpg", location: "جدة - حي المروة" }
];

export default function ProjectsSection() {
  const t = useTranslations("IndexPage.projects");

  return (
    <section
      id="projects"
      className="bg-background relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="pattern-grid absolute inset-0 opacity-30" />

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

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-4/3 relative overflow-hidden rounded-2xl">
                <ExportedImage
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="from-secondary/90 via-secondary/20 bg-linear-to-t absolute inset-0 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="text-primary h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="bg-primary text-secondary rounded-full px-6 py-3 text-sm font-medium shadow-lg">
                    {t("viewAll")}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
