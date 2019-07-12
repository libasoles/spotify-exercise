// As (this is a demo and) we are calling the API client side, we need a proxy (because of CORS issue)
const proxy = "https://cors-anywhere.herokuapp.com";

export default {
  baseURL: `${proxy}/api.spotify.com/v1`,
  accessToken: "...",
  mimImageSize: 100,
  maxImageSize: 500,
};
