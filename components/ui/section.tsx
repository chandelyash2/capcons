import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={cn(
        "px-[30px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px] lg:py-[150px]",
        className
      )}
    >
      {children}
    </section>
  );
};
