import React from "react";

import Page from "../components/layout/Page";
import Artists from "./shared/items/Artists";
import * as artistsMock from "../resources/artists.json";
import { ArtistData } from "../types/ArtistData";
import SearchBox from "./shared/SearchBox";

import styles from "./Home.module.css";

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
        <SearchBox/>
      <Artists list={artists} />
    </Page>
  );
}

export default Home;
