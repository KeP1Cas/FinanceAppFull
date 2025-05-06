import React, { useState } from "react";

import { TableHead } from "pages/Home/components/Table/TableHead";
import { TableHeaderCell } from "pages/Home/components/Table/TableHeaderCell";
import { Checkbox } from "pages/Home/components/Checkbox";
import { TableTextHeaderCell } from "pages/Home/components/Table/TableTextHeaderCell";
import {
  TableLeftSideContainer,
  TableRightSideContainer,
  TableUnionContainer,
  TableIdContainer,
  TableCheckboxContainer,
} from "pages/Home/containers/TableContainer/styled";

type Props = {
  globalCheckbox: boolean;
  selectAllTransactions: () => void;
  dateSorting: () => void;
  quantitySorting: () => void;
};

const TableHeader: React.FC<Props> = ({
  globalCheckbox,
  selectAllTransactions,
  dateSorting,
  quantitySorting,
}) => {
  const [dateDirection, setDateDirection] = useState(false);
  const [quantityDirection, setQuantityDirection] = useState(false);

  const onChange = () => {
    selectAllTransactions();
  };

  return (
    <>
      <TableHead>
        <TableUnionContainer>
          <TableLeftSideContainer>
            <TableCheckboxContainer>
              <TableHeaderCell>
                <Checkbox checked={globalCheckbox} onChange={onChange} />
              </TableHeaderCell>
            </TableCheckboxContainer>
            <TableIdContainer>
              <TableTextHeaderCell>ID</TableTextHeaderCell>
            </TableIdContainer>
            <TableTextHeaderCell
              sorting={+true}
              onClick={() => {
                dateSorting();
                setDateDirection(prevState => !prevState);
              }}
              tabIndex={0}
              datedirection={+dateDirection}
            >
              Date
            </TableTextHeaderCell>
            <TableTextHeaderCell>Category</TableTextHeaderCell>
          </TableLeftSideContainer>
          <TableRightSideContainer>
            <TableTextHeaderCell>Type</TableTextHeaderCell>
            <TableTextHeaderCell
              sorting={+true}
              onClick={() => {
                quantitySorting();
                setQuantityDirection(prevState => !prevState);
              }}
              tabIndex={0}
              quantitydirection={+quantityDirection}
            >
              Quantity
            </TableTextHeaderCell>
            <TableTextHeaderCell />
          </TableRightSideContainer>
        </TableUnionContainer>
      </TableHead>
    </>
  );
};

export { TableHeader };
