import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

import { SideSheet } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

type Props = {
  pointerEvents: boolean;
};

const SidebarStyleSetting = createGlobalStyle<Props>`
  .css-xeqldi {
    :before {
      background-color: transparent;
    }
  }
  .css-yrjgl1 {
    background: ${designSystem.bgColor.white};
    box-shadow: 0 0 15px ${designSystem.bgColor.light};
  }
  .css-4gyzyg {
    fill: ${designSystem.color.normal};
  }
  .ub-bg-clr_white {
    background-color: ${designSystem.bgColor.white};
  }

  ${({ pointerEvents }) =>
    pointerEvents &&
    css`
      .css-xeqldi {
        pointer-events: none;
        :before {
          background-color: transparent;
        }
        div {
          pointer-events: all;
        }
      }
    `}
`;

const StyledSidebar = styled(({ className, ...restProps }) => (
  <SideSheet className={className} {...restProps} />
))``;

export { SidebarStyleSetting, StyledSidebar };
