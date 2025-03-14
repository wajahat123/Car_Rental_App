"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { PiDiamondsFour } from "react-icons/pi";
import { useEffect, useRef } from "react";

// Counter animation component for numbers
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  isInView?: boolean;
}

const Counter = ({ from = 0, to, duration = 2, delay = 0, className = "", isInView = false }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration, 
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, to, duration, delay, isInView]);
  
  return <motion.span className={className}>{rounded}</motion.span>;
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center pt-32 pb-14 overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/background/1.jpg')" }}
    >
      {/* Subtle Background Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0.9 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0.9 }}
        transition={{ duration: 8, ease: "easeInOut" }}
      >
        <div className="w-full h-full" style={{ backgroundImage: "url('/assets/images/background/1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      </motion.div>

      {/* Elegant Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 sm:px-8">
        {/* Decorative Accent Line Top */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: "40%" } : { width: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="h-[1px] mx-auto mb-12"
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
        </motion.div>

        {/* Luxury Title Element */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center items-center gap-2 mb-12"
        >
          <PiDiamondsFour className="text-blue-400/80 text-sm" />
          <span className="text-sm uppercase tracking-widest text-white font-medium">About Our Premium Service</span>
          <PiDiamondsFour className="text-blue-400/80 text-sm" />
        </motion.div>

        {/* Content Two Column Layout */}
        <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto gap-10 md:gap-16 relative">
          {/* Left Column - Title */}
          <motion.div 
            className="md:w-1/2 text-left relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute -top-4 -left-4 w-12 h-12 overflow-hidden opacity-60">
              <motion.div 
                className="absolute top-0 left-0 w-[1px] h-8 bg-blue-400"
                initial={{ height: 0 }}
                animate={isInView ? { height: 32 } : { height: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <motion.div 
                className="absolute top-0 left-0 h-[1px] w-8 bg-blue-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : { width: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </div>
            
            <div>
              <motion.h2 
                className="text-white text-3xl md:text-4xl font-bold mb-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                We offer customers a wide range
              </motion.h2>
              <motion.h2 
                className="text-white text-3xl md:text-4xl font-bold mb-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                of commercial cars and luxury
              </motion.h2>
              <motion.h2 
                className="text-white text-3xl md:text-4xl font-bold mb-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                cars for any occasion.
              </motion.h2>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 overflow-hidden opacity-60">
              <motion.div 
                className="absolute bottom-0 right-0 w-[1px] h-8 bg-blue-400"
                initial={{ height: 0 }}
                animate={isInView ? { height: 32 } : { height: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 h-[1px] w-8 bg-blue-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : { width: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
        </div>
          </motion.div>
          
          {/* Right Column - Description */}
          <motion.div 
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.0,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-white leading-relaxed"
              >
            At our car rental agency, we believe that everyone deserves to
            experience the pleasure of driving a reliable and comfortable
            vehicle, regardless of their budget. We have curated a diverse fleet
            of well-maintained cars, ranging from sleek sedans to spacious SUVs,
                all at competitive prices.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-white mt-6 leading-relaxed"
              >
                With our streamlined rental process, you
            can quickly and conveniently reserve your desired vehicle. Whether
            you need transportation for a business trip, family vacation, or
            simply want to enjoy a weekend getaway, we have flexible rental
            options to accommodate your schedule.
              </motion.p>
        </div>
          </motion.div>
        </div>
        
        {/* Stats Container - with nowrap to ensure stats stay in one line */}
        <motion.div 
          className=" grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto my-24 py-6 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          {/* Stat Box 1 */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 min-w-[180px] ml:w-[22%] h-36 text-center flex flex-col items-center justify-center gap-3 rounded-lg overflow-visible relative mx-3 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            whileHover={{ 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(245, 158, 11, 0.4)",
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-5xl font-bold" style={{ 
              color: '#f59e0b', 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 0 6px rgba(59, 130, 246, 0.6)' 
            }}>
              <Counter from={0} to={15425} duration={2.5} delay={2.3} isInView={isInView} />
            </h2>
            <h5 className="text-white font-medium text-lg">
              Completed Orders
            </h5>
          </motion.div>
          
          {/* Stat Box 2 */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 min-w-[180px] ml:w-[22%] h-36 text-center flex flex-col items-center justify-center gap-3 rounded-lg overflow-visible relative mx-3 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            whileHover={{ 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(245, 158, 11, 0.4)",
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-5xl font-bold" style={{ 
              color: '#f59e0b', 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 0 6px rgba(59, 130, 246, 0.6)' 
            }}>
              <Counter from={0} to={8745} duration={2.5} delay={2.4} isInView={isInView} />
            </h2>
            <h5 className="text-white font-medium text-lg">
              Happy Customers
            </h5>
          </motion.div>
          
          {/* Stat Box 3 */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 min-w-[180px] ml:w-[22%] h-36 text-center flex flex-col items-center justify-center gap-3 rounded-lg overflow-visible relative mx-3 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            whileHover={{ 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(245, 158, 11, 0.4)",
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-5xl font-bold" style={{ 
              color: '#f59e0b', 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 0 6px rgba(59, 130, 246, 0.6)' 
            }}>
              <Counter from={0} to={235} duration={2.5} delay={2.5} isInView={isInView} />
            </h2>
            <h5 className="text-white font-medium text-lg">
              Vehicles Fleet
            </h5>
          </motion.div>
          
          {/* Stat Box 4 */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-blue-500/30 min-w-[180px] ml:w-[22%] h-36 text-center flex flex-col items-center justify-center gap-3 rounded-lg overflow-visible relative mx-3 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            whileHover={{ 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(245, 158, 11, 0.4)",
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <h2 className="text-3xl md:text-5xl font-bold" style={{ 
              color: '#f59e0b', 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 0 6px rgba(59, 130, 246, 0.6)' 
            }}>
              <Counter from={0} to={15} duration={2.5} delay={2.6} isInView={isInView} />
            </h2>
            <h5 className="text-white font-medium text-lg">
              Years of Experience
            </h5>
          </motion.div>
        </motion.div>

        {/* Decorative Accent Line Bottom */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: "30%" } : { width: 0 }}
          transition={{ duration: 1.5, delay: 2.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="h-[1px] mx-auto mt-12"
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
