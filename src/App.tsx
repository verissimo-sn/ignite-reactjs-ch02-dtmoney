import { useState } from 'react';

import Modal from 'react-modal';

import { Header } from "./components/Header";
import { Dashboad } from "./components/Dashboad";
import { GlobalStyle } from "./styles/global"

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
    <>
      <GlobalStyle/>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboad/>

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}