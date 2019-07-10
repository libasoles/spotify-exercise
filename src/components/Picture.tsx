import * as React from "react";
import If from "./If";

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export default function Picture({ src, alt, caption }: Props) {
  return (
    <figure>
      <img src={src} alt={alt} />
      <If condition={caption}>
        <figcaption>{caption}</figcaption>
      </If>
    </figure>
  );
}
