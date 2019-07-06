import * as React from "react";

import styles from "./Header.module.css";
import Logo from "./Header/Logo";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
}

export default Header;
