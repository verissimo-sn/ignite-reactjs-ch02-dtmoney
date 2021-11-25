import { useState, useEffect, createContext } from 'react';

import { createTransaction, getAllTransactions } from '../services/api';

import { ChildrenProps, Transaction, TransactionInput, TransactionsContextData } from '../interfaces/transactionsInterface';

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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
  

  const createNewTransaction = async (newTransactionData: TransactionInput) => {
    try { 
      await createTransaction(newTransactionData);
      return { status: 'ok', error: null };

    } catch (err) {
      return { status: 'error', error: err as any}
    }
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}