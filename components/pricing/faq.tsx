"use client";
import React, { useState } from "react";
import { Section } from "../ui/section";
import { Heading } from "../ui/heading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "FAQ question here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "FAQ question here",
    a: "Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    q: "FAQ question here",
    a: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  },
  {
    q: "FAQ question here",
    a: "Praesent dapibus, neque id cursus faucibus.",
  },
  {
    q: "FAQ question here",
    a: "Vivamus eleifend convallis ante, at volutpat lacus.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Section className="space-y-10">
      <Heading as="h2" className="text-center">
        Frequently Asked <span className="bg-secondary-soft">Questions</span>
      </Heading>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-4 cursor-pointer transition-all bg-white"
            onClick={() => toggle(i)}
          >
            {/* Header Row */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">{item.q}</p>

              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`text-gray-600 transition-all overflow-hidden ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
