import * as React from "react";

import styles from "./ItemsGrid.module.css";
import Title from "./Title";
import Link from "./Link";
import If from "../If";
import Grid from "./Grid";

export interface RecipientProps<T> {
  data: T;
  className: string;
}

export type RecipientType<T> = (props: RecipientProps<T>) => JSX.Element;

interface Props<T> {
  title?: string;
  list: T[];
  recipient: RecipientType<T>;
  link?: { copy: string; to?: string };
}

const noLink = { to: "", copy: "" };

function ItemsGrid<T>({
  title,
  list,
  recipient,
  link = noLink,
}: Props<T>): JSX.Element {
  return (
    <section className={styles.container}>
      <If condition={title}>
        <Title className={styles.row}>{title}</Title>
      </If>

      <Grid list={list} recipient={recipient} />

      <If condition={link && link.to}>
        <Link to={link.to} className={styles.row}>
          {link.copy}
        </Link>
      </If>
    </section>
  );
}

export default ItemsGrid;
