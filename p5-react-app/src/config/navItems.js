import {
  LayoutDashboard,
  Car,
  Calendar,
  Wrench,
  ShoppingCart,
  History,
  Settings,
} from "lucide-react";

export const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Vehicles",
    path: "/vehicles",
    icon: Car,
  },
  {
    name: "Book Services",
    path: "/booking",
    icon: Calendar,
  },
  {
    name: "Services",
    path: "/services",
    icon: Wrench,
  },
  {
    name: "Products",
    path: "/products",
    icon: ShoppingCart,
  },
  {
    name: "Service History",
    path: "/service-history",
    icon: History,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
