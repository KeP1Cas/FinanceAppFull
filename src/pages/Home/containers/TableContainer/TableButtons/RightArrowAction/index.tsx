import React, { Dispatch, SetStateAction, useEffect } from "react";

import { RightArrowButton } from "components/Button/RightArrowButton";

import { IDataModel } from "stores/OperationsStore";

export type RightArrowPropsType = {
  transaction: IDataModel;
  setSidebarIsShown: Dispatch<SetStateAction<boolean>>;
  setTransactionInfo: Dispatch<SetStateAction<IDataModel>>;
};

const RightArrowAction: React.FC<RightArrowPropsType> = ({
  transaction,
  setSidebarIsShown,
  setTransactionInfo,
}) => {
  useEffect(() => {
    setTransactionInfo(transaction);
  }, [transaction]);

  const onClick = () => {
    setSidebarIsShown(true);
    setTransactionInfo(transaction);
  };

  return <RightArrowButton onClick={onClick} />;
};

export { RightArrowAction };
