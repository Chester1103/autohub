import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { navItems } from "../config/navItems";
import { Car } from "lucide-react"; // Auto Hub brand icon

// Reusable NavItem component
const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition font-body ${
          isActive
            ? "bg-[var(--color-accent)] text-white"
            : "hover:bg-[var(--color-background)] hover:text-[var(--color-accent)]"
        }`
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  );
};

export const AppLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="h-screen flex bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--color-card)] border-r border-[var(--color-border)] flex flex-col">
        {/* Brand */}
        <div className="p-5 border-b border-[var(--color-border)] flex items-center gap-2">
          <Car className="w-6 h-6 text-[var(--color-accent)]" />
          <h1 className="text-xl font-display font-bold">Auto Hub</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              to={item.path}
              icon={item.icon}
              label={item.name}
            />
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[var(--color-border)]">
          <button
            onClick={handleLogout}
            className="w-full bg-[var(--color-error)] hover:bg-[#b91c1c] text-white py-2 rounded-lg font-body font-medium transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-[var(--color-background)]">
        <Outlet />
      </main>
    </div>
  );
};
