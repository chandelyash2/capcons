"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./navLink";
import { twMerge } from "tailwind-merge";
import { MobileResources } from "./mobile-resouces";
import { DesktopResources } from "./desktop-resources";
import { DesktopResourcesPanel } from "./desktop-resource-panel";
import Button from "../ui/button";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpenMobile, setResourcesOpenMobile] = useState(false);
  const [hoverResources, setHoverResources] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="font-sans bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 md:px-[100px]">
        {/* Logo */}
        <a href="/" aria-label="CapCons Home">
          <Image
            src="https://assets.capcons.com/images/Logo.png"
            alt="CapCons logo"
            width={180}
            height={40}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 relative">
          <NavLink href="/features" label="Features" />
          <NavLink href="/pricing" label="Pricing" />

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

          <NavLink href="/contact" label="Contact" />
        </nav>
        <div className="hidden lg:flex gap-4">
          <Button variant="secondary">Log in</Button>
          <Button variant="primary">Sign up</Button>
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
          <NavLink href="/pricing" label="Pricing" onClick={closeMenu} />

          <MobileResources
            open={resourcesOpenMobile}
            toggle={() => setResourcesOpenMobile((p) => !p)}
            closeMenu={closeMenu}
          />

          <NavLink href="/contact" label="Contact" onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
