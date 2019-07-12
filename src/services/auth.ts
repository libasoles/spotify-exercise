// fake login
import { setToken } from "./api";
import config from "../config/index";

export default function login() {
  setToken(config.accessToken);
}
