import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateFAQPageSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export async function generateMetadata(
  props: Promise<{ params: { category: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);
  const url = `/faq/${encodeURIComponent(category)}`;

  return {
    title: `${decodedCategory} FAQ`,
    description: `Find answers to frequently asked questions about ${decodedCategory} at CapCons. Get help and support.`,
    keywords: [decodedCategory, "FAQ", "questions", "help", "support"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${decodedCategory} FAQ | CapCons`,
      description: `Find answers to frequently asked questions about ${decodedCategory} at CapCons.`,
      type: "website",
      url: url,
      images: [
        {
          url: IMAGES.og,
          width: 1200,
          height: 630,
          alt: `${decodedCategory} FAQ | CapCons`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedCategory} FAQ | CapCons`,
      description: `Find answers to frequently asked questions about ${decodedCategory} at CapCons.`,
      images: [IMAGES.twitter],
    },
  };
}

const CategoryDetails = async (props: Promise<{ params: { category: string } }>) => {
  const { params } = await props
  const { category } = params
  const decodedCategory = decodeURIComponent(category);
  const url = `/faq/${encodeURIComponent(category)}`;
  
  const faqSchema = generateFAQPageSchema({
    faqs: [
      {
        question: `What is ${decodedCategory}?`,
        answer: `Find answers to frequently asked questions about ${decodedCategory} at CapCons.`
      },
      {
        question: `How does ${decodedCategory} work at CapCons?`,
        answer: `${decodedCategory} is an important aspect of CapCons services. Get help and support for ${decodedCategory} related questions.`
      }
    ]
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "FAQ", url: "/faq" },
      { name: decodedCategory, url: url }
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
      <div>Category Details: {category}</div>
    </>
  )
}

export default CategoryDetails