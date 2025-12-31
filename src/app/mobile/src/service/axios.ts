import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://192.168.0.34:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});
