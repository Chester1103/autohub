import { NavLink } from "react-router-dom";

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

export default NavItem;
