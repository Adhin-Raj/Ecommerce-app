import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://192.168.0.26:3000", // check this with the current ip
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
