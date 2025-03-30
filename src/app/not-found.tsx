"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { FaChevronRight } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/assets/images/logo_Car.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          className="opacity-10"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="font-bold bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700/80 text-transparent text-center py-5">
          404 - Page Not Found
        </h1>
        <h5 className="text-gray-400">Lost in the journey? Let’s guide you back.</h5>

        {/* Link Wrapping the Button */}
        <Link href="/" passHref>
          <motion.div
            className="flex justify-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-1.5 md:py-3 md:px-16 px-8 rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.div
                className="relative z-10 flex items-center gap-2"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <span>Go Home</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaChevronRight />
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
