import React from "react";

import Page from "../components/Page";
import Artists from "./shared/Artists";
import Title from "../components/Title";
import * as artistsMock from "../resources/artists.json";
import styles from "./Home.module.css";
import Link from "../components/Link";

function Home(): JSX.Element {
  const { items } = artistsMock.artists;

  return (
    <Page>
      <Title className={styles.row}>Artists</Title>
      <Artists list={items} />
      <Link to={"/artists"} className={styles.row}>
        See more
      </Link>
    </Page>
  );
}

export default Home;
