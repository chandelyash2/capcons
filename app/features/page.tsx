import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateServiceSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore CapCons' comprehensive features designed to streamline your business operations and enhance productivity.",
  keywords: ["features", "business features", "product features", "capabilities"],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features | CapCons",
    description: "Explore CapCons' comprehensive features designed to streamline your business operations.",
    type: "website",
    url: "/features",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Features | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | CapCons",
    description: "Explore CapCons' comprehensive features designed to streamline your business operations.",
    images: ["/twitter-image.jpg"],
  },
};

const Features = () => {
  const serviceSchema = generateServiceSchema({
    name: "CapCons Features",
    description: "Explore CapCons' comprehensive features designed to streamline your business operations and enhance productivity.",
    url: "/features"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Features", url: "/features" }
    ]
  });

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>Features</div>
    </>
  )
}

export default Features