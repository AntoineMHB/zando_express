import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function SignupForm({ className, ...props }) {
  const { signup, loading, error } = useAuth();
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signup(form);
    if (result) {
      toast.success("Registration successful! You can now log in.");
      setForm({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
      });
    }
  };

  return (
    <div className="px-6 py-6">
      <form
        onSubmit={handleSubmit}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <FieldGroup className="gap-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Fill in the form below to create your account
            </p>
          </div>
          <Field>
            <FieldLabel htmlFor="name">User Name</FieldLabel>
            <Input
              name="username"
              onChange={handleChange}
              value={form.username}
              id="userName"
              type="text"
              placeholder="AntMHBN"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="name">First Name</FieldLabel>
            <Input
              name="firstName"
              onChange={handleChange}
              value={form.firstName}
              id="firstname"
              type="text"
              placeholder="John"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="name">Last Name</FieldLabel>
            <Input
              name="lastName"
              onChange={handleChange}
              value={form.lastName}
              id="lastname"
              type="text"
              placeholder="Cyusa"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="age">Age</FieldLabel>
            <Input
              name="age"
              onChange={handleChange}
              value={form.age}
              id="age"
              type="text"
              placeholder="20"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              name="email"
              onChange={handleChange}
              value={form.email}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            <FieldDescription>
              We&apos;ll use this to contact you. We will not share your email
              with anyone else.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              name="password"
              onChange={handleChange}
              value={form.password}
              id="password"
              type="password"
              required
            />
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
          </Field>

          <Field>
            <Button type="submit">
              {loading ? "Registering..." : "Create account"}
            </Button>
          </Field>

          <Field>
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary underline">
                Sign in
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
