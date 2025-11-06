import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateBreadcrumbListSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import Image from "@/components/image";

export const metadata: Metadata = {
  title: "Insights | Capcons — Creator Economy, Brand Culture & Community Trends",
  description:
    "Explore the Capcons Insights blog — stories, strategies, and trends shaping the future of creators, brands, and digital communities. Learn how to grow, monetize, and lead in the creator economy.",
  keywords: [
    "Capcons insights",
    "Capcons blog",
    "creator economy trends",
    "community growth insights",
    "brand strategy",
    "creator marketing",
    "creator monetization",
    "digital culture",
    "creator and brand collaboration",
    "creator growth blog",
  ],
  alternates: {
    canonical: "https://capcons.com/insights",
  },
  openGraph: {
    title: "Insights | Capcons — Creator Economy, Brand Culture & Growth Stories",
    description:
      "Stay ahead in the creator economy with Capcons Insights — thought leadership and real stories from creators, brands, and innovators building the future of communities.",
    type: "website",
    url: "https://capcons.com/insights",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Insights Blog | Creator Economy & Brand Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons Insights | Creator Economy & Brand Growth Trends",
    description:
      "Explore Capcons Insights for the latest in creator monetization, community building, and brand-creator collaborations driving digital culture forward.",
    images: [IMAGES.twitter],
  },
};

export default function Insights() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Insights",
    description:
      "The Capcons Insights blog covers creator economy trends, community growth strategies, brand collaborations, and cultural storytelling.",
    url: "https://capcons.com/insights",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Insights", url: "https://capcons.com/insights" },
    ],
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Capcons Insights",
    url: "https://capcons.com/insights",
    description:
      "Explore the Capcons Insights blog for stories, guides, and perspectives on creators, brands, and the evolving culture economy.",
    publisher: {
      "@type": "Organization",
      name: "Capcons",
      logo: {
        "@type": "ImageObject",
        url: "https://capcons.com/images/logo.png",
      },
    },
  };

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
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Insights That Shape the Creator Economy
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Explore stories, data, and deep dives into how creators and brands are
          shaping the next generation of digital culture, community, and commerce.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="insights-hero.png"
            alt="Capcons Insights Blog Hero"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">
        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            The Rise of Interest-Driven Communities
          </h3>
          <p className="text-muted-foreground">
            Why the future of social networking belongs to creators and brands
            who build communities around shared passions instead of followers.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Monetization in the Creator Era
          </h3>
          <p className="text-muted-foreground">
            From memberships to merchandise — how creators use Capcons to turn
            engagement into income while keeping full brand control.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Brands & Creators: A New Kind of Collaboration
          </h3>
          <p className="text-muted-foreground">
            Learn how modern brands are partnering with creators to co-create
            products, stories, and communities that drive loyalty and growth.
          </p>
        </article>
      </section>
    </>
  );
}
