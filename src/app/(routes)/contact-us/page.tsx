"use client";
import SubHeader from "@/Components/Generals/Subheader_Contact";
import "react-international-phone/style.css";
import ReachUs from "@/Components/Contact/ReachUs";
import ContactForm from "@/Components/Contact/ContactForm";
import { motion } from "framer-motion";
const ContactUs = () => {
  

  return (
    <>
      <SubHeader/>
      <div className=" to-black text-text  z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto space-y-3 flex flex-col gap-10 mb-10 md:mb-20 mt-5 md:mt-10">

  <motion.div
    initial={{ filter: "blur(10px)", opacity: 0 }}
    animate={{ filter: "blur(0px)", opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}>
  
        <ContactForm/>
</motion.div>
  
<ReachUs/>
  
      </div>
    </>
  );
};

export default ContactUs;
