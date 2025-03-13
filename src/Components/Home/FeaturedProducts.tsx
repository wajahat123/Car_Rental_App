"use client";
import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import FleetCard from './FleetCard';
import { FaCarSide } from 'react-icons/fa';
import { PiDiamondsFour } from "react-icons/pi";

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      } 
    }
  };

  // Fixed set of 6 cards
  const featuredVehicles = [1, 2, 3, 4, 5, 6];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black/95 to-black/90 py-10 sm:py-12 md:py-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.08 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-400 blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-600 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Enhanced decorative car shapes */}
        <motion.div 
          className="absolute top-40 right-10 sm:right-20 text-blue-500/10 text-4xl sm:text-6xl"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <FaCarSide />
        </motion.div>
        <motion.div 
          className="absolute bottom-60 left-10 text-blue-500/10 text-3xl sm:text-5xl hidden sm:block"
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -3, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <FaCarSide />
        </motion.div>
      </motion.div>

      {/* Decorative Accent Line Top */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40%" } : { width: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mb-6 sm:mb-8"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>

      {/* Main Content Container */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl w-full mx-auto'>
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div 
            className="flex justify-center items-center gap-2 sm:gap-4 mb-2 sm:mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <PiDiamondsFour className="text-blue-400 text-xl sm:text-2xl" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
              Featured Vehicles
            </h2>
            <motion.div
              animate={{ 
                rotate: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <PiDiamondsFour className="text-blue-400 text-xl sm:text-2xl" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px", x: ["-20px", "0px"] } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[3px] mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
          <motion.p 
            className="text-gray-300 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experience luxury with our premium selection of vehicles, tailored to meet your every need and exceed your expectations.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid with Simple Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 sm:gap-y-12 md:gap-y-14 justify-items-center relative"
        >
          <AnimatePresence>
            {featuredVehicles.map((card) => (
              <motion.div 
                key={`card-${card}`} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10 
                  }
                }}
                className="w-full flex justify-center"
              >
                <FleetCard />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Decorative Accent Line Bottom */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "30%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mt-8 sm:mt-10"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>
    </section>
  );
}

export default FeaturedProducts;