"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BlogFeature from "@/components/blog/blog-feature";
import LatestBlog from "@/components/blog/latest-blog";
import { Container } from "@/components/ui/container";
import EventCard from "@/components/blog/event-card";
import Image from "next/image";

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
          <div className="relative w-full overflow-hidden h-[120px] md:h-[220px] lg:h-[440px]">
            <Image
              src="https://assets.capcons.com/images/Dummy 1.png" // replace with your image
              alt="Featured banner"
              fill
              className="object-cover object-center"
              priority
            />
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
                "py-2 px-3 md:py-4 md:px-6 border border-gray-300 uppercase rounded-full md:rounded-2xl font-medium transition-colors duration-200 text-sm md:text-base",
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
