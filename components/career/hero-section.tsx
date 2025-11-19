import React from "react";
import { Section } from "../ui/section";
import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <Section>
      {/* HERO IMAGE WRAPPER */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="https://assets.capcons.com/images/CarrerHero.png"
          alt="Career Hero"
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-lg"
        />

        {/* FLOATING FILTER BOX */}
        <div className="absolute transform left-1 lg:left-[24%] bottom-[-52] bg-white rounded-[20px] p-8 flex flex-col flex-row items-center gap-4 border border-[#C0C0C0]">
          {/* Experience Level */}
          <div className="flex flex-col">
            <label className="text-gray-700 text-sm mb-1">
              Experience Level
            </label>
            <select className="border rounded-md px-2 py-2 text-gray-600">
              <option>All Experience Level</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col text-xs">
            <label className="text-gray-700  mb-1">Location</label>
            <select className="border rounded-md px-2 py-2 text-gray-600">
              <option>All Location</option>
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-col text-xs">
            <label className="text-gray-700  mb-1">Categories</label>
            <select className="border rounded-md px-2 py-2 text-gray-600">
              <option>All Categories</option>
            </select>
          </div>

          <Button size="md" className="">View Jobs</Button>
        </div>
      </div>

      {/* Spacer to avoid overlap */}
      <div className="h-24"></div>
    </Section>
  );
};

export default HeroSection;
