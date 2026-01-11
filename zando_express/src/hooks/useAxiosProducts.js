import { useState } from "react";
import axiosInstance from "../app/api/axios";

const useAxiosProducts = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetching data
  const fetchAllProducts = async () => {
    try {
      const response = await axiosInstance.get(url);
      setData(response.data.products);
      console.log(data);
    } catch (error) {
      setError("Failed to fetch Products");
    } finally {
      setLoading(false);
    }
  };

  // FEtching all products categories

  const fetchAllProductsCategories = async () => {
    try {
      const response = await axiosInstance.get(url);
      setData(
        Array.isArray(response.data) ? response.data : response.data.categories
      );
    } catch (error) {
      setError("Failed to fetch Products categories");
    } finally {
      setLoading(false);
    }
  };

  // return the state and function
  return {
    data,
    loading,
    error,
    fetchAllProducts,
    fetchAllProductsCategories,
  };
};

export default useAxiosProducts;
