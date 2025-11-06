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
  title: "Events | Capcons — Creator Livestreams, Contests & Brand Experiences",
  description:
    "Discover upcoming creator and brand events on Capcons. Join livestreams, contests, workshops, and community gatherings that shape the creator economy and digital culture.",
  keywords: [
    "Capcons events",
    "creator events",
    "brand livestreams",
    "creator contests",
    "Capcons workshops",
    "community gatherings",
    "creator meetups",
    "creator economy events",
    "brand creator collaborations",
    "virtual events platform",
  ],
  alternates: {
    canonical: "https://capcons.com/events",
  },
  openGraph: {
    title: "Capcons Events | Creator Livestreams & Brand Collaborations",
    description:
      "Join Capcons Events — where creators and brands connect through livestreams, contests, and community-driven experiences that inspire collaboration and growth.",
    type: "website",
    url: "https://capcons.com/events",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons Events | Creator & Brand Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons Events | Creator Livestreams, Contests & Community Experiences",
    description:
      "Be part of Capcons Events — a global stage for creators and brands to host livestreams, run contests, and grow communities together.",
    images: [IMAGES.twitter],
  },
};

export default function Events() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons Events",
    description:
      "Explore live and upcoming events on Capcons — from creator contests and brand livestreams to virtual community meetups and culture-driven sessions.",
    url: "https://capcons.com/events",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Events", url: "https://capcons.com/events" },
    ],
  });

  const eventsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Capcons Events",
    itemListElement: [
      {
        "@type": "Event",
        name: "Creator Circuit: Building Communities that Scale",
        startDate: "2025-12-05T18:00:00+05:30",
        endDate: "2025-12-05T20:00:00+05:30",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "VirtualLocation",
          url: "https://capcons.com/events/creator-circuit",
        },
        image: "https://capcons.com/images/events/creator-circuit.png",
        description:
          "A live virtual session where top creators share insights on building scalable, interest-driven communities on Capcons.",
        organizer: {
          "@type": "Organization",
          name: "Capcons",
          url: "https://capcons.com",
        },
      },
      {
        "@type": "Event",
        name: "Brand x Creator Summit 2025",
        startDate: "2025-12-15T10:00:00+05:30",
        endDate: "2025-12-15T18:00:00+05:30",
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Mumbai Convention Centre",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bandra Kurla Complex",
            addressLocality: "Mumbai",
            addressRegion: "MH",
            postalCode: "400051",
            addressCountry: "IN",
          },
        },
        image: "https://capcons.com/images/events/brand-summit.png",
        description:
          "An in-person and virtual hybrid summit bringing together creators, brands, and culture leaders to discuss growth, collaboration, and innovation.",
        organizer: {
          "@type": "Organization",
          name: "Capcons",
          url: "https://capcons.com",
        },
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
        id="events-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Where Creators & Brands Meet Live
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          From livestreams and contests to global summits, Capcons Events bring
          creators, brands, and audiences together to celebrate creativity,
          culture, and collaboration.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="events-hero.png"
            alt="Capcons Events Banner"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Featured Events */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-8">
        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Creator Circuit: Building Communities that Scale
          </h3>
          <p className="text-muted-foreground mb-4">
            A virtual session for creators focused on growing engaged
            communities and unlocking monetization tools within Capcons.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Date:</strong> December 5, 2025<br />
            <strong>Time:</strong> 6:00 PM – 8:00 PM IST
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">
            Brand × Creator Summit 2025
          </h3>
          <p className="text-muted-foreground mb-4">
            An exclusive hybrid event connecting top creators and brands to
            discuss content commerce, community building, and culture-driven
            growth.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Date:</strong> December 15, 2025<br />
            <strong>Location:</strong> Mumbai Convention Centre + Online
          </p>
        </article>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-muted rounded-3xl mx-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Host Your Next Event on Capcons
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you’re a creator launching a livestream or a brand planning a
          large-scale campaign — Capcons gives you the tools to go live, engage
          your audience, and grow your community.
        </p>
        <a
          href="mailto:events@capcons.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Partner With Us
        </a>
      </section>
    </>
  );
}
