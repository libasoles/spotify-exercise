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

function useAutoPlay(currentTrack: string | null): void {
  const audio = useRef(new Player());
  if (currentTrack) {
    audio.current.play(currentTrack);
  } else {
    audio.current.stop();
  }
}

function Tracks({
  title = "Tracks",
  list,
  skipColumns,
  className,
}: Props): JSX.Element {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  useAutoPlay(currentTrack);

  return (
    <section className={`${styles.container} ${className}`}>
      <Title>{title}</Title>
      <ul className={styles.list}>
        {list.map(
          (track: TrackData): JSX.Element => (
            <li key={track.id} className={styles.row}>
              <Track
                data={track}
                onPlay={setCurrentTrack}
                skipColumns={skipColumns}
                currentTrack={currentTrack}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default Tracks;
