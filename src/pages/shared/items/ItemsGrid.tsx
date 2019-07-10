import * as React from "react";

import styles from "./ItemsGrid.module.css";
import Title from "../../../components/layout/Title";
import Link from "../../../components/layout/Link";
import If from "../../../components/If";
import Masonry from "react-masonry-css";

type GridRecipientType = ({ data, className }: ItemProps) => JSX.Element;

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
  const masonryColumns = {
    default: 5,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
    <section className={styles.container}>
      <If condition={title}>
        <Title className={styles.row}>{title}</Title>
      </If>

      <Masonry
        breakpointCols={masonryColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {list.map(
          (item: any): JSX.Element => {
            return (
              <Link key={item.id} to={`/artist/${item.id}`}>
                <Recipient data={item} className={styles.item} />
              </Link>
            );
          }
        )}
      </Masonry>

      <If condition={link.to}>
        <Link to={link.to} className={styles.row}>
          {link.copy}
        </Link>
      </If>
    </section>
  );
}

export default ItemsGrid;
