import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { SubmitHandler } from "react-hook-form";

import { EditButton } from "components/Button/EditButton";
import { EditTransactionForm } from "pages/Home/containers/EditTransaction/EditTransactionForm";

import { OperationsStoreContext } from "stores/OperationsStore";

import { transactionsAPI } from "services/ApiService";
import { EditTransactionType } from "services/ApiService/types/transactionTypes";
import { SidebarEditTransactionPropsType } from "pages/Home/containers/SidebarWithTransaction/SidebarButtons";

const EditTransaction: React.FC<SidebarEditTransactionPropsType> = observer(
  ({ transaction, setIsDataChanged }) => {
    const OperationsStore = useContext(OperationsStoreContext);

    const [isEditTransactionShown, setIsEditTransactionShown] = useState(false);

    const onSubmitEditTransaction: SubmitHandler<EditTransactionType> = ({
      _userId,
      _id,
      date,
      description,
      category,
      quantity,
      type,
    }) => {
      transactionsAPI
        .editTransaction({
          _userId,
          _id,
          date,
          description,
          category,
          quantity,
          type,
        })
        .then(data => {
          OperationsStore.editTransaction(transaction._id, data);
          setIsDataChanged(prevState => !prevState);
          setIsEditTransactionShown(!!data.__v);
        });
    };

    return (
      <>
        <EditButton onClick={() => setIsEditTransactionShown(true)} />
        <EditTransactionForm
          title="Edit Transaction"
          isShown={isEditTransactionShown}
          onCloseComplete={() => setIsEditTransactionShown(false)}
          transactionInfo={transaction}
          onSubmit={onSubmitEditTransaction}
        />
      </>
    );
  },
);

export { EditTransaction };
