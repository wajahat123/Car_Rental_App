"use client";
import { H_Two } from "@/Utils/Typography";
import React from "react";
import { FaShieldAlt, FaThumbsUp, FaClock, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
          icon: <FaShieldAlt className="text-4xl text-white group-hover:text-royal-blue transition" />,
          title: "Reliable & Secure",
          description: "We prioritize safety and security for all our rentals.",
        },
        {
          icon: <FaThumbsUp className="text-4xl text-white group-hover:text-royal-blue transition" />,
          title: "Top-Notch Quality",
          description: "All our cars are well-maintained and in excellent condition.",
        },
        {
          icon: <FaClock className="text-4xl text-white group-hover:text-royal-blue transition" />,
          title: "24/7 Availability",
          description: "We provide 24/7 customer support for a hassle-free experience.",
        },
        {
          icon: <FaHeadset className="text-4xl text-white group-hover:text-royal-blue transition" />,
          title: "Excellent Support",
          description: "Our team is always ready to assist you with any queries.",
        },
      ];
    
  return (
   
      <div className="bg-black bg-opacity-70  px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto py-8 md:py-16">
        <H_Two className="text-center text-primary  mb-6 uppercase " text="Why Choose Us?"/>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black bg-opacity-50 shadow-lux-gold  hover:bg-primary transition p-6 rounded-lg text-center flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-xl text-white font-semibold mt-4 group-hover:text-black transition">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-black transition mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default WhyChooseUs;
