import React from "react";

import { TableWithFilters } from "pages/Home/containers/TableWithFiltres";
import { AddTransaction } from "pages/Home/containers/AddTransaction";

const Home = () => {
  return (
    <>
      <TableWithFilters />
      <AddTransaction />
    </>
  );
};

export { Home };
