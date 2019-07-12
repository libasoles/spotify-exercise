import { useEffect, useState } from "react";
import api, { ApiInstance, ApiResponse } from "../../services/api";
import { serializeAlbums } from "../../serializers/album";
import { AlbumData } from "../../types/AlbumData";

interface Params {
  id: string;
  fetch?: ApiInstance;
}

const initialState: AlbumData[] = [];

function useFetchAlbums({ id, fetch = api }: Params): AlbumData[] {
  const [albums, setAlbums] = useState(initialState);

  useEffect((): void => {
    fetch
      .get("/artists/" + id + "/albums")
      .then(({ data }: ApiResponse): void => {
        const albums = serializeAlbums(data.items);

        setAlbums(albums);
      });
  }, [id, fetch]);

  return albums;
}

export default useFetchAlbums;
