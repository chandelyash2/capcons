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

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Join the Future of Community & Culture
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Capcons is where creators, brands, and innovators come together to
          build something extraordinary. If you're passionate about technology,
          creativity, and community — we want you on our team.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="careers-hero.png"
            alt="Capcons Careers"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">
        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Engineering</h3>
          <p className="text-muted-foreground">
            Build the tools powering millions of creators and brands. Work with
            Go, Next.js, and scalable cloud infrastructure to make community
            technology faster and smarter.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Design & Product</h3>
          <p className="text-muted-foreground">
            Shape experiences that connect creators and brands worldwide. We're
            looking for UI/UX designers who believe design can build culture.
          </p>
        </article>

        <article className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">Marketing & Partnerships</h3>
          <p className="text-muted-foreground">
            Help creators and brands discover their audience. Lead creator
            programs, brand collaborations, and growth campaigns that make
            culture go viral.
          </p>
        </article>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-muted rounded-3xl mx-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Build the Future?
        </h2>
        <p className="text-muted-foreground mb-6">
          Whether you're a creator, engineer, or marketer — Capcons is the place
          to grow, create, and make an impact.
        </p>
        <a
          href="mailto:careers@capcons.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Send Your Resume
        </a>
      </section>
    </>
  );
}

