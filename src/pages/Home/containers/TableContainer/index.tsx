import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { parse } from "date-fns";

import { Table } from "pages/Home/components/Table";
import { Pagination } from "pages/Home/components/Pagination";
import { TablePreHeader } from "pages/Home/containers/TableContainer/TablePreHeader";
import { TableHeader } from "pages/Home/containers/TableContainer/TableHeader";
import { TableRender } from "pages/Home/containers/TableContainer/TableRender";
import { SidebarWithTransaction } from "pages/Home/containers/SidebarWithTransaction";
import { SidebarWithCheckedTransactions } from "pages/Home/containers/SidebarWithCheckedTransactions";
import { PaginationContainer, TableBodyContainer } from "./styled";

import { IDataModel, OperationsStoreContext } from "stores/OperationsStore";
import { getFirstAndLastDayMonth } from "utils/getDateRange";

const TableContainer = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  // Data
  const [data, setData] = useState<IDataModel[]>([]);
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  // Sorting
  const [directionDateSort, setDirectionDateSort] = useState<boolean>(true);
  const [directionQuantitySort, setDirectionQuantitySort] = useState<boolean>(
    true,
  );
  // Filters
  const [dateFrom, setDateFrom] = useState<Date>(
    getFirstAndLastDayMonth().firstDay,
  );
  const [dateTo, setDateTo] = useState<Date>(getFirstAndLastDayMonth().lastDay);
  const [typeFilters] = useState<string[]>(["Income", "Expenses"]);
  const [checkedTypeFilters, setCheckedTypeFilters] = useState<string[]>([]);
  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  // Checkboxes
  const [checkedTransactions, setCheckedTransactions] = useState<IDataModel[]>(
    [],
  );
  const [globalCheckbox, setGlobalCheckbox] = useState<boolean>(false);
  // Sidebar with transaction info
  const [sidebarIsShown, setSidebarIsShown] = useState<boolean>(false);
  const [transactionInfo, setTransactionInfo] = useState<IDataModel>({
    _userId: "",
    _id: "",
    date: "",
    type: "",
    category: "",
    quantity: 0,
    description: "",
  });
  // Sidebar with checked transactions id
  const [
    sidebarWithCheckedTransactionsIsShown,
    setSidebarWithCheckedTransactionsIsShown,
  ] = useState(false);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

  const setPaginationPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCheckedTransactions([]);
    setGlobalCheckbox(false);
  };

  const slicedTransactions = (data: IDataModel[]) => {
    return data.slice(indexOfFirstTransaction, indexOfLastTransaction);
  };

  const parseStringToDate = (date: string): Date => {
    return parse(date, "dd/MM/yyyy", new Date());
  };

  const isTypeFilterChecked = checkedTypeFilters.length === 1;

  const filteredData = () => {
    const dateFilteredData = OperationsStore.data.filter(data => {
      return (
        parseStringToDate(data.date).getTime() >= dateFrom.getTime() &&
        parseStringToDate(data.date).getTime() <= dateTo.getTime()
      );
    });

    const filteredDataWithoutCategory = OperationsStore.data
      .filter(data => {
        if (isTypeFilterChecked) {
          return data.type === checkedTypeFilters[0];
        }
      })
      .filter(data => {
        return (
          parseStringToDate(data.date).getTime() >= dateFrom!.getTime() &&
          parseStringToDate(data.date).getTime() <= dateTo!.getTime()
        );
      });

    if (!isTypeFilterChecked) {
      // dateFilteredData
      if (!OperationsStore.selectedCategories.length) {
        return dateFilteredData;
      } else {
        // dateFilteredData with category filters
        return dateFilteredData.filter(
          transaction =>
            OperationsStore.selectedCategories.filter(
              category => category === transaction.category,
            ).length !== 0,
        );
      }
    }

    if (!OperationsStore.selectedCategories.length) {
      return filteredDataWithoutCategory;
    } else {
      return filteredDataWithoutCategory.filter(
        // filtered data with category filters
        transaction =>
          OperationsStore.selectedCategories.filter(
            category => category === transaction.category,
          ).length !== 0,
      );
    }
  };

  const selectTransaction = (transaction: IDataModel) => {
    const checkedData = checkedTransactions.includes(transaction);
    if (checkedData) {
      const idx = checkedTransactions.findIndex(el => el === transaction);
      setCheckedTransactions([
        ...checkedTransactions.slice(0, idx),
        ...checkedTransactions.slice(idx + 1),
      ]);
      setGlobalCheckbox(false);
    } else {
      setCheckedTransactions([...checkedTransactions, transaction]);
    }
  };

  const selectAllTransactions = () => {
    const checkedAllData =
      checkedTransactions.length === slicedTransactions(data).length;

    if (checkedAllData) {
      setCheckedTransactions([]);
      setGlobalCheckbox(false);
    } else {
      let transactionsToCheck: IDataModel[] = [];
      slicedTransactions(data).map(transaction => {
        if (!checkedTransactions.includes(transaction)) {
          transactionsToCheck.push(transaction);
        }
      });
      setCheckedTransactions([...checkedTransactions, ...transactionsToCheck]);
      setGlobalCheckbox(true);
    }
  };

  const selectTypeFilters = (id: string) => {
    const checkedCurrentFilter = checkedTypeFilters.includes(id);
    // clear checkboxes
    setCheckedTransactions([]);
    setGlobalCheckbox(false);

    if (checkedCurrentFilter) {
      const idx = checkedTypeFilters.findIndex((el: string) => el === id);
      setCheckedTypeFilters([
        ...checkedTypeFilters.slice(0, idx),
        ...checkedTypeFilters.slice(idx + 1),
      ]);
    } else {
      setCheckedTypeFilters([...checkedTypeFilters, id]);
    }
  };

  const dateSorting = () => {
    if (directionDateSort) {
      setData(
        [...data].sort((a: IDataModel, b: IDataModel) => {
          return (
            parse(a.date, "dd/MM/yyyy", new Date()).getTime() -
            parse(b.date, "dd/MM/yyyy", new Date()).getTime()
          );
        }),
      );
      setDirectionDateSort(false);
    } else {
      setData(
        [...data].sort((a: IDataModel, b: IDataModel) => {
          return (
            parse(b.date, "dd/MM/yyyy", new Date()).getTime() -
            parse(a.date, "dd/MM/yyyy", new Date()).getTime()
          );
        }),
      );
      setDirectionDateSort(true);
    }
    setCheckedTransactions([]);
  };

  const quantitySorting = () => {
    if (directionQuantitySort) {
      setData(
        [...data].sort((a: IDataModel, b: IDataModel) => {
          return a.quantity - b.quantity;
        }),
      );
      setDirectionQuantitySort(false);
    } else {
      setData(
        [...data].sort((a: IDataModel, b: IDataModel) => {
          return b.quantity - a.quantity;
        }),
      );
      setDirectionQuantitySort(true);
    }
    setCheckedTransactions([]);
  };

  // Set Data
  useEffect(() => {
    setData(filteredData());
  }, [filteredData().length, isDataChanged]);

  // Go to first page if has no transactions on current page
  useEffect(() => {
    if (!slicedTransactions(data).length) {
      setCurrentPage(1);
    }
  }, [data.length]);

  // Set total pages
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / transactionsPerPage));
  }, [data.length]);

  // Show sidebar with transactions id's if any checkbox is checked
  useEffect(() => {
    checkedTransactions.length
      ? setSidebarWithCheckedTransactionsIsShown(true)
      : setSidebarWithCheckedTransactionsIsShown(false);
  }, [checkedTransactions.length]);

  // Observe global checkbox to another ones
  useEffect(() => {
    checkedTransactions.length &&
    checkedTransactions.length === slicedTransactions(data).length
      ? setGlobalCheckbox(true)
      : setGlobalCheckbox(false);
  }, [checkedTransactions.length, data.length]);

  return (
    <Table>
      <TablePreHeader
        dateFrom={dateFrom}
        dateTo={dateTo}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        setCheckedTransactions={setCheckedTransactions}
        setGlobalCheckbox={setGlobalCheckbox}
        typeFilters={typeFilters}
        selectTypeFilters={selectTypeFilters}
        checkedTypeFilters={checkedTypeFilters}
      />
      <TableHeader
        globalCheckbox={globalCheckbox}
        selectAllTransactions={selectAllTransactions}
        dateSorting={dateSorting}
        quantitySorting={quantitySorting}
      />
      <TableBodyContainer>
        <TableRender
          data={slicedTransactions(data)}
          checkedTransactions={checkedTransactions}
          selectTransaction={selectTransaction}
          setSidebarIsShown={setSidebarIsShown}
          setTransactionInfo={setTransactionInfo}
          setCheckedTransactions={setCheckedTransactions}
        />
      </TableBodyContainer>
      <PaginationContainer>
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPageChange={setPaginationPage}
        />
      </PaginationContainer>
      <SidebarWithTransaction
        isShown={sidebarIsShown}
        preventBodyScrolling
        onCloseComplete={() => setSidebarIsShown(false)}
        transactionInfo={transactionInfo}
        pointerEvents={false}
        setIsDataChanged={setIsDataChanged}
        setSidebarIsShown={setSidebarIsShown}
        checkedTransactions={checkedTransactions}
        setCheckedTransactions={setCheckedTransactions}
      />
      <SidebarWithCheckedTransactions
        isShown={sidebarWithCheckedTransactionsIsShown}
        onCloseComplete={() => setSidebarWithCheckedTransactionsIsShown(false)}
        pointerEvents={true}
        checkedTransactions={checkedTransactions}
        setCheckedTransactions={setCheckedTransactions}
        setIsDataChanged={setIsDataChanged}
        setSidebarWithCheckedTransactionsIsShown={
          setSidebarWithCheckedTransactionsIsShown
        }
      />
    </Table>
  );
});

export default TableContainer;
