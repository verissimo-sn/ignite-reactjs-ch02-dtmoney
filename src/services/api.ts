import axios from 'axios';

export interface TransactionDataProps {
  title: string;
  amount: number;
  category: string;
  type: string;
}

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllTransactions = async () => {
  const { data } = await api.get('/transactions');
  
  return data;
}

export const createTransaction = async (transactionData: TransactionDataProps) => {
  const { data } = await api.post('/transactions', {
    ...transactionData
  });

  return data;
}