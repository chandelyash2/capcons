"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BlogFeature from "@/components/blog/blog-feature";
import LatestBlog from "@/components/blog/latest-blog";
import { Container } from "@/components/ui/container";
import EventCard from "@/components/blog/event-card";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";

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
   
        {/* ======= Featured Section ======= */}
        <Section>
          <div className="relative w-full overflow-hidden h-[120px] md:h-[210px] lg:h-[370px]">
            <Link href="">
              {" "}
              <Image
                src="https://assets.capcons.com/images/Dummy 1.png" // replace with your image
                alt="Featured banner"
                fill
                className="object-cover object-center"
                priority
              />
            </Link>
          </div>

          {/* Blog Feature Section */}
          <BlogFeature />
        </Section>

       

        {/* ======= Latest Blogs ======= */}
        <LatestBlog />
        {/* <EventCard /> */}
      
    </Container>
  );
};

export default Blog;
