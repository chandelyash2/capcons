"use client";

import { ArrowUpRight } from "lucide-react";
import { Heading } from "../ui/heading";

const values = [
  {
    title: "Empowerment",
    text: "Provides creators with tools like Courses, Livestreams, and Chats to engage and grow their communities.",
  },
  {
    title: "Accountability",
    text: "Customizable privacy settings — Public, Private, Ghost, or Anonymous give users complete control. Whether they want to share openly, stay discreet, or interact.",
  },
  {
    title: "Partnership",
    text: "Capcons enables genuine collaborations between creators and brands, building relationships that drive real engagement and shared growth — not just transactions.",
  },
  {
    title: "Inclusivity",
    text: "Provides flexible engagement options, creating a safe and welcoming space for diverse communities.",
  },
];

export default function ImportantSection() {
  return (
    <section className="w-full">
      <div className="space-y-10">
        
        {/* Heading */}
        <Heading as='h2'>
          What’s most{" "}
          <br/>
          <span className="bg-secondary-soft">important</span> to us
        </Heading>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <p className="text-gray-700 text-sm leading-relaxed w-[85%]">
                  {item.text}
                </p>

                {/* Purple Icon Button */}
                <button className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-primary-900 text-white">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <h3 className="text-xl md;text-2xl font-medium mt-6">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
