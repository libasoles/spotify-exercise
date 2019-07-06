import * as React from "react";

import styles from "./Link.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  to: string;
  className: string;
}

function Link({ to, children, className }: Props): JSX.Element {
  return (
    <a href={to} className={`${styles.link} ${className}`}>
      {children}
    </a>
  );
}

export default Link;
