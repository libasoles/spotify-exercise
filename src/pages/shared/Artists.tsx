import * as React from "react";

import Artist from "./Artists/Artist";
import styles from "./Artists.module.css";
import ItemsGrid from "../../components/ItemsGrid";
import { ArtistData } from "../../types/ArtistData";

interface Props {
  list: ArtistData[];
}

function Artists({ list }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <ItemsGrid
        title="Artists"
        list={list}
        Recipient={Artist}
        seeMoreLink={"/artists"}
      />
    </div>
  );
}

export default Artists;
