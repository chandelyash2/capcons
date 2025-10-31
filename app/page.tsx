import type { Metadata } from "next";
import Script from "next/script";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to CapCons - Discover professional solutions and services tailored for your business needs. Get started today.",
  keywords: ["CapCons", "home", "business solutions", "professional services"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CapCons - Your Trusted Partner",
    description: "Welcome to CapCons - Discover professional solutions and services tailored for your business needs.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CapCons - Your Trusted Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapCons - Your Trusted Partner",
    description: "Welcome to CapCons - Discover professional solutions and services tailored for your business needs.",
    images: ["/twitter-image.jpg"],
  },
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
      <div>Developing </div>
    </>
  );
}
