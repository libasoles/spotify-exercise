import { ImageData } from "./ImageData";

export interface ArtistData {
  id: string;
  name: string;
  images?: ImageData[];
}
