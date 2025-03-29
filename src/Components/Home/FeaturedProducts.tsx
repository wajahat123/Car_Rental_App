"use client";
import React, { useEffect, useState } from "react";
import FleetCard from "./FleetCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const featuredVehicles = [1, 2, 3, 4, 5, 6];

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + featuredVehicles.length) % featuredVehicles.length;
    const nextIndex = (currentIndex + 1) % featuredVehicles.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Auto-slide when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => paginate(1), 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + featuredVehicles.length) % featuredVehicles.length
    );
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
            Featured Vehicles
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-blue-500 mb-4" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Experience luxury with our premium selection of vehicles, tailored to meet your every need.
          </p>
        </div>

        {/* Fleet Cards with Animation */}
        <div
          className="relative w-full h-[600px] flex justify-center items-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Button */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          {/* Animated Fleet Cards */}
          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleCards().map((index, position) => (
                <motion.div
                  key={index}
                  custom={direction}
                  className="absolute w-[400px]"
                  initial={{
                    x: direction > 0 
                      ? (position === 0 ? -300 : position === 1 ? 0 : 300)
                      : (position === 0 ? -300 : position === 1 ? 0 : 300),
                    scale: position === 1 ? 1 : 0.85,
                    opacity: position === 1 ? 1 : 0.7,
                  }}
                  animate={{
                    x: position === 0 ? -300 : position === 1 ? 0 : 300,
                    scale: position === 1 ? 1 : 0.85,
                    opacity: position === 1 ? 1 : 0.7,
                    zIndex: position === 1 ? 10 : 0,
                  }}
                  exit={{
                    x: direction > 0 
                      ? (position === 0 ? -300 : position === 1 ? 0 : 300)
                      : (position === 0 ? -300 : position === 1 ? 0 : 300),
                    scale: 0.85,
                    opacity: 0,
                    transition: {
                      opacity: { duration: 0.2 },
                      x: { duration: 0.3 }
                    }
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1,
                  }}
                >
                  <div className={`w-full transition-all duration-300 ${
                    position === 1 ? "shadow-2xl" : "shadow-lg"
                  }`}>
                    <FleetCard car={{
  _id: "67d3f6c8a96714c875d64450",
  name: "Car 1",
  price: 100,
  year:2025,
  seats:4,
  model:"E-class",
  type: "SUV123",
  brand: "Land Rover",
  // image: "uploads\\1741944520225_3d-car-with-simple-background_23-2150797046.jpg",
  description: "I am car 1",
}}/>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {featuredVehicles.map((_, index) => (
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

        {/* Explore More Button */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-4 px-10 rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div 
              className="relative z-10 flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              <span>Explore More Vehicles</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronRight />
              </motion.span>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
