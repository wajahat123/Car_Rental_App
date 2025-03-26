"use client";
import { useFilterStore } from "@/Store/carStore";
import "@/Styles/Slider.css";
import { useEffect, useState } from "react";

const PriceSlider = () => {
  const {setPriceRange}= useFilterStore((state)=>state)
  // Set price range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(800);

  const priceGap = 50; // Minimum gap between min and max price
  const minLimit = 0;
  const maxLimit = 5000;
  const rangeDistance = maxLimit - minLimit;

  // Calculate slider positions correctly
  const fromPosition = ((minPrice - minLimit) / rangeDistance) * 100;
  const toPosition = ((maxLimit - maxPrice) / rangeDistance) * 100;

  const FilledBackground = {
    left: `${fromPosition}%`,
    right: `${toPosition}%`,
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice && maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice && value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice, setPriceRange]);

  return (
<>     

      <div className=" w-full mx-auto px-4">
        <div className="bg-gray-500  h-[2px] relative rounded-full">
          <div
            className="bg-gradient-to-r from-gold-700 to-gold-100 h-[2px] absolute flex gap-5 justify-between mx-auto"
            style={FilledBackground}
          ></div>

          <input
            id="minPrice"
            type="range"
            min={minLimit}
            max={maxLimit}
            step={10}
            value={minPrice}
            onChange={handleMinPrice}
            className="w-full z-10"
          />

          <input
            id="maxPrice"
            type="range"
            min={minLimit}
            max={maxLimit}
            step={10}
            value={maxPrice}
            onChange={handleMaxPrice}
            className="w-full z-0"
          />
        </div>

        {/* Display Selected Price Range */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="border-[#edc58957] text-primary bg-background w-[50%] text-xs md:text-sm px-4 py-2 text-center border-[1px] font-bold rounded-xl">
            {minPrice} AED
          </div>
          <div className="w-4 bg-[#edc58957] h-[1px]" />
          <div className="border-[#edc58957] text-primary bg-background w-[50%] text-xs md:text-sm px-4 py-2 text-center border-[1px] font-bold rounded-xl">
        {maxPrice} AED
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
