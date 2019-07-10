import { useEffect, useState } from "react";
import api from "../../services/api";
import { serializeAlbums } from "../../serializers/album";
import { AlbumData } from "../../types/AlbumData";

interface useFetchAlbumsParams {
  id: string;
  fetch?: any;
}

const initialState: AlbumData[] = [];

function useFetchAlbums({ id, fetch = api }: useFetchAlbumsParams) {
  const [albums, setAlbums] = useState(initialState);

  useEffect(() => {
    fetch.get("/artists/" + id + "/albums").then(({ data }: { data: any }) => {
      const albums = serializeAlbums(data.items);
      setAlbums(albums);
    });
  }, [id]);

  return albums;
}

export default useFetchAlbums;
