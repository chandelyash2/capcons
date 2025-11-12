"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  onClick,
  className,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      title={`${label} | CapCons`}
      className="text-lg font-medium transition-colors cursor-pointer"
    >
      {label}
    </Link>
  );
};
