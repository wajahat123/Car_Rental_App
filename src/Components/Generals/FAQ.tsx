'use client'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { H_Five } from "@/Utils/Typography";

const FAQuestions = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-fit bg-surface rounded-md md:text-sm text-[12px] p-4 border-b border-b-background  text-text-secondary">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <H_Five className="font-semibold text-white" text={question}/>
        <motion.button
          className="text-2xl focus:outline-none "
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {open ? <AiOutlineMinus className="text-error"/> : <GoPlus className="text-primary"/>}
        </motion.button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-2 ">{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQuestions;
