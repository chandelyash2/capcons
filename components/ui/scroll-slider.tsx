"use client";
import React, { useEffect, useRef } from "react";

interface ScrollSliderProps {
  items: any[];
  speed?: number;
  direction?: "left" | "right";
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({
  items,
  speed = 0.5,
  direction = "left",
  renderItem,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // ⭐ Center position calculation
  const setCenterPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const center = (scrollWidth - clientWidth) / 2;

    container.scrollLeft = center;
  };

  // ⭐ Run after images load
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const imgs = container.querySelectorAll("img");
    let loaded = 0;

    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === imgs.length) setCenterPosition();
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === imgs.length) setCenterPosition();
        };
      }
    });

    if (imgs.length === 0) setCenterPosition();
  }, []);

  // ⭐ Auto-scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;

    const animate = () => {
      container.scrollLeft += direction === "left" ? speed : -speed;

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      const center = (scrollWidth - clientWidth) / 2;

      // ⭐ Loop: If too far from center, go back to center
      if (container.scrollLeft <= 0 || container.scrollLeft >= scrollWidth - clientWidth) {
        container.scrollLeft = center;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  // Big duplication for infinite flow
  const loopItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        ref={containerRef}
        className="flex gap-10 overflow-hidden whitespace-nowrap"
      >
        {loopItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;
