"use client";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "FinTech Innovations",
    color: "text-black",
    position: "top-4 left-1 md:left-4",
    src: "https://assets.capcons.com/images/BlogFeature1.png",
  },
  {
    id: 2,
    title: "Climb the ladder? Easy peasy",
    color: "text-white",
    position: "bottom-3 left-4 lg:left-9",
    src: "https://assets.capcons.com/images/BlogFeature2.png",
  },
  {
    id: 3,
    title: "Climb the ladder? Easy peasy",
    color: "text-white",
    position: "bottom-2 lg:bottom-3 left-4 lg:left-8",
    src: "https://assets.capcons.com/images/BlogFeature3.png",
  },
];

const BlogFeature = () => {
  return (
    <section className="w-full ">
      {/* Row layout */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-4 lg:gap-8 overflow-hidden">
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative overflow-hidden 
              ${index === 0 ? "w-[45%]" : ""}
              ${index === 2 ? "w-[55%]" : ""}
              ${index === 1 ? "hidden md:block md:w-1/3" : "block"}
              sm:w-[31%] md:w-1/3 lg:w-1/3
              h-[180px] sm:h-[260px] md:h-[400px] lg:h-[500px]
            `}
          >
            {/* Text Overlay */}
            <div
              className={`absolute ${item.position} ${item.color} z-10 px-3`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-3xl font-normal leading-tight max-w-[90%] lg:max-w-[70%]">
                {item.title}
              </p>
            </div>

            {/* Image */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 33vw, 400px"
              
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFeature;
