import ProductCard from '../Product/ProductCard'
import { Car } from '@/Utils/utils'
import data from "@/Utils/CarsData.json"
import { H_Two } from '@/Utils/Typography'

const RentalCar = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 max-w-7xl w-full mx-auto pb-8 md:pb-16">
      <H_Two className="text-center text-primary mb-6 uppercase my-16" text="Browse Our Rental Cars" />
      
      <div className="flex gap-2 flex-wrap shrink-0">
        {data.slice(0, 3).map((element: Car, index: number) => (
          <ProductCard data={element} key={index} />
        ))}
      </div>
    </div>
  )
}

export default RentalCar
