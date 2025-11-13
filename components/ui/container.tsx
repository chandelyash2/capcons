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
        "lg:px-[100px] lg:py-[30px] md:p-[20px] md:px-[30px] p-5 w-full md:mb-[140px]",
        className
      )}
    >
      {children}
    </div>
  );
};
