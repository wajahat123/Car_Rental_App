"use client";
import React from "react";
import { FaShieldAlt, FaThumbsUp, FaClock, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const features = [
        {
          icon: <FaShieldAlt className="text-4xl text-blue-500" />,
          title: "Reliable & Secure",
          description: "We prioritize safety and security for all our rentals.",
        },
        {
          icon: <FaThumbsUp className="text-4xl text-blue-500" />,
          title: "Top-Notch Quality",
          description: "All our cars are well-maintained and in excellent condition.",
        },
        {
          icon: <FaClock className="text-4xl text-blue-500" />,
          title: "24/7 Availability",
          description: "We provide 24/7 customer support for a hassle-free experience.",
        },
        {
          icon: <FaHeadset className="text-4xl text-blue-500" />,
          title: "Excellent Support",
          description: "Our team is always ready to assist you with any queries.",
        },
      ];

    const titleVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.3
        }
      }
    };

    const underlineVariants = {
      hidden: { scaleX: 0, opacity: 0 },
      visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5
        }
      }
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.5
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    };
    
  return (
    <div className="bg-black py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl w-full mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          {/* Elegant Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.7 
            }}
            className="mb-4 flex justify-center"
          >
            <div className="w-16 h-1 bg-blue-500/60 rounded-full" />
          </motion.div>
          
          <motion.div variants={titleVariants} className="inline-block relative">
            {/* Top accent line */}
            <motion.div 
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-0.5"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "40%", opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2 
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </motion.div>
            
            <div className="flex items-center justify-center gap-x-4">
              {/* Left decorative element */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.6 
                }}
                className="hidden md:flex items-center"
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </motion.div>
              
              {/* Main title with animation */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.4 
                  }}
                  className="absolute -top-4 text-xs font-semibold tracking-widest text-gray-400 uppercase"
                >
                  Why Choose Us
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white relative z-10 flex items-center">
                  Premium
                  Service
                </h2>
                
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mt-3 rounded-full"
                  variants={underlineVariants}
                />
              </div>
              
              {/* Right decorative element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.6 
                }}
                className="hidden md:flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
              </motion.div>
            </div>
            
            {/* Bottom accent line */}
            <motion.div 
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-0.5"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "30%", opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5 
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center flex flex-col items-center hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-yellow-500/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Border Effect */}
              <motion.div 
                className="absolute inset-0 border border-transparent group-hover:border-yellow-500/20 rounded-lg transition-all duration-500"
                initial={false}
                whileHover={{ scale: 1.02 }}
              />
              
              <motion.div 
                className="bg-blue-500/10 p-4 rounded-full mb-4 group-hover:bg-yellow-500/10 transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
              {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl text-white font-semibold mb-2 group-hover:text-yellow-500/90 transition-colors duration-500"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-300 group-hover:text-gray-200 transition-colors duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
  );
};

export default WhyChooseUs;