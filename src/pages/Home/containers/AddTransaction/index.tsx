import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { SubmitHandler } from "react-hook-form";

import { Plus } from "components/Plus";
import { AddTransactionForm } from "pages/Home/containers/AddTransaction/AddTransactionForm";

import { transactionsAPI } from "services/ApiService";
import { OperationsStoreContext } from "stores/OperationsStore";

import { TransactionTypes } from "services/ApiService/types/transactionTypes";

const AddTransaction = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  const [isAddTransactionShown, setIsAddTransactionShown] = useState(false);

  const onSubmitAddTransaction: SubmitHandler<TransactionTypes> = ({
    _userId,
    date,
    description,
    category,
    quantity,
    type,
  }) => {
    transactionsAPI
      .createTransaction({
        _userId,
        type,
        quantity,
        category,
        date,
        description,
      })
      .then(data => {
        OperationsStore.addTransaction(data);
        setIsAddTransactionShown(!!data.__v);
      });
  };

  return (
    <>
      <Plus onClick={() => setIsAddTransactionShown(true)} />
      <AddTransactionForm
        title="Add Transaction"
        isShown={isAddTransactionShown}
        onCloseComplete={() => setIsAddTransactionShown(false)}
        onSubmit={onSubmitAddTransaction}
      />
    </>
  );
});

export { AddTransaction };
