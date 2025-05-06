import Translate from "i18n/messages/translate";
import React from "react";
import { BudgetSwitcherButton } from "./styled";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggle: boolean;
  primary?: boolean;
};

const BudgetSwitcher: React.FC<Props> = ({ onClick, toggle, primary }) => {
  return (
    <BudgetSwitcherButton onClick={onClick} primary={primary}>
      {toggle ? Translate("expenses") : Translate("income")}
    </BudgetSwitcherButton>
  );
};

export default BudgetSwitcher;
