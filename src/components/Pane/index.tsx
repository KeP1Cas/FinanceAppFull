import React from "react";
import { Pane as PaneUI, PaneProps } from "evergreen-ui";

const Pane = (props: PaneProps) => {
  return <PaneUI {...props}>{props.children}</PaneUI>;
};

export { Pane };
