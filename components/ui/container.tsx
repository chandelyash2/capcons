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
        "lg:px-[100px] md:px-[50px] p-5 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
