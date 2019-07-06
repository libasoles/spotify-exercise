import * as React from "react";

import styles from "./ItemsGrid.module.css";
import Title from "../../../components/layout/Title";
import Link from "../../../components/layout/Link";
import Grid, { GridRecipientType } from "../../../components/layout/Grid";
import If from "../../../components/If";

export interface ItemProps {
  data: any;
  className: string;
}

interface Props {
  title?: string;
  list: any;
  Recipient: GridRecipientType;
  link: { copy: string; to: string };
}

function ItemsGrid({ title, list, Recipient, link }: Props): JSX.Element {
  return (
    <section className={styles.container}>
      <If condition={title}>
        <Title className={styles.row}>{title}</Title>
      </If>

      <Grid list={list} Recipient={Recipient} />

      <If condition={link.to}>
        <Link to={link.to} className={styles.row}>
          {link.copy}
        </Link>
      </If>
    </section>
  );
}

export default ItemsGrid;
