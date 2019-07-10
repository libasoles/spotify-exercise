import * as React from "react";

import styles from "./Header.module.css";
import Logo from "./Header/Logo";
import Link from "../../components/layout/Link";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
    </header>
  );
}

export default Header;
