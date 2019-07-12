import { useEffect, useState } from "react";
import api from "../../services/api";
import { emptyArtist, serializeArtist } from "../../serializers/artists";
import { ArtistData } from "../../types/ArtistData";

interface useFetchArtistParams {
  id: string;
  fetch?: any;
}

const defaultInfo: ArtistData = emptyArtist;

function useFetchArtist({ id, fetch = api }: useFetchArtistParams) {
  const [artist, setArtist] = useState(defaultInfo);

  useEffect(() => {
    fetch.get("/artists/" + id).then(({ data }: { data: any }) => {
      const artist = serializeArtist(data);

      setArtist(artist);
    });
  }, [id, fetch]);

  return artist;
}

export default useFetchArtist;
