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
    <>
      <header className="mb-12">
        <h1 
          className="font-bold text-gray-900 mb-4"
          style={{ 
            fontSize: '18pt',
            marginTop: 0,
            marginBottom: '16px',
            lineHeight: '1.2'
          }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 font-normal mb-0">
          Last Updated: January 1, 2024
        </p>
      </header>
      <h2>1. Introduction</h2>
      <p>
        CapCons ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
        use, disclose, and safeguard your information when you visit our website and use our services.
      </p>

      <h2>2. Information We Collect</h2>
      
      <h3>2.1 Personal Information</h3>
      <p>
        We may collect personal information that you voluntarily provide to us when you register for an account, make a purchase, 
        subscribe to our newsletter, or communicate with us. This may include:
      </p>
      <ul>
        <li>Name and contact information (email address, phone number, mailing address)</li>
        <li>Account credentials (username, password)</li>
        <li>Payment information (credit card details, billing address)</li>
        <li>Profile information and preferences</li>
        <li>Communications and correspondence with us</li>
      </ul>

      <h3>2.2 Automatically Collected Information</h3>
      <p>
        When you access our website, we may automatically collect certain information about your device and usage patterns, including:
      </p>
      <ul>
        <li>IP address and geolocation data</li>
        <li>Browser type and version</li>
        <li>Operating system information</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website addresses</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To provide, maintain, and improve our services</li>
        <li>To process transactions and send related information</li>
        <li>To send administrative information and updates</li>
        <li>To respond to your inquiries and provide customer support</li>
        <li>To send promotional communications and marketing materials</li>
        <li>To detect, prevent, and address technical issues and security threats</li>
        <li>To comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>4. Information Sharing and Disclosure</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information in the following 
        circumstances:
      </p>
      <ul>
        <li>With service providers who assist us in operating our website and conducting our business</li>
        <li>With business partners for joint offerings or promotions (with your consent)</li>
        <li>When required by law or to protect our rights and safety</li>
        <li>In connection with a merger, acquisition, or sale of assets</li>
        <li>With your explicit consent or at your direction</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized 
        access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage 
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul>
        <li>The right to access and receive a copy of your personal data</li>
        <li>The right to rectify inaccurate or incomplete information</li>
        <li>The right to erase your personal data ("right to be forgotten")</li>
        <li>The right to restrict processing of your personal data</li>
        <li>The right to data portability</li>
        <li>The right to object to processing of your personal data</li>
        <li>The right to withdraw consent at any time</li>
      </ul>

      <h2>7. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to collect and store information about your preferences and usage patterns. 
        You can control cookie preferences through your browser settings. Please note that disabling cookies may limit your ability 
        to use certain features of our website.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from 
        children. If you believe we have collected information from a child, please contact us immediately.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your information may be transferred to and maintained on computers located outside of your state, province, country, or 
        other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
        on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@capcons.com.
      </p>
    </>
  )
}

export default PrivacyPolicy
