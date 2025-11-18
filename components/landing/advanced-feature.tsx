"use client";

import React from "react";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import Image from "next/image";

const AdvancedFeature = () => {
  return (
    <section className="space-y-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <Heading as="h2" className="leading-tight">
          Ready to scale?{" "}
          <span className="bg-secondary-soft">Capcons</span>
          <br />
          <span className="bg-secondary-soft">Pro</span> unlocks advanced
          features
        </Heading>

        <Text className="md:w-80 text-gray-700 text-center">
          With its smart ecosystem and powerful collaboration tools, Capcons
          fuels the growth of passionate communities.
        </Text>
      </div>

      {/* Full-Width Image */}
      <div className="w-full">
        <Image
          src="https://assets.capcons.com/images/Advanced.png"
          alt="Advanced Feature"
          width={1600}
          height={900}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default AdvancedFeature;
