import { Search } from "lucide-react";
import { Input } from "./input";
import { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductsContext";

export const SearchField = () => {
  const [query, setQuery] = useState("");
  const { searchProducts, fetchAllProducts } = useProducts();

  useEffect(() => {
    if (!query.trim()) {
      fetchAllProducts(); // reset to all products
      return;
    }

    const timeout = setTimeout(() => {
      searchProducts(query); // search updates context.products
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <Input
        className="pr-10"
        placeholder="Search anything"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={20}
      />
    </div>
  );
};
