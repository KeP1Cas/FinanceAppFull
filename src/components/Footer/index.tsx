import React from "react";

import { Pane } from "components/Pane";
import { StyledText } from "./styled";

import { designSystem } from "constants/designSystem";

const Footer = () => {
  const year = new Date().getFullYear();
  //add href
  return (
    <footer>
      <Pane
        padding={designSystem.size[16]}
        display="flex"
        justifyContent="center"
      >
        <StyledText>
          <a type="email" href="">
            © {year}
          </a>
        </StyledText>
      </Pane>
    </footer>
  );
};

export { Footer };
