import { ReactNode } from 'react';

export interface Transaction {
  id: number
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export interface ChildrenProps {
  children: ReactNode
}

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface TransactionsContextData {
  transactions: Transaction[];
  createNewTransaction: (transactionInput: TransactionInput) => Promise<ResponseStatus>;
}

interface ResponseStatus {
  status: number;
  data?: Transaction;
}