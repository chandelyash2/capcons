"use client";
import Image from "next/image";
import { resourcesData } from "./data";
import { ResourcesItem } from "./resource-items";
import { Heading } from "../ui/heading";

export const DesktopResourcesPanel = () => {
  return (
    <div className="
      fixed left-[20%] top-[72px] 
      w-[70%] max-w-screen 
      bg-white shadow-xl rounded-lg border border-gray-200 
      rounded-b-xl flex items-start gap-6 
      px-8 py-6 z-[999]
    ">
      {/* Left Promo */}
      <div className="space-y-3 p-4 bg-gray-50 rounded-lg w-[260px] shrink-0">
        <Image
          src='https://assets.capcons.com/images/HeaderResource.png'
          width={240}
          height={100}
          className="rounded-lg w-full"
          alt="Resource Banner"
        />
        <Heading as="h4">StormNorms Incubator</Heading>
        <p className="text-sm text-gray-600">
          We empower fearless founders to challenge change the world.
        </p>
      </div>

      {/* Right List */}
      <div className="grid grid-cols-2 gap-4 flex-1 p-4 bg-white rounded-lg">
        {resourcesData.map((item) => (
          <ResourcesItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};
