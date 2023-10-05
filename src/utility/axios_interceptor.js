import axios from "axios";
import { BASE_URL } from "./base_url";

let headers = {};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
});

//  while  request for customer

axiosInstance.interceptors.request.use(
  async (config) => {
    const loggedInUserDetails = window.localStorage.getItem("token");
    if (loggedInUserDetails) {
      const { token } = loggedInUserDetails;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
    // Do the logic for if token is expired
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
