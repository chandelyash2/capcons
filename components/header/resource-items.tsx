// components/header/ResourcesItem.tsx
import Link from "next/link";
import React from "react";
import { Heading } from "../ui/heading";

export const ResourcesItem = ({
  href,
  label,
  description,
  icon,
  onClick,
}: any) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition "
    >
      {/* Icon */}
      <div>{icon}</div>

      <div>
        <Heading as="h4">{label}</Heading>
        <p className="text-sm font-normal text-gray-600">{description}</p>
      </div>
    </Link>
  );
};
