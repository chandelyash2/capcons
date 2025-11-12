"use client";
import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4"
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) => {
  const base = "font-sans  tracking-tight";

  const variants = {
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "font-semibold",
    h3: "text-base md:text-lg font-medium",
    h4: "text-sm md:text-base font-medium",
  };

  return <Tag className={cn(base, variants[Tag], className)}>{children}</Tag>;
};
