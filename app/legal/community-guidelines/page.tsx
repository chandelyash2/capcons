import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "Read CapCons Community Guidelines. Learn about our community standards, acceptable behavior, and code of conduct.",
  keywords: ["community guidelines", "community standards", "code of conduct", "rules", "legal"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Community Guidelines | CapCons",
    description: "Read CapCons Community Guidelines and learn about our community standards and code of conduct.",
    type: "website",
  },
};

const CommunityGuidelines = () => {
  return (
    <div>CommunityGuidelines</div>
  )
}

export default CommunityGuidelines