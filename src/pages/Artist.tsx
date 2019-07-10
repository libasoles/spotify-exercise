import React from "react";

import Page from "../components/layout/Page";
import { ArtistData } from "../types/ArtistData";
import useFetchArtist from "./Artist/useFetchArtist";
import { RouteComponentProps } from "react-router";
import useFetchAlbums from "./Artist/useFetchAlbums";
import Picture from "../components/Picture";
import Albums from "./shared/items/Albums";
import If from "../components/If";

interface Props {
  data: ArtistData;
}

type URIParams = { id: string };
type Parameters = Props & RouteComponentProps<URIParams>;

function Artist({ data, match }: Parameters): JSX.Element {
  const { id } = match.params;
  const artist = useFetchArtist({ id });
  const albums = useFetchAlbums({ id });

  return (
    <Page>
      <div>
        <h1>{artist.name}</h1>
        <Picture src={artist.images[0].url} alt={artist.name} />
        <If condition={albums.length > 0}>
          <Albums list={albums} />
        </If>
      </div>
    </Page>
  );
}

export default Artist;
