import { useState } from 'react';
import Modal from '../Modal';

import styles from '../ComponentASimple/ComponentASimple.module.css';

export default function ComponentBSimple() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(isModalOpen);

  return (
    <>
      <button className={styles.button} onClick={openModal}>
        Open modal B-simplu
      </button>
      <Modal
        isModalVisible={isModalOpen}
        handleModalclose={() => closeModal()}
        children={'B-simplu'}
      />
    </>
  );
}
