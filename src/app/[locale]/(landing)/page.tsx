import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "./components/about-section";
import CertsSection from "./components/certs-section";
import ContactSection from "./components/contact-section";
import CTASection from "./components/cta-section";
import FeaturesSection from "./components/features-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import ProjectsSection from "./components/projects-section";
import ServicesSection from "./components/services-section";
import ValuesSection from "./components/values-section";
import VisionMissionSection from "./components/vision-mission-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ValuesSection />
      <ServicesSection />
      <ProjectsSection />
      <FeaturesSection />
      <GallerySection />
      <CertsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
