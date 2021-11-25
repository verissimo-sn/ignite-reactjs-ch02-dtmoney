import axios from 'axios';

import { CreateTransactionDataProps } from '../interfaces/transactionsInterface'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllTransactions = async () => {
  const { data } = await api.get('/transactions');
  
  return data;
}

export const createTransaction = async (createTransactionDataProps: CreateTransactionDataProps) => {
  const { data } = await api.post('/transactions', {
    ...createTransactionDataProps
  });

  return data;
}