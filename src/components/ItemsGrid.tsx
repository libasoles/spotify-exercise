import * as React from "react";

import styles from "./ItemsGrid.module.css";
import Title from "./Title";
import Link from "./Link";

export interface ItemProps {
  data: any;
  className: string;
}

interface Props {
  title?: string;
  list: any;
  Recipient({ data, className }: ItemProps): JSX.Element;
  seeMoreLink: string;
}

function ItemsGrid({
  title,
  list,
  Recipient,
  seeMoreLink,
}: Props): JSX.Element {
  return (
    <section className={styles.container}>
      {title && <Title className={styles.row}>{title}</Title>}

      <div className={styles.grid}>
        {list.map(
          (item: any): JSX.Element => {
            return (
              <Recipient key={item.id} data={item} className={styles.item} />
            );
          }
        )}
      </div>

      {seeMoreLink && (
        <Link to={seeMoreLink} className={styles.row}>
          See more
        </Link>
      )}
    </section>
  );
}

export default ItemsGrid;
