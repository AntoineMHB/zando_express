import { createContext, useContext, useEffect } from "react";
import useAxiosProducts from "../hooks/useAxiosProducts";

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const {
    data: products,
    categories: productsCategories, // <-- categories from the hook
    loading,
    error,
    fetchAllProducts,
    fetchAllProductsCategories,
    fetchProductsByCategory,
    searchProducts,
  } = useAxiosProducts(); // no URL needed now

  // Fetch once on app load
  useEffect(() => {
    fetchAllProducts();
    fetchAllProductsCategories();
    fetchProductsByCategory();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsCategories, // <-- this fixes the "not defined" error
        loading,
        error,
        fetchAllProducts,
        fetchAllProductsCategories,
        fetchProductsByCategory,
        searchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be used within ProductsProvider");
  return context;
};
