import { useEffect, useRef } from 'react';
import CustomButton from './CustomButton';

import styles from './ForwardRef.module.css';

export const ForwardRef = ({ children }) => {
  const btnRef = useRef();

  useEffect(() => {
    console.log(btnRef.current);
    btnRef.current.focus();
  }, []);

  return (
    <div className={styles.container}>
      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
      <span className={styles.span}>{children}</span>
    </div>
  );
};
