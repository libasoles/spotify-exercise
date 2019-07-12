import { useEffect, useState } from "react";
import api from "../../services/api";
import {serializeTracks} from "../../serializers/track";
import {TrackData} from "../../types/TrackData";

interface useFetchTopTracksParams {
  id: string;
  fetch?: any;
}

const country = navigator.language.slice(-2) || "US";

const initialState: TrackData[] = [];

function useFetchTopTracks({ id, fetch = api }: useFetchTopTracksParams) {
  const [tracks, setTracks] = useState(initialState);

  useEffect(() => {
    fetch
      .get("/artists/" + id + "/top-tracks", {
        params: {
          country,
        },
      })
      .then(({ data }: { data: any }) => {
        setTracks(serializeTracks(data.tracks));
      });
  }, [id, fetch]);

  return tracks;
}

export default useFetchTopTracks;
