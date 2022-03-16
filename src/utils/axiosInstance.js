import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://121.147.185.4:7501",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
