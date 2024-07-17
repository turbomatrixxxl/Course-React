import { useState, useEffect } from 'react';

import styles from './UseEffectDidMount.module.css';

const UseEffectDidMount = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
  }, []);

  return (
    <button className={styles.button} onClick={() => setValue(value + 1)}>
      Valoarea este: {value}$
    </button>
  );
};

export default UseEffectDidMount;
