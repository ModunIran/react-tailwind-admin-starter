import {
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN,
  LOCAL_STORAGE_KEY_USER,
} from "../constants/common";
import { User } from "../types/sharedTypes";

export const saveUser = (userObj: User) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(userObj));
};

export const getUser = (): User | undefined => {
  const userJson = localStorage.getItem(LOCAL_STORAGE_KEY_USER);
  if (userJson) {
    return JSON.parse(userJson) as User;
  }
  return undefined;
};

export const saveToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, token);
};

export const getToken = (): string | undefined => {
  return localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN) || undefined;
};

export const saveRefreshToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, token);
};

export const getRefreshToken = (): string | undefined => {
  return localStorage.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN) || undefined;
};

export const clear = () => {
  localStorage.clear();
};
