import React from "react";

import {
  SegmentedControl as SegmentedControlUI,
  SegmentedControlProps,
} from "evergreen-ui";

const SegmentedControl: React.FC<SegmentedControlProps> = props => {
  return <SegmentedControlUI {...props} />;
};

export { SegmentedControl };
