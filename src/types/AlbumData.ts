import { ImageData } from "./ImageData";
import { TrackData } from "./TrackData";
import { ArtistData } from "./ArtistData";

export interface AlbumData {
  id: string;
  name: string;
  images: ImageData[];
  artists?: ArtistData[];
  tracks?: TrackData[];
}
