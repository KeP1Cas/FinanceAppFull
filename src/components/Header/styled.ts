import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { designSystem } from "constants/designSystem";

const HeaderLinks = styled.ul`
  display: flex;
  gap: ${designSystem.indent[48]};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${designSystem.color.light};

  &.active {
    color: ${designSystem.color.normal};
  }
  span {
    color: ${designSystem.color.normal};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${designSystem.indent["32"]} 0;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${designSystem.indent["86"]};
`;

const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${designSystem.indent["32"]};
`;

export {
  HeaderLinks,
  StyledNavLink,
  HeaderContainer,
  HeaderLeftSide,
  HeaderRightSide,
};
