import { useState } from "react";
import { H_Six } from "../../Utils/Typography";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface SearchBarProps {
  products: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);

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
        product.description.toLowerCase().includes(searchQuery)
    );

    setFilteredResults(results);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full p-3 rounded-full bg-surface text-text-primary placeholder-text-muted 
                   focus:outline-none ring-2 ring-primary focus:ring-royal-blue transition-all duration-200 shadow-lg"
      />

      {/* Search Results Dropdown */}
      {query && (
        <ul className="absolute left-0 right-0 mt-2 bg-surface border border-primary rounded-lg shadow-xl max-h-60 overflow-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((product) => (
              <li
                key={product.id}
                className="p-4 flex items-center gap-4 hover:bg-accent-hover cursor-pointer transition-all duration-300 rounded-md"
              >
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-lg shadow-md"
                />

                {/* Product Details */}
                <div className="text-left">
                  <H_Six text={product.name} className="text-royal-blue font-semibold text-lg" />
                  <p className="text-text-secondary text-sm">{product.description}</p>
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
