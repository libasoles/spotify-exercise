import { useEffect, useState } from "react";
import api from "../../services/api";
import { emptyArtist, serializeArtist } from "../../serializers/artists";
import { ArtistData } from "../../types/ArtistData";

interface Params {
  id: string;
  fetch?: any;
}

const defaultInfo: ArtistData = emptyArtist;

function useFetchArtist({ id, fetch = api }: Params): ArtistData {
  const [artist, setArtist] = useState(defaultInfo);

  useEffect((): void => {
    fetch.get("/artists/" + id).then(({ data }: { data: any }): void => {
      const artist = serializeArtist(data);

      setArtist(artist);
    });
  }, [id, fetch]);

  return artist;
}

export default useFetchArtist;
