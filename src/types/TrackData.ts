import { AlbumAlienData, AlbumData } from "./AlbumData";
import { ArtistAlienData, ArtistData } from "./ArtistData";

export interface TrackAlienData {
  id: string;
  name: string;
  artists: ArtistAlienData[];
  album: AlbumAlienData;
  duration_ms: number;
  preview_url: string;
}

export interface TrackData {
  id: string;
  name: string;
  artists: ArtistData[];
  album: AlbumData;
  durationMs: number;
  previewUrl: string;
}
