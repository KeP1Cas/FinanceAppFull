import React, { useContext } from "react";

import { OperationsStoreContext } from "stores/OperationsStore";
import { OperationFiltersItem } from "pages/Home/components/OperationFilters/OperationFiltersItem";
import { Dialog } from "pages/Home/components/Dialog";
import { GlobalStyleTransaction } from "pages/Home/containers/AddTransaction/AddTransactionForm/styled";
import { FiltersCollectionContainer } from "./styled";

import { DialogProps } from "evergreen-ui";

const FiltersCollection: React.FC<DialogProps> = ({
  isShown,
  onCloseComplete,
}) => {
  const OperationsStore = useContext(OperationsStoreContext);

  return (
    <>
      <Dialog
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        title="Filters category"
        preventBodyScrolling={true}
      >
        <GlobalStyleTransaction />
        <FiltersCollectionContainer>
          {OperationsStore.operationFiltersArray.map((filter: string) => {
            return (
              <li key={filter}>
                <OperationFiltersItem
                  isChosen={OperationsStore.selectedCategories.includes(filter)}
                  label={filter}
                  onClick={() => {
                    OperationsStore.selectedCategories.includes(filter)
                      ? OperationsStore.removeSelectedCategoriesFilter(filter)
                      : OperationsStore.addSelectedCategoriesFilter(filter);
                  }}
                />
              </li>
            );
          })}
        </FiltersCollectionContainer>
      </Dialog>
    </>
  );
};

export { FiltersCollection };
