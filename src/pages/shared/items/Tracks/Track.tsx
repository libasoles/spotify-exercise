import * as React from "react";

import { TrackData } from "../../../../types/TrackData";
import styles from "./Track.module.css";
import PlayPause from "./PlayPause";
import millisToTime from "../../../../helpers/millisToTime";
import Link from "../../../../components/layout/Link";
import { ArtistData } from "../../../../types/ArtistData";
import If, { IfNot } from "../../../../components/If";

interface Props {
  data: TrackData;
  onPlay: (src: string | null) => void;
  skipColumns?: string[];
  currentTrack: string | null;
}

function Track({
  data,
  onPlay,
  currentTrack,
  skipColumns,
}: Props): JSX.Element {
  const isPlaying = currentTrack === data.previewUrl;

  return (
    <ul className={styles.row}>
      <li className={`${styles.column} ${styles.button} ${styles.small}`}>
        <If condition={data.previewUrl}>
          <PlayPause
            src={data.previewUrl}
            onPlay={onPlay}
            isPlaying={isPlaying}
          />
        </If>
        <IfNot condition={data.previewUrl}>
          <span>-</span>
        </IfNot>
      </li>

      <li className={styles.column}>{data.name}</li>

      <If condition={!(skipColumns && skipColumns.includes("artists"))}>
        <li className={styles.column}>
          {data.artists.map(
            (artist: ArtistData): JSX.Element => (
              <Link key={artist.id} to={`/artist/${artist.id}`}>
                {artist.name}
              </Link>
            )
          )}
        </li>
      </If>

      <If condition={!(skipColumns && skipColumns.includes("album"))}>
        <li className={`${styles.column} ${styles.noMobile}`}>
          <Link to={`/album/${data.album.id}`}>{data.album.name}</Link>
        </li>
      </If>

      <li className={`${styles.column} ${styles.right} ${styles.small}`}>
        {millisToTime(data.durationMs)}
      </li>
    </ul>
  );
}

export default Track;
