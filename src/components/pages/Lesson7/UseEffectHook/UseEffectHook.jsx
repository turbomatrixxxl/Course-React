import { useState, useEffect } from 'react';

import styles from './UseEffectHook.module.css';

const UseEffectHook = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <div className={styles.container}>
      <span className={styles.span}>You clicked : {value} times</span>
      <button className={styles.button} onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectHook;
