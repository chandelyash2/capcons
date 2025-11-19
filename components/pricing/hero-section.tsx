import React from "react";
import { Section } from "../ui/section";
import { Heading } from "../ui/heading";
import { Check } from "lucide-react";
import { Text } from "../ui/text";
import Image from "next/image";
import Button from "../ui/button";

const list = [
  "Half Ads in Following",
  "Larger reply boost",
  "Get Paid Boost",
  "Checkmark",
  "Business & Media Studio",
];
const HeroSection = () => {
  return (
    <Section>
      <div className="flex flex-col  lg:flex-row lg:justify-between lg:items-center">
        <div className="space-y-5 lg:space-y-15">
          <div className="space-y-2 text-center lg:text-left">
            <Heading as="h2">
              Try our <span className="bg-secondary-soft">Business</span>
              <br /> Plan for free for
              <br className="hidden lg:block" />{" "}
              <span className="bg-secondary-soft">14 days</span>
            </Heading>
            <Text className="lg:hidden">
              You get fewer ads, boosted replies and reach, a verified
              checkmark, and access to Business & Media Studio.
            </Text>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            {list.map((item, i) => (
              <div key={i} className="flex gap-1 items-center">
                <span className="flex border-4 border-[#F9F6FE] w-8 h-8 rounded-full items-center justify-center">
                  <Check color="#149041" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-[800px]">
          {/* BACKGROUND IMAGE */}
          <Image
            src="https://assets.capcons.com/images/PricingHero.png"
            alt="Pricing Hero"
            width={800}
            height={800}
            className="rounded-2xl w-full h-[350px] lg:h-[500px]"
          />

          {/* OVERLAY CONTENT */}
          <div className="absolute inset-0 p-8 flex flex-col justify-start">
            {/* TOP TEXT */}
            <div className="space-y-2">
              <Text className="text-sm">Starts at</Text>

              <div className="flex items-center gap-3">
                {/* STRIKETHROUGH PRICE */}
                <span className="relative text-sm lg:text-4xl  font-semibold text-gray-400">
                  $54.22
                  <span className="absolute left-0 right-0 top-1/2 h-[4px] bg-[#C6FF61] -rotate-2"></span>
                </span>

                {/* FREE */}
                <span className="text-sm lg:text-4xl font-normal text-black">Free</span>
              </div>

              {/* DESCRIPTION */}
              <Text size="sm" >
                More reach, Fewer ads, monetization, plus pro tools with a free
                trial.
              </Text>
              {/* CTA BUTTON */}
              <Button size="md" className="w-32">
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
