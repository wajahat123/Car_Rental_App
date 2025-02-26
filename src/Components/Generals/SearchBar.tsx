import { useState } from "react";
import { H_Six } from "../../Utils/Typography";
import { Car } from "@/Utils/utils";

interface SearchBarProps {
  products: Car[];
}

const SearchBar = ({ products }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<Car[]>([]);

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
    <div className="relative w-full max-w-lg mx-auto overflow-visible">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search."
        value={query}
        onChange={handleSearch}
        className="w-full p-3 rounded-full bg-black text-text-primary placeholder-text-muted 
                   focus:outline-none ring-1 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg"
      />

      {/* Search Results Dropdown */}
      {query && (
        <ul className="absolute left-0 right-0 top-full mt-2 bg-[#000000e8]  border border-primary rounded-lg shadow-xl max-h-60 overflow-auto z-50 ">
          {filteredResults.length > 0 ? (
            filteredResults.map((product) => (
              <li
                key={product.id}
                className="p-4 flex items-center gap-4 border-b-[1px] border-b-accent-hover hover:bg-accent-hover cursor-pointer transition-all duration-300 rounded-md"
              >
                {/* Product Details */}
                <div className="text-left ">
                  <H_Six text={product.name} className="text-primary font-semibold text-lg" />
                  <p className="text-text-secondary text-sm">{product.type}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-text-muted">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
