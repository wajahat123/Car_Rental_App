"use client"
import SubHeader from '@/Components/Generals/Subheader_About'
import TestimonialCard from '@/Components/Home/TestimonialCard'
import testimonials from "@/Utils/TestimonialsData.json";

import { motion, useInView } from "framer-motion";
import { useRef } from 'react';


const TestimonialsPage = () => { const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <>
    <SubHeader/>
    <div className=" to-black text-text  z-10 px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl w-full mx-auto space-y-3 flex flex-col gap-10 mb-10 md:mb-20 mt-5 md:mt-10">
    <h1 className=" font-bold bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700/80 text-transparent text-center py-5 mb:py-10">Customer Stories: Excellence in Every Ride</h1>
 <div 
      ref={sectionRef}
      className="grid grid-cols-3 gap-4 w-full mx-auto pb-10 md:pb-20"
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
      className='mb-4'     
          />
        </motion.div>
      ))}
    </div>
    </div>
  </>
  )
}

export default TestimonialsPage