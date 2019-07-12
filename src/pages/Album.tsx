import React from "react";

import Page from "../components/layout/Page";
import { AlbumData } from "../types/AlbumData";
import { RouteComponentProps } from "react-router";
import Picture from "../components/Picture";
import If, { IfNot } from "../components/If";
import Loading from "./shared/SearchBox/Loading";
import Tracks from "./shared/items/Tracks";
import styles from "./Album.module.css";
import useFetchAlbum from "./Album/useFetchAlbum";
import { ArtistData } from "../types/ArtistData";
import Link from "../components/layout/Link";

interface Props {
  data: AlbumData;
}

type URIParams = { id: string };
type Parameters = Props & RouteComponentProps<URIParams>;

function Album({ data, match }: Parameters): JSX.Element {
  const { id } = match.params;
  const album = useFetchAlbum({ id });

  const { tracks = [], artists = [] } = album;
  const image =
    album.images && album.images.length > 0 ? album.images[0].url : "";
  const hasTracks = tracks && tracks.length > 0;

  return (
    <Page>
      <div>
        <header className={styles.header}>
          <section className={styles.details}>
            <If condition={image}>
              <Picture src={image} alt={album.name} />
            </If>
            <hgroup>
              <h1 className={styles.name}>{album.name}</h1>
              <h2 className={styles.artists}>
                {artists.map((artist: ArtistData) => (
                  <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
                ))}
              </h2>
            </hgroup>
          </section>

          <section className={styles.tracks}>
            <If condition={hasTracks}>
              <Tracks
                list={tracks}
                title="Tracks"
                skipColumns={["artists", "album"]}
              />
            </If>
          </section>
        </header>

        <IfNot condition={hasTracks}>
          <Loading />
        </IfNot>
      </div>
    </Page>
  );
}

export default Album;