import { useState} from 'react';
import Modal from 'react-modal';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export const Header = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>

        <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  );
}