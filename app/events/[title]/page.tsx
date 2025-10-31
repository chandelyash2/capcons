import React from 'react'
import type { Metadata } from "next";
import Script from "next/script";
import { generateEventSchema, generateBreadcrumbListSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export async function generateMetadata(
  props: Promise<{ params: { title: string } }>
): Promise<Metadata> {
  const { params } = await props;
  const { title } = params;
  const decodedTitle = decodeURIComponent(title);
  const url = `/events/${encodeURIComponent(title)}`;

  return {
    title: decodedTitle,
    description: `Learn more about ${decodedTitle} event at CapCons. Get event details, schedule, and registration information.`,
    keywords: [decodedTitle, "event", "webinar", "conference", "CapCons event"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${decodedTitle} | CapCons Events`,
      description: `Learn more about ${decodedTitle} event at CapCons. Get event details and registration information.`,
      type: "website",
      url: url,
      images: [
        {
          url: IMAGES.og,
          width: 1200,
          height: 630,
          alt: `${decodedTitle} | CapCons Events`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTitle} | CapCons Events`,
      description: `Learn more about ${decodedTitle} event at CapCons. Get event details and registration information.`,
      images: [IMAGES.twitter],
    },
  };
}

const EventDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
  const decodedTitle = decodeURIComponent(title);
  const url = `/events/${encodeURIComponent(title)}`;
  
  const eventSchema = generateEventSchema({
    name: decodedTitle,
    description: `Learn more about ${decodedTitle} event at CapCons. Get event details, schedule, and registration information.`,
    url: url
  });
  
  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "/" },
      { name: "Events", url: "/events" },
      { name: decodedTitle, url: url }
    ]
  });

  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <h1>Event Details: {title}</h1>
      </div>
    </>
  )
}

export default EventDetails