import { useState, useEffect } from 'react';

import styles from './UseEffectDidUpdate.module.css';

const UseEffectDidUpdate = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    console.log('Updating phase: same when componentDidUpdate runs');
  }, [value]);

  return (
    <button className={styles.button} onClick={() => setValue(value + 1)}>
      value is : {value}$
    </button>
  );
};

export default UseEffectDidUpdate;
