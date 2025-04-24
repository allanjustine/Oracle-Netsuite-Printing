import axios from "axios";
import { getCsrfToken } from "./authSanctum";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (
    ["post", "put", "patch", "delete"].includes(
      config.method?.toLowerCase() ?? ""
    )
  ) {
    await getCsrfToken();
  }
  return config;
});

export default api;
