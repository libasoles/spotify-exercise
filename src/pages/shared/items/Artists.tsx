import * as React from "react";

import ItemsGrid, {
  RecipientProps,
} from "../../../components/layout/ItemsGrid";
import { ArtistData } from "../../../types/ArtistData";
import Link from "../../../components/layout/Link";
import Artist from "./Artists/Artist";

interface Props {
  list: ArtistData[];
}

type Recipient = RecipientProps<ArtistData>;

function Artists({ list }: Props): JSX.Element {
  return (
    <div>
      <ItemsGrid
        title="Artists"
        list={list}
        recipient={({ data, className }: Recipient): JSX.Element => (
          <Link key={data.id} to={`/artist/${data.id}`}>
            <Artist data={data} className={className} />
          </Link>
        )}
      />
    </div>
  );
}

export default Artists;
