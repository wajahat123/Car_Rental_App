'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuCar } from 'react-icons/lu';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 2; // Smooth loading effect
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white">
      {/* Moving Car Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: [0.9, 1, 0.9], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="mb-10"
      >
        <LuCar size={100} className="text-white" />
      </motion.div>

      {/* Loading Bar at Bottom */}
      <div className="absolute bottom-10 w-[80%] h-1 bg-gray-700 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
