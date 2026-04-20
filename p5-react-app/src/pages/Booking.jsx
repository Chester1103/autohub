import { useEffect, useState } from "react";
import { BookingForm } from "../components/booking/BookingForm";
import { getBookings, addBooking } from "../services/bookingServices";

import { getVehicles } from "../services/vehicleService";

export const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
    setVehicles(getVehicles());
  }, []);

  const handleBook = (data) => {
    const updated = addBooking(data);
    setBookings(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Book Service</h1>

      <BookingForm
        vehicles={vehicles}
        bookings={bookings}
        onBook={handleBook}
      />

      {/* Bookings List */}
      <div className="space-y-3">
        {bookings.length === 0 ? (
          <p className="text-neutral-400">No bookings yet.</p>
        ) : (
          bookings.map((b) => (
            <div
              key={b.id}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded"
            >
              <p className="font-semibold">{b.service}</p>
              <p className="text-sm text-neutral-400">{b.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
