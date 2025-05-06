import React from "react";

import { OperationFiltersSection } from "pages/Home/containers/OperationFiltersSection";
import TableContainer from "pages/Home/containers/TableContainer";

const TableWithFilters = () => {
  return (
    <>
      <OperationFiltersSection />
      <TableContainer />
    </>
  );
};

export { TableWithFilters };
