import React from "react";

import { PaneProps, Spinner, SpinnerProps } from "evergreen-ui";
import { PlaceholderContainer } from "./styled";

type Props = {} & PaneProps & SpinnerProps;

const Placeholder: React.FC<Props> = ({ width, ...props }) => {
  return (
    <PlaceholderContainer {...props}>
      <Spinner width={width} />
    </PlaceholderContainer>
  );
};

export { Placeholder };
