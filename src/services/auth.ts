// fake login
import { setToken } from "./api";
import config from "../config";

export default function login() {
  setToken(config.accessToken);
}
