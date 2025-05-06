import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { OperationsStoreContext } from "stores/OperationsStore";
import { IncExpContent, Text } from "./styled";
import Translate from "i18n/messages/translate";

const GeneralIncExp = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  const dataExp = OperationsStore.data
    .filter(i => i.type == "Expenses")
    .map(i => i.quantity);
  const dataInc = OperationsStore.data
    .filter(i => i.type == "Income")
    .map(i => i.quantity);

  const generalExp = dataExp.reduce((acc, cur) => acc + cur, 0);
  const generalInc = dataInc.reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <IncExpContent>
        <Text>
          {Translate("totalIncome")}: {generalInc} $
        </Text>
        <Text>
          {Translate("totalExpenses")}: {generalExp} $
        </Text>
      </IncExpContent>
    </>
  );
});

export { GeneralIncExp };
