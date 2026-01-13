import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import { ProductCard } from "../components/ProductCard";
import { Button } from "./ui/button";
import { useAuth } from "../context/AuthContext";

// Add these constants
const ITEMS_PER_ROW = 4;
const INITIAL_ROWS = 1;
const INITIAL_ITEMS = ITEMS_PER_ROW * INITIAL_ROWS;

export const Products = ({ showAllProp, onShowAllChange }) => {
  const { products, loading, error } = useProducts();
  const { loggedInUser } = useAuth();
  const [showAll, setShowAll] = useState(false);
  console.log("Logged in user in Products component:", loggedInUser);
  // Use the prop if passed
  const isShowingAll = showAllProp !== undefined ? showAllProp : showAll;

  const displayedProducts =
    isShowingAll || products.length <= INITIAL_ITEMS
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
            id={product.id}
            title={product.title}
            images={product.images}
            description={product.description}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>

      {/* View More / View Less button */}
      {hasMore && !isShowingAll && (
        <div className="flex items-center justify-center my-5">
          <Button
            className="bg-black hover:bg-gray-950 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-amber-600"
            onClick={() =>
              onShowAllChange ? onShowAllChange(true) : setShowAll(true)
            }
          >
            View More
          </Button>
        </div>
      )}

      {isShowingAll && hasMore && (
        <div className="flex items-center justify-center my-5">
          <Button
            className="bg-black hover:bg-gray-950 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-amber-600"
            onClick={() =>
              onShowAllChange ? onShowAllChange(false) : setShowAll(false)
            }
          >
            View Less
          </Button>
        </div>
      )}
    </div>
  );
};
