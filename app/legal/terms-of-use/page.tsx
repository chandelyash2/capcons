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
          Terms of Use
        </h1>
        <p className="text-sm text-gray-600 font-normal mb-0">
          Last Updated: January 1, 2024
        </p>
      </header>
      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using CapCons services, you agree to be bound by these Terms of Use and all applicable laws and regulations. 
        If you do not agree with any of these terms, you are prohibited from using or accessing this service.
      </p>

      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily access the materials on CapCons website for personal, non-commercial transitory viewing only. 
        This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>
      <ul>
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
        <li>attempt to decompile or reverse engineer any software contained on CapCons website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
      </ul>

      <h2>3. Disclaimer</h2>
      <p>
        The materials on CapCons website are provided on an 'as is' basis. CapCons makes no warranties, expressed or implied, 
        and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of 
        merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h2>4. Limitations</h2>
      <p>
        In no event shall CapCons or its suppliers be liable for any damages (including, without limitation, damages for loss of 
        data or profit, or due to business interruption) arising out of the use or inability to use the materials on CapCons 
        website, even if CapCons or a CapCons authorized representative has been notified orally or in writing of the possibility 
        of such damage.
      </p>

      <h2>5. Accuracy of Materials</h2>
      <p>
        The materials appearing on CapCons website could include technical, typographical, or photographic errors. CapCons does 
        not warrant that any of the materials on its website are accurate, complete, or current. CapCons may make changes to the 
        materials contained on its website at any time without notice.
      </p>

      <h2>6. Links</h2>
      <p>
        CapCons has not reviewed all of the sites linked to its website and is not responsible for the contents of any such 
        linked site. The inclusion of any link does not imply endorsement by CapCons of the site. Use of any such linked website 
        is at the user's own risk.
      </p>

      <h2>7. Modifications</h2>
      <p>
        CapCons may revise these terms of service for its website at any time without notice. By using this website you are agreeing 
        to be bound by the then current version of these terms of service.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the 
        exclusive jurisdiction of the courts in that location.
      </p>

      <h2>9. Contact Information</h2>
      <p>
        If you have any questions about these Terms of Use, please contact us at legal@capcons.com.
      </p>
    </>
  )
}

export default TermsOfUse
