import React, { Dispatch, SetStateAction, useContext } from "react";
import { observer } from "mobx-react";

import { TrashButton } from "components/Button/TrashButton";

import { IDataModel, OperationsStoreContext } from "stores/OperationsStore";
import { transactionsAPI } from "services/ApiService";

type Props = {
  transaction?: IDataModel;
  severalTransactions?: IDataModel[];
  setSidebarIsShown?: Dispatch<SetStateAction<boolean>>;
  setIsDataChanged?: Dispatch<SetStateAction<boolean>>;
  setSidebarWithCheckedTransactionsIsShown?: Dispatch<SetStateAction<boolean>>;
  checkedTransactions: IDataModel[];
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
};

const DeleteTransaction: React.FC<Props> = observer(
  ({
    transaction,
    setSidebarIsShown,
    severalTransactions,
    setIsDataChanged,
    setSidebarWithCheckedTransactionsIsShown,
    checkedTransactions,
    setCheckedTransactions,
  }) => {
    const OperationsStore = useContext(OperationsStoreContext);

    const unCheckTransaction = (transaction: IDataModel) => {
      const idx = checkedTransactions.findIndex(el => el === transaction);
      setCheckedTransactions([
        ...checkedTransactions.slice(0, idx),
        ...checkedTransactions.slice(idx + 1),
      ]);
    };

    const removeCategoryFilter = (transaction: IDataModel) => {
      if (
        !OperationsStore.operationFiltersArray.includes(transaction.category)
      ) {
        OperationsStore.removeSelectedCategoriesFilter(transaction.category);
      }
    };

    const onDeleteTransaction = () => {
      if (transaction) {
        transactionsAPI.deleteTransaction(transaction).then(() => {
          unCheckTransaction(transaction);
          OperationsStore.deleteTransaction(transaction);
          removeCategoryFilter(transaction);
          setSidebarIsShown && setSidebarIsShown(false);
        });
      }
    };

    const onDeleteSeveralTransactions = () => {
      if (severalTransactions) {
        Promise.all(
          severalTransactions.map(transaction =>
            transactionsAPI.deleteTransaction(transaction),
          ),
        ).then(() => {
          setCheckedTransactions([]);
          severalTransactions.map(transaction => {
            OperationsStore.deleteTransaction(transaction);
            removeCategoryFilter(transaction);
          });

          setIsDataChanged && setIsDataChanged(prevState => !prevState);
          setSidebarWithCheckedTransactionsIsShown &&
            setSidebarWithCheckedTransactionsIsShown(false);
        });
      }
    };

    if (transaction) {
      return (
        <div onClick={onDeleteTransaction}>
          <TrashButton />
        </div>
      );
    } else {
      return (
        <div onClick={onDeleteSeveralTransactions}>
          <TrashButton />
        </div>
      );
    }
  },
);

export { DeleteTransaction };
