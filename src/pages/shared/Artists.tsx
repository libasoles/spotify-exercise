import * as React from "react";

import Artist from "./Artists/Artist";
import styles from "./Artists.module.css";

interface Props {
  list: any;
}

function Artists({ list }: Props): JSX.Element {
  return (
    <section className={styles.container}>
      {list.map((artist: any) => {
        return <Artist key={artist.id} data={artist} className={styles.item} />;
      })}
    </section>
  );
}

export default Artists;
