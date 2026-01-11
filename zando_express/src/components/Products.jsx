import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";

const ITEMS_PER_ROW = 4;
const INITIAL_ROWS = 1;
const INITIAL_ITEMS = ITEMS_PER_ROW * INITIAL_ROWS;

export const Products = () => {
  const { products, loading, error } = useProducts();
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll
    ? products
    : products.slice(0, INITIAL_ITEMS);
  const hasMore = products.length > INITIAL_ITEMS;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            images={product.images}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
      {hasMore && !showAll && (
        <div className="flex items-center justify-center my-5">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-amber-600"
            onClick={() => setShowAll(true)}
          >
            View More
          </Button>
        </div>
      )}

      {showAll && (
        <div className="flex items-center justify-center my-5">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-amber-600"
            onClick={() => setShowAll(false)}
          >
            View Less
          </Button>
        </div>
      )}
    </div>
  );
};
