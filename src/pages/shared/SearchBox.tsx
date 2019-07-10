import * as React from "react";

import styles from "./SearchBox.module.css";
import { FormEvent } from "react";

interface Props {
  onSearch: (term: string) => void;
}

function noAction(e: FormEvent) {
  e.preventDefault();
}

function SearchBox({ onSearch }: Props): JSX.Element {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={noAction}>
        <div className={styles.content}>
          <div className={styles.textBox}>
            <input
              type="text"
              placeholder="Search"
              required
              className={styles.input}
              onChange={onChange}
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
