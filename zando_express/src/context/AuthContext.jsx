import { createContext, useContext, useEffect, useState } from "react";
import useAxiosUsers from "../hooks/useAxiosUsers";
import useAxios from "../hooks/useAxiosUsers";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {
    registerUser: axiosRegisterUser,
    loading,
    error,
  } = useAxiosUsers("/users/add");

  const { loginUser: axiosLoginUser } = useAxiosUsers("/user/add");
  const { fetchAllProducts: axiosFetchAllProducts } =
    useAxiosUsers("/products");

  // Load user from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // SIGN UP using the Axios hook
  const signup = async (formData) => {
    const result = await axiosRegisterUser(formData);
    if (result) {
      setUser(result); // store user in context
      localStorage.setItem("user", JSON.stringify(result));
    }
    return result;
  };

  // LOGIN
  const login = async (credentials) => {
    const user = await axiosLoginUser(credentials);
    if (user) {
      setUser(user);
      localStorage.setItem("loggeInUser", JSON.stringify(user));
    }
    return user;
  };

  // Fecthing all the products

  return (
    <AuthContext.Provider value={{ user, signup, login, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
