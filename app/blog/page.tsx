"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BlogFeature from "@/components/blog/blog-feature";
import LatestBlog from "@/components/blog/latest-blog";
import { Container } from "@/components/ui/container";
import EventCard from "@/components/blog/event-card";

const tabList = [
  { name: "All" },
  { name: "Business" },
  { name: "Finance" },
  { name: "Technology" },
  { name: "Startups" },
  { name: "Marketing" },
  { name: "Leadership" },
];

const Blog = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Container>
      <section className="space-y-[60px] md:space-y-[90px] lg:space-y-[140px]">
        {/* ======= Featured Section ======= */}
        <section className="space-y-3 md:space-y-6 lg:space-y-10">
          {/* ======= Banner ======= */}
          <div className="relative bg-primary-900 text-white overflow-hidden h-[120px] md:h-[220px] lg:h-[440px] p-3 md:p-8 lg:p-12">
            {/* Title */}
            <h2 className="font-normal text-sm md:text-2xl lg:text-5xl md:w-3/4">
              Featured this month
            </h2>

            {/* Arrow Button */}
            <div className="absolute right-2 md:right-7 top-2 md:top-5">
              {/* Large screen icon */}
              <div className="hidden md:flex items-center justify-center bg-secondary-soft md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 68 68"
                  
                  fill="none"
                >
                  <path
                    d="M48.1067 25.4406L19.8977 42.5701M19.8977 42.5701L24.0525 25.5682M19.8977 42.5701L36.8996 46.7249"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Small screen icon */}
              <div className="md:hidden bg-secondary-soft w-[28px] h-[28px] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="w-3.5 h-3.5"
                >
                  <path
                    d="M10.5719 5.5892L4.37375 9.35295M4.37375 9.35295L5.28666 5.61723M4.37375 9.35295L8.10947 10.2659"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Blog Feature Section */}
          <BlogFeature />
        </section>

        {/* ======= Category Tabs ======= */}
        <section className="flex flex-wrap items-center gap-3 md:gap-5 lg:gap-8 justify-center">
          {tabList.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={twMerge(
                "py-2 px-3 md:py-4 md:px-6 border border-gray-300 uppercase rounded-2xl font-medium transition-colors duration-200 text-sm md:text-base",
                activeTab === tab.name
                  ? "bg-primary-900 text-white border-primary-900"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              )}
            >
              {tab.name}
            </button>
          ))}
        </section>

        {/* ======= Latest Blogs ======= */}
        <LatestBlog />
        <EventCard />
      </section>
    </Container>
  );
};

export default Blog;
