import { useEffect, useState } from "react";
import api from "../../services/api";

interface useFetchTopTracksParams {
  id: string;
  fetch?: any;
}

function useFetchTopTracks({ id, fetch = api }: useFetchTopTracksParams) {
  const [artist, setArtist] = useState();

  useEffect(() => {
    fetch
      .get("/artists/" + id + "/top-tracks")
      .then(({ data }: { data: any }) => {

        setArtist({ artist });
      });
  }, [id]);

  return artist;
}

export default useFetchTopTracks;
