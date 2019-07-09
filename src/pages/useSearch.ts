import { useEffect, useState } from "react";

import api from "../services/api";
import { ArtistData } from "../types/ArtistData";
import { serializeArtists } from "../serializers/artists";
import useDebounce from "../services/useDebounce";

interface initialStateShape {
  artists: ArtistData[];
}

const initialState: initialStateShape = {
  artists: [],
};

interface useSearchParams {
  fetch?: any;
  serializeArtistsData?: (items: []) => ArtistData[];
}

function useSearch({
  fetch = api,
  serializeArtistsData = serializeArtists,
}: useSearchParams) {
  const [term, searchTerm] = useState("");
  const [results, setResults] = useState(initialState);

  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    if (!debouncedTerm) {
      setResults(initialState);
    }

    fetch
      .get("/search", {
        params: {
          q: debouncedTerm,
          type: "artist,track",
        },
      })
      .then(({ data }: { data: any }) => {
        const artists = serializeArtistsData(data.artists.items);

        setResults({ artists });
      });
  }, [debouncedTerm, fetch]);

  return { results, searchTerm };
}

export default useSearch;
