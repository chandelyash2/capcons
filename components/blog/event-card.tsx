"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const EventCard = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[480px]">
        <Image
          src="https://assets.capcons.com/images/BlogEvent.png"
          alt="Future of Digital Influence Event"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8 lg:p-10">
        {/* Title */}
        <h2 className="text-white font-semibold text-base md:text-2xl lg:text-3xl leading-snug max-w-5xl">
          FUTURE OF DIGITAL INFLUENCE: NEURO-MARKETING, HYPER-TARGETING &
          CONNECTED COMMERCE SYMPOSIUM
        </h2>

        {/* Event Info - Desktop */}
        <div className="hidden md:flex items-center justify-between bg-white rounded-xl shadow-lg p-4 max-w-4xl">
          <div className="flex items-center divide-x divide-[#2E134D] text-center text-sm lg:text-base">
            <div className="md:px-4 lg:px-8">
              <p className="font-semibold text-gray-700">Date</p>
              <p className="text-gray-600">25 May’ 25</p>
            </div>
            <div className="md:px-4 lg:px-8">
              <p className="font-semibold text-gray-700">Time</p>
              <p className="text-gray-600">00:00 pm</p>
            </div>
            <div className="md:px-4 lg:px-8">
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">Delhi, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold text-lg lg:text-2xl">₹ 600.00</p>
            <Button variant="primary">View Event</Button>
          </div>
        </div>

        {/* Event Info - Mobile */}
        <div className="flex md:hidden items-center justify-between text-white text-xs sm:text-sm mt-3">
          <div className="flex items-center gap-1">
            <span>25 May’ 25</span>
            <span>|</span>
            <span>00:00 pm</span>
            <span>|</span>
            <span>Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-white">₹ 600.00</p>
            <Button variant="primary" size="sm">View Event</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
