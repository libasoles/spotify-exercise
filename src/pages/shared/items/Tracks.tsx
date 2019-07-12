import * as React from "react";

import { TrackData } from "../../../types/TrackData";
import Track from "./Tracks/Track";
import styles from "./Tracks.module.css";
import Title from "../../../components/layout/Title";
import Player from "./Tracks/Player";
import { useRef, useState } from "react";

interface Props {
  title?: string;
  list: TrackData[];
  skipColumns?: string[];
  className?: string;
}

function Tracks({
  title = "Tracks",
  list,
  skipColumns,
  className,
}: Props): JSX.Element {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  const audio = useRef(new Player());
  if (currentTrack) {
    audio.current.play(currentTrack);
  } else {
    audio.current.stop();
  }

  return (
    <section className={`${styles.container} ${className}`}>
      <Title>{title}</Title>
      <ul className={styles.list}>
        {list.map((track: TrackData) => (
          <li key={track.id} className={styles.row}>
            <Track
              data={track}
              onPlay={setCurrentTrack}
              skipColumns={skipColumns}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tracks;
