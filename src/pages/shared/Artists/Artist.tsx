import * as React from "react";
import { ItemProps } from "../../../components/ItemsGrid";
import { ArtistData } from "../../../types/ArtistData";

interface Props {
  data: ArtistData;
  className: string;
}

function Artist({ data, className }: ItemProps | Props): JSX.Element {
  const { images } = data;

  return (
    <article className={className}>
      <img src={images[1].url} alt="" />
    </article>
  );
}

export default Artist;
