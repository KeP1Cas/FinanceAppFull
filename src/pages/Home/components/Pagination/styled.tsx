import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Pagination } from "evergreen-ui";
import { designSystem } from "constants/designSystem";

const PaginationStyleSetting = createGlobalStyle`
  .pagination ul > li {
    margin-right: ${designSystem.indent["8"]};

    :first-child,
    :last-child {
      display: none;
    }

    :last-child {
      margin: 0;
    }
  }

  .css-1tyjqqv {
    all: unset;
    font-size: ${designSystem.text.fontSize["14"]};
    color: ${designSystem.color.normal};
    background-color: ${designSystem.bgColor.base10};
    padding: 0 ${designSystem.indent["8"]};
    line-height: ${designSystem.text.lineHeight["24"]};
    border-radius: ${designSystem.borderRadius["4"]};
    cursor: pointer;
  }

  .css-1tyjqqv:focus,
  .css-1tyjqqv:not([disabled]):focus {
    box-shadow: none;
  }

  .css-1tyjqqv:not([disabled]):hover {
    background-color: ${designSystem.bgColor.base10};
  }

  .ub-color_5C85FF {
    transition: 0.5s ease;
    color: ${designSystem.color.pagination};
    background-color: ${designSystem.bgColor.base} !important;
  }
`;

const StyledPagination = styled(({ className, ...restProps }) => (
  <Pagination className={className} {...restProps} />
))``;

export { StyledPagination, PaginationStyleSetting };
