// fake login
import { setToken } from "./api";
import config from "../config/index";

export default function login(): void {
  setToken(config.accessToken);
}
