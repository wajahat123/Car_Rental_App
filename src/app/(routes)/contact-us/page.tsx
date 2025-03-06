"use client";
import SubHeader from "@/Components/Generals/SubHeader";
import "react-international-phone/style.css";
import ReachUs from "@/Components/Contact/ReachUs";
import ContactForm from "@/Components/Contact/ContactForm";

const ContactUs = () => {
  

  return (
    <>
      <SubHeader/>
      <div className="text-text  z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
<ReachUs/>
        <ContactForm/>
  
  
      </div>
    </>
  );
};

export default ContactUs;
