import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Media",
  description: "Access CapCons media resources, press releases, logos, and brand assets. Download media kits and brand guidelines.",
  keywords: ["media", "press", "press releases", "media kit", "brand assets"],
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media | CapCons",
    description: "Access CapCons media resources, press releases, logos, and brand assets.",
    type: "website",
    url: "/media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Media | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media | CapCons",
    description: "Access CapCons media resources, press releases, logos, and brand assets.",
    images: ["/twitter-image.jpg"],
  },
};

const Media = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Media",
    description: "Access CapCons media resources, press releases, logos, and brand assets. Download media kits and brand guidelines.",
    url: "/media"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Media", url: "/media" }
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
      <div>Media</div>
    </>
  )
}

export default Media