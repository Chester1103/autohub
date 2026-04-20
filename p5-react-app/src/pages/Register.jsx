import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Section from "../components/ui/Section";

export const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const res = registerUser(form);

    if (res.error) {
      alert(res.error);
      return;
    }

    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background text-foreground">
      <Section title="Create Your Account" align="center" className="w-96">
        <Card>
          <h2 className="text-xl font-display font-bold mb-6">Register</h2>

          {/* Email */}
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mb-4"
          />

          {/* Password */}
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mb-4"
          />

          {/* Submit */}
          <Button onClick={handleRegister} className="w-full mb-4">
            Register
          </Button>

          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-sm text-muted font-body">
              Already have an account?{" "}
              <Link to="/login" className="underline text-accent">
                Login
              </Link>
            </p>

            <Link to="/">
              <Button variant="ghost" className="px-4 py-1">
                Back
              </Button>
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
};
