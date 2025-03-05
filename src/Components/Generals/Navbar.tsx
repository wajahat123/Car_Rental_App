"use client";
import { H_Three } from "../../Utils/Typography"; // Assuming Typography.tsx file contains H_Three
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-32 overflow-x-hidden  max-w-7xl w-full mx-auto ">
      <div className="flex justify-between  ml:py-4 pt-4 items-center  h-[70px]">
        <H_Three
          text="CarRental"
          className="text-secondary text-center font-extrabold"
        />

        <nav className="hidden gap-6 text-textSecondary text-lg ml:flex ">
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
            <Link href="/about">About</Link>
          </li>{" "}
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
         Services
            <Link href="/services"></Link>
          </li>{" "}
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
            <Link href="/contact-us">Contact</Link>
          </li>{" "}
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
            <Link href="/privacy">Privacy</Link>
          </li>{" "}
          <li className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all">
            <Link href="/luxurious-cars">Rent Car By</Link>
          </li>{" "}
          
        </nav>

        <motion.button
          onClick={handleOpen}
          className="text-3xl focus:outline-none ml:hidden"
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotation animation
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }} // Start as hidden
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }} // Animate out
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        className="overflow-hidden absolute top-[70px] left-0 w-full h-full bg-background shadow-lux-gold  z-50 md:hidden"
      >
        <nav
          className="flex flex-col gap-4 text-lg mt-4 text-center space-y-2 py-4 md:hidden"
          onClick={handleOpen}
        >
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/about">About</Link>
          </motion.li>{" "}
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/services">Services</Link>
          </motion.li>
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/contact-us">Contact</Link>
          </motion.li>
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/privacy">Privacy</Link>
          </motion.li>
          <motion.li
            className="list-none border-secondary hover:border-b-2 hover:text-secondary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Link href="/luxurious-cars">Rent Car By</Link>
          </motion.li>
         
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
