import * as React from "react";

import ItemsGrid from "../../../components/layout/ItemsGrid";
import { ArtistData } from "../../../types/ArtistData";
import Link from "../../../components/layout/Link";
import Album from "./Albums/Album";
import { AlbumData } from "../../../types/AlbumData";

interface Props {
  list: ArtistData[];
}

interface Recipient {
  data: AlbumData;
  className: string;
}

function Artists({ list }: Props): JSX.Element {
  return (
    <div>
      <ItemsGrid
        title="Artists"
        list={list}
        recipient={({ data, className }: Recipient): JSX.Element => (
          <Link key={data.id} to={`/artist/${data.id}`}>
            <Album data={data} className={className} />
          </Link>
        )}
      />
    </div>
  );
}

export default Artists;
