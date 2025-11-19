import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbListSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import Image from "@/components/image";
import { Container } from "@/components/ui/container";
import HeroSection from "@/components/career/hero-section";

export const metadata: Metadata = {
  title: "Careers | Capcons — Build the Future of Creator Communities",
  description:
    "Join Capcons and help shape the future of creator communities and brand connections. We're hiring creators, engineers, and innovators passionate about culture, technology, and growth.",
  keywords: [
    "Capcons careers",
    "jobs at Capcons",
    "creator economy jobs",
    "work with Capcons",
    "Capcons hiring",
    "creator community careers",
    "brand partnership jobs",
    "remote jobs for creators",
    "tech jobs India",
    "startup jobs",
  ],
  alternates: {
    canonical: "https://capcons.com/careers",
  },
  openGraph: {
    title: "Careers | Capcons — Build the Future of Creator Communities",
    description:
      "Capcons is on a mission to empower creators and brands. Explore open roles and be part of a team transforming social networking into community and culture.",
    type: "website",
    url: "https://capcons.com/careers",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Careers | Creator & Brand Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Capcons | Be Part of the Creator Revolution",
    description:
      "Join Capcons and help creators and brands build the next generation of communities. Explore open positions in tech, marketing, and partnerships.",
    images: [IMAGES.twitter],
  },
};

export default function Careers() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Careers",
    description:
      "Discover career opportunities at Capcons — where creators, engineers, and innovators come together to build the future of the creator economy.",
    url: "https://capcons.com/careers",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Careers", url: "https://capcons.com/careers" },
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
    </>
  );
}
