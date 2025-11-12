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
    <div className="w-full max-w-[360px] bg-white rounded-lg overflow-hidden cursor-pointer">
      {/* Image */}
      <div
        className="
          relative flex-shrink-0 
          w-[173.332px] h-[109.959px]     /* mobile */
          sm:w-[300px] sm:h-[190px]       /* small tablet */
          md:w-[400px] md:h-[250px]       /* large tablet */
          lg:w-[514.208px] lg:h-[326.204px] /* desktop / Figma */
          bg-gray-200
          mx-auto
        "
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-md"
          sizes="(max-width: 768px) 100vw, 514px"
          
      
        />
      </div>

      {/* Content */}
      <div className="py-4">
        <h3 className="text-lg font-medium text-gray-900">
          {title}
        </h3>

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
