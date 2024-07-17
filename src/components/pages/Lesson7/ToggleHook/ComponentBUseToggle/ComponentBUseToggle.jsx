import React from 'react';
import Modal from '../Modal';
import { useToggle } from 'hooks/useToggle';

import styles from '../ComponentASimple/ComponentASimple.module.css';

export default function ComponentBUseToggle() {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button className={styles.button} onClick={open}>
        Open modal B useToggle
      </button>

      <Modal
        isModalVisible={isOpen}
        handleModalclose={() => close()}
        children={'B-useToggle'}
      />
    </>
  );
}
