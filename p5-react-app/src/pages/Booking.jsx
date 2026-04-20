import { useEffect, useState } from "react";
import { BookingForm } from "../components/booking/BookingForm";
import { getBookings, addBooking } from "../services/bookingServices";
import { getVehicles } from "../services/vehicleService";
import { Calendar } from "lucide-react";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";

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
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <h1 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-accent" /> Book Service
      </h1>

      <BookingForm
        vehicles={vehicles}
        bookings={bookings}
        onBook={handleBook}
      />

      {/* Bookings List */}
      <Section title="Your Bookings">
        {bookings.length === 0 ? (
          <p className="text-muted text-center">No bookings yet.</p>
        ) : (
          <div className="space-y-3">
            {bookings.map((b) => (
              <Card key={b.id}>
                <p className="font-display font-semibold">{b.service}</p>
                <p className="text-sm text-muted">{b.time}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};
