import { useState } from "react";
import axiosInstance from "../api/axios";

const useAxiosProducts = () => {
  const [data, setData] = useState([]); // current products (or search results)
  const [categories, setCategories] = useState([]); // product categories
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchAllProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/products");
      setData(response.data.products || []);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all product categories
  const fetchAllProductsCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/products/categories");
      setCategories(response.data || []);
    } catch (err) {
      setError("Failed to fetch product categories");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products by category
  const fetchProductsByCategory = async (category) => {
    if (!category) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/products/category/${category}`
      );
      setData(response.data.products || []);
    } catch (err) {
      setError("Failed to fetch products for this category");
    } finally {
      setLoading(false);
    }
  };

  // Search products
  const searchProducts = async (query) => {
    if (!query || !query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/products/search?q=${query}`);
      setData(response.data.products || []);
    } catch (err) {
      setError("Failed to search products");
    } finally {
      setLoading(false);
    }
  };

  // sorting products
  const sortProducts = async (sortBy, order = "asc") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get(
        `/products?sortBy=${sortBy}&order=${order}`
      );
      setData(response.data.products || []);
    } catch (err) {
      setError("Failed to sort products");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    categories,
    loading,
    error,
    fetchAllProducts,
    fetchAllProductsCategories,
    fetchProductsByCategory,
    searchProducts,
    sortProducts,
  };
};

export default useAxiosProducts;
