import { ArtistAlienData, ArtistData } from "../types/ArtistData";
import config from "../config/index";
import { ImageAlienData } from "../types/ImageData";

export const emptyArtist: ArtistData = {
  id: "",
  name: "",
  images: [{ url: "" }],
};

function filterImages(images: ImageAlienData[]): ImageAlienData[] {
  return images.filter(
    (image: { width: number }): boolean =>
      image.width >= config.mimImageSize && image.width <= config.maxImageSize
  );
}

function serializeArtist(artist: ArtistAlienData): ArtistData {
  return {
    id: artist.id,
    name: artist.name,
    images: artist.images ? filterImages(artist.images) : [],
  };
}

function serializeArtists(items: ArtistAlienData[]): ArtistData[] {
  return items.map(serializeArtist);
}

export { serializeArtist, serializeArtists };
