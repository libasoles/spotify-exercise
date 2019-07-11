import * as React from "react";

import styles from "./PlayPause.module.css";
import { useState } from "react";

interface Props {
  src: string;
  onPlay: (src: string | null) => void;
}

function toggle(state: boolean, callback: (state: boolean) => void) {
  const newState = !state;
  callback(newState);

  return newState;
}

function PlayPause({ src, onPlay }: Props): JSX.Element {
  const [playing, setIsPlaying] = useState(false);

  const callback = (state: boolean) => {
    setIsPlaying(state);
    onPlay(state ? src : null);
  };

  const className = playing ? styles.pause : styles.play;

  return (
    <>
      <button
        data-src={src}
        className={styles.box}
        onClick={() => toggle(playing, callback)}
      >
        <span className={`${styles.button} ${className}`}></span>
      </button>
    </>
  );
}

export default PlayPause;
