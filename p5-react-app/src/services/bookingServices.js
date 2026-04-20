import { getItem, setItem } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

export const getBookings = () => {
  return getItem(STORAGE_KEYS.BOOKINGS) || [];
};

export const addBooking = (booking) => {
  const bookings = getBookings();

  const newBooking = {
    id: Date.now(),
    status: "pending",
    ...booking,
  };

  const updated = [...bookings, newBooking];
  setItem(STORAGE_KEYS.BOOKINGS, updated);

  return updated;
};

export const deleteBooking = (id) => {
  const bookings = getBookings();
  const updated = bookings.filter((b) => b.id !== id);

  setItem(STORAGE_KEYS.BOOKINGS, updated);

  return updated;
};
