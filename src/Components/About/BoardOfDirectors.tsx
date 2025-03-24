"use client";
import React from "react";
import {
  FaShieldAlt,
  FaThumbsUp,
  FaClock,
  FaHeadset,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BoardOfDirectors = () => {
  const directors = [
    {
      imageUrl: "/assets/images/team/1.jpg",
      name: "XYZ",
      title: "ABC",
    },   {
      imageUrl: "/assets/images/team/2.jpg",
      name: "XYZ",
      title: "ABC",
    },   {
      imageUrl: "/assets/images/team/3.jpg",
      name: "XYZ",
      title: "ABC",
    },   {
      imageUrl: "/assets/images/team/4.jpg",
      name: "XYZ",
      title: "ABC",
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
        delay: 0.3,
      },
    },
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
        delay: 0.5,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div
      className="bg-black py-12 sm:py-16 md:py-20 relative bg-opacity-70 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/car7.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-black via-transparent" />

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
              duration: 0.7,
            }}
            className="mb-4 flex justify-center"
          >
            <div className="w-16 h-1 bg-blue-500/60 rounded-full" />
          </motion.div>

          <motion.div
            variants={titleVariants}
            className="inline-block relative"
          >
            {/* Top accent line */}
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-0.5"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "40%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
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
                  delay: 0.6,
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
                    delay: 0.4,
                  }}
                >
                  <h2 className=" font-bold text-white relative z-10 flex items-center">
                    Board Of Directors
                  </h2>
                </motion.div>

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
                  delay: 0.6,
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
                delay: 0.5,
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
          {directors.map((dir, index) => (
            <div className="flex flex-col z-50" 
            key={index}
            >
              {/* Container */}
            <motion.div
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center flex flex-col items-center hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-yellow-500/5 transition-all duration-500 relative overflow-hidden h-64 "
            >
              {/*Image */}
              <motion.div
                className="absolute inset-0 border border-transparent group-hover:border-yellow-500/20 rounded-lg transition-all duration-500 w-full h-full"
                initial={false}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={dir.imageUrl}
                  alt="image"
                  className="w-full h-full"
                  width={200}
                  height={200}
                />
              </motion.div>
{/* Links within Container */}
              <div className="flex absolute justify-center items-center  bottom-4 gap-2">
                {/* Social Icons */}
                <motion.div
                  className="bg-blue-500/20 p-2  rounded-full 
                 bottom-2 group-hover:bg-yellow-500/10 text-blue-700 hover:text-gold-600 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="#">
                  <FaFacebookF className="h-4 w-4 " />
                  </Link>
                </motion.div>{" "}
                <motion.div
                  className="bg-blue-500/20 p-2  rounded-full 
                 bottom-2 group-hover:bg-yellow-500/10 text-blue-700 hover:text-gold-600 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                ><Link href="#">
                  <FaLinkedinIn className="h-4 w-4  " /></Link>
                </motion.div>{" "}
                <motion.div
                  className="bg-blue-500/20 p-2  rounded-full 
                 bottom-2 group-hover:bg-yellow-500/10 text-blue-700 hover:text-gold-600 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="#">
                  <FaTwitter className="h-4 w-4  " />
                  </Link>
                </motion.div>{" "}
                <motion.div
                  className="bg-blue-500/20 p-2  rounded-full 
                 bottom-2 group-hover:bg-yellow-500/10 text-blue-700 hover:text-gold-600 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                ><Link href="#">

                  <FaPinterestP className="h-4 w-4  " />
                </Link>
                </motion.div>
              </div>
            </motion.div>{/*Container closed*/}
            <motion.div
              className="flex justify-center items-center flex-col  mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-xl font-bold text-white">
                  {dir.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {dir.title}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
