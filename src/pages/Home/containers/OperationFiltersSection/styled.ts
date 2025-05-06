import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const FiltersContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const FiltersItemContainer = styled.div`
  flex: 1 1 auto;
  ul {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  li {
    margin: ${designSystem.indent["8"]};
    :last-child {
      margin-right: 0;
    }
  }
`;

const AddBtnFilterContainer = styled.div`
  margin-right: ${designSystem.indent["28"]};
  display: flex;
  align-self: center;
`;

const UnionFlexContainer = styled.div`
  display: flex;
`;

const ChooseContainer = styled.div`
  font-size: 20px;
  position: absolute;
  margin-left: 15px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  color: ${designSystem.color.nightBlue};
`;

export {
  FiltersContainer,
  FiltersItemContainer,
  AddBtnFilterContainer,
  UnionFlexContainer,
  ChooseContainer,
};
