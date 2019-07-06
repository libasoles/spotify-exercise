import * as React from "react";

import styles from "./Page.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
}

function Page({ children, className }: Props): JSX.Element {
  return (
    <div className={`${styles.page} ${className}`}>
      <main>{children}</main>
    </div>
  );
}

export default Page;
