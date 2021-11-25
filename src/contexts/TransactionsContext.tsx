import { useState, useEffect, createContext } from 'react';

import { getAllTransactions } from '../services/api';

import { ChildrenProps, TransactionProps } from '../interfaces/transactionsInterface';

export const TransactinsContext = createContext<TransactionProps[]>([]);

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data: any = await getAllTransactions();
        setTransactions(data.transactions);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <TransactinsContext.Provider value={transactions}>
      {children}
    </TransactinsContext.Provider>
  );
}