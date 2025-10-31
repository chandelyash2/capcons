import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateVideoObjectSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export async function generateMetadata(
  props: Promise<{ params: { title: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const { title } = params;
  const decodedTitle = decodeURIComponent(title);
  const url = `/how-to-videos/${encodeURIComponent(title)}`;

  return {
    title: decodedTitle,
    description: `Watch ${decodedTitle} - Learn how to use CapCons features with our step-by-step video tutorial.`,
    keywords: [decodedTitle, "how-to video", "tutorial", "guide", "video guide"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${decodedTitle} | CapCons How-to Videos`,
      description: `Watch ${decodedTitle} - Learn how to use CapCons features with our step-by-step video tutorial.`,
      type: "video.other",
      url: url,
      images: [
        {
          url: IMAGES.og,
          width: 1200,
          height: 630,
          alt: `${decodedTitle} | CapCons How-to Videos`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTitle} | CapCons How-to Videos`,
      description: `Watch ${decodedTitle} - Learn how to use CapCons features with our step-by-step video tutorial.`,
      images: [IMAGES.twitter],
    },
  };
}

const HowToVideoDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
  const decodedTitle = decodeURIComponent(title);
  const url = `/how-to-videos/${encodeURIComponent(title)}`;
  
  const videoSchema = generateVideoObjectSchema({
    name: decodedTitle,
    description: `Watch ${decodedTitle} - Learn how to use CapCons features with our step-by-step video tutorial.`,
    url: url
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "How-to Videos", url: "/how-to-videos" },
      { name: decodedTitle, url: url }
    ]
  });

  return (
    <>
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <h1>How to Video Details: {title}</h1>
      </div>
    </>
  )
}

export default HowToVideoDetails