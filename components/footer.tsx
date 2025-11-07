import Image from "next/image";
import Link from "next/link";
import type { COBEOptions } from "cobe";
import {
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
} from "react-icons/fa";

import { Globe } from "@/components/ui/globe";
import { Separator } from "@/components/ui/separator";

const BG_FOOTER_COLOR: [number, number, number] = [1, 248 / 255, 236 / 255];

const footerGlobeConfig: Partial<COBEOptions> = {
  baseColor: BG_FOOTER_COLOR,
  glowColor: BG_FOOTER_COLOR,
  diffuse: 0.2,
  mapBrightness: 1,
};

const sections = [
  {
    title: "Company",    
    links: [
      { name: "About", href: "/about-us" },
      { name: "Career", href: "/career" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Insights", href: "/insights" },
      { name: "Events", href: "/events" },
      { name: "Features", href: "/features" },
      { name: "FAQs", href: "/faq" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    markSrc: string;
    alt: string;
  };
}

export function Footer({
  logo = {
    url: "https://capcons.com",
    markSrc: "https://assets.capcons.com/images/logo-footer.png",
    alt: "Capcons logo",
  },
}: FooterProps = {}) {
  return (
    <section className="bg-footer">
      <div className="w-full px-30">
        <footer>
          <Separator className="my-14" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-24">
            <div className="lg:max-w-xl">
              <div className="flex items-center">
                <a href={logo.url} aria-label="Capcons" className="flex items-center">
                  <Image
                    src={logo.markSrc}
                    alt={logo.alt}
                    width={200}
                    height={52}
                    className="h-10 w-auto"
                    unoptimized
                  />
                </a>
              </div>
              <p className="text-muted-foreground mt-4 text-left text-sm md:text-base font-sans">
                Strengthen connections, drive engagement, and grow a thriving community. Reach your
                audience, foster loyalty, and monetize - free from ads and algorithms.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-700 font-sans">
                <a
                  href="https://www.instagram.com/capcons"
                  aria-label="Capcons on Instagram"
                  className="transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/capcons"
                  aria-label="Capcons on LinkedIn"
                  className="transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com/capcons"
                  aria-label="Capcons on Twitter"
                  className="transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.producthunt.com/capcons"
                  aria-label="Capcons on Product Hunt"
                  className="transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaProductHunt className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:mt-0">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4">
                  <h3 className="mb-4 font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <ul className="text-muted-foreground space-y-2 text-base font-sans">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:h-64 relative h-40 overflow-hidden mt-8">
            <Globe
              className="absolute top-4 md:scale-125 lg:top-8 lg:scale-150"
              config={footerGlobeConfig}
            />
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col gap-6 pb-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between font-sans">
            <p className="text-center sm:text-left">
              © Copyright Capcons Analytics Private Limited
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-end">
              <Link href="/legal/terms-of-use" className="hover:text-primary">
                Terms of Use
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/legal/community-guidelines" className="hover:text-primary">
                Community Guidelines
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

