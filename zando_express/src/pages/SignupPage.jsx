import { SignupForm } from "../components/ui/signup-form";

export const SignupPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Image side */}
      <div className="h-full w-full">
        <img
          src="/src/assets/images/zando_logo.png"
          alt="Zando logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form side */}

      <SignupForm />
    </div>
  );
};
