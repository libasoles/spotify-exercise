import * as React from "react";

import styles from "./Grid.module.css";
import { ItemProps } from "../../pages/shared/items/ItemsGrid";

export type GridRecipientType = ({ data, className }: ItemProps) => JSX.Element;

interface Props {
  list: any;
  Recipient: GridRecipientType;
}

function Grid({ list, Recipient }: Props): JSX.Element {
  return (
    <div className={styles.grid}>
      {list.map(
        (item: any): JSX.Element => {
          return (
            <Recipient key={item.id} data={item} className={styles.item} />
          );
        }
      )}
    </div>
  );
}

export default Grid;
