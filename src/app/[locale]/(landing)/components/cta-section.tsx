"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function CTASection() {
  const t = useTranslations("IndexPage.cta");

  return (
    <section className="bg-primary relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Vectors */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top right decorative lines */}
        <svg
          className="text-secondary/10 absolute -right-10 top-10 h-60 w-60"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M0 100 L200 100" stroke="currentColor" strokeWidth="1" />
          <path d="M0 120 L180 120" stroke="currentColor" strokeWidth="1" />
          <path d="M0 140 L160 140" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100 0 L100 200" stroke="currentColor" strokeWidth="1" />
          <path d="M120 20 L120 180" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Bottom left geometric shape */}
        <svg
          className="text-secondary/10 absolute -bottom-10 left-10 h-48 w-48"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>

        {/* Bottom right corner arc */}
        <svg
          className="text-secondary/10 absolute -bottom-20 -right-20 h-72 w-72"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M200 0 A200 200 0 0 1 0 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 40 A160 160 0 0 1 40 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200 80 A120 120 0 0 1 80 200"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
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
              className="bg-secondary hover:bg-secondary/90 h-auto min-w-[180px] gap-3 rounded-full px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-6" />
                {t("button")}
              </Link>
            </Button>
          </m.div>
        </div>
      </div>
    </section>
  );
}
