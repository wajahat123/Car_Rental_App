export interface Car {
    id: number;
    name: string;
    type: string;
    fuel_capacity: string;
    transmission: string;
    seating_capacity: string;
    original_price?:string;
    price_per_day: string;
    tags: string[];
  }