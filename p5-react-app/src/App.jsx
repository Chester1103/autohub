import { Routes, Route } from "react-router-dom";

import { Discovery } from "./pages/Discovery";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Vehicles } from "./pages/Vehicles";
import { BookServices } from "./pages/BookServices";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { ServiceHistory } from "./pages/ServiceHistory";
import { Settings } from "./pages/Settings";

import { AppLayout } from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<Discovery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App layout (protected UI shell, no guard) */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/book-services" element={<BookServices />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
