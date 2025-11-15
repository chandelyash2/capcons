"use client";
import React from "react";
import { cn } from "@/lib/utils";

type TextProps = {
  size?: "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold";
  className?: string;
  children: React.ReactNode;
  muted?: boolean;
};

export const Text = ({
  size = "base",
  weight = "normal",
  muted = false,
  className,
  children,
}: TextProps) => {
  const base = "font-sans leading-relaxed";
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };
  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  };

  return (
    <p
      className={cn(
        base,
        sizes[size],
        weights[weight],
        muted ? "text-gray-600" : "text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
};
