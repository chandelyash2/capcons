import React from "react";
import { Section } from "../ui/section";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import Button from "../ui/button";
import Image from "next/image";

const WhatPlan = () => {
  return (
    <Section>
      <div className="hidden lg:flex items-center justify-between ">
        <Image
          src="https://assets.capcons.com/images/WhatPlan.png"
          alt="What Plan"
          width={800}
          height={800}
          className="w-auto h-auto lg:w-[800px] "
        />
        <div className="flex flex-col gap-4">
          <Heading as="h2">
            Want your kind <br />
            of Plan?
          </Heading>
          <Text size="sm">
            Our Custom Plan lets you organize events and run activity feeds,
            perfect if you're transitioning from a small free chat app!
          </Text>
          <input
            placeholder="name@email.com"
            className="border border-gray-200 px-4 p-2 rounded-[20px] "
          />
          <Button size="lg">Get in Touch</Button>
        </div>
      </div>
      <div className="lg:hidden bg-[#FFF8EC] p-4 md:p-8 text-center rounded-md">
        <div className="flex flex-col gap-4">
          <Heading as="h2">
            Want your kind 
            of <br />Plan?
          </Heading>
          <Text size="sm">
            Our Custom Plan lets you organize events and run activity feeds,
            perfect if you're transitioning from a small free chat app!
          </Text>
          <input
            placeholder="name@email.com"
            className="border border-gray-200 px-4 p-2 rounded-[20px] "
          />
          <Button size="lg">Get in Touch</Button>
        </div>
      </div>
    </Section>
  );
};

export default WhatPlan;
