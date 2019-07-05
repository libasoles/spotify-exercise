import * as React from "react";

import styles from "./Title.module.css";

interface Props {
  children: any;
  className?: string;
}

function Title({ children, className }: Props): JSX.Element {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
}

export default Title;
