import styled, { css } from "styled-components";

import { Combobox } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

import { ComboboxRequiredType } from "components/Combobox/";

const StyledCombobox = styled(Combobox)<ComboboxRequiredType>`
  ${({ required }) =>
    required &&
    css`
      box-shadow: 0 0 5px red;
      border-radius: ${designSystem.borderRadius["4"]};
    `}
`;

export { StyledCombobox };
