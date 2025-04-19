import { H_Five, H_Two } from '@/Utils/Typography';
import { ImCheckmark } from 'react-icons/im';

const SubHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[570px] md:pt-0 pt-[70px] md:min-h-[400px] lg:min-h-[500px] flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible flex flex-col md:flex-row items-start md:justify-between gap-6">
        {/* Left Text Section */}
        <div className="w-full md:w-[60%] space-y-4 text-center md:text-left">
          <H_Two text="Get in Touch for Premium Service" className="text-white" />
          <p className="text-xs sm:text-sm font-bold text-gold-600 bg-gradient-to-r from-blue-600 to-blue-400/40 bg-opacity-80 px-4 rounded-full w-fit mx-auto md:mx-0">
            Luxury Rides, Exceptional Service - Anytime, Anywhere!
          </p>
          <p className="text-text text-sm">
            Have questions or need to book a ride? Our 24/7 customer support ensures a smooth and hassle-free experience. Whether for business or leisure, we provide personalized service tailored to your needs.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/20 text-xs md:text-sm lg:text-base backdrop-blur-lg border border-primary/30 rounded-lg p-6 w-full md:w-1/3 md:-mt-8 lg:-mt-0 ">
          <H_Five text="Why Choose Us?" className="text-secondary mb-4 text-center md:text-left" />

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start mt-1" />
              <span><span className="font-bold">24/7 Assistance</span> – Dedicated support for seamless bookings.</span>
            </li>
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start mt-1" />
              <span><span className="font-bold">Tailored Travel Experience</span> – Luxury rides customized for your comfort.</span>
            </li>
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start mt-1" />
              <span><span className="font-bold">Hassle-Free Booking</span> – Quick, secure, and efficient reservations.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;


// import { H_Two } from "@/Utils/Typography";
// import Link from "next/link";

// const SubHeader = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center min-h-[400px] md:h-80 pt-32 pb-14"
//       style={{ backgroundImage: "url('/assets/images/car1.webp')" }}
//     >
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-tl from-black to-black/60"></div>

//       {/* Content Container */}
//       <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto flex justify-end">
        
//         {/* Left Text Section */}
//         <div className="text-center md:text-right md:w-2/3 space-y-4 px-8">
//           <H_Two text="Where Elegance Meets Performance on the Road" className="text-white " />
//           <p className="text-text text-justify md:text-right">
//             At <span className="text-primary font-bold">ASAM</span>, we turn your supercar dreams into reality. Cruise Dubai in a Ferrari, feel the power of a Lamborghini, or enjoy the luxury of a Range Rover—all at unbeatable prices. With flexible rentals and top-tier service, driving luxury has never been easier.
//           </p>

//           {/* Button Wrapper */}
//           <div className="flex md:justify-end justify-center">
//             <Link
//               className="font-extrabold w-[70%] sm:w-1/2 md:w-1/3 transition-all duration-300 active:scale-95 ring-1 ring-primary/30 hover:ring-primary bg-background rounded-full  text-primary hover:bg-background hover:shadow-lux-gold hover:text-primary active:bg-primary active:opacity-90 active:text-background active:ring-primary text-center py-2  md:px-6"
//               href="/contact-us"
//             >
//               Book Now
//             </Link>
//           </div>

//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default SubHeader;
