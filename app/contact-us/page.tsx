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
  title: "Contact Us | Capcons — Connect with Our Creator & Brand Team",
  description:
    "Have a question, collaboration idea, or need support? Reach out to Capcons — we help creators and brands build communities, grow engagement, and turn creativity into impact.",
  keywords: [
    "contact Capcons",
    "Capcons support",
    "Capcons email",
    "creator partnership inquiry",
    "brand collaboration contact",
    "creator support platform",
    "Capcons help",
    "business inquiry Capcons",
    "contact for creators",
    "creator economy platform",
  ],
  alternates: {
    canonical: "https://capcons.com/contact",
  },
  openGraph: {
    title: "Contact Capcons | Let’s Build the Future of Creator Communities",
    description:
      "Get in touch with Capcons — whether you're a creator, brand, or partner, our team is here to help you build, grow, and monetize your community.",
    type: "website",
    url: "https://capcons.com/contact",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Contact Capcons | Creator & Brand Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Capcons | Collaborate, Create & Grow",
    description:
      "Reach out to Capcons for creator support, brand partnerships, or product collaborations. Let’s grow the next generation of culture-driven communities together.",
    images: [IMAGES.twitter],
  },
};

export default function Contact() {
  const organizationSchema = generateOrganizationSchema();

  const webpageSchema = generateWebPageSchema({
    name: "Contact Capcons",
    description:
      "Contact Capcons for creator partnerships, brand collaborations, or general inquiries. We help creators and businesses build thriving, interest-driven communities.",
    url: "https://capcons.com/contact",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "Contact", url: "https://capcons.com/contact" },
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
          Let’s Build Something Great Together
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Whether you’re a creator looking to launch your community, a brand
          exploring partnerships, or someone curious about Capcons — we’d love
          to hear from you.
        </p>
        <div className="mt-10 flex justify-center">
          <Image
            src="contact-hero.png"
            alt="Contact Capcons Team"
            width={1200}
            height={630}
            priority
          />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-8 py-20">
        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">For Creators</h3>
          <p className="text-muted-foreground">
            Have questions about building your circle, monetizing content, or
            joining Capcons? Reach out to our creator success team.
          </p>
          <a
            href="mailto:creators@capcons.com"
            className="block mt-3 text-primary font-medium hover:underline"
          >
            creators@capcons.com
          </a>
        </div>

        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">For Brands</h3>
          <p className="text-muted-foreground">
            Interested in collaborations, sponsorships, or campaigns? Let’s
            create authentic brand moments through communities.
          </p>
          <a
            href="mailto:brands@capcons.com"
            className="block mt-3 text-primary font-medium hover:underline"
          >
            brands@capcons.com
          </a>
        </div>

        <div className="p-6 rounded-2xl border bg-card">
          <h3 className="text-2xl font-semibold mb-2">General Inquiries</h3>
          <p className="text-muted-foreground">
            For media, press, partnerships, or technical support — we’re here to
            help. Reach out anytime.
          </p>
          <a
            href="mailto:hello@capcons.com"
            className="block mt-3 text-primary font-medium hover:underline"
          >
            hello@capcons.com
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-muted rounded-3xl mx-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Together, We Build Culture
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let’s turn creativity into collaboration. Connect with the Capcons
          team today and start building communities that make an impact.
        </p>
        <a
          href="mailto:hello@capcons.com"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:opacity-90"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
