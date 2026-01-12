import { createContext, useContext, useEffect } from "react";
import useAxiosProducts from "../hooks/useAxiosProducts";

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const {
    data: products,
    loading,
    error,
    fetchAllProducts,
  } = useAxiosProducts("/products");

  const { data: productsCategories, fetchAllProductsCategories } =
    useAxiosProducts("/products/categories");

  // We fetch once when the app loads
  useEffect(() => {
    fetchAllProducts();
    fetchAllProductsCategories();
    fetchAllProductsCategories();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        productsCategories,
        fetchAllProducts,
        fetchAllProductsCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductsProvider");
  }
  return context;
};
