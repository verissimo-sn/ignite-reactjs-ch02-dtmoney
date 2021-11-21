import axios from 'axios';

interface TransactionDataProps {
  title: string;
  value: number;
  category: string;
  type: string;
}

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTransaction = async (data: TransactionDataProps) => {
  const result = await api.post('/transactions', {
    ...data
  });

  return result.data;
}