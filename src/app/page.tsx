"use client";

import Hero from "@/Components/Home/Hero";
import Testimonials from "@/Components/Home/Testimonials";
import RentalPackages from "@/Components/Home/RentalPackages";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import FAQSection from "@/Components/Home/FAQSection";
import { OurFleet } from "@/Components/Home/OurFleet";
import Contact from "@/Components/Home/Contact";
import About from "@/Components/Home/About";
import QualityForClient from "@/Components/Home/QualityForClient";
import FeaturedProducts from "@/Components/Home/FeaturedProducts";
import { motion, useScroll } from "framer-motion";
import { UseResponsive } from "@/Utils/hooks";
import { useEffect, useState } from "react";
import CallUs from "@/Components/Home/CallUs";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { isMobile } = UseResponsive();
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1 
      }
    }
  };

  // ScrollToTop button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (typeof window !== 'undefined') {
        if (window.pageYOffset > 400) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.main
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        variants={pageVariants}
        className="overflow-hidden"
      >
        <Hero />
        <OurFleet />
        <Testimonials/>
        <About />
        <FAQSection/>
        <QualityForClient/>
        <WhyChooseUs/>
        <Contact/>
        <FeaturedProducts/>
        <RentalPackages/>
        <CallUs/>
        {/* <CarTypes_Section_3 /> */}
      </motion.main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 z-50 p-2 rounded-full bg-blue-500 text-white shadow-lg cursor-pointer ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
}
