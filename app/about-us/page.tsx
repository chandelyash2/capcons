import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CapCons - our mission, vision, and the team dedicated to providing exceptional business solutions and services.",
  keywords: ["about CapCons", "company", "team", "mission", "vision"],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | CapCons",
    description: "Learn about CapCons - our mission, vision, and the team dedicated to providing exceptional business solutions.",
    type: "website",
    url: "/about-us",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Us | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | CapCons",
    description: "Learn about CapCons - our mission, vision, and the team dedicated to providing exceptional business solutions.",
    images: ["/twitter-image.jpg"],
  },
};

const About = () => {
  const webpageSchema = generateWebPageSchema({
    name: "About Us",
    description: "Learn about CapCons - our mission, vision, and the team dedicated to providing exceptional business solutions and services.",
    url: "/about-us"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about-us" }
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
      <div>About</div>
    </>
  )
}

export default About