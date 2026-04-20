import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const res = loginUser(form.email, form.password);

    if (res.error) {
      alert(res.error);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <Card className="w-full max-w-md">
        {/* Back Button */}
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost" className="px-4 py-2">
            ← Back
          </Button>
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-display font-bold mb-6 text-center">
          Login to Auto Hub
        </h2>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <Button
            variant="primary"
            className="w-full px-6 py-3 text-lg"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>

        {/* Register Link */}
        <p className="text-sm mt-6 text-muted text-center">
          No account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};
