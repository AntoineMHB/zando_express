import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginForm } from "@/components/login-form";
import { LoginPage } from "./pages/LoginPage";
import { SignupForm } from "./components/ui/signup-form";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      <SignupPage />
    </>
  );
}

export default App;
