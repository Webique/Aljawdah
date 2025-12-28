"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const certs = [
  { src: "/images/certs/2.jpg", alt: "Certificate 2" },
  { src: "/images/certs/3.jpg", alt: "Certificate 3" },
  { src: "/images/certs/4.jpg", alt: "Certificate 4" },
  { src: "/images/certs/5.jpg", alt: "Certificate 5" }
];

export default function CertsSection() {
  const t = useTranslations("IndexPage.certs");

  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="bg-primary/10 text-primary mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            {t("badge")}
          </div>
          <h2 className="text-secondary text-3xl font-bold md:text-4xl">
            {t("title")}
          </h2>
        </m.div>

        {/* Certificates grid - 2x2 layout */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {certs.map((cert, index) => (
            <m.div
              key={cert.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border-4 border-black bg-white shadow-lg"
            >
              <ExportedImage
                src={cert.src}
                alt={cert.alt}
                width={400}
                height={600}
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
