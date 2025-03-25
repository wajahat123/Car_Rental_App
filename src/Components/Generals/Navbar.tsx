"use client";
import { useNavbarStore } from "@/Store/navbarStore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterStore } from "@/Store/carStore";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  // State management using custom stores
  const { isOpen, isVisible, toggleMenu, setVisibility } = useNavbarStore();
  const { setBrands, setTypes ,brands,types} = useFilterStore();
  
  // Local component states
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Handlers for dropdown interactions
  const handleMouseEnter = (menu: string) => setActiveSubmenu(menu);
  const handleMouseLeave = () => setActiveSubmenu(null);

  // Effect for handling scroll behavior and navbar visibility
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisibility(true);
      } else {
        if (window.innerWidth >= 908) {
          setVisibility(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 908) {
        if (e.clientY < 100) {
          setVisibility(true);
          if (timeoutId) clearTimeout(timeoutId);
        } else {
          timeoutId = setTimeout(() => {
            if (window.scrollY > 50) {
              setVisibility(false);
            }
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy", path: "/privacy" },
  ];

  // Dropdown data for car types and brands
  const dropdownData = [
    {
      category: "Car Types",
      items: [
        { name: "Luxury Cars", path: "/luxurious-cars", type: "type" },
        { name: "SUVs", path: "/luxurious-cars", type: "type" },
        { name: "Economy Cars", path: "/luxurious-cars", type: "type" },
        { name: "Electric Cars", path: "/luxurious-cars", type: "type" },
        { name: "Sports Cars", path: "/luxurious-cars", type: "type" },
        { name: "Convertible Cars", path: "/luxurious-cars", type: "type" },
        { name: "Sedans", path: "/luxurious-cars", type: "type" },
        { name: "Coupes", path: "/luxurious-cars", type: "type" },
        { name: "Limousines", path: "/luxurious-cars", type: "type" },
        { name: "Classic Cars", path: "/luxurious-cars", type: "type" },
        { name: "Exotic Cars", path: "/luxurious-cars", type: "type" },
        { name: "Hypercars", path: "/luxurious-cars", type: "type" },
      ],
    },
    {
      category: "Car Brands",
      items: [
        { name: "Mercedes-Benz", path: "luxurious-cars", type: "brand" },
        { name: "BMW", path: "luxurious-cars", type: "brand" },
        { name: "Audi", path: "luxurious-cars", type: "brand" },
        { name: "Lexus", path: "luxurious-cars", type: "brand" },
        { name: "Porsche", path: "luxurious-cars", type: "brand" },
        { name: "Rolls-Royce", path: "luxurious-cars", type: "brand" },
        { name: "Bentley", path: "luxurious-cars", type: "brand" },
        { name: "Ferrari", path: "luxurious-cars", type: "brand" },
        { name: "Lamborghini", path: "luxurious-cars", type: "brand" },
        { name: "Maserati", path: "luxurious-cars", type: "brand" },
        { name: "Aston Martin", path: "luxurious-cars", type: "brand" },
        { name: "Bugatti", path: "luxurious-cars", type: "brand" },
        { name: "McLaren", path: "luxurious-cars", type: "brand" }
      ],
    }
  ];

  // Check if current route is a luxurious cars route
  const isLuxuriousRoute = pathname.startsWith("/luxurious-cars");

  // Filter selection handlers
  const handleFilterSelect = (item: { name: string; type: string }) => {
    if (item.type === 'brand') {
      setBrands([item.name]);
      setTypes([]);
    } else if (item.type === 'type') {
      setTypes([item.name]);
      setBrands([]);
    }
  };

  const handleMobileFilterSelect = (item: { name: string; type: string }) => {
    handleFilterSelect(item);
    toggleMenu();
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 sm:px-8 md:px-16 xl:px-32 max-w-7xl w-full mx-auto">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Section - Keep intact */}
          <motion.div
            className="relative w-36 md:w-48 lg:w-56 h-auto"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/">
              <Image
                src="/assets/images/ASMAR_-_LOGO_3_VECTOR-removebg-preview.png"
                alt="ASMR"
                width={300}
                height={211}
                className="w-full h-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Keep structure intact */}
          <nav className="hidden ml:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.path}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    pathname === link.path
                      ? "text-text-secondary"
                      : "text-text-primary hover:text-text-secondary"
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
            
            {/* Rent Car By Dropdown - Desktop */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsDropdownOpen(true)} 
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className={`flex items-center gap-1 ${isLuxuriousRoute
                      ? "text-text-secondary"
                      : "text-text-primary hover:text-text-secondary"
                  }`}>
                <button className="text-sm font-medium tracking-wide transition-all duration-300">
                  Rent Car By
                </button>
                {isDropdownOpen ? (
                  <FaChevronDown className="text-xs" />
                ) : (
                  <FaChevronRight className="text-xs" />
                )}
              </div>
              
              {isLuxuriousRoute && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -left-14 right-10 mt-2 w-48 scrollbar-hide bg-black border border-gold-500/20 text-white shadow-lg rounded-lg p-1"
                  >
                    {dropdownData.map((group, index) => (
                      <div 
                        key={index} 
                        onMouseEnter={() => handleMouseEnter(group.category)} 
                        onMouseLeave={handleMouseLeave} 
                        className="max-h-[250px] overflow-y-scroll scrollbar-hide"
                      >
                        <div className="px-4 py-2 font-semibold bg-gradient-to-b from-gold-400 to-gold-700 text-black">
                          {group.category}
                        </div>

                        <AnimatePresence>
                          {activeSubmenu === group.category && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              {group.items.map((item, i) => (
                                <Link 
                                  key={i} 
                                  href={item.path} 
                                  className="block px-4 py-2 hover:bg-gold-600/20"
                                  onClick={() => handleFilterSelect(item)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button - Keep intact */}
          <motion.button
            onClick={toggleMenu}
            className="ml:hidden text-text-primary hover:text-text-secondary p-2 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300"
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

        {/* Mobile Menu - Keep structure intact */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml:hidden"
            >
              <motion.nav className="bg-background/55 backdrop-blur-lg  rounded-md border-t border-primary/10 px-4 py-6 space-y-4 shadow-lg rounded-b-xl">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block "
                  >
                    <Link
                      href={link.path}
                      onClick={toggleMenu}
                      className={`block py-2 text-center text-base transition-all duration-300 ${
                        pathname === link.path
                          ? "text-text-secondary font-semibold"
                          : "text-text-primary hover:text-text-secondary"
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
                
                {/* Rent Car By Dropdown - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="block md:hidden"
                >
                  <div className={`flex justify-center items-center gap-1 ${
                        isLuxuriousRoute ? "text-text-secondary font-semibold" : "text-text-primary hover:text-text-secondary"
                      }`}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="block py-2 text-center text-base transition-all duration-300 "
                    >
                      Rent Car By
                    </button>
                    {mobileDropdownOpen ? (
                      <FaChevronDown className="text-xs" />
                    ) : (
                      <FaChevronRight className="text-xs" />
                    )}
                  </div>

                  {isLuxuriousRoute && (
                    <motion.div className="h-0.5 bg-primary/50 mx-auto w-12" layoutId="mobileUnderline" />
                  )}

                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 space-y-2"
                      >
                        {dropdownData.map((group, index) => (
                          <div key={index}>
                            <p className="px-4 py-1 text-sm bg-gradient-to-b from-gold-300/80 to-gold-600/80 rounded-sm text-black font-semibold text-center">
                              {group.category}
                            </p>

                            {group.items.map((item, i) => (
                              <Link 
                                key={i} 
                                href={item.path} 
                                className="block px-4 py-1 text-sm text-text-primary hover:bg-primary/30 border-b border-b-gray-500/30 text-center rounded-sm"
                                onClick={() => handleMobileFilterSelect(item)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;