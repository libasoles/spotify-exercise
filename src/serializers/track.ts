import { TrackData } from "../types/TrackData";
import {emptyAlbum, serializeAlbum} from "./album";
import { serializeArtist } from "./artists";

function serializeTrack(track: TrackData): TrackData {
  const hasAlbum = typeof track.album !== "undefined";

  return {
    id: track.id,
    name: track.name,
    artists: track.artists.map(serializeArtist),
    album: hasAlbum ? serializeAlbum(track.album) : emptyAlbum,
    duration_ms: track.duration_ms,
    preview_url: track.preview_url,
  };
}

function serializeTracks(items: any): TrackData[] {
  return items
    .filter((track: TrackData) => track.preview_url)
    .map(serializeTrack);
}

export { serializeTrack, serializeTracks };
