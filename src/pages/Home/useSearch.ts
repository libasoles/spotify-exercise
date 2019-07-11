import { useEffect, useState } from "react";

import api from "../../services/api";
import { ArtistData } from "../../types/ArtistData";
import { serializeArtists } from "../../serializers/artists";
import useDebounce from "../../services/useDebounce";

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
        const artists = serializeArtistsData(data.artists.items);

        setResults({ artists });
        setLoading(false);
      });
  }, [debouncedTerm, fetch, setLoading, serializeArtistsData]);

  return { loading, results, searchTerm };
}

export default useSearch;
