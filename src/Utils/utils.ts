export interface Car {
    id: number;
    name: string;
    image: string;
    type: string;
    fuel_capacity: string;
    transmission: string;
    seating_capacity: string;
    original_price?:string;
    price_per_day: string;
    tags: string[];
  }
export  interface ButtonI{
    text?: string;
      className?: string;
      href:string
    }