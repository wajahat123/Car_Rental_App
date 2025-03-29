import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPhoneRinging } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  const usefulLinks = [
    "Our Cars", "Blog", "Contact Us", "About Us", "FAQs", 
    "Privacy Policy", "Rental Policy", "Testimonial"
  ];

  const carBrands = [
    "Bentley", "Rolls Royce", "Porsche", "Mercedes", 
    "Land Rover", "Audi", "BMW", "Cadillac", "Chevrolet"
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
            <h5 className="text-white font-bold"  >About Us</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              All our cars are in perfect condition, giving you the ultimate luxury experience. 
              We carefully maintain and check our cars to make sure they look great and work perfectly. 
              We care a lot about your happiness and safety. Choosing MK Rent A Car means you&apos;re getting 
              the best in car quality.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h5 className="text-white font-bold" >Useful Links</h5>
            <ul className="grid grid-cols-2 gap-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-[#00f] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Brands */}
          <div className="space-y-4">
            <h5 className="text-white font-bold" >Car Brands</h5>
            <ul className="grid grid-cols-2 gap-2">
              {carBrands.map((brand, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-[#00f] transition-colors text-sm">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="text-white font-bold" >Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#ffd700] mt-1" />
                <span>+123 456 789</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#FFD700] mt-1" />
                <span>+123 456 789</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <TbPhoneRinging className="text-[#FFD700] mt-1" />
                <span>+123 456 789</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MdOutlineAttachEmail className="text-[#FFD700] mt-1" />
                <span>abc@example.com</span>
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

        {/* Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <ContactLinks/> */}
          {/* whenever I am adding any thing in this section it is throwing me the following error:

1 of 2 errors
Next.js (15.1.7) out of date (learn more) (Turbopack)

Console Error

[ Server ] React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. */}
         
          <div className="flex flex-wrap justify-center gap-4 mx-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="w-10 h-10 relative">
                <Image
                  src={method.src}
                  alt={method.alt}
                  fill
                  className="object-contain"
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
            All Rights Reserved. 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
