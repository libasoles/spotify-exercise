import { useEffect, useState } from "react";

import api from "../services/api";
import { ArtistData } from "../types/ArtistData";
import { serializeArtists } from "../serializers/artists";

function useSearch(fetch = api) {
  const initialState: {
    artists: ArtistData[];
  } = {
    artists: [],
  };
  const [term, searchTerm] = useState("");
  const [results, setResults] = useState(initialState);

  useEffect(() => {
    if (!term) return;

    fetch
      .get("/search", {
        params: {
          q: term,
          type: "artist,track",
        },
      })
      .then(({ data }) => {
        const artists = serializeArtists(data.artists.items);
        setResults({ artists });
      });
  }, [term, fetch]);

  return { results, searchTerm };
}

export default useSearch;
