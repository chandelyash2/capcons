import Image from "next/image";
import React from "react";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  author,
  readTime,
  date,
  excerpt,
}) => {
  return (
    <div className="w-full max-w-[400px] bg-white rounded-lg overflow-hidden cursor-pointer">
      {/* Image */}
      <div
        className="
          relative flex-shrink-0 
          w-[173.332px] h-[109.959px]     /* mobile */
          sm:w-[300px] sm:h-[190px]       /* small tablet */
          md:w-[380px] md:h-[240px]       /* large tablet */
          lg:w-[420.208px] lg:h-[260.204px] /* desktop / Figma */
          bg-gray-200
          mx-auto
        "
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center rounded-md"
        />
      </div>

      {/* Content */}
      <div className="py-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>

        <p className="text-sm text-gray-500 mt-1">
          {author} | {readTime} | {date}
        </p>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
