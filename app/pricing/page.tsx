import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbListSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/container";
import HeroSection from "@/components/pricing/hero-section";
import PricingPlans from "@/components/pricing/plans";
import WhatPlan from "@/components/pricing/what-pan";
import FAQ from "@/components/pricing/faq";

export const metadata: Metadata = {
  title: "Pricing | Capcons — Creator & Brand Community Platform",
  description:
    "Transparent pricing for creators, entrepreneurs and brands on Capcons. Choose a plan that fits your community size and growth strategy — monthly or annual, no hidden fees.",
  keywords: [
    "Capcons pricing",
    "creator community pricing",
    "brand community platform pricing",
    "creator monetization platform cost",
    "community platform subscription",
    "Capcons plans",
    "creator brand platform pricing India",
  ],
  alternates: {
    canonical: "https://capcons.com/pricing",
  },
  openGraph: {
    title: "Pricing | Capcons — Flexible Plans for Creators & Brands",
    description:
      "Explore Capcons plans: free starter for creators, growth for brands, enterprise support and full monetization tools. Build your community, scale fast.",
    type: "website",
    url: "https://capcons.com/pricing",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Pricing Plans for Creators & Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons Pricing | Creator & Brand Plans",
    description:
      "Transparent, value-driven pricing for creators and brands building communities on Capcons. Choose your plan, scale your impact.",
    images: [IMAGES.twitter],
  },
};

export default function Pricing() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Pricing",
    description:
      "Capcons pricing page — transparent plans and pricing for creators and brands looking to build vibrant, community-led ecosystems.",
    url: "https://capcons.com/pricing",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Pricing", url: "https://capcons.com/pricing" },
    ],
  });

  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container>
        <HeroSection />
      </Container>
      <PricingPlans />
      <Container>
        <WhatPlan />
        <FAQ />
      </Container>
    </>
  );
}
