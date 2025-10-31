import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateArticleSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export async function generateMetadata(
  props: Promise<{ params: { title: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const { title } = params;
  const decodedTitle = decodeURIComponent(title);
  const url = `/insights/${encodeURIComponent(title)}`;

  return {
    title: decodedTitle,
    description: `Read ${decodedTitle} - Latest insights and articles from CapCons. Stay informed about industry trends and best practices.`,
    keywords: [decodedTitle, "blog post", "article", "insights", "CapCons"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${decodedTitle} | CapCons Insights`,
      description: `Read ${decodedTitle} - Latest insights and articles from CapCons.`,
      type: "article",
      url: url,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${decodedTitle} | CapCons Insights`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTitle} | CapCons Insights`,
      description: `Read ${decodedTitle} - Latest insights and articles from CapCons.`,
      images: ["/twitter-image.jpg"],
    },
  };
}

const BlogDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
  const decodedTitle = decodeURIComponent(title);
  const url = `/insights/${encodeURIComponent(title)}`;
  
  const articleSchema = generateArticleSchema({
    title: decodedTitle,
    description: `Read ${decodedTitle} - Latest insights and articles from CapCons. Stay informed about industry trends and best practices.`,
    url: url
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Insights & Blog", url: "/insights" },
      { name: decodedTitle, url: url }
    ]
  });

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>Dlog Details: {title}</div>
    </>
  )
}

export default BlogDetails