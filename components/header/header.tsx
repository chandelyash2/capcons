"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./navLink";
import { twMerge } from "tailwind-merge";
import { MobileResources } from "./mobile-resouces";
import { DesktopResources } from "./desktop-resources";
import { DesktopResourcesPanel } from "./desktop-resource-panel";
import Button from "../ui/button";
import Link from "next/link";
import { Heading } from "../ui/heading";
import { Container } from "../ui/container";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpenMobile, setResourcesOpenMobile] = useState(false);
  const [hoverResources, setHoverResources] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={twMerge(
        "font-sans sticky top-0 z-50",
        scrolled ? "bg-white" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" aria-label="CapCons Home">
            <Image
              src="https://assets.capcons.com/images/Logo.png"
              alt="CapCons logo"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 relative">
            <NavLink href="/features" label="Features" />

            <div
              className="group/resources relative"
              onMouseEnter={() => setHoverResources(true)}
              onMouseLeave={() => setHoverResources(false)}
            >
              {/* the button */}
              <DesktopResources open={hoverResources} />

              {/* Hover Bridge to prevent closing */}
              <div className="absolute left-0 top-full w-full h-[40px]"></div>

              {/* DROPDOWN OUTSIDE OF FLOW */}
              {hoverResources && <DesktopResourcesPanel />}
            </div>

            <NavLink href="/pricing" label="Pricing" />
          </nav>
          <div className="hidden lg:flex gap-4 items-center">
            <Link href="/login">
              <Heading as="h3">Log in</Heading>
            </Link>
            <Link href="/signup">
              <Button variant="primary">Sign up</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={twMerge(
          "lg:hidden absolute top-[66px] left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all",
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        // 👇 Add scroll for mobile
        style={{
          maxHeight: "calc(100vh - 72px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch", // iOS smooth scroll
        }}
      >
        <nav className="flex flex-col gap-6 p-6 font-medium pb-10">
          <NavLink href="/features" label="Features" onClick={closeMenu} />

          <MobileResources
            open={resourcesOpenMobile}
            toggle={() => setResourcesOpenMobile((p) => !p)}
            closeMenu={closeMenu}
          />

          <NavLink href="/pricing" label="Pricing" onClick={closeMenu} />
          <div className="flex flex-col lg:hidden gap-4 justify-center items-center">
            <Link href="/signup">
              <Button variant="primary">Sign up</Button>
            </Link>
            <Link href="/login">
              <Heading as="h3">Log in</Heading>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
