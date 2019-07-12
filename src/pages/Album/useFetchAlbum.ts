import { useEffect, useState } from "react";
import api, { ApiInstance, ApiResponse } from "../../services/api";
import { emptyAlbum, serializeAlbum } from "../../serializers/album";
import { AlbumData } from "../../types/AlbumData";

interface Params {
  id: string;
  fetch?: ApiInstance;
}

const defaultInfo: AlbumData = emptyAlbum;

function useFetchAlbum({ id, fetch = api }: Params): AlbumData {
  const [album, setAlbum] = useState(defaultInfo);

  useEffect((): void => {
    fetch.get("/albums/" + id).then(({ data }: ApiResponse): void => {
      const album = serializeAlbum(data);

      setAlbum(album);
    });
  }, [id, fetch]);

  return album;
}

export default useFetchAlbum;
