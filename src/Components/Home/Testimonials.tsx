"use client";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import testimonials from "@/Utils/TestimonialsData.json";
import { H_Four, H_Two } from "@/Utils/Typography";
import { TbQuote } from "react-icons/tb";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 (skipping duplicate first slide)
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const intervalTime = 3000; // Auto-scroll interval

  // Create infinite loop effect by duplicating first and last slides
  const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Duplicate last slide at start
    ...testimonials,
    testimonials[0], // Duplicate first slide at end
  ];

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, intervalTime);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    stopAutoScroll();
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const newIndex = currentIndex + 1;

    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({ left: width * newIndex, behavior: "smooth" });

    // Loop back smoothly
    if (newIndex === extendedTestimonials.length - 1) {
      setTimeout(() => {
        containerRef.current?.scrollTo({ left: width, behavior: "auto" });
        setCurrentIndex(1);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({ left: width * newIndex, behavior: "smooth" });

    // Loop forward smoothly
    if (newIndex === 0) {
      setTimeout(() => {
        containerRef.current?.scrollTo({ left: width * (extendedTestimonials.length - 2), behavior: "auto" });
        setCurrentIndex(extendedTestimonials.length - 2);
      }, 300);
    }
  };

  return (
    <div className="bg-background overflow-hidden">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto text-left py-8 md:py-16">
        <div className="flex items-start justify-between">
          <div>
            <H_Two className="font-bold text-primary " text="Testimonials" />
            <div className="bg-gradient-to-r from-blue-700 rounded-full to-transparent h-2 w-56 mt-2"></div>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-background rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
          >
            View All
            <IoIosArrowForward className="text-base" />
          </Link>
        </div>

        <br />
        <H_Four className="text-left font-bold text-accent mt-2" text="What Our Customers Say About Us" />

        <div className="relative">
          <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2  text-secondary rounded-full ">
            ❮
          </button>
          <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2  text-secondary rounded-full ">
            ❯
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto text-gray-700 snap-x snap-mandatory scrollbar-hide w-full lg:w-[70%] mx-auto space-x-6 mt-10"
            onScroll={handleScroll}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-center shrink-0 bg-accent px-4 py-12 flex flex-col items-center text-center rounded-lg shadow-lux-gold w-full lg:w-[95%] my-5"
              >
                <TbQuote className="mt-10 text-2xl md:text-5xl text-surface" />
                <p className="mx-4 md:mx-28 text-sm md:text-base leading-relaxed mt-4">{testimonial.quote}</p>
                <div className="flex items-center justify-center w-full gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-5 h-5 md:w-6 md:h-6 ${i < testimonial.rating ? "text-primary" : "text-gray-300"}`} />
                  ))}
                </div>
                <h2 className="font-bold md:text-xl text-lg mt-3 ">{testimonial.name}</h2>
                <p className="text-textSecondary text-sm md:text-base">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:mt-5 mb-5 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`md:h-3 md:w-3 w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index + 1 ? "bg-accent " : "bg-surface"}`}
            ></span>
          ))}
        </div>

        <br />
        <div className="relative mb-10">
          <Link href="#" className="absolute right-2 md:hidden flex w-fit items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-background rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95">
            View All
            <IoIosArrowForward className="text-base" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
