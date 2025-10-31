import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Job Openings",
  description: "Browse open job positions at CapCons. Find your next career opportunity and join our growing team.",
  keywords: ["jobs", "careers", "open positions", "employment", "job opportunities", "hiring"],
  alternates: {
    canonical: "/jobs",
  },
  openGraph: {
    title: "Job Openings | CapCons",
    description: "Browse open job positions at CapCons. Find your next career opportunity.",
    type: "website",
    url: "/jobs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Job Openings | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Openings | CapCons",
    description: "Browse open job positions at CapCons. Find your next career opportunity.",
    images: ["/twitter-image.jpg"],
  },
};

const JobListing = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Job Openings",
    description: "Browse open job positions at CapCons. Find your next career opportunity and join our growing team.",
    url: "/jobs"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Job Openings", url: "/jobs" }
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
      <div>JobListing</div>
    </>
  )
}

export default JobListing