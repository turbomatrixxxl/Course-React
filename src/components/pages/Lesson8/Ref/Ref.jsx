import { useState, useRef, useEffect } from 'react';

import styles from './Ref.module.css';

const Ref = () => {
  const [value, setValue] = useState(0);
  const [label, setLabel] = useState('null');

  const btnRef = useRef(false);

  // Va fi null la prima randare
  console.log(`Va fi null la prima randare: ${nul()}`);

  function nul() {
    if (!btnRef.current) {
      return 'null';
    }
    return;
  }

  useEffect(() => {
    // Efectul este executat după montare,
    // deci va fi întotdeauna o referință la elementul DOM
    console.log(`Efectul este executat după montare: ${btnRef.current}`);
  }, []);

  const handleClick = () => {
    // Click-urile vor fi după montarea elementului,
    // deci va fi întotdeauna o referință la elementul DOM
    setValue(value + 2);
    console.log(
      `Click-urile vor fi după montarea elementului: ${btnRef.current}`
    );
  };

  function handleRefValue() {
    btnRef.current = !btnRef.current;
    setLabel(`${btnRef.current}`);
    console.log(`Click pentru schimbare valoare ref: ${label}`);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => handleRefValue()}>
        Update value 'true' or 'false' of ref(value)
      </button>
      <span className={styles.span}>{label}</span>
      <span className={styles.span}>{value}</span>
      <button className={styles.button} ref={btnRef} onClick={handleClick}>
        Button with ref '+2'
      </button>
    </div>
  );
};

export default Ref;
