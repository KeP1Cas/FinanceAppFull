export type TransactionTypes = {
  _userId: string;
  date: string;
  category: string;
  type: string;
  quantity: number;
  description: string;
};

export type EditTransactionType = {
  _userId: string;
  _id: string;
  date: string;
  category: string;
  type: string;
  quantity: number;
  description: string;
};
