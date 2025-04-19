"use client";
import { H_Two } from "@/Utils/Typography";
// import { Car } from "@/Utils/types";
import SubHeader from "@/Components/Generals/Subheader_About";
import SideBar from "@/Components/Product/SideBar";
import FleetCard from "@/Components/Home/FleetCard";
import { useFilterStore } from "@/Store/carStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCars } from "@/Utils/fetchCars";
import { Car } from "@/Utils/types";

const LuxuriousCars = () => {
  // Get filter values from store
  const {
    year,
    types,
    brands,
    model,
    priceRange,
    seats,
    setBrands,
    setTypes,
    resetFilters,
  } = useFilterStore();

  const [cars, setCars] = useState<Car[]>();
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [loading, setLoading] = useState(false); // For API fetching scenario

  // For API fetching scenario (uncomment if needed)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchCars(); // Your API call
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cars]);

  // Apply filters whenever they change
  useEffect(() => {
    const applyFilters = () => {
      let result = cars;

      // Brand filter
      if (brands.length > 0) {
        result = result?.filter((car) => brands.includes(car.brand));
      }

      // Type filter
      if (types.length > 0) {
        result = result?.filter((car) => types.includes(car.type));
      }

      // Model filter
      if (model.length > 0) {
        result = result?.filter((car) => model.includes(car.model));
      }

      // Year filter
      if (year.length > 0) {
        result = result?.filter((car) => year.includes(car.year));
      }

      // Seats filter
      if (seats.length > 0) {
        result = result?.filter((car) => seats.includes(car.seats));
      }

      // Price range filter
      if (priceRange) {
        result = result?.filter(
          (car) => car.price >= priceRange[0] && car.price <= priceRange[1]
        );
      }

      setFilteredCars(result);
    };

    applyFilters();
  }, [brands, types, model, year, seats, priceRange]);

  const FilterSummary = () => {
    const allFilters = [...brands, ...types];

    if (allFilters.length === 0) return null;

    return (
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-gray-400 text-sm">Active filters:</span>
        {brands.map((brand) => (
          <motion.span
            key={brand}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {brand}
            <button
              onClick={() => setBrands(brands.filter((b) => b !== brand))}
              className="text-primary/70 hover:text-primary"
            >
              ×
            </button>
          </motion.span>
        ))}
        {types.map((type) => (
          <motion.span
            key={type}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-700/20 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
          >
            {type}
            <button
              onClick={() => setTypes(types.filter((t) => t !== type))}
              className="text-blue-700/70 hover:text-blue-700"
            >
              ×
            </button>
          </motion.span>
        ))}
        <button
          onClick={resetFilters}
          className="text-gray-400 text-sm hover:text-white ml-2"
        >
          Clear all
        </button>
      </div>
    );
  };

  return (
    <>
      <SubHeader />
      <div className="px-4 sm:px-8 md:px-16 max-w-7xl w-full mx-auto pb-8 md:pb-16 min-h-screen">
        <H_Two
          className="text-center text-white mb-6 uppercase my-16"
          text="Browse Our Luxurious Cars"
        />

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            {showMobileFilters ? (
              <>
                <span>Hide Filters</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Show Filters</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <div className="md:hidden mb-6">
            <SideBar />
          </div>
        )}

        {/* Active Filters */}
        <FilterSummary />

        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Product List */}
          <div className="w-full">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/50 rounded-lg h-80 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredCars && filteredCars?.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2  gap-6"
              >
                {/* {filteredCars.map((car: Car, index) => ( */}
                {filteredCars?.map((car, index) => (
                  <FleetCard car={car} key={index + car._id} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-white text-xl">No cars match your filters</p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block flex-shrink-0 sticky top-10 h-[calc(100vh-100px)]">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuriousCars;
