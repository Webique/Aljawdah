"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const galleryImages = [
  "/images/18.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpg",
  "/images/25.jpg",
  "/images/26.jpg",
  "/images/28.jpg"
];

export default function GallerySection() {
  const t = useTranslations("IndexPage.gallery");

  return (
    <section className="bg-muted relative overflow-hidden py-20 lg:py-32">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5 ? "aspect-square" : "aspect-4/3"
                }`}
              >
                <ExportedImage
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="bg-secondary/20 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
