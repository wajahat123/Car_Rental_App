"use client";
import { H_Two } from "@/Utils/Typography";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "@/Styles/CustomPhoneStyles.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const Contact = () => {
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
    <div
      className="relative bg-cover bg-center py-8 md:py-16"
      style={{ backgroundImage: "url('/assets/images/car6.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
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

              {/* Phone Input with Proper Styling */}
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
                          focus:outline-none ring-1 ring-[#ffbf004e] focus-within:ring-[#ffbf00ae] transition-all duration-200 shadow-lg"
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
  );
};

export default Contact;
