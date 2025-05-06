import React, { Dispatch, SetStateAction } from "react";

import { Sidebar, SidebarPropsType } from "pages/Home/components/Sidebar";
import { TransactionElement } from "pages/Home/containers/SidebarWithCheckedTransactions/TransactionElement";
import { DeleteTransaction } from "pages/Home/containers/DeleteTransaction";
import { ButtonContainer, SidebarContainer, SidebarHeader } from "./styled";

import { IDataModel } from "stores/OperationsStore";

type Props = {
  checkedTransactions: IDataModel[];
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
  setIsDataChanged: Dispatch<SetStateAction<boolean>>;
  setSidebarWithCheckedTransactionsIsShown: Dispatch<SetStateAction<boolean>>;
} & SidebarPropsType;

const SidebarWithCheckedTransactions: React.FC<Props> = ({
  isShown,
  onCloseComplete,
  checkedTransactions,
  setCheckedTransactions,
  setIsDataChanged,
  setSidebarWithCheckedTransactionsIsShown,
}) => {
  return (
    <Sidebar
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      shouldCloseOnOverlayClick={false}
      pointerEvents={true}
    >
      <SidebarHeader>
        <h2>Checked Transactions ID&apos;s</h2>
        <SidebarContainer>
          {checkedTransactions.map(transaction => {
            return (
              <TransactionElement
                transaction={transaction}
                checkedTransactions={checkedTransactions}
                setCheckedTransactions={setCheckedTransactions}
                key={transaction._id}
              >
                {transaction._id}
              </TransactionElement>
            );
          })}
        </SidebarContainer>
        <ButtonContainer>
          <DeleteTransaction
            severalTransactions={checkedTransactions.map(
              transaction => transaction,
            )}
            setIsDataChanged={setIsDataChanged}
            setSidebarWithCheckedTransactionsIsShown={
              setSidebarWithCheckedTransactionsIsShown
            }
            checkedTransactions={checkedTransactions}
            setCheckedTransactions={setCheckedTransactions}
          />
        </ButtonContainer>
      </SidebarHeader>
    </Sidebar>
  );
};

export { SidebarWithCheckedTransactions };
