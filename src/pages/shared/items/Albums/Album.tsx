import * as React from "react";
import { RecipientProps } from "../../../../components/layout/ItemsGrid";
import { AlbumData } from "../../../../types/AlbumData";
import noImage from "../../../../assets/NoImageFound.png";
import Picture from "../../../../components/Picture";

type Props = RecipientProps<AlbumData>;

function Album({ data, className }: Props): JSX.Element {
  const { images } = data;

  const image = images && images.length ? images[0].url : noImage;

  return (
    <article className={className}>
      <Picture src={image} caption={data.name} alt={data.name} />
    </article>
  );
}

export default Album;
