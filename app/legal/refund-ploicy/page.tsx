import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Review CapCons Refund Policy. Understand our refund process, eligibility criteria, and terms for service refunds.",
  keywords: ["refund policy", "refunds", "money back", "refund process", "legal"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy | CapCons",
    description: "Review CapCons Refund Policy and understand our refund process and eligibility criteria.",
    type: "website",
  },
};

const RefundPolicy = () => {
  return (
    <div>Refund Policy</div>
  )
}

export default RefundPolicy