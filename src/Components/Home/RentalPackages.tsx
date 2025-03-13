"use client";
import { H_Two } from "@/Utils/Typography";
import { FaHandsHelping, FaBan, FaTags, FaClock, FaTools, FaUsers } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RentalPackages() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center text-primary py-8 md:py-16 overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }} 
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background bg-opacity-50"></div>

      {/* Background parallax effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={isInView ? { scale: 1 } : { scale: 1.05 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }} 
      ></motion.div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <H_Two className="text-center text-primary uppercase mb-6" text="Our Rental Packages Include"/>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/** Features Array */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer flex flex-col items-center p-6 rounded-lg bg-background bg-opacity-50 transition-all duration-300 hover:bg-opacity-50 hover:bg-surface hover:scale-105 hover:shadow-lg"
            >
              {/* Icon */}
              <feature.icon className="text-accent text-5xl mb-3 transition-all duration-300 group-hover:text-secondary group-hover:scale-110" />

              {/* Text */}
              <p className="font-semibold text-lg transition-all duration-300 group-hover:text-primary">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Feature Data Array
const features = [
  { icon: FaHandsHelping, text: "Free Pick-up & Drop-off" },
  { icon: FaBan, text: "No Deposit Required" },
  { icon: FaTags, text: "Lowest Prices" },
  { icon: FaClock, text: "24/7 Roadside Assistance" },
  { icon: FaTools, text: "24/7 Service Available" },
  { icon: FaUsers, text: "12000+ Customers" },
];
