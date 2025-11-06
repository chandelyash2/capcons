import type { Metadata } from "next";
import Script from "next/script";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import Image from "@/components/image";

export const metadata: Metadata = {
  title: "Features | Capcons — The Creator Community Platform",
  description:
    "Explore all-in-one features on Capcons — build your creator community, launch commerce, host livestreams, run contests, and monetize your creativity with complete control and branding.",
  keywords: [
    "Capcons features",
    "creator platform features",
    "community tools",
    "monetization for creators",
    "livestreams",
    "gamification",
    "custom branding",
    "creator economy",
    "content monetization",
    "interest-based communities",
    "creator engagement tools",
    "Capcons platform",
  ],
  alternates: {
    canonical: "https://capcons.com/features",
  },
  openGraph: {
    title: "Features | Capcons — Build, Grow & Monetize Your Creator Community",
    description:
      "Capcons gives creators and brands everything they need to build thriving communities — from posts and events to commerce, courses, and gamification tools.",
    type: "website",
    url: "https://capcons.com/features",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Features | Build, Grow & Monetize",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons Features | Creator Tools for Community & Growth",
    description:
      "Discover Capcons’ full feature suite — community building, content creation, monetization, gamification, and more — designed for the next era of digital culture.",
    images: [IMAGES.twitter],
  },
};

export default function Features() {
  // Schema Definitions
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Features",
    description:
      "Explore Capcons’ all-in-one suite of features for creators and brands — including community building, livestreams, courses, monetization, and gamification.",
    url: "https://capcons.com/features",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Features", url: "https://capcons.com/features" },
    ],
  });

  return (
    <>
      {/* JSON-LD Schemas */}
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
          Power Every Creator’s Journey
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Capcons gives you everything — from community and commerce to
          livestreams, contests, and monetization — designed for creators who
          want complete control and culture-driven growth.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="features-hero.png"
            alt="Capcons Platform Features"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Example Feature Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-20 max-w-7xl mx-auto">
        <div className="p-6 rounded-2xl border">
          <h3 className="text-2xl font-semibold mb-2">Community Building</h3>
          <p className="text-muted-foreground">
            Create private or public circles that align with your interests and
            manage members, moderation, and engagement — all in one dashboard.
          </p>
        </div>
        <div className="p-6 rounded-2xl border">
          <h3 className="text-2xl font-semibold mb-2">Monetization Tools</h3>
          <p className="text-muted-foreground">
            Sell memberships, digital content, courses, or event access.
            Capcons gives creators full control over earnings and brand presence.
          </p>
        </div>
        <div className="p-6 rounded-2xl border">
          <h3 className="text-2xl font-semibold mb-2">Gamified Engagement</h3>
          <p className="text-muted-foreground">
            Reward participation through contests, ranks, and badges that make
            your community more engaging and rewarding.
          </p>
        </div>
      </section>
    </>
  );
}
