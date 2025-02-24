"use client";
import { H_Three } from "../../Utils/Typography"; // Assuming Typography.tsx file contains H_Three
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen =()=> {
    setIsOpen(!isOpen);
  }
  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-32 overflow-x-hidden  max-w-7xl w-full mx-auto">
      <div className="flex justify-between  py-4 items-center  h-[70px]">
        <H_Three
          text="CarRental"
          className="text-primary text-center  font-bold"
        />

        <nav className="hidden gap-6 text-text-muted text-lg md:flex ">
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            Home
          </li>
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            About
          </li>{" "}
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            Blog
          </li>{" "}
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            Contact
          </li>{" "}
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            FAQs
          </li>{" "}
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            Car Types
          </li>{" "}
          <li className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all">
            Car Brands
          </li>
        </nav>

        <motion.button
          onClick={handleOpen}
          className="text-3xl focus:outline-none md:hidden"
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
        <nav className="flex flex-col gap-4 text-lg mt-4 text-center space-y-2 py-4 md:hidden" onClick={handleOpen}>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Home
          </motion.li>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            About
          </motion.li> <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Blog
          </motion.li>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Contact
          </motion.li>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            FAQs
          </motion.li>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Car Types
          </motion.li>
          <motion.li
            className="list-none border-primary hover:border-b-2 hover:text-primary cursor-pointer transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Car Brands
          </motion.li>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
