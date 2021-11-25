import { ReactNode } from 'react';

export interface CreateTransactionDataProps {
  title: string;
  amount: number;
  category: string;
  type: string;
}

export interface TransactionProps extends CreateTransactionDataProps {
  id: number
  createdAt: string;
}
export interface ChildrenProps {
  children: ReactNode
}