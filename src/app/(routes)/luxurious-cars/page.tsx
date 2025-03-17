import ProductCardTwo from '@/Components/Product/ProductCard2';
import { H_Two } from '@/Utils/Typography';
import data from '@/Utils/CarsData.json';
import { Car } from "@/Utils/utils";
import SubHeader from '@/Components/Generals/Subheader_About';
import SideBar from '@/Components/Product/SideBar';

const LuxuriousCars = () => {
  return (
    <>
      <SubHeader />
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 max-w-7xl w-full mx-auto pb-8 md:pb-16 min-h-screen ">
        
        <H_Two className="text-center text-primary mb-6 uppercase my-16" text="Browse Our Luxurious Cars" />
        
        <div className="flex items-start justify-between gap-12">
          
          {/* Product List */}<>
          <div className="flex gap-2 flex-wrap flex-grow">
            {data.map((car: Car,index) => (
              <ProductCardTwo data={car} key={index} />
            ))}
          </div>
            </>

          {/* Sticky Sidebar */}
          <div className="hidden md:block w-[300px] flex-shrink-0 h-screen sticky top-0  py-10 rounded-lg shadow-md">
            <SideBar />
          </div>

        </div>
      </div>
    </>
  );
};

export default LuxuriousCars;
