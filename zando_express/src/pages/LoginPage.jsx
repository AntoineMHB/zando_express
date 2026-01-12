import { LoginForm } from "../components/login-form";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Image side */}
      <div className="h-full w-full">
        <img
          src="zando_logo.png"
          alt="Zando logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form side */}

      <LoginForm />
    </div>
  );
};
