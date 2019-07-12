import { AlbumData } from "../types/AlbumData";
import config from "../config/index";

function serializeAlbum(album: any): AlbumData {
  return {
    id: album.id,
    name: album.name,
    images: album.images.filter(
      (image: { width: number }) =>
        image.width >= config.mimImageSize && image.width <= config.maxImageSize
    ),
  };
}

function serializeAlbums(items: any): AlbumData[] {
  return items.map(serializeAlbum);
}

export { serializeAlbum, serializeAlbums };
