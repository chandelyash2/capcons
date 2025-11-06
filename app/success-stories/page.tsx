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
  title: "Success Stories | Capcons — Empowering Brands & Creators to Grow Together",
  description:
    "Explore how creators and brands are building powerful communities on Capcons. From content to commerce, see real success stories of creators who monetized their influence and brands that built culture-driven loyalty.",
  keywords: [
    "Capcons success stories",
    "creator success stories",
    "brand community growth",
    "creator and brand partnerships",
    "creator economy platform",
    "brand storytelling",
    "creator monetization",
    "brand influencer collaborations",
    "creator growth case studies",
    "community success stories",
  ],
  alternates: {
    canonical: "https://capcons.com/success-stories",
  },
  openGraph: {
    title: "Success Stories | Capcons — Empowering Brands & Creators to Grow Together",
    description:
      "Real stories from creators and brands who turned their passions into thriving communities. Discover how Capcons helps both sides build culture, connection, and growth.",
    type: "website",
    url: "https://capcons.com/success-stories",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Success Stories | Brands & Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | Capcons — Empowering Brands & Creators",
    description:
      "Discover how creators and brands use Capcons to grow communities, launch products, and monetize creativity through connection and culture.",
    images: [IMAGES.twitter],
  },
};

export default function SuccessStories() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Success Stories",
    description:
      "Read success stories from creators and brands on Capcons — from building interest-driven communities to launching collaborations that shape the creator economy.",
    url: "https://capcons.com/success-stories",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Success Stories", url: "https://capcons.com/success-stories" },
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
          Where Creators & Brands Grow Together
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Capcons connects creators and brands to build culture-driven
          communities, monetize creativity, and inspire a new generation of
          success stories.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="success-hero.png"
            alt="Capcons Brands & Creators Success Stories"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">
        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Creators Who Built Their Empire</h3>
          <p className="text-muted-foreground">
            Discover how independent creators used Capcons’ community and
            monetization tools to grow audiences and turn engagement into income.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Brands That Built Culture</h3>
          <p className="text-muted-foreground">
            Learn how fashion, music, and lifestyle brands leveraged Capcons to
            create authentic spaces, run campaigns, and connect directly with
            loyal audiences.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Collaborations That Sparked Growth</h3>
          <p className="text-muted-foreground">
            See how creators and brands joined forces on Capcons to launch
            products, co-host events, and build long-term community engagement.
          </p>
        </article>
      </section>
    </>
  );
}
