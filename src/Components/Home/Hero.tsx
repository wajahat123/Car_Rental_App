"use client";
import React from "react";
import Image from "next/image";
import SearchBar from "@/Components/Generals/SearchBar";
import { ContactLinks } from "../Generals/ContactLinks";
import rawProducts from "@/Utils/CarsData.json";
import { Car } from "@/Utils/types";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronRight, FaCrown } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";

const products: Car[] = JSON.parse(JSON.stringify(rawProducts));

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen text-text-primary bg-background pt-[80px] md:pt-[90px]">
      {/* Luxury Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-[200px] h-[150px] md:w-[400px] md:h-[300px] bg-gradient-to-r from-blue-600/40 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[200px] h-[150px] md:w-[400px] md:h-[300px] bg-gradient-to-l from-blue-500/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-[20%] right-[15%] text-text-primary text-4xl md:text-5xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <GiSteeringWheel />
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] left-[10%] text-text-primary"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <IoSpeedometer />
        </motion.div>

        {/* Animated Lines */}
        <motion.div
          className="absolute top-[30%] left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[35%] right-0 h-[1px] bg-gradient-to-l from-transparent via-blue-400/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, delay: 1 }}
        />
      </div>

      {/* Enhanced Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <Image
          src="/assets/images/car3.webp"
          alt="Car Rental Hero"
          width={1200}
          height={600}
          priority
          className="min-h-[300px] md:min-h-[600px] w-full object-cover"
        />
        <motion.div
          className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>

      {/* Enhanced Hero Content */}
      <div className="flex items-center justify-center w-full h-full absolute inset-0 -top-10 md:-top-0 z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 backdrop-blur-md border border-blue-500/20 py-4 md:py-6 w-[95%] md:w-[70%] mx-auto rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] space-y-3 md:space-y-4 mt-20 md:mt-10 relative max-w-7xl"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-[1px] h-4 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: 16 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="absolute top-0 left-0 h-[1px] w-4 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: 16 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-[1px] h-4 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: 16 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.div
              className="absolute top-0 right-0 h-[1px] w-4 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: 16 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 w-[1px] h-4 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: 16 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] w-4 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: 16 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
            <motion.div
              className="absolute bottom-0 right-0 w-[1px] h-4 bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: 16 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-[1px] w-4 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: 16 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>

          {/* Premium Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="px-2 py-0.5 bg-gradient-to-br from-white/10 to-blue-600/30 via-[#010119] backdrop-blur-sm border border-blue-400/30 rounded-full flex items-center gap-1">
              <FaCrown className="text-yellow-600 text-[8px] md:text-xs" />
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-primary font-medium">
                Premium Car Rental
              </span>
              <FaCrown className="text-yellow-600 text-[8px] md:text-xs" />
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative px-2 md:px-6 text-center"
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5"
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="font-bold text-white mt-1 relative z-10 drop-shadow-lg text-xl md:text-2xl lg:text-3xl">
                Rent Your Dream Car Hassle-Free
              </h1>
              <motion.div
                className="h-0.5 w-32 md:w-64 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
            </motion.div>

            <motion.p
              className="text-primary text-xs md:text-sm font-medium tracking-wide mt-1 md:mt-2 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <span className="text-white/70 font-semibold">Affordable</span> |{" "}
              <span className="text-white/70 font-semibold">Easy Booking</span> |{" "}
              <span className="text-white/70 font-semibold">Luxury & Economy Cars</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative z-30 w-[95%] md:w-[85%] mx-auto"
          >
            <motion.div
              className="absolute -top-3 left-0 right-0 mx-auto w-12 h-3 bg-gradient-to-b from-blue-400/10 to-transparent blur-md"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <SearchBar products={products} />
          </motion.div>

          {/* Enhanced Contact Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative py-0.5"
          >
            <motion.div
              className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-24 h-0.5"
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            </motion.div>
            <ContactLinks />
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            className="flex justify-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-1.5 md:py-3 md:px-16 px-8 rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
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
                <span>Book Now</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaChevronRight />
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute md:bottom-4 bottom-2 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center gap-1 cursor-pointer"
          whileHover={{ y: -2 }}
        >
          <span className="text-gray-400 text-[10px]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-blue-400 text-xs" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;