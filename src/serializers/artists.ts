import { ArtistData } from "../types/ArtistData";
import config from "../config/index";

export const emptyArtist: ArtistData = {
  id: "",
  name: "",
  images: [{ url: "" }],
};

function filterImages(images: any[]): any[] {
  return images.filter(
    (image: { width: number }): boolean =>
      image.width >= config.mimImageSize && image.width <= config.maxImageSize
  );
}

function serializeArtist(artist: any): ArtistData {
  return {
    id: artist.id,
    name: artist.name,
    images: artist.images ? filterImages(artist.images) : [],
  };
}

function serializeArtists(items: any): ArtistData[] {
  return items.map(serializeArtist);
}

export { serializeArtist, serializeArtists };
