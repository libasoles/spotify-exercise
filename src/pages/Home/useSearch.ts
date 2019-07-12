import { useEffect, useState } from "react";

import api from "../../services/api";
import { ArtistData } from "../../types/ArtistData";
import { serializeArtists } from "../../serializers/artists";
import useDebounce from "../../services/useDebounce";
import { serializeTracks } from "../../serializers/track";
import { TrackData } from "../../types/TrackData";

interface initialStateShape {
  artists: ArtistData[];
  tracks: TrackData[];
}

const initialState: initialStateShape = {
  artists: [],
  tracks: [],
};

interface useSearchParams {
  fetch?: any;
  serializeArtistsData?: (items: []) => ArtistData[];
}

function useSearch({ fetch = api }: useSearchParams) {
  const [term, search] = useState("");
  const [results, setResults] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const debouncedTerm = useDebounce(term, 500);

  const searchTerm = (term: string) => {
    setLoading(true);
    search(term);
  };

  useEffect(() => {
    if (!debouncedTerm) {
      setResults(initialState);
      setLoading(false);
      return;
    }

    fetch
      .get("/search", {
        params: {
          q: debouncedTerm,
          type: "artist,track",
        },
      })
      .then(({ data }: { data: any }) => {
        const artists = serializeArtists(data.artists.items);
        const tracks = serializeTracks(data.tracks.items, true);

        setResults({ artists, tracks });
        setLoading(false);
      });
  }, [debouncedTerm, fetch, setLoading]);

  return { loading, results, searchTerm };
}

export default useSearch;
