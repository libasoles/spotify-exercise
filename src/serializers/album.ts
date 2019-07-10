import { AlbumData } from "../types/AlbumData";
import config from "../config";

function serializeAlbum(artist: any): AlbumData {
  return {
    id: artist.id,
    name: artist.name,
    images: artist.images.filter(
      (image: { width: number }) =>
        image.width >= config.mimImageSize && image.width <= config.maxImageSize
    ),
  };
}

function serializeAlbums(items: any): AlbumData[] {
  return items.map(serializeAlbum);
}

export { serializeAlbum, serializeAlbums };
