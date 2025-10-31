import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateFAQPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to frequently asked questions about CapCons. Get help with common questions and learn more about our services.",
  keywords: ["FAQ", "frequently asked questions", "help", "support", "questions"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions | CapCons",
    description: "Find answers to frequently asked questions about CapCons and our services.",
    type: "website",
    url: "/faq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Frequently Asked Questions | CapCons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | CapCons",
    description: "Find answers to frequently asked questions about CapCons and our services.",
    images: ["/twitter-image.jpg"],
  },
};

const FAQ = () => {
  const faqSchema = generateFAQPageSchema({
    faqs: [
      {
        question: "What is CapCons?",
        answer: "CapCons is a professional solutions and services company providing business solutions tailored for your needs."
      },
      {
        question: "How can I contact CapCons?",
        answer: "You can contact CapCons through our contact page or reach out via our customer service channels."
      },
      {
        question: "What services does CapCons offer?",
        answer: "CapCons offers comprehensive business solutions designed to streamline operations and enhance productivity."
      }
    ]
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "FAQ", url: "/faq" }
    ]
  });

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>FAQ</div>
    </>
  )
}

export default FAQ