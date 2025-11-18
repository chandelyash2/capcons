import React from "react";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import Image from "next/image";
import { Slider } from "../ui/slider";
import { Section } from "../ui/section";

const ProPlans = () => {
  return (
    <Section>
      {/* Heading */}
      <div className="space-y-2">
        <Heading as="h2" className="leading-tight">
          <span className="bg-secondary-soft">Pro Plans</span> for Pros who
          <br />
          want more.
        </Heading>

        <Text className="text-gray-600">
          Ready to scale? Capcons Pro unlocks advanced features
        </Text>
      </div>

      {/* Desktop Images */}
      <div className="hidden lg:flex items-center justify-between gap-6">
        <Image
          src="https://assets.capcons.com/images/Pro1.png"
          alt="Pro1"
          width={350}
          height={350}
          className="object-cover transition-all duration-300 transform hover:scale-105"
        />

        <Image
          src="https://assets.capcons.com/images/Pro2.png"
          alt="Pro2"
          width={440}
          height={440}
          className="object-cover transition-all duration-300 transform hover:scale-105"
        />

        <Image
          src="https://assets.capcons.com/images/Pro3.png"
          alt="Pro3"
          width={350}
          height={350}
          className="object-cover transition-all duration-300 transform hover:scale-105"
        />
      </div>

      {/* Mobile Version (Optional) */}
      <div className="lg:hidden flex flex-col items-center gap-6">
        <Slider
          className="l w-full max-w-md mx-auto" // centers + fixes width
          items={[
            <Image
              src="https://assets.capcons.com/images/Pro1.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,

            <Image
              src="https://assets.capcons.com/images/Pro2.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,
            <Image
              src="https://assets.capcons.com/images/Pro3.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,
          ]}
        ></Slider>
      </div>
    </Section>
  );
};

export default ProPlans;
