import { getItem, setItem, removeItem } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";

export const registerUser = (user) => {
  const users = getItem(STORAGE_KEYS.USERS) || [];

  const exists = users.find((u) => u.email === user.email);

  if (exists) {
    return { error: "User already exists" };
  }

  const newUser = {
    id: Date.now(),
    ...user,
  };

  setItem(STORAGE_KEYS.USERS, [...users, newUser]);

  return newUser;
};

export const loginUser = (email, password) => {
  const users = getItem(STORAGE_KEYS.USERS) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { error: "Invalid credentials" };
  }

  setItem(STORAGE_KEYS.CURRENT_USER, user);

  return user;
};

export const logoutUser = () => {
  removeItem(STORAGE_KEYS.CURRENT_USER);
};

export const getCurrentUser = () => {
  return getItem(STORAGE_KEYS.CURRENT_USER);
};
