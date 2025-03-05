import { HeadingLink } from '@/Utils/Typography'
import React, { ReactNode } from 'react'


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
const SubHeader = ({code, codeClassName}:{code:ReactNode, codeClassName:string}) => {
  return (
    <div
    className="relative bg-cover bg-center   h-80 "
    style={{ backgroundImage: "url('/assets/images/dashboard2.webp')" }} 
  >

    <div className={`relative text-background text-center z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible ${codeClassName}`}>
      {code}
      </div>
    </div>
  )
}

export default SubHeader