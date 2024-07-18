import React, { useState } from 'react';

import styles from './SomeProps.module.css';

export default function SomeProps({ someProp }) {
  const planets = ['Earth', 'Mars', 'Jupiter', 'Venus'];
  const query = '';
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = planets.filter(planet => planet.includes(query));

  return (
    <div className={styles.container}>
      <div className={styles.someProp}>Some prop: {someProp}</div>
      <button className={styles.button} onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div>
        <div className={styles.container}>
          {filteredPlanets.map(planet => (
            <div className={styles.planet} key={planet}>
              {planet}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
