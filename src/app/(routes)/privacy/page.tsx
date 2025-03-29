"use client"

import SubHeader from '@/Components/Generals/Subheader_About';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Privacy = () => {
   return (
      <>
         <SubHeader />
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col md:flex-row justify-center py-20 items-center gap-10 px-4 sm:px-6 md:px-8 lg:px-20 max-w-7xl mx-auto rounded-lg shadow-lg bg-gradient-to-br from-black to-gray-900'
         >
            {/* Image Section */}
            <motion.div 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative md:w-1/3 w-full h-[600px] flex items-center justify-start"
            >
               {/* Decorative Circle Overlay */}
               <div className='md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-yellow-400/80 to-transparent absolute -left-10 top-20'></div>
               
               {/* Image */}
               <div className="absolute top-0 left-0 max-h-[550px] max-w-[450px] z-10">
                  <Image 
                     src="/assets/images/car9.png" 
                     alt='Car Rental' 
                     width={600} 
                     height={600} 
                     priority
                     className='rounded-xl shadow-lg'
                  />
               </div>
               <div className="absolute -left-10 top-20 md:w-[350px] md:h-[350px] rounded-full border-dashed border-2 border-white"></div>
            </motion.div>
            
            {/* Privacy Policy Content */}
            <motion.div
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex justify-start items-start flex-col gap-5 md:w-1/2 w-full text-left text-white"
            >
               <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700/80 text-transparent">Privacy Policy</h1>
               
               <p className="text-white/70">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
               </p>
               
               {/* Information We Collect */}
               <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
               <ul className="list-disc pl-5 text-white/70">
                  <li>Personal Information: Name, email, phone number, and billing details.</li>
                  <li>Usage Data: Pages visited, time spent on our website, and interactions.</li>
                  <li>Cookies & Tracking Technologies: Improve user experience and security.</li>
               </ul>
               
               {/* How We Use Your Information */}
               <h2 className="text-xl font-semibold mt-4">How We Use Your Information</h2>
               <p className="text-white/70">We use your information to provide and improve our services, process transactions, personalize user experiences, and ensure security.</p>
               
               {/* Data Protection & Security */}
               <h2 className="text-xl font-semibold mt-4">Data Protection & Security</h2>
               <p className="text-white/70">We implement industry-standard security measures to protect your data against unauthorized access, alteration, and misuse.</p>
               
               {/* Third-Party Services */}
               <h2 className="text-xl font-semibold mt-4">Third-Party Services</h2>
               <p className="text-white/70">We may share your information with third-party services for payment processing, analytics, or marketing, ensuring compliance with privacy standards.</p>
               
               {/* Contact Information */}
               <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
               <p className="text-white/70">If you have any questions about this Privacy Policy, please contact us at <span className="text-yellow-400">support@carrental.com</span>.</p>
            </motion.div>
         </motion.div>
      </>
   );
};

export default Privacy;
