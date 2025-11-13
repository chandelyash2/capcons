"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ResourcesItem } from "./resource-items";
import { resourcesData } from "./data";
import Image from "next/image";
import { Heading } from "../ui/heading";

export const MobileResources = ({
  open,
  toggle,
  closeMenu,
}: {
  open: boolean;
  toggle: () => void;
  closeMenu: () => void;
}) => {
  return (
    <div className="w-full">
      {/* Toggle Button */}
      <button
        className="flex items-center justify-between w-full py-2"
        onClick={toggle}
      >
        <span>Resources</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Dropdown Content */}
      <div
        className={twMerge(
          "transition-all overflow-hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {/* Make the ENTIRE inside area scrollable */}
        <div className="p-4 mt-2 border border-gray-200 rounded-md bg-white max-h-[480px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          
          {/* Resource List */}
          <div className="flex flex-col gap-4">
            {resourcesData.map((item) => (
              <ResourcesItem key={item.href} {...item} onClick={closeMenu} />
            ))}
          </div>

          {/* Bottom Promo Card */}
          <div className="space-y-2 pb-4">
            <Image
              src="https://assets.capcons.com/images/HeaderResource.png"
              alt="Resource Banner"
              width={240}
              height={100}
              priority
              className="rounded-lg w-full object-cover"
            />

            <Heading as="h4" className="text-base font-semibold">
              StormNorms Incubator
            </Heading>

            <p className="text-sm text-gray-600 leading-snug">
              We empower fearless founders to challenge change the world.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
