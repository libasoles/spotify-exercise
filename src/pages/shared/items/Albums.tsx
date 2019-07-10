import * as React from "react";

import ItemsGrid from "../../../components/layout/ItemsGrid";
import { ArtistData } from "../../../types/ArtistData";
import Album from "./Albums/Album";

interface Props {
  list: ArtistData[];
}

function Albums({ list }: Props): JSX.Element {
  return (
    <div>
      <ItemsGrid
        title="Albums"
        list={list}
        Recipient={Album}
      />
    </div>
  );
}

export default Albums;
