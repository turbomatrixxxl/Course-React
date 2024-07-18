import { useState, useRef, useEffect } from 'react';

import styles from './Ref.module.css';

const Ref = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Va fi null la prima randare
  console.log(btnRef.current);

  useEffect(() => {
    // Efectul este executat după montare,
    // deci va fi întotdeauna o referință la elementul DOM
    console.log(btnRef.current);
  });

  const handleClick = () => {
    // Click-urile vor fi după montarea elementului,
    // deci va fi întotdeauna o referință la elementul DOM
    setValue(value + 2);
    console.log(btnRef.current);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setValue(value + 1)}>
        Update value '+1' to trigger re-render
      </button>
      <span className={styles.span}>{value}</span>
      <button className={styles.button} ref={btnRef} onClick={handleClick}>
        Button with ref '+2'
      </button>
    </div>
  );
};

export default Ref;
