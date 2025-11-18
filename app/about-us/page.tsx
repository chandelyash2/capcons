import type { Metadata } from "next";
import {
  generateWebPageSchema,
  generateBreadcrumbListSchema,
} from "@/lib/schema";
import { IMAGES } from "@/lib/images";
import { Section } from "@/components/ui/section";
import HeroSection from "@/components/about-us/hero-section";
import { Container } from "@/components/ui/container";
import Progress from "@/components/about-us/progress";
import ImportantSection from "@/components/about-us/important-section";
import FounderSection from "@/components/about-us/founder-section";

export const metadata: Metadata = {
  title:
    "About Capcons | Empowering Creators & Building Interest-Driven Communities",
  description:
    "Capcons fuels creators, entrepreneurs, and storytellers by enabling them to build powerful, interest-driven communities. Discover how we’re transforming social networking into culture-building for the creator economy.",
  keywords: [
    "Capcons About Us",
    "creator communities",
    "creator monetization",
    "social networking for creators",
    "interest-driven communities",
    "creator economy platform",
    "build online community",
    "digital culture",
    "community growth platform",
  ],
  alternates: {
    canonical: "https://capcons.com/about-us",
  },
  openGraph: {
    title:
      "About Capcons | Empowering Creators & Building Interest-Driven Communities",
    description:
      "Discover how Capcons is redefining social networking — from followers to communities, from audiences to loyal circles. Join the future of creator-led culture.",
    type: "website",
    url: "https://capcons.com/about-us",
    images: [
      {
        url: IMAGES.og,
        width: 1200,
        height: 630,
        alt: "Capcons - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Capcons | Empowering Creators & Building Interest-Driven Communities",
    description:
      "Capcons empowers creators and brands to grow their communities, monetize creativity, and build culture-driven networks.",
    images: [IMAGES.twitter],
  },
};

const About = () => {
  const webpageSchema = generateWebPageSchema({
    name: "About Capcons",
    description:
      "Capcons is the all-in-one community platform empowering creators, entrepreneurs, and storytellers to grow culture-driven circles and monetize their creativity.",
    url: "https://capcons.com/about-us",
  });

  const breadcrumbSchema = generateBreadcrumbListSchema({
    items: [
      { name: "Home", url: "https://capcons.com" },
      { name: "About Us", url: "https://capcons.com/about-us" },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webpageSchema, breadcrumbSchema]),
        }}
      />

      <Container>
        <HeroSection />
        <Progress />
        <ImportantSection />
        <FounderSection />
      </Container>
    </>
  );
};

export default About;
