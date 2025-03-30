"use client"
import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPhoneRinging } from "react-icons/tb";
import Link from "next/link";
import { ContactLinks } from "./ContactLinks";

const Footer = () => {
  // Functional links with actual paths
  const usefulLinks = [
    { name: "Our Cars", path: "/luxurious-cars" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Testimonial", path: "/testimonials" }
  ];

  // Plain text car brands (no links)
  const carBrands = [
    "Bentley",
    "Rolls Royce", 
    "Porsche",
    "Mercedes",
    "Land Rover",
    "Audi",
    "BMW",
    "Cadillac",
    "Chevrolet"
  ];

  const paymentMethods = [
    { src: "/assets/images/bitcoin.png", alt: "Bitcoin" },
    { src: "/assets/images/mastercard.svg", alt: "Mastercard" },
    { src: "/assets/images/visa_icno.png", alt: "Visa" },
    { src: "/assets/images/206675_paypal_method_payment_icon.png", alt: "PayPal" }
  ];

  return (
    <footer className="w-full bg-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h5 className="text-white font-bold">About Us</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              All our cars are in perfect condition, giving you the ultimate luxury experience. 
              We carefully maintain and check our cars to make sure they look great and work perfectly. 
              We care a lot about your happiness and safety. Choosing MK Rent A Car means you&apos;re getting 
              the best in car quality.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h5 className="text-white font-bold">Useful Links</h5>
            <ul className="grid grid-cols-2 gap-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-gray-400 hover:text-blue-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Brands - Now as plain text */}
          <div className="space-y-4">
            <h5 className="text-white font-bold">Car Brands</h5>
            <ul className="grid grid-cols-2 gap-2">
              {carBrands.map((brand, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="text-white font-bold">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#ffd700] mt-1" />
                <a href="tel:+123456789" className="hover:text-blue-700">+123 456 789</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#FFD700] mt-1" />
                <a href="tel:+123456789" className="hover:text-blue-700">+123 456 789</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#FFD700] mt-1" />
                <a href="tel:+123456789" className="hover:text-blue-700">+123 456 789</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MdOutlineAttachEmail className="text-[#FFD700] mt-1" />
                <a href="mailto:abc@example.com" className="hover:text-blue-700">abc@example.com</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <IoLocationSharp className="text-[#FFD700] mt-1" />
                <span>1234 Elm Street Springfield, IL 62704 United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <ContactLinks />
          </div>
          
          <div className="flex flex-wrap justify-end gap-4 ml-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="w-10 h-10 relative">
                <Image
                  src={method.src}
                  alt={method.alt}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-black border-t border-[#FFD700]/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} MK Rent A Car. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;