// export interface Car {
//     id: number;
//     name: string;
//     image: string;
//     type: string;
//     fuel_capacity: string;
//     transmission: string;
//     seating_capacity: string;
//     original_price?:string;
//     price_per_day: string;
//     tags: string[];
//   }
export interface Car {
  _id: string;               // MongoDB ID (string format)
  name: string;              // Car name
  price: number;             // Price per unit (number type)
  category: string;          // Category (e.g., Convertible, SUV, etc.)
  brand: string;             // Brand of the car
  image: string;             // Image path or URL
  shortDescription: string;  // Short description of the car
  __v?: number;              // Optional version key from MongoDB
}

export  interface ButtonI{
    text?: string;
      className?: string;
      href:string
    }//need to create button component as well with dynamic styles
