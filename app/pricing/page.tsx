import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description: "View CapCons' flexible pricing plans designed to meet your business needs. Choose the plan that works best for you.",
  keywords: ["pricing", "plans", "subscription", "cost", "pricing plans"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | CapCons",
    description: "View CapCons' flexible pricing plans designed to meet your business needs.",
    type: "website",
    url: "/pricing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pricing | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | CapCons",
    description: "View CapCons' flexible pricing plans designed to meet your business needs.",
    images: ["/twitter-image.jpg"],
  },
};

const Pricing = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Pricing",
    description: "View CapCons' flexible pricing plans designed to meet your business needs. Choose the plan that works best for you.",
    url: "/pricing"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Pricing", url: "/pricing" }
    ]
  });

  return (
    <>
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
      <div>Pricing</div>
    </>
  )
}

export default Pricing