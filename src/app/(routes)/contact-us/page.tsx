"use client";
import SubHeader from "@/Components/Generals/Subheader_Contact";
import "react-international-phone/style.css";
import ReachUs from "@/Components/Contact/ReachUs";
import ContactForm from "@/Components/Contact/ContactForm";

const ContactUs = () => {
  

  return (
    <>
      <SubHeader/>
      <div className=" to-black text-text  z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto space-y-3 flex flex-col gap-10 mb-10 md:mb-20 mt-5 md:mt-10">
<ReachUs/>
<div className="relative h-[700px] w-auto my-5 md:my-10">
  <div className="bg-gradient-to-tl from-gold-700/60 to-gold-500/80 rounded-md w-full h-full absolute  -rotate-2"></div>

        <ContactForm/>
</div>
  
  
      </div>
    </>
  );
};

export default ContactUs;
