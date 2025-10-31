import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read CapCons Privacy Policy. Learn how we collect, use, and protect your personal information and data.",
  keywords: ["privacy policy", "data privacy", "privacy", "data protection", "legal"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | CapCons",
    description: "Read CapCons Privacy Policy and learn how we collect, use, and protect your personal information.",
    type: "website",
  },
};

const PrivacyPolicy = () => {
  return (
    <div>PrivacyPolicy</div>
  )
}

export default PrivacyPolicy