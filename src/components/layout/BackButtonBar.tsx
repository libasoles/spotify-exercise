import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import styles from "./BackButtonBar.module.css";

type Props = RouteComponentProps<{}>;

function BackButtonBar({ history }: Props): JSX.Element {
  return (
    <nav className={styles.bar}>
      <button onClick={history.goBack} className={styles.button} />
    </nav>
  );
}

export default withRouter(BackButtonBar);
