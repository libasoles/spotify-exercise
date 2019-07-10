import * as React from "react";
import { ItemProps } from "../ItemsGrid";
import { ArtistData } from "../../../../types/ArtistData";
import noImage from "../../../../resources/NoImageFound.png";

interface Props {
  data: ArtistData;
  className: string;
}

function Artist({ data, className }: ItemProps | Props): JSX.Element {
  const { images } = data;

  const image = images.length ? images[0].url : noImage;

  return (
    <article className={className}>
      <figure>
        <img src={image} alt={data.name} />
        <figcaption>{data.name}</figcaption>
      </figure>
    </article>
  );
}

export default Artist;
