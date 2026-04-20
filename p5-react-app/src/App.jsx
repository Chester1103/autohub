import { Routes, Route } from "react-router-dom";

import { Discovery } from "./pages/Discovery";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Discovery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
