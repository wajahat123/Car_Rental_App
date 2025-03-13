'use client'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { H_Five } from "@/Utils/Typography";
import { BsQuestionCircle } from "react-icons/bs";

const FAQuestions = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
      className="w-full h-fit bg-black/40 backdrop-blur-sm rounded-lg md:text-sm text-[12px] p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group"
      whileHover={{ 
        scale: 1.01,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)"
      }}
    >
      {/* Decorative Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      </motion.div>

      <motion.div 
        className="flex justify-between items-center cursor-pointer relative z-10"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          <BsQuestionCircle className="text-primary text-lg flex-shrink-0" />
          <H_Five className="font-semibold text-white leading-relaxed" text={question}/>
        </div>
        <motion.button
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={false}
            animate={{ 
              color: open ? "#ef4444" : "#3b82f6",
              scale: open ? 1.1 : 1
            }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {open ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
                >
                  <AiOutlineMinus className="text-2xl text-primary"/>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20"
                >
                  <GoPlus className="text-2xl"/>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.15, ease: "easeInOut" }
            }}
            className="overflow-hidden relative z-10"
          >
            <motion.div 
              className="pt-6 mt-6 border-t border-blue-500/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <motion.p 
                className="text-gray-300 leading-relaxed pl-9"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.15 }}
              >
                {answer}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Corner Accents */}
      <motion.div 
        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </motion.div>
  );
};

export default FAQuestions;
