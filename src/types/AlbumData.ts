import { ImageAlienData, ImageData } from "./ImageData";
import { TrackAlienData, TrackData } from "./TrackData";
import { ArtistAlienData, ArtistData } from "./ArtistData";

export interface AlbumAlienData {
  id: string;
  name: string;
  images: ImageAlienData[];
  artists: ArtistAlienData[];
  tracks: {
    items: TrackAlienData[];
  };
}
export interface AlbumData {
  id: string;
  name: string;
  images: ImageData[];
  artists?: ArtistData[];
  tracks?: TrackData[];
}
