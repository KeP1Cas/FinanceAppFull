import { transactionsAPI } from "services/ApiService";

class OperationsService {
  static async fetch() {
    const mock: any = await transactionsAPI.getAllTransactions();

    return new Promise(resolve => setTimeout(() => resolve(mock), 1000));
  }
}

export { OperationsService };
