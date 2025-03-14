import React from 'react'
import tetimonial from "@/Utils/TestimonialsData.json"
import Image from 'next/image'
import { FaQuoteRight, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const TestimonialCard = ({data, className}:{data:any, className:string}) => {
    // const data = tetimonial[2]
  return (
    <motion.div 
      className={`md:min-w-[350px] w-[300px] h-[400px] mx-auto md:min-h-[480px] relative rounded-lg overflow-hidden bg-cover bg-center ${className}`} 
      style={{ backgroundImage: `url(${data.image})` }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div 
        className='w-full h-full bg-gradient-to-b from-black/80 via-black/30 to-transparent'
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 0.9 }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaQuoteRight className='text-4xl absolute top-6 right-6 text-blue-700' />
      </motion.div>

      <motion.div 
        className='absolute top-12 left-6'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className='text-white text-2xl font-bold'>{data.name}</h3>
        <p className='text-text-secondary/80 text-sm'>{data.role}</p>
        <p className='text-gray-300 text-sm'>{data.quote}</p>
      </motion.div>

      <motion.div 
        className='absolute bottom-6 left-0 right-0'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className='w-full text-white text-sm mx-auto flex items-center justify-center'>
          {Array(5).fill(0).map((_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <FaStar 
                className={`inline-block mr-1 ${
                  index < data.rating ? 'text-blue-700' : 'text-gray-400'
                }`}
              />
            </motion.span>
          ))}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default TestimonialCard