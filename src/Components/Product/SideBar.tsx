"use client";
import React, { useState } from "react";
import PriceSlider from "./PriceSlider";
import Cars from "@/Utils/CarsData.json";

const SideBar = () => {
  // Function to get unique values
  const getUniqueValues = (key: string) => [...new Set(Cars.map((car: any) => car[key]))];

  // Filter categories
  const filterOptions = [
    { key: "brand", label: "Brands" },
    { key: "type", label: "Type" },
    { key: "model", label: "Model" },
    { key: "year", label: "Year" },
    { key: "seat", label: "Seats" },
  ];

  // State for toggling sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});//object of dyanamic key which would havae the boolean value
  // State for tracking selected filters
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  // Toggle function for sections
  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle checkbox selection
  // const handleSelection = (category: string, value: string) => {
  //   setSelectedFilters((prev) => {
  //     const currentSelections = prev[category] || [];
  //     return {
  //       ...prev,
  //       [category]: currentSelections.includes(value)
  //         ? currentSelections.filter((v) => v !== value) // Remove if already selected
  //         : [...currentSelections, value], // Add if not selected
  //     };
  //   });
  // };

  return (
    <div className="w-full max-w-[260px] bg-[#08064f]/60 ring-1 ring-primary rounded-sm p-4">
      <form>
        {/* Price Slider */}
        <h2 className="text-sm font-semibold text-primary">Price</h2>
        <PriceSlider />

        {/* Looping through filters */}
        {filterOptions.map(({ key, label }) => (
          <div key={key} className="mt-4">
            <h2 className="text-sm font-semibold text-primary cursor-pointer" onClick={() => toggleSection(key)}>
              {label}
            </h2>

            {openSections[key] && (
              <div className="ml-2">
                {getUniqueValues(key).map((item, index) => (
                  <label key={index} className="block" htmlFor={item}>
                    <input
                      type="checkbox"
                      name={item}
                      id={item}
                      // checked={selectedFilters[key]?.includes(item) || false}
                      // onChange={() => handleSelection(key, item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default SideBar;
