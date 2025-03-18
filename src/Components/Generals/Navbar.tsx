"use client";
import { useNavbarStore } from "@/Store/navbarStore";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useCarStore } from "@/Store/store";

const Navbar = () => {
  const { isOpen, isVisible, toggleMenu, setVisibility } = useNavbarStore();
  const setSelectedFilter = useCarStore((state) => state.setSelectedFilter);
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State for mobile dropdown
  const pathname = usePathname();

  const handleSelect = (value: string, type: string) => {
    setSelectedFilter({ value, type }); // Update the global state
    router.push("/luxurious"); // Redirect to the luxurious page
  };

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy", path: "/privacy" },
  ];

  const rentCarDropdown = [
    { name: "Car Types", path: "", type: "" },
    { name: "Luxury Cars", path: "/luxurious-cars", type: "type" },
    { name: "SUVs", path: "/suvs", type: "type" },
    { name: "Economy Cars", path: "/luxurious-cars", type: "type" },
    { name: "Electric Cars", path: "/luxurious-cars", type: "type" },
    { name: "Car Brands", path: "", type: "" },
  ];

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: isVisible ? 0 : -100 }}
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
            {/* Rent Car By Dropdown */}
            <div
              className="relative"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <button
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  pathname.startsWith("/luxurious-cars")
                    ? "text-text-secondary"
                    : "text-text-primary hover:text-text-secondary"
                }`}
              >
                Rent Car By
              </button>
              {pathname.startsWith("/luxurious-cars") && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-36 bg-gradient-to-br from-black/90 to-slate-900/80 shadow-lg rounded-lg py-2 text-text-primary"
                >
                  {rentCarDropdown.map((item, index) =>
                    item.name === "Car Types" || item.name === "Car Brands" ? (
                      <p className="px-4 py-1 text-sm bg-gradient-to-b from-gold-300/80 to-gold-600/80  text-black font-semibold rounded-sm">
                        {item.name}
                      </p>
                    ) : (
                      <Link
                        key={index}
                        href={item.path}
                        onClick={() => handleSelect(item.name, item.type)}
                        className="block px-4 py-1 text-sm hover:bg-primary/30 border-b border-b-gray-500/30 rounded-sm"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </motion.div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
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
              <motion.nav className="bg-background/95 backdrop-blur-lg border-t border-primary/10 px-4 py-6 space-y-4 shadow-lg rounded-b-xl">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
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
                {/* Rent Car By Dropdown for Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="block"
                >
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`block py-2 text-center text-base transition-all duration-300 ${
                      pathname.startsWith("/luxurious-cars")
                        ? "text-text-secondary font-semibold"
                        : "text-text-primary hover:text-text-secondary"
                    }`}
                  >
                    Rent Car By
                  </button>
                  {pathname.startsWith("/luxurious-cars") && (
                    <motion.div
                      className="h-0.5 bg-primary/50 mx-auto w-12"
                      layoutId="mobileUnderline"
                    />
                  )}
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-2"
                    >
                      {rentCarDropdown.map((item, index) =>
                        item.name === "Car Types" ||
                        item.name === "Car Brands" ? (
                          <p className="px-4 py-1 text-sm bg-gradient-to-b from-gold-300/80 to-gold-600/80 rounded-sm text-black font-semibold  text-center">
                            {item.name}
                          </p>
                        ) : (
                          <Link
                            key={index}
                            href={item.path}
                            onClick={() => {
                              handleSelect(item.name, item.type);
                              toggleMenu();
                            }}
                            className="block px-4 py-1 text-sm text-text-primary hover:bg-primary/30 border-b border-b-gray-500/30 text-center rounded-sm"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
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