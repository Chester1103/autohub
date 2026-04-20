import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();

    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
};
