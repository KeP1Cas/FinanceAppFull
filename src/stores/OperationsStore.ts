import React from "react";
import { types, flow, Instance, destroy } from "mobx-state-tree";

import { OperationsService } from "services/OperationsService";

/**
 * Example of store
 *
 * usage in component:
 * const OperationsStore = useContext(OperationsStoreContext);
 */

const categories = [
  "Food",
  "Salary",
  "Data",
  "Transport",
  "Home service",
  "Credits",
  "Gifts",
  "Benefit",
  "Aid",
  "Award",
  "Tax",
  "Petrol",
  "Phone",
  "Public service",
  "Kindergarten",
  "Gym",
  "Insurance",
  "Vacation",
  "Clothes",
  "Repairs",
  "Medicine",
  "Entertainment",
  "Travel",
  "Home appliances",
  "Books",
  "Furniture",
];

const DataModel = types.model("DataModel", {
  _userId: types.string,
  _id: types.identifier,
  date: types.string,
  category: types.string,
  type: types.string,
  quantity: types.number,
  description: types.string,
});

export const OperationsStore = types
  .model({
    data: types.array(DataModel),
    isLoading: types.optional(types.boolean, false),
    categories: types.optional(types.array(types.string), categories),
    selectedCategories: types.array(types.string),
    isAuth: types.optional(types.boolean, false),
  })
  .views(self => {
    return {
      get operationFiltersArray(): string[] {
        const uniqueFilters: Set<string> = new Set(
          self.data.map(transaction => {
            return transaction.category;
          }),
        );
        return Array.from(uniqueFilters);
      },
    };
  })
  .actions(self => ({
    fetch: flow(function*() {
      try {
        self.isLoading = true;
        self.data = yield OperationsService.fetch();
        self.isAuth = true;
      } catch (err) {
        // @ts-ignore
        if (err.response?.data.message === "user is not auth") {
          self.isAuth = false;
          localStorage.removeItem("username");
          localStorage.removeItem("token");
        }
        console.error(err);
      } finally {
        self.isLoading = false;
      }
    }),

    addTransaction(transaction: IDataModel) {
      self.data.push(transaction);
    },

    editTransaction(id: string, transaction: IDataModel) {
      const idx = self.data.findIndex(el => el._id === id);
      self.data.splice(idx, 1, transaction);
    },

    deleteTransaction(transaction: IDataModel) {
      destroy(transaction);
    },

    addSelectedCategoriesFilter(category: string) {
      if (!self.selectedCategories.includes(category)) {
        self.selectedCategories.push(category);
      }
    },

    removeSelectedCategoriesFilter(category: string) {
      const idx = self.selectedCategories.findIndex(el => el === category);
      self.selectedCategories.splice(idx, 1);
    },

    login() {
      self.isAuth = true;
    },

    logout() {
      self.isAuth = false;
      self.data.splice(0);
      self.selectedCategories.splice(0);
    },
  }));

const Store = OperationsStore.create();

export const OperationsStoreContext = React.createContext(Store);

export interface IDataModel extends Instance<typeof DataModel> {}
