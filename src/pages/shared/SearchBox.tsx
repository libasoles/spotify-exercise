import * as React from "react";

import styles from "./SearchBox.module.css";

interface Props {
  onSearch: (term: string) => void;
}

function SearchBox({ onSearch }: Props): JSX.Element {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form>
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
