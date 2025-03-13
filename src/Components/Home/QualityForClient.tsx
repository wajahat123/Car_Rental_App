"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const QualityForClient = () => {
  const [selectedQuality, setSelectedQuality] = useState("Luxury");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const qualities = [
    {
      name: "Luxury",
      content:
        "We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.",
    },
    {
      name: "Comfort",
      content:
        "We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs.",
    },
    {
      name: "Prestige",
      content:
        "We pride ourselves on offering only the most prestigious and high-end vehicles. Our collection includes some of the most sought-after luxury cars in the world, from classic elegance to cutting-edge technology and design.",
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className="px-4 sm:px-8 md:px-16 lg:px-24 gap-10 max-w-7xl w-full mx-auto py-8 md:py-16 flex flex-col md:flex-row overflow-hidden"
    >
      <motion.div 
        className="md:w-1/2 w-full h-[350px] relative"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <motion.div 
          className="w-[430px] h-[310px] absolute"
          animate={isInView ? {
            y: [0, -10, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }
          } : {}}
        >
          <Image
            src="/assets/images/testimonial/e1.jpg"
            alt="Quality For Client"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>
        <motion.div 
          className="w-[200px] h-[150px] absolute bottom-0 right-0"
          animate={isInView ? {
            y: [0, 10, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 4,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }
            }
          } : {}}
        >
          <Image
            src="/assets/images/testimonial/e2.jpg"
            alt="Quality For Client"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <motion.h2 
          className="text-text-light text-2xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Only Quality For Clients
        </motion.h2>
        
        <div className="flex space-x-4 mb-6">
          {qualities.map((quality) => (
            <motion.button
              key={quality.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-lg ${
                selectedQuality === quality.name
                  ? "bg-accent text-background font-medium"
                  : "bg-background text-text-light"
              } transition-all duration-300`}
              onClick={() => setSelectedQuality(quality.name)}
            >
              {quality.name}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          key={selectedQuality} // This forces a re-render when the selected quality changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-text-light leading-relaxed"
        >
          {qualities.find((q) => q.name === selectedQuality)?.content}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QualityForClient;
