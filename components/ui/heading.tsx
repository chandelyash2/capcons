"use client";
import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) => {
  const base = "text-gray-900";

  const variants = {
    h1: "text-[28px] md:text-3xl lg:text-[65px] font-normal",
    h2: "text-[20px] md:text-2xl lg:text-[50px] font-normal",
    h3: "text-base md:text-lg font-medium",
    h4: "text-sm md:text-base font-medium",
  };

  return <Tag className={cn(base, variants[Tag], className)}>{children}</Tag>;
};
