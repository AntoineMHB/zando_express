import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { Dashboard } from "../pages/Dashboard";
import { NavigationMenu } from "../components/ui/navigation-menu";
import Cart from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};
