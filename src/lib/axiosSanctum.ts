import axios from "axios";

const sanctumApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SANCTUM_BASE_URL,
  withCredentials: true,
});

export default sanctumApi;
