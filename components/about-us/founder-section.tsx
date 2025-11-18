"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

const FounderSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* Heading */}
        <Heading as="h2">
          What Our <br/><span className="bg-secondary-soft">Founders</span> says
        </Heading>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT : Founder Image */}
          <div>
            <Image
              src="https://assets.capcons.com/images/Varun.png"
              alt="Founder"
              width={450}
              height={450}
              className="rounded-[20px] object-cover shadow-md"
            />
          </div>

          {/* RIGHT : Quote Section */}
          <div className="space-y-6">
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-[#5A1FDE] rounded-full flex items-center justify-center text-white">
              <Quote size={24} />
            </div>

            {/* Founder Message */}
            <Text >
              Just like in real life, your personal space deserves respect.
              <br />
              We refuse to exploit your data or shape your conversations with hidden algorithms.
              <br />
              <br />
              We believe that when we protect our communities,
              they will believe in us too.
              <br />
              That trust is what keeps Capcons alive.
            </Text>

            {/* Founder Name */}
            <Text className="font-semibold text-gray-900">
              Varun Chandra{" "}
              <span className="font-normal text-gray-600">Founder & CEO (Capcons)</span>
            </Text>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
