"use client";

import { useState, useEffect } from 'react';

// Custom hook for responsive design
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only execute client-side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({
        width,
        height: window.innerHeight,
      });
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    // Set on initial render
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowSize, isMobile, isTablet, isDesktop };
};

// Animation variants scaled for different screen sizes
export const getResponsiveAnimationVariants = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Scale factors for different screen sizes
  const scaleFactor = isMobile ? 0.7 : isTablet ? 0.85 : 1;
  const delayFactor = isMobile ? 0.7 : isTablet ? 0.85 : 1;  // Faster animations on mobile for better UX
  
  return {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5 * scaleFactor }
      }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 * scaleFactor },
      visible: {
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 * scaleFactor }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 * scaleFactor }
      }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 * scaleFactor },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 * scaleFactor }
      }
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 * scaleFactor },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 * scaleFactor }
      }
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1 * delayFactor,
          delayChildren: 0.2 * delayFactor
        }
      }
    },
    staggerItem: {
      hidden: { opacity: 0, y: 20 * scaleFactor },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 * scaleFactor }
      }
    }
  };
}; 