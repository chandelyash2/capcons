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
  title: "Media | Capcons — Brand Coverage, Press Mentions & Assets",
  description:
    "Discover Capcons’ media coverage, interviews, and official resources. Download our press kit, explore recent mentions, and connect with our media relations team.",
  keywords: [
    "Capcons media",
    "Capcons press mentions",
    "Capcons brand kit",
    "creator economy media",
    "Capcons in news",
    "Capcons interviews",
    "press kit Capcons",
    "media coverage Capcons",
    "Capcons founder press",
    "Capcons publications",
  ],
  alternates: {
    canonical: "https://capcons.com/media",
  },
  openGraph: {
    title: "Media | Capcons — Coverage, Press Mentions & Brand Resources",
    description:
      "Explore Capcons in the news — interviews, articles, and brand coverage. Download our official press kit and contact our media relations team.",
    type: "website",
    url: "https://capcons.com/media",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Media | Brand Coverage & Press Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons Media | Brand Coverage & Press Resources",
    description:
      "See how Capcons is shaping the creator economy. Explore news features, press mentions, and official media assets.",
    images: [IMAGES.twitter],
  },
};

export default function Media() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Media",
    description:
      "Media resources, interviews, and coverage for Capcons — the platform driving the creator economy through community, culture, and collaboration.",
    url: "https://capcons.com/media",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Media", url: "https://capcons.com/media" },
    ],
  });

  const mediaCoverageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "NewsArticle",
        headline: "Capcons Featured in Forbes India: Building the Future of Creator Communities",
        datePublished: "2025-10-18",
        image: "https://capcons.com/images/press/forbes-feature.png",
        author: { "@type": "Organization", name: "Forbes India" },
        publisher: {
          "@type": "Organization",
          name: "Capcons",
          logo: { "@type": "ImageObject", url: "https://capcons.com/images/logo.png" },
        },
        description:
          "Forbes India features Capcons for its vision of empowering creators and brands to build culture-driven communities and new-age digital economies.",
      },
      {
        "@type": "NewsArticle",
        headline: "YourStory Highlights Capcons’ Role in the Creator Economy",
        datePublished: "2025-09-22",
        image: "https://capcons.com/images/press/yourstory.png",
        author: { "@type": "Organization", name: "YourStory" },
        publisher: {
          "@type": "Organization",
          name: "Capcons",
          logo: { "@type": "ImageObject", url: "https://capcons.com/images/logo.png" },
        },
        description:
          "YourStory covers how Capcons is reshaping how creators and brands build their communities and monetize engagement.",
      },
    ],
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
        id="media-coverage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaCoverageSchema) }}
      />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Capcons in the Media
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Explore how Capcons is being covered across global publications — from
          the rise of creator communities to the evolution of culture-led brands.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="media-hero.png"
            alt="Capcons Media Coverage"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Media Coverage */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-8">
        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Capcons Featured in Forbes India
          </h3>
          <p className="text-muted-foreground mb-4">
            Forbes India highlights Capcons’ impact on empowering creators and
            brands to lead the creator economy revolution through interest-based
            communities.
          </p>
          <a
            href="https://www.forbesindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Read Full Article →
          </a>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Capcons x YourStory Feature
          </h3>
          <p className="text-muted-foreground mb-4">
            YourStory covers how Capcons bridges creators and brands with a
            powerful social platform built around connection, commerce, and culture.
          </p>
          <a
            href="https://yourstory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Read More →
          </a>
        </article>
      </section>

      {/* Press Kit Section */}
      <section className="max-w-6xl mx-auto px-8 py-16 bg-muted rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Press & Media Kit</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Download our official brand logos, product screenshots, and media
          assets. Use them responsibly when referencing Capcons in news or
          promotional material.
        </p>
        <a
          href="/downloads/capcons-media-kit.zip"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Download Media Kit
        </a>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 mx-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Media Inquiries
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          For interviews, coverage, or to feature Capcons in your publication,
          please reach out to our media relations team.
        </p>
        <a
          href="mailto:media@capcons.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Contact Media Team
        </a>
      </section>
    </>
  );
}
