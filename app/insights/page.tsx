import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Read the latest insights, articles, and blog posts from CapCons. Stay informed about industry trends and best practices.",
  keywords: ["blog", "insights", "articles", "news", "industry trends", "thought leadership"],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Blog | CapCons",
    description: "Read the latest insights, articles, and blog posts from CapCons.",
    type: "website",
    url: "/insights",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insights & Blog | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog | CapCons",
    description: "Read the latest insights, articles, and blog posts from CapCons.",
    images: ["/twitter-image.jpg"],
  },
};

const BlogListing = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Insights & Blog",
    description: "Read the latest insights, articles, and blog posts from CapCons. Stay informed about industry trends and best practices.",
    url: "/insights"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Insights & Blog", url: "/insights" }
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
      <div>Blog Listing</div>
    </>
  )
}

export default BlogListing