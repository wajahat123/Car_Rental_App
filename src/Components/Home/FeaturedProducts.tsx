"use client";
import React, { useEffect, useState } from "react";
import FleetCard from "./FleetCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarsData from "@/Utils/CarsData.json";
import { exampleCarInterface } from "@/Utils/types";

const FeaturedProducts: React.FC = () => {
  const [cars] = useState<exampleCarInterface[]>(CarsData.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Move this function before any conditional returns
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + cars.length) % cars.length);
  };

  // Place all hooks at the top level, before any conditional returns
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => paginate(1), 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex, cars.length, paginate]); // Added paginate to dependencies

  // Now you can have your early return
  if (!cars.length) return null;

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + cars.length) % cars.length;
    const nextIndex = (currentIndex + 1) % cars.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Rest of your component remains the same */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl w-full mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
            Featured Vehicles
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-blue-500 mb-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Experience luxury with our premium selection of vehicles.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative w-full h-[600px] flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* LEFT BUTTON */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          {/* SLIDES */}
          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleCards().map((index, position) => {
                const isCenter = position === 1;
                const isLeft = position === 0;
                const isRight = position === 2;

                return (
                  <motion.div
                    key={cars[index]._id}
                    custom={direction}
                    className={`absolute w-[400px] ${
                      isCenter ? "z-20" : "z-10"
                    }`}
                    initial={{
                      x: isLeft ? "-350px" : isRight ? "350px" : "0px",
                      scale: isCenter ? 1 : 0.85,
                      opacity: isCenter ? 1 : 0.7,
                    }}
                    animate={{
                      x: isLeft ? "-350px" : isRight ? "350px" : "0px",
                      scale: isCenter ? 1 : 0.85,
                      opacity: isCenter ? 1 : 0.7,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <FleetCard car={cars[index]} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center space-x-2 mt-6">
          {cars.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;