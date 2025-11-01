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
          Community Guidelines
        </h1>
        <p className="text-sm text-gray-600 font-normal mb-0">
          Last Updated: January 1, 2024
        </p>
      </header>
      <h2>1. Introduction</h2>
      <p>
        Welcome to the CapCons community! These Community Guidelines are designed to help create a safe, respectful, and 
        welcoming environment for all members. By participating in our community, you agree to follow these guidelines.
      </p>

      <h2>2. Our Core Values</h2>
      <p>Our community is built on the following principles:</p>
      <ul>
        <li><strong>Respect:</strong> Treat all members with dignity and respect, regardless of their background, beliefs, or opinions</li>
        <li><strong>Inclusivity:</strong> Welcome diverse perspectives and create an environment where everyone feels valued</li>
        <li><strong>Integrity:</strong> Be honest, transparent, and accountable for your actions and words</li>
        <li><strong>Collaboration:</strong> Work together constructively and support each other's growth</li>
        <li><strong>Safety:</strong> Maintain a safe environment free from harassment, discrimination, and harmful behavior</li>
      </ul>

      <h2>3. Acceptable Behavior</h2>
      
      <h3>3.1 Be Respectful</h3>
      <p>All community members are expected to:</p>
      <ul>
        <li>Use respectful language and tone in all communications</li>
        <li>Listen to others and consider different viewpoints</li>
        <li>Provide constructive feedback rather than personal attacks</li>
        <li>Respect others' privacy and personal boundaries</li>
        <li>Credit original sources when sharing content</li>
      </ul>

      <h3>3.2 Be Helpful</h3>
      <p>
        Contribute positively to the community by:
      </p>
      <ul>
        <li>Sharing knowledge and resources that benefit others</li>
        <li>Answering questions when you have relevant expertise</li>
        <li>Mentoring newcomers and helping them get started</li>
        <li>Celebrating others' achievements and successes</li>
      </ul>

      <h2>4. Prohibited Behavior</h2>
      
      <h3>4.1 Harassment and Discrimination</h3>
      <p>
        We have zero tolerance for harassment, discrimination, or hate speech. This includes but is not limited to:
      </p>
      <ul>
        <li>Harassing, threatening, or intimidating others</li>
        <li>Discriminating based on race, ethnicity, gender, religion, age, disability, sexual orientation, or other protected characteristics</li>
        <li>Using derogatory, offensive, or hateful language</li>
        <li>Making unwanted sexual advances or comments</li>
        <li>Bullying, trolling, or engaging in personal attacks</li>
      </ul>

      <h3>4.2 Spam and Unauthorized Content</h3>
      <p>
        The following are strictly prohibited:
      </p>
      <ul>
        <li>Posting spam, advertisements, or promotional content without permission</li>
        <li>Sharing copyrighted material without authorization</li>
        <li>Distributing malware, viruses, or harmful software</li>
        <li>Impersonating other users, organizations, or entities</li>
        <li>Creating fake accounts or engaging in deceptive practices</li>
      </ul>

      <h3>4.3 Illegal Activities</h3>
      <p>
        Any illegal activities or content that promotes illegal activities are strictly prohibited. This includes:
      </p>
      <ul>
        <li>Sharing content related to illegal substances or activities</li>
        <li>Engaging in fraud, scams, or deceptive practices</li>
        <li>Violating intellectual property rights</li>
        <li>Sharing personal information of others without consent</li>
      </ul>

      <h2>5. Content Guidelines</h2>
      
      <h3>5.1 Appropriate Content</h3>
      <p>
        All content shared in the community should be:
      </p>
      <ul>
        <li>Relevant to the community's purpose</li>
        <li>Accurate and fact-based</li>
        <li>Appropriate for a professional environment</li>
        <li>Free from explicit, violent, or offensive material</li>
      </ul>

      <h3>5.2 Content Moderation</h3>
      <p>
        We reserve the right to review, edit, or remove any content that violates these guidelines. Decisions about content 
        moderation are made at our discretion and are final.
      </p>

      <h2>6. Privacy and Confidentiality</h2>
      <p>
        Respect the privacy and confidentiality of community members:
      </p>
      <ul>
        <li>Do not share others' personal information without explicit consent</li>
        <li>Respect confidential information shared within the community</li>
        <li>Do not screenshot or record private conversations without permission</li>
        <li>Report privacy violations to our moderation team immediately</li>
      </ul>

      <h2>7. Reporting Violations</h2>
      <p>
        If you witness or experience behavior that violates these guidelines, please report it immediately:
      </p>
      <ul>
        <li>Use the built-in reporting features on our platform</li>
        <li>Contact our moderation team at community@capcons.com</li>
        <li>Provide as much detail as possible, including screenshots or evidence</li>
        <li>Reports will be reviewed promptly and handled confidentially</li>
      </ul>

      <h2>8. Consequences of Violations</h2>
      <p>
        Violations of these guidelines may result in:
      </p>
      <ul>
        <li>Warnings or educational messages</li>
        <li>Removal of offending content</li>
        <li>Temporary or permanent suspension of account access</li>
        <li>Legal action in cases of serious violations</li>
      </ul>
      <p>
        The severity of the consequences will depend on the nature and frequency of the violation. We reserve the right to take 
        immediate action, including permanent bans, for severe violations.
      </p>

      <h2>9. Appeals Process</h2>
      <p>
        If you believe a moderation action was taken in error, you may appeal by:
      </p>
      <ol>
        <li>Contacting our moderation team at community@capcons.com</li>
        <li>Providing a clear explanation of why you believe the action was incorrect</li>
        <li>Including any relevant evidence or context</li>
        <li>Appeals will be reviewed within 7-10 business days</li>
      </ol>

      <h2>10. Updates to Guidelines</h2>
      <p>
        We may update these Community Guidelines from time to time to reflect changes in our community standards or legal 
        requirements. We will notify the community of significant changes. Continued participation in the community after 
        changes are posted constitutes acceptance of the updated guidelines.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about these Community Guidelines or need assistance, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> community@capcons.com<br />
        <strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)
      </p>

      <h2>12. Thank You</h2>
      <p>
        Thank you for being part of the CapCons community and helping us maintain a positive, respectful, and inclusive 
        environment for everyone. Together, we can create a thriving community that benefits all members.
      </p>
    </>
  )
}

export default CommunityGuidelines
