import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse CapCons events, webinars, and conferences. Stay updated with our latest events and networking opportunities.",
  keywords: ["events", "webinars", "conferences", "networking", "upcoming events"],
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | CapCons",
    description: "Browse CapCons events, webinars, and conferences. Stay updated with our latest events.",
    type: "website",
    url: "/events",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Events | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | CapCons",
    description: "Browse CapCons events, webinars, and conferences. Stay updated with our latest events.",
    images: ["/twitter-image.jpg"],
  },
};

const EventListing = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Events",
    description: "Browse CapCons events, webinars, and conferences. Stay updated with our latest events and networking opportunities.",
    url: "/events"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Events", url: "/events" }
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
      <div>EventListing</div>
    </>
  )
}

export default EventListing