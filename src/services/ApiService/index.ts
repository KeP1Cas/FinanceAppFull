import axios from "axios";

import {
  TransactionTypes,
  EditTransactionType,
} from "services/ApiService/types/transactionTypes";
import { IDataModel } from "stores/OperationsStore";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "https://finance-app-backend-a1o9.onrender.com",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export const authAPI = {
  register(username: string, password: string) {
    return fetchClient()
      .post("registration", { username, password })
      .then(response => response.data);
  },

  login(username: string, password: string) {
    return fetchClient()
      .post("login", { username, password })
      .then(response => response.data);
  },
};

export const transactionsAPI = {
  getAllTransactions() {
    return fetchClient()
      .get("transactions")
      .then(response => response.data);
  },

  createTransaction(data: TransactionTypes) {
    return fetchClient()
      .post("transactions", {
        date: data.date,
        category: data.category,
        description: data.description,
        quantity: data.quantity,
        type: data.type,
      })
      .then(response => response.data);
  },

  editTransaction(data: EditTransactionType) {
    return fetchClient()
      .put("transactions", {
        _userId: data._userId,
        _id: data._id,
        date: data.date,
        category: data.category,
        description: data.description,
        quantity: data.quantity,
        type: data.type,
      })
      .then(response => response.data);
  },

  deleteTransaction(transaction: IDataModel) {
    return fetchClient()
      .delete(`transactions?id=${transaction._id}`)
      .then(response => response.data);
  },
};
