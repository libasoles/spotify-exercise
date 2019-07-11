import { AlbumData } from "./AlbumData";
import { ArtistData } from "./ArtistData";

export interface TrackData {
  id: string;
  name: string;
  artists: ArtistData[];
  album: AlbumData;
  duration_ms: number;
  preview_url: string;
}
