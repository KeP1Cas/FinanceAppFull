import React, { Dispatch, SetStateAction } from "react";

import { Sidebar, SidebarPropsType } from "pages/Home/components/Sidebar";
import {
  SidebarButtons,
  SidebarDeleteTransactionPropsType,
} from "pages/Home/containers/SidebarWithTransaction/SidebarButtons";
import { SidebarCard } from "./styled";

import { IDataModel } from "stores/OperationsStore";

type Props = {
  transactionInfo: IDataModel;
  setIsDataChanged: Dispatch<SetStateAction<boolean>>;
  setSidebarIsShown: Dispatch<SetStateAction<boolean>>;
} & SidebarPropsType &
  SidebarDeleteTransactionPropsType;

const SidebarWithTransaction: React.FC<Props> = ({
  isShown,
  preventBodyScrolling,
  onCloseComplete,
  transactionInfo,
  pointerEvents,
  setIsDataChanged,
  setSidebarIsShown,
  checkedTransactions,
  setCheckedTransactions,
}) => {
  const cardFields = [
    { title: "ID", data: transactionInfo._id },
    { title: "Date", data: transactionInfo.date },
    { title: "Category", data: transactionInfo.category },
    { title: "Type", data: transactionInfo.type },
    { title: "Quantity", data: transactionInfo.quantity },
    { title: "Description", data: transactionInfo.description },
  ];

  return (
    <Sidebar
      isShown={isShown}
      preventBodyScrolling={preventBodyScrolling}
      onCloseComplete={onCloseComplete}
      pointerEvents={pointerEvents}
    >
      <SidebarCard>
        {cardFields.map(field => (
          <p key={field.title}>
            {field.title} - {field.data}
          </p>
        ))}
        <SidebarButtons
          checkedTransactions={checkedTransactions}
          setCheckedTransactions={setCheckedTransactions}
          setSidebarIsShown={setSidebarIsShown}
          setIsDataChanged={setIsDataChanged}
          transaction={transactionInfo}
        />
      </SidebarCard>
    </Sidebar>
  );
};

export { SidebarWithTransaction };
