import { H_Two } from "@/Utils/Typography";
import { FaHandsHelping, FaBan, FaTags, FaClock, FaTools, FaUsers } from "react-icons/fa";

export default function RentalPackages() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-8 md:py-16  "
      style={{ backgroundImage: "url('/assets/images/car6.webp')" }} 
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto">
         <H_Two className="text-center text-primary  mb-6 uppercase   " text="Our Rental Packages Include"/>
              


        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/** Features Array */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center p-6 rounded-lg bg-background bg-opacity-50 transition-all duration-300 hover:bg-opacity-50 hover:scale-105"
            >
              {/* Icon */}
              <feature.icon className="text-warning text-5xl mb-3 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />

              {/* Text */}
              <p className="font-semibold text-lg transition-all duration-300 group-hover:text-primary">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature Data Array
const features = [
  { icon: FaHandsHelping, text: "Free Pick-up & Drop-off" },
  { icon: FaBan, text: "No Deposit Required" },
  { icon: FaTags, text: "Lowest Prices" },
  { icon: FaClock, text: "24/7 Roadside Assistance" },
  { icon: FaTools, text: "24/7 Service Available" },
  { icon: FaUsers, text: "12000+ Customers" },
];
