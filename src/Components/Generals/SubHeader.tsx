import { H_Five, H_Two,  } from '@/Utils/Typography'
import { ImCheckmark } from 'react-icons/im'


// const SubHeader = ({title, route,code}:{title:string,route:string, code:ReactNode}) => {
//   return (
//     <div
//     className="relative bg-cover bg-center  py-8 md:py-16  "
//     style={{ backgroundImage: "url('/assets/images/car6.webp')" }} 
//   >

//     <div className="relative text-background text-center z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible">
//        <div className="bg-[#0b0f23c7] space-y-2 py-5 md:py-10 w-full md:w-[70%] mx-auto rounded-lg border-[0.5px] border-surface shadow-lux-gold">
      
// <HeadingLink route={route} title={title}/>
    
//       </div>
//       </div>
//     </div>
//   )
// }

// export default SubHeader
const SubHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[400px] md:h-80 pt-32 pb-14"
      style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }}
    >
      <div className="absolute inset-0 bg-background bg-opacity-60"></div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible flex flex-col md:flex-row items-start md:justify-between gap-6">
        {/* Left Text Section */}
        <div className="w-full md:w-[60%] space-y-4 text-center md:text-left">
          <H_Two text="Get in Touch for Premium Service" className="text-primary" />
          <p className="text-xs sm:text-sm font-bold text-background bg-text bg-opacity-80 px-4 rounded-full w-fit mx-auto md:mx-0">
            Luxury Rides, Exceptional Service - Anytime, Anywhere!
          </p>
          <p className="text-text text-sm">
            Have questions or need to book a ride? Our 24/7 customer support ensures a smooth and hassle-free experience. Whether for business or leisure, we provide personalized service tailored to your needs.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/20 text-xs md:text-sm backdrop-blur-lg border border-primary/30 rounded-lg p-6 w-full md:w-1/3 md:-mt-8 lg:-mt-0 ">
          <H_Five text="Why Choose Us?" className="text-secondary mb-4 text-center md:text-left" />

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start" />
              <span><span className="font-bold">24/7 Assistance</span> – Dedicated support for seamless bookings.</span>
            </li>
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start" />
              <span><span className="font-bold">Tailored Travel Experience</span> – Luxury rides customized for your comfort.</span>
            </li>
            <li className="flex items-start gap-2">
              <ImCheckmark className="text-primary font-extrabold text-lg self-start" />
              <span><span className="font-bold">Hassle-Free Booking</span> – Quick, secure, and efficient reservations.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;

