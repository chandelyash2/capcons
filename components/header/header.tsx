"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (already available in shadcn/lucide-react)
import { NavLink } from "./navLink";
import { twMerge } from "tailwind-merge";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="font-sans bg-white sticky top-0 z-50"
      role="banner"
    >
      <div className="flex items-center justify-between p-4 md:px-[100px]">
        {/* Logo */}
        <a href="/" aria-label="CapCons Home" className="flex items-center">
          <Image
            src="https://assets.capcons.com/images/Logo.png"
            alt="CapCons logo"
            width={180}
            height={40}
            unoptimized
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Main Navigation"
        >
          <NavLink href="/features" label="Features" />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/resources" label="Resources" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={twMerge(
          "md:hidden absolute top-[72px] left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav
          className="flex flex-col items-start gap-6 p-6 font-medium "
          aria-label="Mobile Navigation"
        >
          <NavLink href="/features" label="Features" onClick={closeMenu} />
          <NavLink href="/pricing" label="Pricing" onClick={closeMenu} />
          <NavLink href="/resources" label="Resources" onClick={closeMenu} />
          <NavLink href="/contact" label="Contact" onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
