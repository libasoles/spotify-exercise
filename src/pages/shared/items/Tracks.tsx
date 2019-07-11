import * as React from "react";

import { TrackData } from "../../../types/TrackData";
import Track from "./Tracks/Track";
import styles from "./Tracks.module.css";
import Title from "../../../components/layout/Title";
import Player from "./Tracks/Player";
import {useRef, useState} from "react";

interface Props {
  list: TrackData[];
}

function Tracks({ list }: Props): JSX.Element {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  const audio = useRef(new Player());
  if (currentTrack) {
    audio.current.play(currentTrack);
  } else {
    audio.current.stop();
  }

  return (
    <section className={styles.container}>
      <Title>Tracks</Title>
      <ul className={styles.list}>
        {list.map((track: TrackData) => (
          <li key={track.id} className={styles.row}>
            <Track data={track} onPlay={setCurrentTrack} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tracks;
