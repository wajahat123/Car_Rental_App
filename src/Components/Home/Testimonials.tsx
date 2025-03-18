"use client";
import {  useRef } from "react";
import testimonials from "@/Utils/TestimonialsData.json";

import TestimonialCard from "./TestimonialCard";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-gradient-to-b to-black from-gray-900">
    <div 
      ref={sectionRef}
      className="flex flex-col md:flex-row gap-4 px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl w-full mx-auto py-10 md:py-20"
    >
      {testimonials.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
        >
          <TestimonialCard 
            data={data} 
            className={`
              ${index === 0 ? 'md:mt-0' : ''}
              ${index === 1 ? 'md:mt-[60px]' : ''}
              ${index === 2 ? 'md:mt-[120px]' : ''}
            `}
          />
        </motion.div>
      ))}
    </div></div>
  );
};

export default Testimonials;
