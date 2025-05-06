import React from "react";
import { Avatar as AvatarUI } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

const Avatar = ({ name }: { name?: string }) => {
  return <AvatarUI size={designSystem.size[32]} name={name} />;
};

export { Avatar };
