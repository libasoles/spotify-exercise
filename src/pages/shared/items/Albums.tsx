import * as React from "react";

import ItemsGrid from "../../../components/layout/ItemsGrid";
import Album from "./Albums/Album";
import Link from "../../../components/layout/Link";
import { AlbumData } from "../../../types/AlbumData";

interface Props {
  list: AlbumData[];
}

interface Recipient {
  data: AlbumData;
  className: string;
}

function Albums({ list }: Props): JSX.Element {
  return (
    <div>
      <ItemsGrid
        title="Albums"
        list={list}
        recipient={({ data, className }: Recipient): JSX.Element => (
          <Link key={data.id} to={`/album/${data.id}`}>
            <Album data={data} className={className} />
          </Link>
        )}
      />
    </div>
  );
}

export default Albums;
