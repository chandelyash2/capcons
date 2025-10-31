import React from 'react'
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata = {
  title: "Careers",
  description: "Join the CapCons team. Explore career opportunities and open positions. Build your career with us.",
  keywords: ["careers", "jobs", "employment", "open positions", "join us"],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers | CapCons",
    description: "Join the CapCons team. Explore career opportunities and open positions.",
    type: "website",
    url: "/career",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | CapCons",
    description: "Join the CapCons team. Explore career opportunities and open positions.",
    images: ["/twitter-image.jpg"],
  },
};

const Career = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Careers",
    description: "Join the CapCons team. Explore career opportunities and open positions. Build your career with us.",
    url: "/career"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Careers", url: "/career" }
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
      <div>Career</div>
    </>
  )
}

export default Career