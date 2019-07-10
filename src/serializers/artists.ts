import { ArtistData } from "../types/ArtistData";
import config from "../config";

function serializeArtist(artist: any): ArtistData {
  return {
    id: artist.id,
    name: artist.name,
    images: artist.images.filter(
      (image: { width: number }) =>
        image.width > config.mimImageSize && image.width < config.maxImageSize
    ),
  };
}

function serializeArtists(items: any): ArtistData[] {
  return items.map(serializeArtist);
}

export { serializeArtist, serializeArtists };
