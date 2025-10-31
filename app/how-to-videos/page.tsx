import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "How-to Videos",
  description: "Watch CapCons how-to videos and tutorials. Learn how to use our platform and make the most of our features.",
  keywords: ["how-to", "videos", "tutorials", "guides", "video tutorials", "learning"],
  alternates: {
    canonical: "/how-to-videos",
  },
  openGraph: {
    title: "How-to Videos | CapCons",
    description: "Watch CapCons how-to videos and tutorials. Learn how to use our platform effectively.",
    type: "website",
    url: "/how-to-videos",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "How-to Videos | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How-to Videos | CapCons",
    description: "Watch CapCons how-to videos and tutorials. Learn how to use our platform effectively.",
    images: [IMAGES.twitter],
  },
};

const HowToVideos = () => {
  const webpageSchema = generateWebPageSchema({
    name: "How-to Videos",
    description: "Watch CapCons how-to videos and tutorials. Learn how to use our platform and make the most of our features.",
    url: "/how-to-videos"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "How-to Videos", url: "/how-to-videos" }
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
      <div>HowToVideos Listing</div>
    </>
  )
}

export default HowToVideos