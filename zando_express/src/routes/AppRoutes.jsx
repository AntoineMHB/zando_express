import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { Dashboard } from "../pages/Dashboard";
import { NavigationMenu } from "../components/ui/navigation-menu";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
