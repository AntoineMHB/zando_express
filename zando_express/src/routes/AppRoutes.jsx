import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
