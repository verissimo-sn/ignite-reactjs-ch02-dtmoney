import axios from 'axios';

import { TransactionInput } from '../interfaces/transactionsInterface'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllTransactions = async () => {
  const response = await api.get('/transactions');

  return { status: response.status, data: response.data as any}
}

export const createTransaction = async (transactionInput: TransactionInput) => {
  const response = await api.post('/transactions', {
    ...transactionInput
  });

  return { status: response.status, data: response.data as any };
}