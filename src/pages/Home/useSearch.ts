import { useEffect, useState } from "react";

import api from "../../services/api";
import { ArtistData } from "../../types/ArtistData";
import { serializeArtists } from "../../serializers/artists";
import useDebounce from "../../services/useDebounce";
import { serializeTracks } from "../../serializers/track";
import { TrackData } from "../../types/TrackData";

interface InitialStateShape {
  artists: ArtistData[];
  tracks: TrackData[];
}

const initialState: InitialStateShape = {
  artists: [],
  tracks: [],
};

interface Params {
  fetch?: any;
  serializeArtistsData?: (items: []) => ArtistData[];
}

interface Response {
  loading: boolean;
  results: {
    artists: ArtistData[];
    tracks: TrackData[];
  };
  searchTerm: (term: string) => void;
}

function useSearch({ fetch = api }: Params): Response {
  const [term, search] = useState("");
  const [results, setResults] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const debouncedTerm = useDebounce(term, 500);

  const searchTerm = (term: string): void => {
    setLoading(true);
    search(term);
  };

  useEffect((): void => {
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
      .then(({ data }: { data: any }): void => {
        const artists = serializeArtists(data.artists.items);
        const tracks = serializeTracks(data.tracks.items, true);

        setResults({ artists, tracks });
        setLoading(false);
      });
  }, [debouncedTerm, fetch, setLoading]);

  return { loading, results, searchTerm };
}

export default useSearch;
