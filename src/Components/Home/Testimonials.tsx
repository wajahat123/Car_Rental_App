"use client";
import React, { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import testimonials from "@/Utils/TestimonialsData.json";
import { H_Three, H_Two } from "@/Utils/Typography";
import { TbQuote } from "react-icons/tb";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };
  

  return (
    <div className="bg-background overflow-hidden">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto  text-center py-8 md:py-16">
        {/* Section Heading */}
       <div className="flex items-start justify-between">
       <H_Two className=" font-bold text-primary italic " text="Testimonials" />
        
       <Link
          href="#"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-surface rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
        >
         View All
          <IoIosArrowForward className="text-base" />
        </Link>
       </div>
       <H_Three
          className="text-left font-bold text-white mt-2"
          text="What Our Customers Say About Us"
        />
        {/* Scrollable Testimonial Cards */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full lg:w-[70%] mx-auto space-x-6 mt-10"
          onScroll={handleScroll}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-center shrink-0 bg-white px-4 py-12 flex flex-col items-center text-background text-center rounded-lg shadow-lg w-full lg:w-[95%] "
            >
              {/* Quote Icon */}
              <TbQuote className="mt-10 text-2xl md:text-5xl text-primary" />

              {/* Testimonial Text */}
              <p className="mx-4 md:mx-28 text-sm md:text-base leading-relaxed mt-4">
                {testimonial.quote}
              </p>

              {/* Star Rating */}
              <div className="flex items-center justify-center w-full gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 md:w-6 md:h-6 ${
                      i < testimonial.rating ? "text-primary" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Client Name and Position */}
              <h2 className="font-bold md:text-xl text-lg mt-3">{testimonial.name}</h2>
              <p className="text-textSecondary text-sm md:text-base">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-5 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-primary w-4" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
        <br />
      <div className="relative mb-10">

      <Link
          href="#"
          className="absolute right-2  md:hidden  flex w-fit items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-surface rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
          >
       View All
          <IoIosArrowForward className="text-base" />
        </Link>
    </div>
      </div>
    </div>
  );
};

export default Testimonials;
