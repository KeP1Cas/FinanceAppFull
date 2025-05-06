import React, { Dispatch, SetStateAction, useMemo } from "react";

import { TableCell } from "pages/Home/components/Table/TableCell";
import { TableRow } from "pages/Home/components/Table/TableRow";
import { Checkbox } from "pages/Home/components/Checkbox";
import { TableTextCell } from "pages/Home/components/Table/TableTextCell";
import { TableButtons } from "pages/Home/containers/TableContainer/TableButtons";
import {
  TableLeftSideContainer,
  TableRightSideContainer,
  TableUnionContainer,
  TableCheckboxContainer,
  TableIdContainer,
} from "pages/Home/containers/TableContainer/styled";

import { IDataModel } from "stores/OperationsStore";
import { NoData } from "./styled";

export type TableDataProps = {
  data: IDataModel[];
  checkedTransactions: IDataModel[];
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
  selectTransaction: (transaction: IDataModel) => void;
  setSidebarIsShown: Dispatch<SetStateAction<boolean>>;
  setTransactionInfo: Dispatch<SetStateAction<IDataModel>>;
};

const TableData: React.FC<TableDataProps> = ({
  data,
  checkedTransactions,
  selectTransaction,
  setSidebarIsShown,
  setTransactionInfo,
  setCheckedTransactions,
}) => {
  if (!data.length) {
    return <NoData>Has no data on current filter and date settings</NoData>;
  }

  return (
    <>
      {data && (
        <>
          {useMemo(
            () =>
              data.map((transaction: IDataModel) => {
                const checked = checkedTransactions.includes(transaction);
                const onChange = () => {
                  selectTransaction(transaction);
                };

                return (
                  <TableRow key={transaction._id}>
                    <TableUnionContainer>
                      <TableLeftSideContainer>
                        <TableCheckboxContainer>
                          <TableCell>
                            <Checkbox checked={checked} onChange={onChange} />
                          </TableCell>
                        </TableCheckboxContainer>
                        <TableIdContainer>
                          <TableCell>
                            <TableTextCell>{transaction._id}</TableTextCell>
                          </TableCell>
                        </TableIdContainer>
                        <TableTextCell>{transaction.date}</TableTextCell>
                        <TableTextCell placeholder={+true} category={+true}>
                          {transaction.category}
                        </TableTextCell>
                      </TableLeftSideContainer>
                      <TableRightSideContainer>
                        <TableTextCell>{transaction.type}</TableTextCell>
                        <TableTextCell quantity={+true}>
                          {transaction.quantity}
                        </TableTextCell>
                        <TableButtons
                          setTransactionInfo={setTransactionInfo}
                          setSidebarIsShown={setSidebarIsShown}
                          transaction={transaction}
                          checkedTransactions={checkedTransactions}
                          setCheckedTransactions={setCheckedTransactions}
                        />
                      </TableRightSideContainer>
                    </TableUnionContainer>
                  </TableRow>
                );
              }),
            [data],
          )}
        </>
      )}
    </>
  );
};

export { TableData };
