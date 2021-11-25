import axios from 'axios';

import { TransactionInput } from '../interfaces/transactionsInterface'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllTransactions = async () => {
  const { data } = await api.get('/transactions');
  
  return data;
}

export const createTransaction = async (transactionInput: TransactionInput) => {
  const { data } = await api.post('/transactions', {
    ...transactionInput
  });

  return data;
}