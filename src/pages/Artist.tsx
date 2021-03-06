import React from "react";

import Page from "../components/layout/Page";
import useFetchArtist from "./Artist/useFetchArtist";
import { RouteComponentProps } from "react-router";
import useFetchAlbums from "./Artist/useFetchAlbums";
import Picture from "../components/Picture";
import Albums from "./shared/items/Albums";
import If, { IfNot } from "../components/If";
import Loading from "./shared/SearchBox/Loading";
import useFetchTopTracks from "./Artist/useFetchTopTracks";
import Tracks from "./shared/items/Tracks";
import styles from "./Artist.module.css";
import BackButtonBar from "../components/layout/BackButtonBar";

interface URIParams {
  id: string;
}
type Parameters = RouteComponentProps<URIParams>;

function Artist({ match }: Parameters): JSX.Element {
  const { id } = match.params;
  const artist = useFetchArtist({ id });
  const tracks = useFetchTopTracks({ id });
  const albums = useFetchAlbums({ id });
  const image =
    artist.images && artist.images.length > 0 ? artist.images[0].url : "";
  const hasAlbums = albums.length > 0;
  const hasTracks = tracks.length > 0;

  return (
    <Page>
      <header>
        <BackButtonBar />
      </header>
      <section>
        <header className={styles.header}>
          <section className={styles.details}>
            <If condition={image}>
              <Picture src={image} alt={artist.name} />
            </If>
            <h1 className={styles.name}>{artist.name}</h1>
          </section>

          <section className={styles.tracks}>
            <If condition={hasTracks}>
              <Tracks
                list={tracks}
                title="Top Tracks"
                skipColumns={["artists"]}
              />
            </If>
          </section>
        </header>

        <If condition={hasAlbums}>
          <Albums list={albums} />
        </If>

        <IfNot condition={hasAlbums}>
          <Loading />
        </IfNot>
      </section>
    </Page>
  );
}

export default Artist;
