import { TrackData } from "../types/TrackData";
import { emptyAlbum, serializeAlbum } from "./album";
import { serializeArtist } from "./artists";

function serializeTrack(track: any): TrackData {
  const hasAlbum = typeof track.album !== "undefined";

  return {
    id: track.id,
    name: track.name,
    artists: track.artists.map(serializeArtist),
    album: hasAlbum ? serializeAlbum(track.album) : emptyAlbum,
    durationMs: track.duration_ms,
    previewUrl: track.preview_url,
  };
}

function serializeTracks(items: any, onlyPlayable = false): TrackData[] {
    if (onlyPlayable)
    items = items.filter((track: any): boolean => Boolean(track.preview_url));

  return items.map(serializeTrack);
}

export { serializeTrack, serializeTracks };
