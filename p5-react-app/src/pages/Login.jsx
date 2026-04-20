import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="bg-neutral-900 p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-neutral-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-neutral-800"
        />

        <button className="w-full bg-white text-black p-2 rounded">
          Login
        </button>

        <p className="text-sm mt-3 text-neutral-400">
          No account?{" "}
          <Link to="/register" className="underline text-white">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
