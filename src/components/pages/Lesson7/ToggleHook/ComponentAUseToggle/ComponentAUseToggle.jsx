import React from 'react';
import Modal from '../Modal';
import { useToggle } from 'hooks/useToggle';

import styles from '../ComponentASimple/ComponentASimple.module.css';

export default function ComponentAUseToggle() {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button className={styles.button} onClick={open}>
        Open modal A useToggle
      </button>

      <Modal
        isModalVisible={isOpen}
        handleModalclose={() => close()}
        children={'A-useToggle'}
      />
    </>
  );
}
