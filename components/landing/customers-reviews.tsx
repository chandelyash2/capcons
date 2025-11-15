"use client";

import Image from "next/image";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Slider } from "../ui/slider";

const reviews = [
  {
    text: `Capcons has completely streamlined our operations. Managing refunds and product updates used to take hours — now it's done in minutes. It’s a game-changer for our team's productivity.`,
    avatar: "https://assets.capcons.com/images/Avatar.png",
    rating: 5,
  },
  {
    text: `Switching to Capcons was the best decision we made this year. The custom branding features are robust, allowing us to maintain a consistent look across all our new courses and live events.`,
    avatar: "https://assets.capcons.com/images/Avatar.png",
    rating: 5,
  },
  {
    text: `The deep analytics provided us insights we didn't even know we were missing. We optimized our sales funnel and saw a 30% increase in conversions almost immediately.`,
    avatar: "https://assets.capcons.com/images/Avatar.png",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="space-y-6">
      <div className="hidden lg:block space-y-16">
        {/* ========== Heading ========== */}
        <Heading as="h1" className="text-center leading-tight">
          See what our <span className="bg-secondary-soft px-1">Customers</span>
          <br className="hidden md:block" /> are saying?
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-2 ">
          {/* ========== Left Side Quote Block ========== */}
          <div className="flex flex-col gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="62"
              viewBox="0 0 85 62"
              fill="none"
            >
              <path
                d="M0 61.6052V40.0649C0 29.7256 2.57812 20.8941 7.73436 13.5704C12.8906 6.24667 20.9114 1.72322 31.7968 0V13.355C25.4947 14.2166 21.1979 16.4424 18.9062 20.0324C16.7578 23.4789 15.6836 28.4332 15.6836 34.8952L5.15624 32.7412H31.3671V61.6052H0Z"
                fill="#C6F806"
              />
              <path
                d="M53.0814 61.6052V40.0649C53.0814 29.7256 55.6595 20.8941 60.8158 13.5704C65.972 6.24667 73.9928 1.72322 84.8782 0V13.355C78.5762 14.2166 74.2793 16.4424 71.9876 20.0324C69.8392 23.4789 68.765 28.4332 68.765 34.8952L58.2377 32.7412H84.4485V61.6052H53.0814Z"
                fill="#C6F806"
              />
            </svg>

            <h3 className="text-4xl font-normal">
              What our <br /> customers are <br /> saying
            </h3>
          </div>

          {/* ========== Review Cards ========== */}
          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[#FEFCF9] rounded-xl p-6 flex flex-col justify-between"
              >
                <p className="text-sm lg:text-base text-gray-700">
                  {review.text}
                </p>

                {/* Stars */}
                <div className="flex space-x-1 mt-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-black text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Avatar */}
                <div className="mt-5">
                  <Image
                    src={review.avatar}
                    alt="User avatar"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden space-y-4">
        {" "}
        <Heading as="h1" className="text-left leading-tight">
          See what our <br />{" "}
          <span className="bg-secondary-soft px-1">Customers</span>
          are saying?
        </Heading>
        <Slider
          items={reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#FEFCF9] rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm lg:text-base text-gray-700">
                {review.text}
              </p>

              {/* Stars */}
              <div className="flex space-x-1 mt-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-black text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Avatar */}
              <div className="mt-5">
                <Image
                  src={review.avatar}
                  alt="User avatar"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
