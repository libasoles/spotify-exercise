import axios from "axios";

import config from "../config/index";

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Cache-Control": "no-cache",
    Accept: "application/json",
  },
});

function setToken(token: string, client: any = api): void {
  client.interceptors.request.use(function(config: any) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";

    return config;
  });
}

export default api;
export { setToken };
