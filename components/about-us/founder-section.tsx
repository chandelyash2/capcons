"use client";

import Image from "next/image";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Section } from "../ui/section";

const FounderSection = () => {
  return (
    <Section>
      {/* Heading */}
      <Heading as="h2">
        What Our <br />
        <span className="bg-secondary-soft">Founders</span> says
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
          <span className="hidden lg:block">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
            >
              <circle cx="33.5" cy="33.5" r="33.5" fill="#39089D" />
              <path
                d="M48 46H36.8609C35.7726 42.4082 35.2285 38.6857 35.2285 34.8327C35.2285 30.9143 36.2207 27.8122 38.2053 25.5265C40.2539 23.1755 43.2627 22 47.2318 22V27.4857C44.0309 27.4857 42.4305 29.4776 42.4305 33.4612V35.3224H48V46ZM31.7715 46H20.6325C19.5442 42.4082 19 38.6857 19 34.8327C19 30.9143 19.9923 27.8122 21.9768 25.5265C24.0254 23.1755 27.0342 22 31.0033 22V27.4857C27.8024 27.4857 26.202 29.4776 26.202 33.4612V35.3224H31.7715V46Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="9.88188" cy="9.88188" r="9.88188" fill="#39089D" />
              <path
                d="M14.1599 13.5678H10.8741C10.5531 12.5083 10.3926 11.4103 10.3926 10.2737C10.3926 9.11783 10.6853 8.20279 11.2707 7.52854C11.875 6.83503 12.7625 6.48828 13.9333 6.48828V8.10647C12.9891 8.10647 12.517 8.69402 12.517 9.86913V10.4182H14.1599V13.5678ZM9.37283 13.5678H6.08701C5.76598 12.5083 5.60547 11.4103 5.60547 10.2737C5.60547 9.11783 5.89817 8.20279 6.48358 7.52854C7.08787 6.83503 7.97541 6.48828 9.14622 6.48828V8.10647C8.20202 8.10647 7.72992 8.69402 7.72992 9.86913V10.4182H9.37283V13.5678Z"
                fill="white"
              />
            </svg>
          </span>
          {/* Founder Message */}
          <Text>
            Just like in real life, your personal space deserves respect.
            <br />
            We refuse to exploit your data or shape your conversations with
            hidden algorithms.
            <br />
            <br />
            We believe that when we protect our communities, they will believe
            in us too.
            <br />
            That trust is what keeps Capcons alive.
          </Text>

          {/* Founder Name */}
          <Text className="font-semibold text-gray-900">
            Varun Chandra{" "}
            <span className="font-normal text-gray-600">
              Founder & CEO (Capcons)
            </span>
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default FounderSection;
