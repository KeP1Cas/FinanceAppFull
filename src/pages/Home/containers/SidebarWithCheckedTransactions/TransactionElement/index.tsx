import React, { Dispatch, SetStateAction } from "react";

import { TransactionElementStyle } from "./styled";

import { IDataModel } from "stores/OperationsStore";

type Props = {
  transaction: IDataModel;
  checkedTransactions: IDataModel[];
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
};

const TransactionElement: React.FC<Props> = ({
  children,
  checkedTransactions,
  setCheckedTransactions,
  transaction,
}) => {
  const onClickHandler = () => {
    const idx = checkedTransactions.findIndex(el => el._id === transaction._id);

    setCheckedTransactions([
      ...checkedTransactions.slice(0, idx),
      ...checkedTransactions.slice(idx + 1),
    ]);
  };

  return (
    <TransactionElementStyle onClick={onClickHandler}>
      {children}
    </TransactionElementStyle>
  );
};

export { TransactionElement };
