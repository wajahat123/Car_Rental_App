import { fetchCars, fetchSingleCar } from "@/Utils/fetchCars";
import Image from "next/image";
import { ImCheckmark } from "react-icons/im";
import Link from "next/link";
import { FaTicketAlt, FaWhatsapp } from "react-icons/fa";
import FleetCard from "@/Components/Home/FleetCard";

export default async function CarPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await the params
  const { id } = await params;

const car = await fetchSingleCar(id)
const featuredCars = await fetchCars(); 

// const [car, setCar] = useState<Car|null>()
// const [featuredCars, setFeaturedCars] = useState<Car[]>()
//   const fetchDataFromChild = (carData:Car|null , featuredCars:Car[]) => {
//      data = {
//       car : carData,
//       featuredCars: featuredCars
//     }
    
//    return data
   
// }

//   useEffect(() => {
//     //fetching single car for details
//     async function fetchCar (){
//       const car:Car| null =await fetchSingleCar(id)  
//       setCar(car)
//     }
//    fetchCar()


//    //fetching data for featured cars
//    const fetchData = async () => {
//     try {
//       const data = await fetchCars(); // Your API call
//       setFeaturedCars(data);
//     } catch (error) {
//       console.error("Error fetching cars:", error);
//     } finally {
//     }
//   };

//   fetchData();
//  }, [])

  // the cars for feaatured cars section 
  const FeaturedProducts = featuredCars?.filter(
    (thisCar) => thisCar.brand == car?.brand && thisCar.name != car.name
  ).slice(0, 3);

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-[200px] md:h-80 pt-32 pb-14"
        style={{ backgroundImage: `url(/assets/images/car3.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-black to-black/60"></div>
        <div className="relative z-10 pt-4 md:pt-8 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto flex justify-center flex-col items-center">
          <h3 className="text-white/70 -mb-2 md:-mb-4">Vehicle Fleet</h3>
          <h1 className="font-bold bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700/80 text-transparent text-center py-5 mb:py-10">
            {car?.name}
          </h1>
        </div>
      </div>
      {car?._id ? (
        <div className="min-h-screen py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row justify-center items-start gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${car.image}`}
                alt={car?.model || "Car"}
                width={800}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="bg-gradient-to-br from-black to-slate-900 p-6 shadow-lg text-center border-b-4 border-b-gold-500 rounded-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Brand", value: car?.brand },
                  { label: "Model", value: car?.model },
                  { label: "Body Type", value: car?.type },
                  { label: "Doors", value: car?.doors },
                  { label: "Seats", value: car?.seats },
                  { label: "Luggage", value: car?.luggage },
                  { label: "Fuel Type", value: car?.fuelType },
                  { label: "Engine", value: car?.engine },
                  { label: "Year", value: car?.year },
                  { label: "Mileage", value: car?.mileage },
                  { label: "Transmission", value: car?.transmission },
                  { label: "Drive", value: car?.drive },
                  { label: "Fuel Economy", value: car?.fuelEconomy },
                  { label: "Exterior Color", value: car?.exteriorColor },
                  { label: "Interior Color", value: car?.interiorColor },
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-700/30">
                    <span className="font-semibold text-gold-300">{spec.label}</span>
                    <span className="text-gray-800 dark:text-white">{spec.value || "N/A"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-gradient-to-br from-black to-slate-900 p-6 shadow-lg text-center border-b-4 border-b-gold-500 rounded-md mx-auto">
              <p className="text-white/90 text-lg mb-1">Daily Rate</p>
              <h2 className="text-4xl font-extrabold text-white">AED {car?.price || "0"}</h2>
            </div>
            <div className="bg-gradient-to-br from-black to-slate-900 p-6 shadow-lg text-center border-b-4 border-b-gold-500 rounded-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Features</h2>
              <div className="space-y-3">
                {car?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <ImCheckmark className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-3">
              <Link href="https://api.whatsapp.com/send/?phone=0097156772727" target="_blank">
                <button className="w-full text-sm md:text-base bg-gradient-to-b from-gold-300 to-gold-600 text-black font-semibold py-2 rounded-full shadow-lg border border-gold-500 flex items-center justify-center gap-2">
                  <FaTicketAlt className="text-black" /> Book Now
                </button>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=0097156772727" target="_blank">
                <button className="w-full text-sm md:text-base bg-gradient-to-b from-gray-800 to-black font-semibold py-2 rounded-full shadow-lg border border-gray-700 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-green-500 text-lg" /> WhatsApp
                </button>
              </Link>
            </div>
            {FeaturedProducts && FeaturedProducts?.length > 0 && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Featured Products</h2>
                <div className="flex flex-col overflow-x-scroll scrollbar-hide h-[450px] gap-4">
                  {FeaturedProducts.map((car) => (
                    <FleetCard car={car} key={car._id} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="font-bold text-yellow-500">Car Not Found</h1>
        </div>
      )}
    </>
  );
}
