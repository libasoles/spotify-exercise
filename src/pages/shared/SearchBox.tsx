import * as React from "react";

import styles from "./SearchBox.module.css";

interface Props {}

function SearchBox({  }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <form method="get" action="">
        <div className={styles.content}>
          <div className={styles.textBox}>
            <input
              type="text"
              placeholder="Search"
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            <span className={styles.circle}></span>
            <span className={styles.tail}></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
