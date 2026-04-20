import { getItem, setItem } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

export const getVehicles = () => {
  return getItem(STORAGE_KEYS.VEHICLES) || [];
};

export const addVehicle = (vehicle) => {
  const vehicles = getVehicles();

  const newVehicle = {
    id: Date.now(),
    ...vehicle,
  };

  const updated = [...vehicles, newVehicle];
  setItem(STORAGE_KEYS.VEHICLES, updated);

  return updated;
};

export const deleteVehicle = (id) => {
  const vehicles = getVehicles();
  const updated = vehicles.filter((v) => v.id !== id);

  setItem(STORAGE_KEYS.VEHICLES, updated);

  return updated;
};
