import * as React from "react";

import styles from "./Logo.module.css";

interface Props {
  className: string;
}

function Logo({ className }: Props): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Spoti</h1>
        </div>
        <div className={styles.right}>
          <h1>Five</h1>
        </div>
      </div>
    </div>
  );
}

export default Logo;
