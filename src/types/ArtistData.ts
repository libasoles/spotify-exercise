import { ImageAlienData, ImageData } from "./ImageData";

export interface ArtistAlienData {
  id: string;
  name: string;
  images: ImageAlienData[];
}

export interface ArtistData {
  id: string;
  name: string;
  images?: ImageData[];
}
