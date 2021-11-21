import { useState, useEffect } from 'react';

import { getAllTransactions, TransactionDataProps } from '../../services/api';

import { Container } from './styles';

interface TransactionProps extends TransactionDataProps {
  id: number
  createdAt: string;
}

export const TransactionsTable = () => {
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
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length && 
            transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR')
                  .format(new Date(transaction.createdAt))
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
