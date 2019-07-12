import * as React from "react";
import Masonry from "react-masonry-css";
import { RecipientType } from "./ItemsGrid";
import styles from "./Grid.module.css";

interface Props<T> {
  list: T[];
  recipient: RecipientType<T>;
}

function Grid<T>({ list, recipient }: Props<T>): JSX.Element {
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
        (item: T): JSX.Element => {
          return recipient({ data: item, className: styles.item });
        }
      )}
    </Masonry>
  );
}

export default Grid;
