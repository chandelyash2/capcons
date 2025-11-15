import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

import HeroSection from "@/components/landing/hero-section";
import TrustedCompanies from "@/components/landing/trusted-companies";
import BrandDetail from "@/components/landing/brand-detail";
import MarketPlace from "@/components/landing/marketplace";
import { Section } from "@/components/ui/section";
import { IMAGES } from "@/lib/images";
import ProPlans from "@/components/landing/pro-plans";
import Founders from "@/components/landing/founders";
import CustomerReviews from "@/components/landing/customers-reviews";
import AdvancedFeature from "@/components/landing/advanced-feature";

export const metadata: Metadata = {
  title: "Capcons | Build, Grow & Monetize Your Creator Community",
  description:
    "Capcons empowers creators, entrepreneurs, and storytellers to build interest-driven communities.",
  alternates: { canonical: "https://capcons.com/" },
  openGraph: { images: [{ url: IMAGES.og }] },
  twitter: { images: [IMAGES.twitter] },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="space-y-20 md:space-y-28 lg:space-y-36">
        <HeroSection />
        <TrustedCompanies />

        {/* SINGLE RESPONSIBLE SECTION BLOCK */}
        <Section className="space-y-20 md:space-y-32 lg:space-y-40">
          <BrandDetail />
          <MarketPlace />
          <ProPlans />
          <Founders />
          <CustomerReviews />
          <AdvancedFeature />
        </Section>
      </div>
    </>
  );
}
