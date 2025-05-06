import React, { Dispatch, SetStateAction } from "react";

import { DeleteTransaction } from "pages/Home/containers/DeleteTransaction";
import { EditTransaction } from "pages/Home/containers/EditTransaction";
import { SidebarButtonsContainer } from "./styled";

import { IDataModel } from "stores/OperationsStore";

export type SidebarEditTransactionPropsType = {
  transaction: IDataModel;
  setIsDataChanged: Dispatch<SetStateAction<boolean>>;
};

export type SidebarDeleteTransactionPropsType = {
  checkedTransactions: IDataModel[];
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
};

type Props = {
  setSidebarIsShown: Dispatch<SetStateAction<boolean>>;
} & SidebarEditTransactionPropsType &
  SidebarDeleteTransactionPropsType;

const SidebarButtons: React.FC<Props> = ({
  transaction,
  setIsDataChanged,
  setSidebarIsShown,
  checkedTransactions,
  setCheckedTransactions,
}) => {
  return (
    <SidebarButtonsContainer>
      <EditTransaction
        setIsDataChanged={setIsDataChanged}
        transaction={transaction}
      />
      <DeleteTransaction
        transaction={transaction}
        setSidebarIsShown={setSidebarIsShown}
        checkedTransactions={checkedTransactions}
        setCheckedTransactions={setCheckedTransactions}
      />
    </SidebarButtonsContainer>
  );
};

export { SidebarButtons };
