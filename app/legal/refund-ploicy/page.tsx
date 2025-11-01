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
          Refund Policy
        </h1>
        <p className="text-sm text-gray-600 font-normal mb-0">
          Last Updated: January 1, 2024
        </p>
      </header>
      <h2>1. Overview</h2>
      <p>
        This Refund Policy outlines the terms and conditions under which CapCons ("we," "our," or "us") will provide refunds for 
        purchases made through our platform. Please read this policy carefully before making a purchase.
      </p>

      <h2>2. Eligibility for Refunds</h2>
      
      <h3>2.1 Eligible Services</h3>
      <p>
        Refunds may be available for the following types of services:
      </p>
      <ul>
        <li>Subscription-based services with unused time remaining</li>
        <li>One-time service purchases within the refund period</li>
        <li>Digital products that have not been downloaded or accessed</li>
        <li>Event registrations cancelled in accordance with our cancellation policy</li>
      </ul>

      <h3>2.2 Non-Refundable Items</h3>
      <p>
        The following items are generally not eligible for refunds:
      </p>
      <ul>
        <li>Services that have been fully delivered or completed</li>
        <li>Digital products that have been downloaded or accessed</li>
        <li>Custom or personalized services</li>
        <li>Products purchased during special promotional periods (unless otherwise stated)</li>
        <li>Third-party services or products sold through our platform</li>
      </ul>

      <h2>3. Refund Timeframe</h2>
      <p>
        To be eligible for a refund, you must request it within the following timeframes:
      </p>
      <ul>
        <li><strong>Subscription Services:</strong> Within 14 days of the initial purchase or renewal date</li>
        <li><strong>One-time Services:</strong> Within 7 days of the purchase date</li>
        <li><strong>Digital Products:</strong> Within 24 hours of purchase, provided the product has not been downloaded</li>
        <li><strong>Event Registrations:</strong> At least 48 hours before the event start time</li>
      </ul>

      <h2>4. Refund Process</h2>
      
      <h3>4.1 How to Request a Refund</h3>
      <p>To request a refund, please:</p>
      <ol>
        <li>Contact our customer support team at refunds@capcons.com</li>
        <li>Provide your order number or transaction ID</li>
        <li>State the reason for your refund request</li>
        <li>Include any relevant documentation or evidence</li>
      </ol>

      <h3>4.2 Refund Review Process</h3>
      <p>
        Once we receive your refund request, we will:
      </p>
      <ul>
        <li>Review your request within 5-7 business days</li>
        <li>Verify the eligibility of your purchase</li>
        <li>Confirm the status of the service or product</li>
        <li>Notify you of our decision via email</li>
      </ul>

      <h3>4.3 Refund Processing Time</h3>
      <p>
        If your refund is approved, it will be processed within 10-14 business days. The refund will be issued to the original 
        payment method used for the purchase. Please note that it may take additional time for the refund to appear in your 
        account, depending on your bank or payment provider.
      </p>

      <h2>5. Partial Refunds</h2>
      <p>
        In certain circumstances, we may offer partial refunds. This may occur when:
      </p>
      <ul>
        <li>Part of a service has been delivered or used</li>
        <li>A subscription has been partially consumed</li>
        <li>There are specific terms in the service agreement that allow for partial refunds</li>
        <li>You request cancellation mid-service period</li>
      </ul>
      <p>
        The amount of the partial refund will be calculated based on the unused portion of the service and any applicable fees.
      </p>

      <h2>6. Chargebacks</h2>
      <p>
        If you file a chargeback with your payment provider, we will investigate the claim and provide relevant documentation. 
        Please note that filing an unauthorized chargeback may result in the suspension or termination of your account. We 
        encourage you to contact us directly first to resolve any issues.
      </p>

      <h2>7. Special Circumstances</h2>
      
      <h3>7.1 Technical Issues</h3>
      <p>
        If you experience technical issues that prevent you from using our services, please contact our support team immediately. 
        We will work to resolve the issue. If we cannot resolve the problem within a reasonable timeframe, a full or partial 
        refund may be provided at our discretion.
      </p>

      <h3>7.2 Service Cancellation by CapCons</h3>
      <p>
        If we cancel a service or event due to circumstances beyond our control, you will be entitled to a full refund. We will 
        notify you promptly and process the refund automatically.
      </p>

      <h2>8. Currency and Payment Methods</h2>
      <p>
        Refunds will be issued in the same currency and to the same payment method used for the original purchase. If the original 
        payment method is no longer available, we will work with you to find an alternative refund method.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our 
        website. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        If you have any questions about this Refund Policy or wish to request a refund, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> refunds@capcons.com<br />
        <strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)
      </p>
    </>
  )
}

export default RefundPolicy
