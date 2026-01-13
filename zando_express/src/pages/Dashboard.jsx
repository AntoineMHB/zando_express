import { useState } from "react";
import { Products } from "../components/Products";
import { Button } from "../components/ui/button";
import { SortDropdown } from "../components/SortDropdown";
import { TopNavBar } from "../components/TopNavBar";

import { ProductsCategories } from "../pages/ProductsCategories";

export const Dashboard = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <div>
      <div>
        <TopNavBar />
      </div>

      <p className="flex items-center justify-center text-2xl font-bold">
        All Products
      </p>

      <div className="py-5 flex items-center justify-center text-lg font-semibold gap-4">
        Sort products by: <SortDropdown />
      </div>

      {/* Global Show All Button */}
      <div className="flex items-center justify-center my-4">
        <Button
          className="bg-black text-white font-semibold py-2 px-6 rounded-lg"
          onClick={() => setShowAllProducts(true)}
        >
          Show All Products
        </Button>
      </div>

      <div className="flex gap-2">
        <ProductsCategories />
        <Products
          showAllProp={showAllProducts}
          onShowAllChange={setShowAllProducts}
        />
      </div>
    </div>
  );
};
