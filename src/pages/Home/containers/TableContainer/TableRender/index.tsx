import React, { useContext } from "react";
import { observer } from "mobx-react";

import { TableBody } from "pages/Home/components/Table/TableBody";
import { Placeholder } from "components/Placeholder";
import {
  TableData,
  TableDataProps,
} from "pages/Home/containers/TableContainer/TableData";

import { OperationsStoreContext } from "stores/OperationsStore";

const TableRender: React.FC<TableDataProps> = observer(({ ...props }) => {
  const OperationsStore = useContext(OperationsStoreContext);

  return (
    <TableBody>
      {OperationsStore.isLoading ? (
        <Placeholder width={150} marginTop={100} />
      ) : (
        <TableData {...props} />
      )}
    </TableBody>
  );
});

export { TableRender };
