// "use client";
// // import { fetchSingleCar } from "@/Utils/fetchCars";
// import React, { useEffect, useState } from "react";
//  import CarsData from "@/Utils/CarsData.json"
// // Define the expected Car type
// interface Car {
//   id: number;
//   brand: string;
//   model: string;
//   name: string;
//   price: number;
//   year: number;
//   description: string;
// }

// // Define Props Type
// interface FleetDetailProps {
//   params: {
//     id: number | string;
//   };
// }

// const FleetDetail: React.FC<FleetDetailProps> = ({ params }) => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [car, setCar] = useState<Car | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // const fetchedCar: Car | null = await fetchSingleCar(params.id); // Fetch car by ID
//         const fetchedCar= CarsData[8]// Fetch car by ID
//         setCar(fetchedCar);
//       } catch (error) {
//         console.error("Error fetching car:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [params.id]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : car ? (
//         <div>
//           <h2>{car?.name}</h2>
//           <p>{car?.description}</p>
//           <p>Brand: {car?.brand}</p>
//           <p>Model: {car?.model}</p>
//           <p>Price: ${car?.price}</p>
//           <p>Year: {car?.year}</p>
//         </div>
//       ) : (
//         <p>No car found.</p>
//       )}
//     </div>
//   );
// };

// export default FleetDetail;
import React from 'react'

const FleetCard = () => {
  return (
    <div>FleetCard</div>
  )
}

export default FleetCard