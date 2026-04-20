import { useEffect, useState } from "react";

import { StatCard } from "../components/dashboard/StatCard";
import { RecentActivity } from "../components/dashboard/RecentActivity";
import { getVehicles } from "../services/vehicleService";
import { getBookings } from "../services/bookingServices";
import { productsData } from "../data/productsData";

import { Car, Calendar, Package, Wrench } from "lucide-react";

export const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setVehicles(getVehicles());
    setBookings(getBookings());
  }, []);

  const upcomingBookings = bookings.filter((b) => b.status !== "completed");
  const completedBookings = bookings.filter((b) => b.status === "completed");
  const featuredProducts = productsData.slice(0, 3);
  const recentBookings = bookings.slice(-5).reverse();

  return (
    <div className="space-y-8">
      {/* TITLE */}
      <h1 className="text-3xl font-display font-bold">Dashboard</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Registered Vehicles"
          value={vehicles.length}
          icon={Car}
        />
        <StatCard
          title="Upcoming Bookings"
          value={upcomingBookings.length}
          icon={Calendar}
        />
        <StatCard
          title="Services Completed"
          value={completedBookings.length}
          icon={Wrench}
        />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* VEHICLES */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="font-display font-semibold mb-4 flex items-center gap-2">
            <Car className="w-5 h-5 text-accent" /> My Vehicles
          </h2>
          {vehicles.length === 0 ? (
            <p className="text-muted">No vehicles registered.</p>
          ) : (
            vehicles.map((v) => (
              <div
                key={v.id}
                className="p-3 bg-background border border-border rounded mb-2 font-body"
              >
                {v.make} {v.model}
              </div>
            ))
          )}
        </div>

        {/* UPCOMING BOOKINGS */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="font-display font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" /> Upcoming Bookings
          </h2>
          {upcomingBookings.length === 0 ? (
            <p className="text-muted">No upcoming bookings.</p>
          ) : (
            upcomingBookings.map((b) => (
              <div
                key={b.id}
                className="p-3 bg-background border border-border rounded mb-2"
              >
                <p className="font-medium">{b.service}</p>
                <p className="text-sm text-muted">{b.time}</p>
              </div>
            ))
          )}
        </div>

        {/* HISTORY */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="font-display font-semibold mb-4">
            Recent Service History
          </h2>
          {recentBookings.length === 0 ? (
            <p className="text-muted">No history yet.</p>
          ) : (
            recentBookings.map((b) => (
              <div
                key={b.id}
                className="p-3 bg-background border border-border rounded mb-2"
              >
                {b.service}
              </div>
            ))
          )}
        </div>

        {/* PRODUCTS */}
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h2 className="font-display font-semibold mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-accent" /> Featured Products
          </h2>
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              className="p-3 bg-background border border-border rounded mb-2"
            >
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-muted">{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <RecentActivity bookings={bookings} />
    </div>
  );
};
