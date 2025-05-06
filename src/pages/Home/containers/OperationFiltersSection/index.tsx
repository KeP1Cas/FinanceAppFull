import React, { useContext, useState } from "react";
import { observer } from "mobx-react";

import { OperationFilters } from "pages/Home/components/OperationFilters";
import { OperationFiltersItem } from "pages/Home/components/OperationFilters/OperationFiltersItem";
import { OperationFiltersAddButton } from "pages/Home/components/OperationFilters/OperationFiltersAddButton";
import { FiltersCollection } from "pages/Home/containers/OperationFiltersSection/FiltersCollection";
import {
  AddBtnFilterContainer,
  ChooseContainer,
  FiltersContainer,
  FiltersItemContainer,
  UnionFlexContainer,
} from "./styled";

import { OperationsStoreContext } from "stores/OperationsStore";
import Translate from "i18n/messages/translate";

const OperationFiltersSection = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  const [isFiltersCollectionShown, setIsFiltersCollectionShown] = useState(
    false,
  );

  return (
    <>
      {OperationsStore.data && (
        <FiltersContainer>
          <OperationFilters>
            <UnionFlexContainer>
              <FiltersItemContainer>
                {!OperationsStore.selectedCategories.length && (
                  <ChooseContainer>
                    {Translate("filterCategore")}
                  </ChooseContainer>
                )}
                <ul>
                  {OperationsStore.selectedCategories.map((filter: string) => {
                    return (
                      <li key={filter}>
                        <OperationFiltersItem
                          label={filter}
                          onClick={() => {
                            OperationsStore.removeSelectedCategoriesFilter(
                              filter,
                            );
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </FiltersItemContainer>
              <AddBtnFilterContainer>
                <OperationFiltersAddButton
                  onClick={() => {
                    if (!OperationsStore.isLoading) {
                      setIsFiltersCollectionShown(true);
                    }
                  }}
                />
              </AddBtnFilterContainer>
            </UnionFlexContainer>
          </OperationFilters>
        </FiltersContainer>
      )}
      <FiltersCollection
        isShown={isFiltersCollectionShown}
        onCloseComplete={() => setIsFiltersCollectionShown(false)}
      />
    </>
  );
});

export { OperationFiltersSection };
