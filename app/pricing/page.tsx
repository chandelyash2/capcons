import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbListSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import Image from "@/components/image";

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

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Transparent. Flexible. Creator & Brand-Focused.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Choose a plan that fits your community size and growth stage — whether you&apos;re a creator starting out or a brand running campaigns.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="pricing-hero.png"
            alt="Capcons Pricing Plans"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Starter (Creators)</h3>
          <p className="text-muted-foreground mb-4">Free plan to launch your community.</p>
          <ul className="list-disc ml-4 text-muted-foreground">
            <li>Up to 500 members</li>
            <li>Basic engagement tools</li>
            <li>Limited monetization access</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90">
            Get Started Free
          </button>
        </div>

        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Growth (Creators & Brands)</h3>
          <p className="text-muted-foreground mb-4">For communities ready to scale.</p>
          <ul className="list-disc ml-4 text-muted-foreground">
            <li>Up to 5,000 members</li>
            <li>Advanced monetization & analytics</li>
            <li>Branded community spaces</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90">
            Choose Growth
          </button>
        </div>

        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Enterprise (Brands)</h3>
          <p className="text-muted-foreground mb-4">
            Custom solutions for large communities & brand collaborations.
          </p>
          <ul className="list-disc ml-4 text-muted-foreground">
            <li>Unlimited members</li>
            <li>Dedicated account manager</li>
            <li>White-label & API integrations</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90">
            Talk to Sales
          </button>
        </div>
      </section>

      {/* Pricing Notes / FAQ Section */}
      <section className="max-w-6xl mx-auto px-8 py-12 bg-muted rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Pricing Notes & Transparency</h2>
        <p className="text-muted-foreground mb-2">
          All plans support monthly or annual billing. Annual billing offers a discount — contact us for details.
        </p>
        <p className="text-muted-foreground mb-2">
          No hidden fees. Upgrade, downgrade or cancel anytime.
        </p>
        <p className="text-muted-foreground mb-2">
          International pricing available — contact sales for customised options.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-card rounded-3xl mx-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to build your community?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Choose your plan today and start growing culture, connection and commerce with Capcons.
        </p>
        <a
          href="https://capcons.com/signup"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Start Your Free Plan
        </a>
      </section>
    </>
  );
}
