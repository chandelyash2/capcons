import type { Metadata } from "next";
import Script from "next/script";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbListSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQ | Capcons — Answers for Creators, Brands & Partners",
  description:
    "Find answers to frequently asked questions about Capcons. Learn how creators and brands can build, grow, and monetize their communities on the Capcons platform.",
  keywords: [
    "Capcons FAQ",
    "Capcons help center",
    "creator community support",
    "brand collaboration FAQs",
    "creator monetization help",
    "community platform questions",
    "Capcons contact support",
    "creator economy guide",
    "Capcons troubleshooting",
  ],
  alternates: {
    canonical: "https://capcons.com/faq",
  },
  openGraph: {
    title: "FAQ | Capcons — Answers for Creators, Brands & Partners",
    description:
      "Have questions about Capcons? Find quick answers about creator monetization, brand collaborations, and building your community online.",
    type: "website",
    url: "https://capcons.com/faq",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons FAQ | Creator & Brand Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capcons FAQ | Creator & Brand Support",
    description:
      "Get answers to your most common questions about Capcons — from building communities to monetizing creativity.",
    images: [IMAGES.twitter],
  },
};

export default function FAQ() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Capcons FAQ",
    description:
      "Answers to common questions about Capcons — from creator setup to brand partnerships and monetization tools.",
    url: "https://capcons.com/faq",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "FAQ", url: "https://capcons.com/faq" },
    ],
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Capcons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Capcons is a creator and brand community platform that helps people build, grow, and monetize interest-driven communities. It combines social networking, culture building, and commerce tools in one place.",
        },
      },
      {
        "@type": "Question",
        name: "How can creators earn on Capcons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creators can monetize their communities through paid memberships, digital product sales, courses, events, and brand collaborations — all hosted directly inside Capcons.",
        },
      },
      {
        "@type": "Question",
        name: "Can brands collaborate with creators on Capcons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Brands can partner with creators through Capcons to launch authentic campaigns, run events, or build branded communities that foster long-term loyalty and engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Is Capcons free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Capcons offers both free and premium features. You can start your community for free, and unlock advanced tools for monetization, analytics, and branding with a premium plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do I join Capcons?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can join Capcons by signing up on capcons.com. Once registered, you can create your circle, invite members, and start building your community right away.",
        },
      },
      {
        "@type": "Question",
        name: "Does Capcons support livestreams and events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Capcons allows creators and brands to host livestreams, contests, and virtual events within their community — complete with gamified engagement tools.",
        },
      },
      {
        "@type": "Question",
        name: "Who can I contact for support or partnerships?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For general support, email hello@capcons.com. For brand partnerships or creator collaborations, contact partnerships@capcons.com.",
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Everything you need to know about Capcons — from how it works to how
          creators and brands can grow together.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-20 space-y-8">
        {faqSchema.mainEntity.map((faq, index) => (
          <div key={index} className="p-6 rounded-2xl border bg-card text-left">
            <h3 className="text-2xl font-semibold mb-2">{faq.name}</h3>
            <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
