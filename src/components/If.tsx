import * as React from "react";

interface Props {
  condition: boolean | number | string | undefined | null;
  children: JSX.Element[] | JSX.Element | string;
}

function If({ condition, children }: Props): JSX.Element {
  return <>{condition && children}</>;
}

export default If;
