import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import config from "../config/index";

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Cache-Control": "no-cache",
    Accept: "application/json",
  },
});

function setToken(token: string, client: ApiInstance = api): void {
  client.interceptors.request.use(function(config: ApiConfig): ApiConfig {
    config.headers.Authorization = token ? `Bearer ${token}` : "";

    return config;
  });
}

export type ApiConfig = AxiosRequestConfig;
export type ApiResponse = AxiosResponse;
export type ApiInstance = AxiosInstance;

export default api;
export { setToken };
