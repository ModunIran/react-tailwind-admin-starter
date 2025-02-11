import { clear, getToken } from "@/lib/localStorageUtils";
import axios, { AxiosError } from "axios";
const baseURL = import.meta.env.VITE_BASE_API_URL as string;
const api = axios.create({
  baseURL: baseURL || "",
});

// let lastUrl = "";
api.interceptors.request.use(
  // request successful
  function (config) {
    // set the last url in the event of a response error
    // lastUrl = config.url;
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["platform"] = "web";
    config.headers["Accept"] = "application/json";
    return config;
  }, // request error
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  // response successful
  function (response) {
    return response;
  },

  // response error so publish the error for subscribers to consume
  function (error: AxiosError) {
    console.log("api error", error);

    // let showError = true;
    if (
      error.status === 401 ||
      error.response?.status === 401 ||
      error.response?.statusText === "Unauthorized"
    ) {
      clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
