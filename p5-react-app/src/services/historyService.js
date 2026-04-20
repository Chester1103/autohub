import { getItem, setItem } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

export const getHistory = () => {
  return getItem(STORAGE_KEYS.BOOKINGS) || [];
};

export const markAsCompleted = (id) => {
  const history = getHistory();

  const updated = history.map((item) =>
    item.id === id ? { ...item, status: "completed" } : item,
  );

  setItem(STORAGE_KEYS.BOOKINGS, updated);
  return updated;
};
