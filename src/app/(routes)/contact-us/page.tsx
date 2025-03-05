"use client";
import SubHeader from "@/Components/Generals/SubHeader";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { H_Two } from "@/Utils/Typography";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const ContactUs = () => {
  const [phone, setPhone] = useState<string>("");
  const [, setValid] = useState<boolean>(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: phone
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    const phoneNumber = parsePhoneNumberFromString(phone);
    const isValid = phoneNumber?.isValid() || false;
    setValid(isValid);

    if (!isValid) {
      alert("Please enter a valid phone number.");
      return;
    }

    console.log("Form submitted:", formData, phone);

    // Reset form only if valid
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: phone
    });
    setPhone("");
  };

  return (
    <>
      <SubHeader code codeClassName="" />
      <div className="text-background  z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
     <div className="flex my-10  md:my-24 justify-between items-center ml:flex-row flex-col gap-12">
     <div className="grid grid-cols-2 gap-2 w-full ml:w-[45%]  ">
         
         <div className="group bg-accent bg-opacity-50 shadow-xl  hover:bg-primary transition-colors duration-500 md:p-6 p-4 rounded-lg ">
           <p className="font-extrabold flex items-center justify-normal text-secondary group-hover:text-accent">
             Call Us Now
           </p>
           <ul>
             <li>1234567890</li>
             <li>1234567890</li>
             <li>1234567890</li>
           </ul>
         </div>
         <div className="group bg-accent bg-opacity-50 shadow-xl  hover:bg-primary transition-colors duration-500 md:p-6 p-4 rounded-lg ">
           <p className="font-extrabold flex items-center justify-normal text-secondary group-hover:text-accent">
             Social Media
           </p>
           <ul className=" space-y-1">
             <li className="hover:text-cyan-500 cursor-pointer">
               {" "}
               <Link href="#" className="flex items-center justify-start gap-2" >
                 <BsInstagram /> Instagram
               </Link>
             </li>

             <li className="hover:text-cyan-500 cursor-pointer">
               {" "}
               <Link href="#" className="flex items-center justify-start gap-2" >
                 <BsWhatsapp />Whatsapp
               </Link>
             </li>

             <li className="hover:text-cyan-500 cursor-pointer">
               {" "}
               <Link href="#" className="flex items-center justify-start gap-2" >
                 <BsFacebook />Facebook
               </Link>
             </li>

             <li className="hover:text-cyan-500 cursor-pointer">
               {" "}
               <Link href="#" className="flex items-center justify-start gap-2" >
               <BsTwitter /> Twitter
               </Link>
             </li>
           </ul>
         </div>
         <div className="group bg-accent bg-opacity-50 shadow-xl  hover:bg-primary transition-colors duration-500 md:p-6 p-4 rounded-lg ">
          
           <p className="font-extrabold flex items-center justify-normal text-secondary group-hover:text-accent">
             Mail Us
           </p>
           <ul className="text-wrap text-xs md:text-base">
             <li>
               {" "}
               <Link href="mailto:romankhan.26@outlook.com">
                 abc@example.com
               </Link>
             </li>
             <li>
               {" "}
               <Link href="mailto:romankhan.26@outlook.com">
                 abc@example.com
               </Link>
             </li>
           </ul>
         </div>{" "}
         <div className="group bg-accent bg-opacity-50 shadow-xl  hover:bg-primary transition-colors duration-500 md:p-6 p-4 rounded-lg ">
           <p className="font-extrabold flex items-center justify-normal text-secondary group-hover:text-accent">
             Address
           </p>
           <p className="text-left">ABC 123 Street, XYZ State, 248800</p>
         </div>
       </div>
       <div className="bg-accent ">
MAP WILL BE INTEGRATED HERE
       {/* map */}
       </div>
     </div>
     <div className="relative my-10  md:my-24">
<div className="w-full h-full absolute bg-accent rounded-xl -rotate-2 shadow-xl " ></div>
        <div className="relative bg-surface p-4 md:p-8 rounded-xl shadow-xl ring-1 ring-[#8b8b8b3c]">
             <H_Two className="text-center text-primary mb-6 uppercase" text="Get in Touch" />
     
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="flex w-full flex-col md:flex-row gap-4">
                 {/* Left Side (Inputs) */}
                 <div className="space-y-4 w-full">
                   <input
                     required
                     type="text"
                     name="name"
                     id="name"
                     minLength={2}
                     maxLength={30}
                     placeholder="Name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full p-3 rounded-md bg-background  placeholder-gray-400 
                               focus:outline-none ring-1 ring-primary focus:ring-accent transition-all duration-200 shadow-lg"
                     aria-label="Name"
                   />
     
                   <input
                     required
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Email Address"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full p-3 rounded-md bg-background  placeholder-gray-400 
                               focus:outline-none ring-1 ring-primary focus:ring-accent transition-all duration-200 shadow-lg"
                     aria-label="Email Address"
                   />
     
                   <div className="w-full flex flex-col">
                     <div className="flex items-center p-3 rounded-md bg-background ring-1 ring-primary focus-within:ring-accent transition-all duration-200 shadow-lg">
                       <PhoneInput
                         defaultCountry="us"
                         value={phone}
                         onChange={setPhone}
                         className="w-full"
                       />
                     </div>
                   </div>
     
                   <input
                     type="text"
                     name="subject"
                     id="subject"
                     placeholder="Subject"
                     maxLength={300}
                     value={formData.subject}
                     onChange={handleChange}
                     className="w-full p-3 rounded-md bg-background  placeholder-gray-400 
                               focus:outline-none ring-1 ring-primary focus:ring-accent transition-all duration-200 shadow-lg"
                     aria-label="Subject"
                   />
                 </div>
     
                 {/* Right Side (Message) */}
                 <div className="w-full">
                   <textarea
                     required
                     name="message"
                     id="message"
                     placeholder="Message"
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full p-3 h-[265px] rounded-md bg-background  placeholder-gray-400 
                               focus:outline-none ring-1 ring-primary focus:ring-accent transition-all duration-200 shadow-lg"
                     aria-label="Message"
                   ></textarea>
                 </div>
               </div>
     
               {/* Submit Button */}
               <button
                 type="submit"
                 className="w-full px-4 py-4 uppercase font-bold bg-primary text-surface rounded-md ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
               >
                 Submit
               </button>
             </form>
     </div>
     </div>
      </div>
    </>
  );
};

export default ContactUs;
