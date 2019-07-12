import * as React from "react";

import styles from "./PlayPause.module.css";

interface Props {
  src: string;
  onPlay: (src: string | null) => void;
  isPlaying: boolean;
}

function PlayPause({ src, onPlay, isPlaying }: Props): JSX.Element {
  const className = isPlaying ? styles.pause : styles.play;

  return (
    <>
      <button
        data-src={src}
        className={styles.box}
        onClick={(): void => {
          const track = isPlaying ? null : src;
          onPlay(track);
        }}
      >
        <span className={`${styles.button} ${className}`}></span>
      </button>
    </>
  );
}

export default PlayPause;
