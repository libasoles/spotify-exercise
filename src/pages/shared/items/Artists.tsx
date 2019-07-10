import * as React from "react";

import Artist from "./Artists/Artist";
import ItemsGrid from "../../../components/layout/ItemsGrid";
import { ArtistData } from "../../../types/ArtistData";

interface Props {
  list: ArtistData[];
}

function Artists({ list }: Props): JSX.Element {
  return (
    <div>
      <ItemsGrid
        title="Artists"
        list={list}
        Recipient={Artist}
        link={{ copy: "See more", to: "/artists" }}
      />
    </div>
  );
}

export default Artists;
