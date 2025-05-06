import React from "react";

import { SidebarStyleSetting, StyledSidebar } from "./styled";

export type SidebarPropsType = {
  isShown: boolean;
  onCloseComplete?: () => void;
  preventBodyScrolling?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  pointerEvents: boolean;
};

const Sidebar: React.FC<SidebarPropsType> = ({
  pointerEvents,
  children,
  ...restProps
}) => {
  return (
    <StyledSidebar {...restProps}>
      {children}
      <SidebarStyleSetting pointerEvents={pointerEvents} />
    </StyledSidebar>
  );
};

export { Sidebar };
