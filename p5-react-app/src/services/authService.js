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

export const updatePassword = (newPassword) => {
  const currentUser = getItem(STORAGE_KEYS.CURRENT_USER);
  const users = getItem(STORAGE_KEYS.USERS) || [];

  if (!currentUser) return { error: "No user logged in" };

  const updatedUsers = users.map((u) =>
    u.id === currentUser.id ? { ...u, password: newPassword } : u,
  );

  const updatedUser = {
    ...currentUser,
    password: newPassword,
  };

  setItem(STORAGE_KEYS.USERS, updatedUsers);
  setItem(STORAGE_KEYS.CURRENT_USER, updatedUser);

  return updatedUser;
};
