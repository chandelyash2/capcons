import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateWebPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CapCons. Contact our team for inquiries, support, or partnership opportunities. We're here to help.",
  keywords: ["contact", "support", "get in touch", "customer service", "help"],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | CapCons",
    description: "Get in touch with CapCons. Contact our team for inquiries, support, or partnership opportunities.",
    type: "website",
    url: "/contact-us",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Contact Us | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CapCons",
    description: "Get in touch with CapCons. Contact our team for inquiries, support, or partnership opportunities.",
    images: [IMAGES.twitter],
  },
};

const ContactUs = () => {
  const webpageSchema = generateWebPageSchema({
    name: "Contact Us",
    description: "Get in touch with CapCons. Contact our team for inquiries, support, or partnership opportunities. We're here to help.",
    url: "/contact-us"
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Contact Us", url: "/contact-us" }
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
      <div>ContactUs</div>
    </>
  )
}

export default ContactUs