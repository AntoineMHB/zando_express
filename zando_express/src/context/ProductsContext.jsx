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

  // We fetch once when the app loads
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        fetchAllProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts mus be used within ProductsProvider");
  }
  return context;
};
