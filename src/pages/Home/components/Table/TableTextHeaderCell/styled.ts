import styled, { css } from "styled-components";

import { Table } from "evergreen-ui";

import { designSystem } from "constants/designSystem";
import ArrowDown from "assets/icons/arrow-down.svg";

const StyledTableTextHeaderCell = styled(Table.TextHeaderCell)`
  color: ${designSystem.color.light};
  font-weight: ${designSystem.text.weight.bold};
  font-size: ${designSystem.text.fontSize["14"]};
  text-transform: capitalize;

  ${({ sorting }) =>
    sorting &&
    css`
      div > div {
        position: relative;
        cursor: pointer;
        user-select: none;

        :focus {
          color: ${designSystem.text.color.normal};
          outline: none;

          :after {
            content: "";
            transition: 0.3s all ease-in;
            width: 8px;
            height: 6px;
            position: absolute;
            background-image: url(${ArrowDown});
            background-repeat: no-repeat;
            top: 40%;
            transform: translate(-50% -50%);
            margin-left: 8px;
          }
        }
      }
    `}

  ${({ datedirection }) =>
    datedirection &&
    css`
      div > div {
        :focus {
          :after {
            top: 35%;
            transform: rotate(180deg);
          }
        }
      }
    `}

  ${({ quantitydirection }) =>
    quantitydirection &&
    css`
      div > div {
        :focus {
          :after {
            top: 35%;
            transform: rotate(180deg);
          }
        }
      }
    `}
}
`;

export { StyledTableTextHeaderCell };
