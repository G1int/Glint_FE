import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_SERVER_URL,
});

//NOTE: inpterceptor 코드 현재 불필요하여 주석처리
// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = sessionStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers = config.headers || {};
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const ax = instance;
