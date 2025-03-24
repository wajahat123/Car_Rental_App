// import { H_Four } from "@/Utils/Typography";
// import Image from "next/image";
// import { Car } from "@/Utils/types";
// import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

// const ProductCard = ({ data }: { data: Car }) => {
//   return (
//     <div className="bg-surface hover:scale-105 w-[300px] h-[440px] mx-auto p-2 ring-2 hover:ring-primary text-text transition-all duration-300 cursor-pointer rounded-md  mb-2  hover:shadow-lux-gold ring-[#a3a3a350] ml:mb-4">
//       <Image
//         src={data.image}
//         alt="image"
//         width={400}
//         height={400}
//         className="md:h-[65%] h-[66%] w-full rounded-md shadow-lg"
//       />
//       <H_Four text={data.name} className="text-primary font-bold mt-2" />
//       <div className="flex justify-between items-start">
//         <div>
//           {/* <p className="text-text text-sm md:text-base">{data.type}</p> */}
//         </div>
//         <div className="text-xs md:text-sm">
//           {data.original_price ? (
//             <p className="gap-2 flex">
//               <span className="line-through text-muted">
//                 {data.original_price}
//               </span>
//               <span className="text-secondary font-bold">
//                 {data.price_per_day}
//               </span>
//             </p>
//           ) : (
//             <p className="text-secondary font-bold">{data.price_per_day}</p>
//           )}
//         </div>
//       </div>
//       <div className="flex w-full justify-between items-center gap-2 text-sm mt-4">
//         <button className="flex justify-center gap-2 items-center w-[50%] p-1 rounded-md ring-1 ring-primary  hover:bg-primary active:bg-primary hover:text-background text-accent transition-all duration-300 active:scale-95">
//           <RiWhatsappFill /> Whatsapp
//         </button>
//         <button className="flex justify-center gap-2 items-center w-[50%] p-1 rounded-md ring-1 ring-primary  hover:bg-primary active:bg-primary hover:text-background text-accent transition-all duration-300 active:scale-95">
//           <RiPhoneFill /> Phone
//         </button>
//       </div>
//       <button className="flex justify-center items-center gap-2 w-full mt-2 transition-all duration-300  md:text-sm active:scale-95 font-bold ring-1 ring-primary hover:ring-primary bg-primary rounded-md md:p-[4px] text-background hover:bg-background  hover:text-primary  active:bg-background active:opacity-90 active:text-primary active:ring-primary">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
// // import { H_Five } from "@/Utils/Typography";
// // import Image from "next/image";
// // import { Car } from "@/Utils/utils";
// // import Link from "next/link";
// // import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

// // const ProductCard = ({ data }: { data: Car }) => {
// //   return (
// //     <div className="bg-[rgba(11,15,35,0.46)] hover:scale-105 w-[300px] h-[440px] mx-auto p-2  ring-1 ring-primary hover:ring-royal-blue  transition-all duration-300 cursor-pointer rounded-md hover:shadow-lux-white">
// //       <Image
// //         src={data.image}
// //         alt="image"
// //         width={400}
// //         height={400}
        
// //         className="h-[70%] w-full rounded-md shadow-lg "
// //       />
// //       <H_Five text={data.name} />
// //       <div className="flex justify-between items-start ">
// //         <div>
// //           <p className="text-secondary text-sm md:text-base">{data.type}</p>
// //         </div>
// //         <div className="text-xs md:text-sm ">
// //           {data.original_price ? (
// //             <p className="gap-2 flex">
// //               <span className="line-through text-text-muted">
// //                 {data.original_price}
// //               </span>
// //               <span className="text-warning font-bold">
// //                 {data.price_per_day}
// //               </span>
// //             </p>
// //           ) : (
// //             <p className="text-warning font-bold">{data.price_per_day}</p>
// //           )}
// //         </div>
// //       </div>
// //       <div className="flex w-full justify-between items-center gap-2 text-xs md:text-sm mt-2">
// //         <button className="flex justify-center gap-2 items-center w-[50%] p-[2px] md:p-[4px] rounded-md ring-primary ring-1 hover:ring-royal-blue active:ring-primary hover:bg-white active:bg-primary hover:text-royal-blue active:text-white transition-all duration-300 active:scale-95">
// //           <RiWhatsappFill /> Whatsapp
// //         </button>
// //         <button className="flex justify-center gap-2 items-center w-[50%] p-[2px] md:p-[4px] rounded-md ring-primary ring-1 hover:ring-royal-blue active:ring-primary hover:bg-white active:bg-primary hover:text-royal-blue active:text-white transition-all duration-300 active:scale-95">
// //           <RiPhoneFill /> Phone
// //         </button>
// //       </div>
// //       <button className="flex justify-center items-center gap-2 w-full mt-2  transition-all duration-300   text-xs md:text-sm active:scale-95 ring-1 ring-royal-blue rounded-md p-[2px] md:p-[4px] bg-white hover:bg-royal-blue text-royal-blue hover:text-white active:bg-primary active:ring-primary">
// //         Book Now
// //       </button>
// //     </div>
// //   );
// // };

// // export default ProductCard;