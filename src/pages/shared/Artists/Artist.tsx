import * as React from "react";
import { ItemProps } from "../../../components/Item";

interface Props {
  data: any;
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
