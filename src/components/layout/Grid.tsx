import * as React from "react";
import Masonry from "react-masonry-css";
import { GridRecipientType } from "./ItemsGrid";
import styles from "./Grid.module.css";

interface Props {
  list: any;
  recipient: GridRecipientType;
}

function Grid({ list, recipient }: Props): JSX.Element {
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
          return recipient({ data: item, className: styles.item });
        }
      )}
    </Masonry>
  );
}

export default Grid;
