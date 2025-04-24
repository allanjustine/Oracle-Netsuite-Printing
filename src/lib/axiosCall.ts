import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (
    ["post", "put", "patch", "delete"].includes(
      config.method?.toLowerCase() ?? ""
    )
  ) {
    const token = getCookie("XSRF-TOKEN");
    if (token) {
      config.headers["X-XSRF-TOKEN"] = token;
    }
  }
  return config;
});

function getCookie(name: string) {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
}

export default api;
