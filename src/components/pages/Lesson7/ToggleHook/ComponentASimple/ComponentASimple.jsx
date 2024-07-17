import { useState } from 'react';
import Modal from '../Modal';

import styles from './ComponentASimple.module.css';

const ComponentASimple = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(isModalOpen);

  return (
    <>
      <button className={styles.button} onClick={openModal}>
        Open modal A-simplu
      </button>
      <Modal
        isModalVisible={isModalOpen}
        handleModalclose={() => closeModal()}
        children={'A-simplu'}
      />
    </>
  );
};

export default ComponentASimple;
