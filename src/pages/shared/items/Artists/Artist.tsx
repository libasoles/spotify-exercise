import * as React from "react";
import { ItemProps } from "../../../../components/layout/ItemsGrid";
import { ArtistData } from "../../../../types/ArtistData";
import noImage from "../../../../assets/NoImageFound.png";
import Picture from "../../../../components/Picture";

interface Props {
  data: ArtistData;
  className: string;
}

function Artist({ data, className }: ItemProps | Props): JSX.Element {
  const { images } = data;

  const image = images.length ? images[0].url : noImage;

  return (
    <article className={className}>
      <Picture src={image} caption={data.name} alt={data.name} />
    </article>
  );
}

export default Artist;
