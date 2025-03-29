'use client'
import { useState } from "react";
import { H_Six } from "../../Utils/Typography";
import {  exampleCarInterface } from "@/Utils/types";

interface SearchBarProps {
  products: exampleCarInterface[];
  // products: Car[];
}

const SearchBar = ({ products }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  // const [filteredResults, setFilteredResults] = useState<Car[]>([]);
  const [filteredResults, setFilteredResults] = useState<exampleCarInterface[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.type.toLowerCase().includes(searchQuery)
    );

    setFilteredResults(results);
  };

  return (
    <div className="relative w-full  mx-auto overflow-visible">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
        className="w-full py-2 px-6 md:px-8 rounded-full bg-background bg-opacity-65  text-text  placeholder-textMuted 
                   focus:outline-none ring-1 ring-primary/30 focus:ring-primary/70 transition-all duration-200 shadow-lg"
      />

      {/* Search Results Dropdown */}
      {query && (
            <ul className="absolute left-0 right-0 top-full mt-2 bg-background  border border-[#ffbf004b] rounded-lg shadow-xl max-h-60 overflow-auto z-[1000] ">
          {filteredResults.length > 0 ? (
            filteredResults.map((product,index) => (
              <li
                key={index}
                className="p-4 flex items-center gap-4 border-b-[1px] border-b-gray-600/40 hover:bg-muted hover:bg-opacity-20 cursor-pointer transition-all duration-300 rounded-md"
              >
                {/* Product Details */}
                <div className="text-left ">
                  <H_Six text={product.name} className="text-white font-semibold text-lg" />
                  <p className="text-secondary text-sm">{product.type}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-muted">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
