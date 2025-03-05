import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { H_Five } from "@/Utils/Typography";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPhoneRinging } from "react-icons/tb";
import { ContactLinks } from "./ContactLinks";
const Footer = () => {
  return (
    <>
    <div className="px-4 sm:px-8 md:px-16 lg:px-32  xl:px-64 max-w-7xl w-full mx-auto text-textMuted  text-xs md:text-sm ">
      <div className="flex justify-between flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/4  ">
          <H_Five className="text-secondary font-bold" text="About Us" />
      <p> All our cars are in perfect condition, giving you&apos;the ultimate luxury experience. We carefully maintain and check our cars to make sure they look great and work perfectly. We care a lot about your happiness and safety. Choosing MK Rent A Car means you&apos;re getting the best in car quality.</p>
      </div>
       <div className="flex flex-1 justify-between flex-wrap">
       <div className="w-1/2 sm:w-1/3 md:w-1/4">
          <H_Five className="text-secondary font-bold" text="Useful Links" />
          <ul className="space-y-2">
            <li>Our Cars</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Rental Policy</li>
            <li>Testimonial</li>
          </ul>
        </div>{" "}
        <div  className="sm:w-1/3  w-full hidden sm:block">
          <H_Five className="text-secondary font-bold" text="Car Brands" />
          <ul className="space-y-2">
            <li> Bentley</li>
            <li> Rolls Royce</li>
            <li> Porsche</li>
            <li> Mercedes</li>
            <li> Land Rover</li>
            <li> Audi</li>
            <li> Bmw</li>
            <li> Cadillac</li>
            <li> Chevrolet</li>
          </ul>
        </div>
        <div  className="w-1/2 sm:w-1/3">
          <H_Five className="text-secondary font-bold" text="Contact Us" />
          <ul className="space-y-2">
            <li>
              <TbPhoneRinging className="inline-block mr-2 text-primary" />
              +123 456 789
            </li>
            <li>
              <TbPhoneRinging className="inline-block mr-2 text-primary" />
              +123 456 789
            </li>
            <li>
              <TbPhoneRinging className="inline-block mr-2 text-primary" />
              +123 456 789
            </li>
            <li>
              <MdOutlineAttachEmail className="inline-block mr-2 text-primary" />
              abc@example.com
            </li>
            <li>
              <IoLocationSharp className="inline-block mr-2 text-primary" />
              1234 Elm Street Springfield, IL 62704 United States
            </li>
          </ul>
        </div>
        </div>
     
      </div>
      <div className="w-full h-[0.5px] bg-primary mt-5"></div>
<div className="flex flex-col md:flex-row justify-between items-center ">
    <ContactLinks/>

    <div className="flex gap-2">
<Image className="w-10 h-10" src="/assets/images/bitcoin.png" width={100} height={100} alt="abc"/>
<Image className="w-10 h-10" src="/assets/images/mastercard.svg" width={100} height={100} alt="abc"/>
<Image className="w-10 h-10" src="/assets/images/visa_icno.png" width={100} height={100} alt="abc"/>
<Image className="w-10 h-10" src="/assets/images/206675_paypal_method_payment_icon.png" width={100} height={100} alt="abc"/>
    </div>
</div>
    </div>
    <div className="flex justify-center py-3 items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 max-w-7xl w-full mx-auto h-full bg-background text-secondary mt-6  text-xs md:text-sm ">
    All Rights Reserved.2025</div>
    </>
  );
};
export default Footer;
