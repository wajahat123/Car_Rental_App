"use client";
import { H_Two } from "@/Utils/Typography";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "@/Styles/CustomPhoneStyles.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { motion, useInView } from "framer-motion";
import { PiDiamondsFour } from "react-icons/pi";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [phone, setPhone] = useState<string>("");
  const [, setValid] = useState<boolean>(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: phone,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = parsePhoneNumberFromString(phone);
    const isValid = phoneNumber?.isValid() || false;
    setValid(isValid);

    if (!isValid) {
      alert("Please enter a valid phone number.");
      return;
    }

    console.log("Form submitted:", formData, phone);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: phone,
    });
    setPhone("");
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center py-16 md:py-24 overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/car6.webp')" }}
    >
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 8, ease: "easeInOut" }}
        >
          <div className="w-full h-full" style={{ backgroundImage: "url('/assets/images/car6.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </motion.div>
      </motion.div>

      {/* Decorative Accent Line Top */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40%" } : { width: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mb-12"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="flex items-center gap-4">
            <PiDiamondsFour className="text-blue-400 text-2xl" />
            <H_Two className='text-center text-white mb-0 uppercase tracking-wider text-4xl md:text-5xl' text='Get in Touch'/>
            <PiDiamondsFour className="text-blue-400 text-2xl" />
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex w-full flex-col md:flex-row gap-4">
            {/* Left Side (Inputs) */}
            <motion.div 
              className="space-y-5 w-full relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
                className="w-full p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-blue-500/20 placeholder-gray-400 
                          focus:outline-none focus:border-blue-500/40 transition-all duration-300 shadow-lg relative z-0"
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
                className="w-full p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-blue-500/20 placeholder-gray-400 
                          focus:outline-none focus:border-blue-500/40 transition-all duration-300 shadow-lg relative z-0"
                aria-label="Email Address"
              />

              {/* Phone Input with Proper Styling */}
              <div className="w-full flex flex-col relative z-10">
                <div className="flex items-center p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-blue-500/20 focus-within:border-blue-500/40 transition-all duration-300 shadow-lg">
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
                className="w-full p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-blue-500/20 placeholder-gray-400 
                          focus:outline-none focus:border-blue-500/40 transition-all duration-300 shadow-lg relative z-0"
                aria-label="Subject"
              />
            </motion.div>

            {/* Right Side (Message) */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <textarea
                required
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 md:h-[265px] h-[1] rounded-lg bg-black/40 backdrop-blur-sm border border-blue-500/20 placeholder-gray-400 
                          focus:outline-none focus:border-blue-500/40 transition-all duration-300 shadow-lg"
                aria-label="Message"
              ></textarea>
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 
                     hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
                     transition-all duration-500 text-white rounded-lg px-4 py-4 uppercase font-bold 
                     flex justify-center items-center gap-2 relative overflow-hidden group
                     shadow-lg hover:shadow-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {/* Glossy Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 font-semibold tracking-wider">Submit</span>
          </motion.button>
        </motion.form>
      </div>

      {/* Decorative Accent Line Bottom */}
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "30%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="h-[1px] mx-auto mt-16"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Contact;
