import * as React from "react";
import If from "./If";
import styles from "./Picture.module.css";

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export default function Picture({ src, alt, caption }: Props) {
  return (
    <figure className={styles.picture}>
      <img src={src} alt={alt} />
      <If condition={caption}>
        <figcaption>{caption}</figcaption>
      </If>
    </figure>
  );
}
