import React from "react";

import Page from "../components/layout/Page";
import { ArtistData } from "../types/ArtistData";
import useFetchArtist from "./Artist/useFetchArtist";
import { RouteComponentProps } from "react-router";
import useFetchAlbums from "./Artist/useFetchAlbums";
import Picture from "../components/Picture";
import Albums from "./shared/items/Albums";
import If, { IfNot } from "../components/If";
import NoResults from "./shared/SearchBox/NoResults";

interface Props {
  data: ArtistData;
}

type URIParams = { id: string };
type Parameters = Props & RouteComponentProps<URIParams>;

function Artist({ data, match }: Parameters): JSX.Element {
  const { id } = match.params;
  const artist = useFetchArtist({ id });
  const albums = useFetchAlbums({ id });
  const image =
    artist.images && artist.images.length > 0 ? artist.images[0].url : '';
  const hasAlbums = albums.length > 0;

  return (
    <Page>
      <div>
        <h1>{artist.name}</h1>
        <If condition={image}>
          <Picture src={image} alt={artist.name} />
        </If>
        <If condition={hasAlbums}>
          <Albums list={albums} />
        </If>
        <IfNot condition={hasAlbums}>
          <NoResults />
        </IfNot>
      </div>
    </Page>
  );
}

export default Artist;
