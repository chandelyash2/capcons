"use client";
import React from "react";
import { cn } from "@/lib/utils"; // your tailwind-merge helper

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-[12px] md:px-[40px] lg:px-[100px] space-y-[40px] md:space-y-[70px] lg:space-y-[113px]",
        className
      )}
    >
      {children}
    </div>
  );
};
