// as (this is a demo and) we are calling the API client side, we need a proxy
const proxy = "https://cors-anywhere.herokuapp.com";

export default {
  baseURL: `${proxy}/api.spotify.com/v1`,
  accessToken:
    "BQANfdNYcjsNiDEA1sbrX4c--q6sWkend6qEKD4aMmBFquueP3vOld7opiNpb8EsFxoGdnJ_uDwTrNfPslY",
  mimImageSize: 200,
  maxImageSize: 500,
};
