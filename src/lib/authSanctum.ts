import api from "./axiosCall";
import sanctumApi from "./axiosSanctum";

export const getCsrfToken = async () => {
  await sanctumApi.get("/sanctum/csrf-cookie");
};

export const login = (credentials: any) => {
  getCsrfToken();
  return api.post("/login", credentials);
};

export const logout = () => {
  return api.post("/logout");
};

export const fetchProfile = () => {
  return api.get("/profile");
};
