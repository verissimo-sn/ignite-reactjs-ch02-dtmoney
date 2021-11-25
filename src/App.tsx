import { useState } from 'react';
import Modal from 'react-modal'

import { Header } from './components/Header';
import { Dashboad } from './components/Dashboad';
import { NewTransactionModal } from './components/NewTransactionModal';

import {TransactionsProvider } from './contexts/TransactionsContext';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboad/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}