import { H_Two } from '@/Utils/Typography'
import React, { useRef } from 'react'
import FAQs from "@/Utils/FAQs.json"
import FAQuestions from '../Generals/FAQ'
import { motion, useInView } from 'framer-motion';
import { PiDiamondsFour } from "react-icons/pi";

const FAQSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div 
      ref={sectionRef}
      className='relative px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto pb-8 md:pb-16 bg-gradient-to-b from-black via-black/95 to-black'
    >
      {/* Background Decorative Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Decorative Accent Line Top */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40%" } : { width: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mb-12"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-6 mb-16"
      >
        <div className="flex items-center gap-4">
          <PiDiamondsFour className="text-blue-400 text-2xl" />
          <H_Two className='text-center text-white mb-0 uppercase tracking-wider text-4xl md:text-5xl' text='Frequently Asked Questions'/>
          <PiDiamondsFour className="text-blue-400 text-2xl" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative'
      >
        {FAQs.slice(0, 8).map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            className="relative"
          >
            <FAQuestions question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Accent Line Bottom */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "30%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mt-16"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>
    </div>
  )
}

export default FAQSection