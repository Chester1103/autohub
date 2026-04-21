import { useState, useEffect } from "react";
import {
  getCurrentUser,
  logoutUser,
  updatePassword,
} from "../services/authService";
import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";

export const Settings = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleUpdatePassword = () => {
    if (!password) return;

    const res = updatePassword(password);

    if (res.error) {
      alert(res.error);
      return;
    }

    alert("Password updated successfully");
    setPassword("");
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  if (!user) {
    return <p className="text-muted">No user found.</p>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <Section title="Settings">
        {/* User Info */}
        <Card className="mb-6">
          <h2 className="font-display font-semibold mb-2">Account Info</h2>
          <p className="text-sm text-muted font-body">Email: {user.email}</p>
        </Card>

        {/* Change Password */}
        <Card className="mb-6 flex flex-col">
          <h2 className="font-display font-semibold mb-3">Change Password</h2>
          <Input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleUpdatePassword} className="w-full">
            Update Password
          </Button>
        </Card>

        {/* Logout */}
        <Card>
          <h2 className="font-display font-semibold mb-3">Account Action</h2>
          <Button variant="danger" onClick={handleLogout} className="w-full">
            Logout
          </Button>
        </Card>
      </Section>
    </div>
  );
};
