import { forwardRef } from 'react';

import styles from '../ForwardRef.module.css';

export const CustomButton = forwardRef((props, ref) => (
  <button className={styles.button} ref={ref}>
    {props.children}
  </button>
));
