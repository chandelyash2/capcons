import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
} from "react-icons/fa";

import { Separator } from "@/components/ui/separator";

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

export function Footer() {
  return (
    <section className="bg-footer">
      <div className="w-full px-30">
        <footer className="text-[var(--color-footer-text)] text-sm">
          <Separator className="my-14" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-32">
            <div className="lg:max-w-xl">
              <div className="flex items-center -ml-2">
                <Image
                  src="https://assets.capcons.com/images/logo-footer.png"
                  alt="Capcons logo"
                  width={200}
                  height={52}
                  className="h-10 w-auto"
                  unoptimized
                />
              </div>
              <p className="mt-4 text-left font-sans text-sm">
                A social network built to power creators, communities, and cultures of tomorrow.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 font-sans text-sm">
                <a
                  href="https://www.instagram.com/capcons"
                  aria-label="Capcons on Instagram"
                  className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/capcons"
                  aria-label="Capcons on LinkedIn"
                  className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com/capcons"
                  aria-label="Capcons on Twitter"
                  className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.producthunt.com/capcons"
                  aria-label="Capcons on Product Hunt"
                  className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaProductHunt className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2 lg:mt-0">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4 font-open-sans text-sm">
                  <h3 className="mb-4 font-open-sans text-sm font-bold">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 font-open-sans">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        <Link
                          href={link.href}
                          className="text-[var(--color-footer-text)] transition-colors hover:text-primary font-open-sans"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between font-sans text-sm">
            <p className="text-center sm:text-left">
              © Copyright Capcons Analytics Private Limited
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-end">
              <Link
                href="/legal/terms-of-use"
                className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
              >
                Terms of Use
              </Link>
              <Link
                href="/legal/privacy-policy"
                className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/community-guidelines"
                className="text-[var(--color-footer-text)] transition-colors hover:text-primary"
              >
                Community Guidelines
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

