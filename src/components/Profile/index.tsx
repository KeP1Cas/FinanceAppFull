import React from "react";

import { Avatar } from "components/Avatar";
import { Pane } from "components/Pane";

import { designSystem } from "constants/designSystem";

// TODO: add profile avatar image prop

const Profile = ({ name }: { name?: string }) => {
  return (
    <Pane display="flex" alignItems="center" gap={designSystem.indent[16]}>
      <Avatar name={name} />
      <span>{name}</span>
    </Pane>
  );
};

export { Profile };
