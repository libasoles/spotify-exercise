import * as React from "react";
import Link from "./Link";
import Masonry from "react-masonry-css";
import { GridRecipientType } from "./ItemsGrid";
import styles from "./Grid.module.css";

interface Props {
  list: any;
  Recipient: GridRecipientType;
}

function Grid({ list, Recipient }: Props): JSX.Element {
  const masonryColumns = {
    default: 5,
    1100: 2,
    700: 2,
    500: 1,
  };

  return (
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
  );
}

export default Grid;
