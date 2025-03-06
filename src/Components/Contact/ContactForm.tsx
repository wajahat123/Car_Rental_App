"use client";

import { H_Two } from "@/Utils/Typography";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";


const ContactForm = () => {
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
    <div className="relative my-10  md:my-24">
<div className="w-full h-full absolute bg-primary rounded-xl -rotate-2 shadow-xl " ></div>
        <div className="relative bg-surface p-4 md:p-8 rounded-xl shadow-xl ring-1 ring-[#ffbf004e]">
             <H_Two className="text-center text-primary mb-6 uppercase" text="Get in Touch" />
     
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="flex w-full flex-col md:flex-row gap-4">
                 {/* Left Side (Inputs) */}
                 <div className="space-y-5 w-full">
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
                               focus:outline-none ring-1 ring-[#ffbf004e] focus:ring-[#ffbf00ae] transition-all duration-200 shadow-lg"
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
                               focus:outline-none ring-1 ring-[#ffbf004e] focus:ring-[#ffbf00ae] transition-all duration-200 shadow-lg"
                     aria-label="Email Address"
                   />
     
                   <div className="w-full flex flex-col">
                     <div className="flex items-center p-3 rounded-md bg-background ring-1 ring-[#ffbf004e] focus-within:ring-[#ffbf00ae] transition-all duration-200 shadow-lg">
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
                               focus:outline-none ring-1 ring-[#ffbf004e] focus:ring-[#ffbf00ae] transition-all duration-200 shadow-lg"
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
                               focus:outline-none ring-1 ring-[#ffbf004e] focus:ring-[#ffbf00ae] transition-all duration-200 shadow-lg"
                     aria-label="Message"
                   ></textarea>
                 </div>
               </div>
     
               {/* Submit Button */}
               <button
                 type="submit"
                 className="w-full px-4 py-4 uppercase font-bold bg-primary text-background rounded-md ring-1 ring-primary transition-all duration-300 hover:bg-background hover:text-primary active:scale-95"
               >
                 Submit
               </button>
             </form>
     </div>
     </div>
  )
}

export default ContactForm