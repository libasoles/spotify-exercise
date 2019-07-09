import { ArtistData } from "../types/ArtistData";

function serializeArtist(artist: any): ArtistData {
  return {
    id: artist.id,
    name: artist.name,
    images: artist.images.filter(
      (image: { width: number }) => image.width < 800
    ),
  };
}

function serializeArtists(items: any): ArtistData[] {
  return items.map(serializeArtist);
}

export { serializeArtist, serializeArtists };
