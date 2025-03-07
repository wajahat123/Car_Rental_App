"use client"; 
import { usePathname } from "next/navigation"; // Import usePathname instead of useRouter
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { H_Three } from "../../Utils/Typography"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const pathname = usePathname(); // Get current route path

  return (
    <div className="px-4 sm:px-8 md:px-16 xl:px-32 overflow-x-hidden max-w-7xl w-full mx-auto">
      <div className="flex justify-between ml:py-4 pt-4 items-center text-primary h-[80px] overflow-clip">
<Image src="/assets/images/ASMAR_-_LOGO_3_VECTOR-removebg-preview.png" className="-ml-8 md:-ml-0 w-56 ml:w-64 h-[130px] pt-2" alt="ASMR" height={150} width={300}/>
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-textSecondary text-lg ml:flex h-[30px]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "FAQs", path: "/FAQs" },
            { name: "Contact Us", path: "/contact-us" },
            { name: "Privacy", path: "/privacy" },
            { name: "Rent Car By", path: "/luxurious-cars" },
          ].map((link) => (
            <li
              key={link.path}
              className={`list-none border-secondary hover:border-b hover:text-secondary cursor-pointer transition-all ${
                pathname === link.path ? "border-b-2 border-secondary text-secondary font-bold" : ""
              }`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={handleOpen}
          className="text-3xl focus:outline-none ml:hidden"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-[70px] left-0 right-0 w-full bg-[#040354ec]  border-b border-primary/30 z-50 md:hidden "
      >
        <nav className="flex flex-col gap-4 text-lg mt-4 text-center space-y-2 py-4 text-accent md:hidden">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "FAQs", path: "/FAQs" },
            { name: "Contact Us", path: "/contact-us" },
            { name: "Privacy", path: "/privacy" },
            { name: "Rent Car By", path: "/luxurious-cars" },
          ].map((link) => (
            <motion.li
              key={link.path}
              className={`list-none border-transparent hover:border-b-primary hover:text-secondary cursor-pointer transition-all ${
                pathname === link.path ? "border-b-2 border-secondary text-secondary font-bold" : ""
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Link href={link.path}>{link.name}</Link>
            </motion.li>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
