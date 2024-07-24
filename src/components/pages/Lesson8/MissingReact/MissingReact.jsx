import { useEffect, useRef } from 'react';

import styles from './MissingReact.module.css';

export const MissingReact = () => {
  const valueRef = useRef(1);

  useEffect(() => {
    // Se execută o singură dată la montare.
    // Actualizările ulterioare ale valorii ref nu vor face componenta să fie actualizată.
    console.log(valueRef.current);
  }, []);

  const handleClick = () => {
    valueRef.current += 1;
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>valueRef.current = {valueRef.current}</span>
      <button className={styles.button} onClick={handleClick}>
        Click to update ref value
      </button>
      <span className={styles.span}>See...? Not working...!</span>
    </div>
  );
};
