import { Link } from "react-router-dom";

export const Discovery = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
        <h1 className="text-xl font-bold">🚗 Auto Hub</h1>

        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 border rounded-lg">
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-white text-black rounded-lg"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Vehicle Services Easily
        </h2>

        <p className="text-neutral-400 mb-6 max-w-xl">
          Book services, track history, and manage your vehicles in one place.
        </p>

        <Link
          to="/register"
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
};
