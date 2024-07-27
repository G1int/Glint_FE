import axios, { AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_SERVER_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    if (refreshToken) {
      config.headers = config.headers || {};
      config.headers["Refreshtoken"] = `Bearer ${refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const authHeader = response.headers["authorization"];
    if (authHeader) {
      const accessToken = authHeader.replace(/^Bearer\s+/i, "");
      sessionStorage.setItem("accessToken", accessToken);
    }
    const refreshHeader = response.headers["refreshtoken"];
    if (refreshHeader) {
      const refreshToken = refreshHeader.replace(/^Bearer\s+/i, "");
      sessionStorage.setItem("refreshToken", refreshToken);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const ax = instance;
