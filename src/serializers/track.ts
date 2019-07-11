import { TrackData } from "../types/TrackData";
import { serializeAlbum } from "./album";
import { serializeArtist } from "./artists";

function serializeTrack(track: TrackData): TrackData {

  return {
    id: track.id,
    name: track.name,
    artists: track.artists.map(serializeArtist),
    album: serializeAlbum(track.album),
    duration_ms: track.duration_ms,
    preview_url: track.preview_url,
  };
}

function serializeTracks(items: any): TrackData[] {
  return items.filter((track: TrackData) => track.preview_url).map(serializeTrack);
}

export { serializeTrack, serializeTracks };
