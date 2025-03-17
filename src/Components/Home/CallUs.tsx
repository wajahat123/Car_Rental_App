import { motion } from 'framer-motion'

const CallUs = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-900  md:h-[400px] flex justify-center items-center my-2' >

    <div className='px-4 sm:px-6 md:px-8 lg:px-20 max-w-7xl w-full flex items-center justify-center flex-col mx-auto text-center gap-10'
    > <h2 className='text-2xl md:text-4xl font-bold text-white'>
      Call us for further information. ASMAR customer care is here to help you anytime.

    </h2>

    <motion.div
          className="flex justify-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-4 px-24 rounded-md shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
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
              <span>Contact Us</span>
        
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
      </div>
  )
}

export default CallUs