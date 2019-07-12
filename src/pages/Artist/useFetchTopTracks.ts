import { useEffect, useState } from "react";
import api from "../../services/api";
import { serializeTracks } from "../../serializers/track";
import { TrackData } from "../../types/TrackData";

interface Params {
  id: string;
  fetch?: any;
}

const country = navigator.language.slice(-2) || "US";

const initialState: TrackData[] = [];

function useFetchTopTracks({ id, fetch = api }: Params): TrackData[] {
  const [tracks, setTracks] = useState(initialState);

  useEffect((): void => {
    fetch
      .get("/artists/" + id + "/top-tracks", {
        params: {
          country,
        },
      })
      .then(({ data }: { data: any }): void => {
        const tracks = serializeTracks(data.tracks);

        setTracks(tracks);
      });
  }, [id, fetch]);

  return tracks;
}

export default useFetchTopTracks;
