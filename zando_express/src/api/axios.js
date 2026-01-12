import axios from "axios";

// create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export default axiosInstance;

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    // Runs BEFORE request is sent
    console.log("Request sent:", config);

    // Example: attach token (if exists)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // MUST return config
  },
  (error) => {
    // Runs if request error happens
    return Promise.reject(error);
  }
);
