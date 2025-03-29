"use client"
import SubHeader from '@/Components/Generals/Subheader_Contact'
import TestimonialCard from '@/Components/Home/TestimonialCard'
import testimonials from "@/Utils/TestimonialsData.json";

import { motion, useInView } from "framer-motion";
import { useRef } from 'react';


const TestimonialsPage = () => { const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <>
    <SubHeader/>
    <div className=" to-black text-text  z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto space-y-3 flex flex-col gap-10 mb-10 md:mb-20 mt-5 md:mt-10">
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
              ${data.id === 0 ? 'md:mt-0' : ''}
              ${data.id === 1 ? 'md:mt-[60px]' : ''}
              ${data.id === 2 ? 'md:mt-[120px]' : ''}
            `}
          />
        </motion.div>
      ))}
    </div>
    </div>
  </>
  )
}

export default TestimonialsPage