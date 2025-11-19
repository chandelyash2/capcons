import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/button";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";

interface PricingCardProps {
  title: string;
  titleColor?: string;
  price: string;
  perMonth?: string;
  annualPrice: string;
  transactionFee?: string;
  features?: string[];
  isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  perMonth = "/per month",
  annualPrice,
  transactionFee,
  features = [],
  isFeatured = false,
  titleColor,
}) => {
  return (
    <div
      className={`relative w-full max-w-sm rounded-[20px] shadow-sm p-6 flex flex-col gap-5 ${
        isFeatured ? "bg-transparent" : "bg-white"
      }`}
    >
      {/* Featured Star */}
      {isFeatured && (
        <span className="absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
          >
            <path
              d="M6.36662 31.7249L9.10496 19.992L0 12.1039L11.9935 11.066L16.6906 0L21.3877 11.0638L33.379 12.1017L24.274 19.9898L27.0145 31.7227L16.6906 25.4952L6.36662 31.7249Z"
              fill="#C6F806"
            />
          </svg>
        </span>
      )}

      {/* Title */}
      <Heading as="h3" className={titleColor}>
        {title}
      </Heading>

      {/* Price Section */}
      <div>
        <p className="text-base md:text-4xl font-semibold text-gray-700">
          {price}
          <span className="text-base font-normal text-gray-700 ml-2">
            {perMonth}
          </span>
        </p>

        <Text size="sm">
          {annualPrice} billed annually{" "}
          {transactionFee && (
            <span className="ml-1">{transactionFee} Transaction fee</span>
          )}
        </Text>
      </div>

      {/* CTA Button */}
      <Button size="lg" className="w-full">
        Get Started
      </Button>

      <hr className="border-gray-200" />

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-green-600 mt-1">
              <Check size={18} />
            </span>
            <span className="text-gray-800">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
