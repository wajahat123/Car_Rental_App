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
    className="relative bg-cover bg-center h-80 "
    style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }} 
  >
 <div className="absolute inset-0 bg-background bg-opacity-60"></div>

    <div className=' flex justify-between  md:pt-8 pt-4  items-start relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible '>
   <div className='w-[60%] space-y-4'>
   <H_Two text=' Get in Touch for Premium Service' className='text-primary'/>
   <p className='text-[10px] md:text-xs font-bold text-background bg-text  bg-opacity-80 px-4 rounded-full w-fit'>Luxury Rides, Exceptional Service - Anytime, Anywhere!</p>
    <p className='text-text'>Have questions or need to book a ride? Our 24/7 customer support ensures a smooth and hassle-free experience. Whether for business or leisure, we provide personalized service tailored to your needs.</p>
   </div>
   <div className="bg-white/20 text-xs md:text-sm backdrop-blur-lg border border-primary/30 rounded-lg p-6 w-full md:w-1/3">
  <H_Five text="Why Choose Us?" className="text-secondary mb-4 text-center md:text-left" />
  
  <ul className="space-y-1">
    <li className="flex items-start gap-2">
      <ImCheckmark className="text-[#1261ff] font-extrabold text-lg mt-1" />
      <span><span className="font-bold">24/7 Assistance</span> – Dedicated support for seamless bookings.</span>
    </li>
    <li className="flex items-start gap-2">
      <ImCheckmark className="text-[#1261ff] font-extrabold text-lg mt-1" />
      <span><span className="font-bold">Tailored Travel Experience</span> – Luxury rides customized for your comfort.</span>
    </li>
    <li className="flex items-start gap-2">
      <ImCheckmark className="text-[#1261ff] font-extrabold text-lg mt-1" />
      <span><span className="font-bold">Hassle-Free Booking</span> – Quick, secure, and efficient reservations.</span>
    </li>
  </ul>
</div>

      </div>
    </div>
  )
}

export default SubHeader