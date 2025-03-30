"use client";
import React, { useState } from "react";
import PriceSlider from "./PriceSlider";
import Cars from "@/Utils/CarsData.json";
import { motion } from "framer-motion";
import { useFilterStore } from "@/Store/carStore"; // Import Zustand store
import { exampleCarInterface } from "@/Utils/types";

const SideBar = () => {
  const {
    brands,
    types,
    seats,
    model,
    year,
    setBrands,
    setTypes,
    setSeats,
    setModel,
    setYear,
    resetFilters, // Add reset function
  } = useFilterStore();

  // Function to get unique values from Cars data
  const getUniqueValues = <T extends keyof exampleCarInterface>(key: string) => {
    return [...new Set(Cars.map((car: exampleCarInterface) => car[key as T]))];
  };
  // Filter categories
  const filterOptions = [
    { key: "brand", label: "Brands", state: brands, setter: setBrands },
    { key: "type", label: "Type", state: types, setter: setTypes },
    { key: "model", label: "Model", state: model, setter: setModel },
    { key: "year", label: "Year", state: year, setter: setYear },
    { key: "seat", label: "Seats", state: seats, setter: setSeats },
  ];

  // Toggle function for filter sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle checkbox changes
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  const handleCheckboxChange = (value: string | number, state: (string | number)[], setter: Function) => {
    setter(state.includes(value) ? state.filter((item) => item !== value) : [...state, value]);
  };

  return (
    <div className="max-h-[500px] overflow-y-scroll w-[270px] bg-gradient-to-br from-black to-blue-400/30 text-white ring-1 ring-primary rounded-lg p-5 shadow-lg px-4">
      <form className="space-y-5">
        {/* Price Slider */}
        <div>
          <h2 className="text-base font-semibold text-primary">Price</h2>
          <div className="mt-2">
            <PriceSlider />
          </div>
        </div>

        {/* Looping through filters */}
        {filterOptions.map(({ key, label, state, setter }) => (
          <div key={key} className="border-b border-gray-700 pb-3">
            <h2
              className="text-sm font-semibold text-gray-300 cursor-pointer flex items-center justify-between hover:text-primary transition duration-300"
              onClick={() => toggleSection(key)}
            >
              {label}
              <span className={`transition-transform ${openSections[key] ? "rotate-180" : "rotate-0"}`}>▼</span>
            </h2>

            {openSections[key] && (
              <div className="ml-3 mt-2 space-y-2">
                {getUniqueValues(key).map((item, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white transition duration-300"
                    htmlFor={`${key}-${item}`}
                  >
                    <input
                      type="checkbox"
                      id={`${key}-${item}`}
                      checked={state.includes(item as string & number)}
                      onChange={() => handleCheckboxChange(item as string | number, state, setter)}
                      className="form-checkbox h-4 w-4 text-primary bg-gray-900 border-gray-700 rounded-md focus:ring-primary"
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Buttons */}
       

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full text-sm md:text-base text-white font-semibold py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-red-500"
            type="button"
            onClick={resetFilters}
          >
            Reset
          </motion.button>
      </form>
    </div>
  );
};

export default SideBar;
