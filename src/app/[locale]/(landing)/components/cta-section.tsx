"use client";

import { Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function CTASection() {
  const t = useTranslations("IndexPage.cta");

  return (
    <section className="bg-primary relative overflow-hidden py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(26,43,74,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(26,43,74,0.05),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-secondary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-secondary/80 mb-10 text-lg"
          >
            {t("description")}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 h-auto gap-3 rounded-full px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                {t("button")}
              </Link>
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
}
