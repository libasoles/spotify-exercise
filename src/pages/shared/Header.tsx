import * as React from "react";

import styles from "./Header.module.css";
import Logo from "./Logo";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
}

export default Header;
