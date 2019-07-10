import * as React from "react";

import styles from "./ItemsGrid.module.css";
import Title from "./Title";
import Link from "./Link";
import If from "../If";
import Grid from "./Grid";

export type GridRecipientType = ({ data, className }: ItemProps) => JSX.Element;

export interface ItemProps {
  data: any;
  className: string;
}

interface Props {
  title?: string;
  list: any;
  Recipient: GridRecipientType;
  link?: { copy: string; to?: string };
}

const noLink = { to: "", copy: "" };

function ItemsGrid({
  title,
  list,
  Recipient,
  link = noLink,
}: Props): JSX.Element {
  return (
    <section className={styles.container}>
      <If condition={title}>
        <Title className={styles.row}>{title}</Title>
      </If>

      <Grid list={list} Recipient={Recipient} />

      <If condition={link && link.to}>
        <Link to={link.to} className={styles.row}>
          {link.copy}
        </Link>
      </If>
    </section>
  );
}

export default ItemsGrid;
