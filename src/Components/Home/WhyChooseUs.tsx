"use client";
import { H_Two } from "@/Utils/Typography";
import React, { useRef } from "react";
import { FaShieldAlt, FaThumbsUp, FaClock, FaHeadset } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const features = [
        {
          icon: <FaShieldAlt className="text-4xl text-accent group-hover:text-blue-700 transition" />,
          title: "Reliable & Secure",
          description: "We prioritize safety and security for all our rentals.",
        },
        {
          icon: <FaThumbsUp className="text-4xl text-accent group-hover:text-blue-700 transition" />,
          title: "Top-Notch Quality",
          description: "All our cars are well-maintained and in excellent condition.",
        },
        {
          icon: <FaClock className="text-4xl text-accent group-hover:text-blue-700 transition" />,
          title: "24/7 Availability",
          description: "We provide 24/7 customer support for a hassle-free experience.",
        },
        {
          icon: <FaHeadset className="text-4xl text-accent group-hover:text-blue-700 transition" />,
          title: "Excellent Support",
          description: "Our team is always ready to assist you with any queries.",
        },
      ];
    
  return (
    <div 
      ref={sectionRef}
      className="bg-background bg-opacity-70 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto py-8 md:py-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <H_Two className="text-center text-primary mb-6 uppercase" text="Why Choose Us?"/>
      </motion.div>
          
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1.0] 
            }}
            className="group bg-surface bg-opacity-50 shadow-lux-gold hover:bg-primary transition-all duration-300 p-6 rounded-lg text-center flex flex-col items-center hover:scale-105"
          >
            {feature.icon}
            <h3 className="text-xl text-primary font-semibold mt-4 group-hover:text-background transition">
              {feature.title}
            </h3>
            <p className="group-hover:text-background transition mt-2">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;