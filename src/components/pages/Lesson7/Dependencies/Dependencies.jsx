import { useEffect, useState } from 'react';

import styles from './Dependencies.module.css';

const Dependencies = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // ❌ Bad. ESLint will show an error
  //   useEffect(() => {
  //     console.log(firstValue + secondValue);
  //   }, [firstValue]);

  // ✅ Good. All dependencies used inside the effect are specified
  useEffect(() => {
    console.log(firstValue + secondValue);
  }, [firstValue, secondValue]);

  return (
    <>
      <button
        className={styles.button1}
        onClick={() => setFirstValue(firstValue + 1)}
      >
        First: {firstValue}
      </button>
      <button
        className={styles.button2}
        onClick={() => setSecondValue(secondValue + 1)}
      >
        Second: {secondValue}
      </button>
    </>
  );
};

export default Dependencies;
