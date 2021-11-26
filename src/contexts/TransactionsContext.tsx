import { useState, useEffect, createContext } from 'react';

import { createTransaction, getAllTransactions } from '../services/api';

import { ChildrenProps, Transaction, TransactionInput, TransactionsContextData } from '../interfaces/transactionsInterface';

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider = ({ children }: ChildrenProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const { data, status } = await getAllTransactions();
      setTransactions(data.transactions);

      if(status !== 200) {
        console.log('err -> getAllTransactions');
        return;
      }
    })();
  }, []);
  

  const createNewTransaction = async (newTransactionData: TransactionInput) => {
    const { data, status } = await createTransaction(newTransactionData);
    
    setTransactions([...transactions, data.transaction]);

    return { status, data };
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}