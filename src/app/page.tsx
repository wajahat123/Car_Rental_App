import BrandsSlider from "@/Components/Home/BrandsSlider";
import Hero from "@/Components/Home/Hero";
import ProductCard from "@/Components/Product/ProductCard";
import Image from "next/image";
import data from "@/Utils/CarsData.json"
import {Car} from "@/Utils/utils"
export default async function Home() {
  
  return (
 <div className="">
<Hero/>
<BrandsSlider/>
<h1>Our Products</h1>
<div className="flex gap-2 flex-wrap shrink-0 lg:px-32">
{data.map((element:Car, index:number) => (
<ProductCard data={element} key={index}/>
))}
</div>
 </div>
  );
}
