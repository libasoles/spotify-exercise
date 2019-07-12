import { AlbumAlienData, AlbumData } from "../types/AlbumData";
import config from "../config/index";
import { serializeTracks } from "./track";
import { serializeArtists } from "./artists";
import { ImageAlienData } from "../types/ImageData";

export const emptyAlbum: AlbumData = {
  id: "",
  name: "",
  images: [{ url: "" }],
};

function serializeAlbum(album: AlbumAlienData): AlbumData {
  const hasTracks = album.tracks && album.tracks.items.length > 0;
  const hasArtists = album.artists && album.artists.length > 0;

  return {
    id: album.id,
    name: album.name,
    images: album.images.filter(
      (image: ImageAlienData): boolean =>
        image.width >= config.mimImageSize && image.width <= config.maxImageSize
    ),
    tracks: hasTracks ? serializeTracks(album.tracks.items) : [],
    artists: hasArtists ? serializeArtists(album.artists) : [],
  };
}

function serializeAlbums(items: AlbumAlienData[]): AlbumData[] {
  return items.map(serializeAlbum);
}

export { serializeAlbum, serializeAlbums };
