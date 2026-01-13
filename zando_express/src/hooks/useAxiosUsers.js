import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const useAxiosUsers = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // registerUser should be returned from the hook
  const registerUser = async (newUser) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.post(url, newUser);

      // Add new user to local state
      setData((prev) => [...prev, response.data]);

      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create user");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // FAKE  LOGIN
  // const loginUser = async (credentials) => {
  //   const saved = JSON.parse(localStorage.getItem("user"));

  //   if (
  //     saved &&
  //     saved.username === credentials.username &&
  //     saved.password === credentials.password
  //   ) {
  //     return { user: saved };
  //   }

  //   throw new Error("Invalid credentials");
  // };

  // Fetching data
  const fetchAllProducts = async () => {
    try {
      const response = await axiosInstance.get(url);
      setData(response.data);
      console.log(data);
    } catch (error) {
      setError("Failed to fetch Products");
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const loginUser = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.post("/auth/login", credentials);
      console.log("Login response:", response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // return the state and function
  return {
    data,
    loading,
    error,
    registerUser,
    loginUser,
    fetchAllProducts,
  };
};

export default useAxiosUsers;
