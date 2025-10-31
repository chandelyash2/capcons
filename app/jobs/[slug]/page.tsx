import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateJobPostingSchema, generateBreadcrumbListSchema } from "@/lib/schema";

export async function generateMetadata(
  props: Promise<{ params: { slug: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const url = `/jobs/${encodeURIComponent(slug)}`;

  return {
    title: decodedSlug,
    description: `Apply for ${decodedSlug} position at CapCons. View job requirements, responsibilities, and application details.`,
    keywords: [decodedSlug, "job", "career", "employment", "position", "CapCons jobs"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${decodedSlug} | CapCons Careers`,
      description: `Apply for ${decodedSlug} position at CapCons. View job requirements and application details.`,
      type: "website",
      url: url,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${decodedSlug} | CapCons Careers`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedSlug} | CapCons Careers`,
      description: `Apply for ${decodedSlug} position at CapCons. View job requirements and application details.`,
      images: ["/twitter-image.jpg"],
    },
  };
}

const JobDetails = async (props: Promise<{ params: { slug: string } }>) => {
  const { params } = await props
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug);
  const url = `/jobs/${encodeURIComponent(slug)}`;
  
  const jobSchema = generateJobPostingSchema({
    title: decodedSlug,
    description: `Apply for ${decodedSlug} position at CapCons. View job requirements, responsibilities, and application details.`,
    url: url
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Job Openings", url: "/jobs" },
      { name: decodedSlug, url: url }
    ]
  });

  return (
    <>
      <Script
        id="job-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>Job Details: {slug}</div>
    </>
  )
}

export default JobDetails