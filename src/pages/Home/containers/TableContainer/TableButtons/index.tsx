import React from "react";

import { DeleteTransaction } from "pages/Home/containers/DeleteTransaction";
import { TableTextCell } from "pages/Home/components/Table/TableTextCell";
import {
  RightArrowAction,
  RightArrowPropsType,
} from "pages/Home/containers/TableContainer/TableButtons/RightArrowAction";
import { TableButtonsContainer } from "./styled";

import { SidebarDeleteTransactionPropsType } from "pages/Home/containers/SidebarWithTransaction/SidebarButtons";

type Props = {} & RightArrowPropsType & SidebarDeleteTransactionPropsType;

const TableButtons: React.FC<Props> = ({
  transaction,
  setSidebarIsShown,
  setTransactionInfo,
  checkedTransactions,
  setCheckedTransactions,
}) => {
  return (
    <TableTextCell>
      <TableButtonsContainer>
        <DeleteTransaction
          checkedTransactions={checkedTransactions}
          setCheckedTransactions={setCheckedTransactions}
          transaction={transaction}
        />
        <RightArrowAction
          setTransactionInfo={setTransactionInfo}
          setSidebarIsShown={setSidebarIsShown}
          transaction={transaction}
        />
      </TableButtonsContainer>
    </TableTextCell>
  );
};

export { TableButtons };
