"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  items: React.ReactNode[];
  spaceBetween?: number;
  className?: string;
  pagination?: boolean;

  // Optional custom breakpoints
  breakpoints?: Record<string, any>;
}

export const Slider = ({
  items,
  spaceBetween = 20,
  className = "",
  pagination = true,
  breakpoints,
}: SliderProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={pagination ? { clickable: true } : false}
      spaceBetween={spaceBetween}
      slidesPerView={1}
      breakpoints={
        breakpoints || {
          // Default responsive behavior
          708: {
            slidesPerView: 2, // tablet
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // laptop/desktop
            spaceBetween: 40,
          },
        }
      }
      className={`!pb-12 ${className}`}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};
