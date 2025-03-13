"use client"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Handle scroll and hover behavior
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or hovering near top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down (only on desktop)
        if (window.innerWidth >= 908) { // ml breakpoint
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 908) { // ml breakpoint
        if (e.clientY < 100) { // Show when mouse is near top
          setIsVisible(true);
          // Clear any existing timeout
          if (timeoutId) clearTimeout(timeoutId);
        } else {
          // Set timeout to hide navbar
          timeoutId = setTimeout(() => {
            if (window.scrollY > 50) {
              setIsVisible(false);
            }
          }, 1000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const handleOpen = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy", path: "/privacy" },
    { name: "Rent Car By", path: "/luxurious-cars" },
  ];

  return (
    <motion.div 
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: isVisible ? 0 : -100 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-8 md:px-16 xl:px-32 max-w-7xl w-full mx-auto">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <motion.div 
            className="relative w-36 md:w-48 lg:w-56 h-auto"
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/assets/images/ASMAR_-_LOGO_3_VECTOR-removebg-preview.png"
              alt="ASMR"
              width={300}
              height={211}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden ml:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href={link.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-300
                    ${pathname === link.path 
                      ? 'text-text-secondary' 
                      : 'text-text-primary hover:text-text-secondary'
                    }`}
                >
                  {link.name}
                </Link>
                {pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={handleOpen}
            className="ml:hidden text-text-primary hover:text-text-secondary p-2 rounded-full
              border border-primary/20 hover:border-primary/50 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isOpen ? (
                <IoCloseOutline size={24} />
              ) : (
                <IoMenuOutline size={24} />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml:hidden"
            >
              <motion.nav 
                className="bg-background/95 backdrop-blur-lg border-t border-primary/10
                  px-4 py-6 space-y-4 shadow-lg rounded-b-xl"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    <Link
                      href={link.path}
                      onClick={handleOpen}
                      className={`block py-2 text-center text-base transition-all duration-300
                        ${pathname === link.path 
                          ? 'text-text-secondary font-semibold' 
                          : 'text-text-primary hover:text-text-secondary'
                        }`}
                    >
                      {link.name}
                    </Link>
                    {pathname === link.path && (
                      <motion.div
                        className="h-0.5 bg-primary/50 mx-auto w-12"
                        layoutId="mobileUnderline"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
