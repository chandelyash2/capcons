import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read CapCons Terms of Use. Understand the terms and conditions for using our services and platform.",
  keywords: ["terms of use", "terms and conditions", "legal", "user agreement"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use | CapCons",
    description: "Read CapCons Terms of Use and understand the terms and conditions for using our services.",
    type: "website",
  },
};

const TermsOfUse = () => {
  return (
    <div>Terms Of Use</div>
  )
}

export default TermsOfUse