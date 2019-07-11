import * as React from "react";

import { TrackData } from "../../../../types/TrackData";
import styles from "./Track.module.css";
import PlayPause from "./PlayPause";
import millisToTime from "../../../../helpers/millisToTime";
import Link from "../../../../components/layout/Link";
import { ArtistData } from "../../../../types/ArtistData";

interface Props {
  data: TrackData;
  onPlay: (src: string | null) => void;
}

function Track({ data, onPlay }: Props): JSX.Element {
  return (
    <ul className={styles.row}>
      <li className={`${styles.column} ${styles.button} ${styles.small}`}>
        <PlayPause src={data.preview_url} onPlay={onPlay} />
      </li>

      <li className={styles.column}>{data.name}</li>
      <li className={styles.column}>
        {data.artists.map((artist: ArtistData) => (
          <Link key={artist.id} to={`/artist/${artist.id}`}>
            {artist.name}
          </Link>
        ))}
      </li>
      <li className={`${styles.column} ${styles.noMobile}`}>
        {data.album.name}
      </li>
      <li className={`${styles.column} ${styles.right} ${styles.small}`}>
        {millisToTime(data.duration_ms)}
      </li>
    </ul>
  );
}

export default Track;
