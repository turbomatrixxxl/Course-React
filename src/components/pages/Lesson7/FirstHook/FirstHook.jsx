import { useState } from 'react';

import styles from './FirstHook.module.css';

const FirstHook = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <div className={styles.container}>
      <span className={styles.span}>{value}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => setValue(value + 1)}
      >
        Increment value by 1
      </button>
    </div>
  );
};

export default FirstHook;
