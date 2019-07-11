import React from "react";

import styles from "./NoResults.module.css";
import ufo from "../../assets/ufo.svg";

const NoResults = () => (
  <div className={styles.container}>
    <img src={ufo} className={styles.ufo} alt="ufo" />
    <div className={styles.loader}>
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
      </svg>
    </div>
    <h2 className={styles.copy}>No Results</h2>
  </div>
);

export default NoResults;
