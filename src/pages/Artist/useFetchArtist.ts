import { useEffect, useState } from "react";
import api, { ApiInstance, ApiResponse } from "../../services/api";
import { emptyArtist, serializeArtist } from "../../serializers/artists";
import { ArtistData } from "../../types/ArtistData";

interface Params {
  id: string;
  fetch?: ApiInstance;
}

const defaultInfo: ArtistData = emptyArtist;

function useFetchArtist({ id, fetch = api }: Params): ArtistData {
  const [artist, setArtist] = useState(defaultInfo);

  useEffect((): void => {
    fetch.get("/artists/" + id).then(({ data }: ApiResponse): void => {
      const artist = serializeArtist(data);

      setArtist(artist);
    });
  }, [id, fetch]);

  return artist;
}

export default useFetchArtist;
