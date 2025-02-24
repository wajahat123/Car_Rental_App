import brands from "@/Utils/BrandsData.json";
import Image from "next/image";
const BrandsSlider = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {/* {brands.map((brand, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={brand.brandLogoImage}
            alt={brand.brandname}
            width={100} // Set proper width
            height={100} // Set proper height
          />
          <h3 className="mt-2 text-center">{brand.brandname}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default BrandsSlider;
