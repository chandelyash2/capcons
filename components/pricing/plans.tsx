import React from "react";
import { Section } from "../ui/section";
import { Heading } from "../ui/heading";
import Button from "../ui/button";
import { PricingCard } from "./pricing-card";

const PricingPlans = () => {
  return (
    <Section>
      <div
        className="h-auto w-full bg-contain space-y-10 md:space-y-15 mt-40px md:mt-[70px] lg:mt-[113px]  px-[12px] md:px-[40px] lg:px-[100px]"
        style={{
          backgroundImage: `url("https://assets.capcons.com/images/MainBg.png")`,
        }}
      >
        <div className="text-center">
          <Heading as="h2">
            <span className="bg-secondary-soft">Pricing</span> Built to suit all
            types
          </Heading>

          {/* TOGGLE */}
          <div className="mt-8 bg-white rounded-full px-2 py-2 inline-flex items-center gap-1 shadow-md border border-gray-100">
            <Button size="md">Monthly</Button>
            <button className="px-6 py-2 text-black font-medium rounded-full">
              Annually
            </button>

            {/* 20% OFF */}
            <span className="ml-2 px-4 py-2 bg-[#ECF787] text-black text-sm font-medium rounded-full">
              20% OFF
            </span>
          </div>

          {/* CURRENCY SWITCH */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white shadow-md border border-gray-100 px-2 py-1 rounded-full flex items-center gap-2">
              <button className="px-4 py-1 rounded-full bg-primary-900 text-white font-medium">
                ₹
              </button>
              <button className="px-4 py-1 rounded-full text-black font-medium">
                $
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-10">
          <PricingCard
            title="Professional"
            price="$54.22"
            annualPrice="$650.60"
            transactionFee="6%"
            features={[
              "Small reply boost",
              "Encrypted direct message",
              "Bookmark folders",
              "Highlights tab",
              "Edit post",
            ]}
          />

          <PricingCard
            title="Business"
            price="$86.75"
            annualPrice="$1040.96"
            isFeatured={true}
            features={[
              "Half Ads in Following",
              "Larger reply boost",
              "Get Paid Boost",
              "Checkmark",
              "Business & Media Studio",
            ]}
            titleColor="text-primary-900"
          />

          <PricingCard
            title="Enterprise"
            price="$108.43"
            annualPrice="$1301.20"
            features={[
              "Half Ads in Following",
              "Larger reply boost",
              "Get Paid Boost",
              "Checkmark",
              "Business & Media Studio",
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default PricingPlans;
