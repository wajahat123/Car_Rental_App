"use client";
import Image from "next/image";
import SearchBar from "@/Components/Generals/SearchBar";
import { ContactLinks } from "../Generals/ContactLinks";
import { H_One } from "@/Utils/Typography";
import rawProducts from "@/Utils/CarsData.json";
import { Car } from "@/Utils/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const products: Car[] = JSON.parse(JSON.stringify(rawProducts));

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-w-screen min-h-[400px] md:min-h-[600px] text-primary bg-[#07012f]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-blue-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/images/car3.webp"
          alt="Car Rental Hero"
          width={1200}
          height={600}
          priority
          className="h-[400px] md:h-[600px] w-[100vw]"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible mt-8 md:mt-0">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-background/30 backdrop-blur-sm border border-[#ffbf004b]  py-5 md:py-10 w-full md:w-[70%] mx-auto rounded-lg shadow-lux-gold space-y-2 md:space-y-4"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <H_One className="font-bold text-secondary" text="Rent Your Dream Car Hassle-Free" />
            <p className="text-primary/90 text-sm md:text-base font-medium tracking-wide mt-2">
              Affordable | Easy Booking | Luxury & Economy Cars
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-10 w-[80%] mx-auto"
          >
            <SearchBar products={products} />
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <ContactLinks />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link 
              className="flex justify-center items-center gap-2 w-[70%] sm:w-1/2 font-extrabold md:w-1/3 mx-auto mt-2 transition-all duration-300 active:scale-95 ring-1 ring-primary hover:ring-primary bg-primary rounded-md md:p-[4px] text-background hover:bg-background hover:text-primary active:bg-background active:opacity-90 active:text-primary active:ring-primary"
              href="/contact-us"
            >
              Book Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
