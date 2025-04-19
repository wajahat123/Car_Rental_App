"use client"
import BoardOfDirectors from "@/Components/About/BoardOfDirectors";
import EconomyCars from "@/Components/About/EconomyCars";
import WeOffer from "@/Components/About/WeOffer";
import SubHeader from "@/Components/Generals/Subheader_About";
import CallUs from "@/Components/Home/CallUs";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <SubHeader />
      
      <div className='flex flex-col md:flex-row justify-center my-20   bg-lue-700 items-center gap-10 px-4 sm:px-6 md:px-8 lg:px-20 max-w-7xl mx-auto'>
        <div className="relative md:w-1/3 w-full bg-red-80 h-[600px]  items-center md:justify-start md:flex hidden">
        {/* circle  overlay*/}
          <div className='md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-gold-400/80  to-transparent absolute -left-10 top-20 '></div>
          {/* Image */}
          <div className="absolute top-0 left-0 max-h-[550px] max-w-[450px] z-10 ">
            <Image 
              src="/assets/images/car9.png" 
              alt='car' 
              width={600} 
              height={600} 
              priority
            />
          </div>
          <div className="absolute -left-10 top-20 md:w-[350px] md:h-[350px] rounded-full border-dashed border-2 border-text-primary  "></div>
        </div>
        {/* text-content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-start items-start flex-col gap-2  h-[500px]  md:w-1/2 w-full text-left"
          >
     <div className="bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700/80">
  <h1 className="text-transparent font-semibold text-left">About Us</h1>
</div>

<p className="text-text-primary/70">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ad voluptas sed suscipit asperiores laborum rem necessitatibus vitae incidunt maxime doloribus possimus distinctio aspernatur ut accusantium eum ipsa repudiandae vel sunt ratione, in eaque ab! Accusantium, magni recusandae similique harum quaerat voluptate, odio hic sapiente laudantium delectus, earum deleniti a ut. Error, aut maxime. Ipsa, minus? Atque soluta facilis similique hic non esse voluptates. Quisquam nemo aliquam minus nam nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, ipsa neque. Itaque reiciendis, libero asperiores deleniti accusamus eaque quibusdam incidunt ratione totam laudantium sed tempora. Distinctio quam ipsam molestiae, quaerat blanditiis esse deserunt fugiat, autem a provident recusandae sint natus.</p>          </motion.div>
          {/* Add your about content here */}
        </div>
       

      <BoardOfDirectors />
      <WeOffer />
      <EconomyCars/>
      <CallUs/>

    </>
  );
};

export default About;