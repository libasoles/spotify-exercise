import { useEffect, useState } from "react";
import api from "../../services/api";
import { emptyAlbum, serializeAlbum } from "../../serializers/album";
import { AlbumData } from "../../types/AlbumData";

interface useFetchAlbumsParams {
  id: string;
  fetch?: any;
}

const defaultInfo: AlbumData = emptyAlbum;

function useFetchAlbum({ id, fetch = api }: useFetchAlbumsParams) {
  const [album, setAlbum] = useState(defaultInfo);

  useEffect(() => {
    fetch.get("/albums/" + id).then(({ data }: { data: any }) => {
      const album = serializeAlbum(data);

      setAlbum(album);
    });
  }, [id, fetch]);

  return album;
}

export default useFetchAlbum;
