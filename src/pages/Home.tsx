import React from "react";

import Page from "../components/Page";
import Artists from "./shared/Artists";
import * as artistsMock from "../resources/artists.json";
import { ArtistData } from "../types/ArtistData";

function Home(): JSX.Element {
  const { items } = artistsMock.artists;

  const artists = items.map(
    (artist: any): ArtistData => ({
      id: artist.id,
      name: artist.name,
      images: artist.images,
    })
  );

  return (
    <Page>
      <Artists list={artists} />
    </Page>
  );
}

export default Home;
