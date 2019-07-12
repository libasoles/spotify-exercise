import React from "react";

import styles from "./Ufo.module.css";
import ufo from "../../../assets/ufo.svg";

enum Color {
  pink = "pink",
  blue = "blue",
}

interface Props {
  color?: Color;
  copy: string;
}

const Ufo = ({ color = Color.blue, copy }: Props): JSX.Element => (
  <div className={`${styles.container} ${styles[color]}`}>
    <img src={ufo} className={styles.ufo} alt="ufo" />
    <div className={styles.loader}>
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
      </svg>
    </div>
    <h2 className={styles.copy}>{copy}</h2>
  </div>
);

export default Ufo;
