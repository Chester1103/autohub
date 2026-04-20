import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

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
    <div className="h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="bg-neutral-900 p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 p-2 rounded bg-neutral-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-3 p-2 rounded bg-neutral-800"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-white text-black p-2 rounded"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-neutral-400">
          Already have an account?{" "}
          <Link to="/login" className="underline text-white">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
