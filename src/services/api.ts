import axios from "axios";

import config from "../config";

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Cache-Control": "no-cache",
    Accept: "application/json",
    Authorization:
      "Bearer BQA_rut9muyttreTgEe6tyqc03l-BYe8x4-4r7CxUkdPszZdWUjenGQ17qWfyd-EoqjRqbU6oGEbZVljHLA",
  },
});

export default api;
