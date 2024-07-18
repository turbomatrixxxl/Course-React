import React, { useMemo, useState } from 'react';

import styles from './SomePropsMemo.module.css';

export default function SomePropsMemo({ someProp, planets }) {
  planets = ['Earth', 'Mars', 'Jupiter', 'Venus'];
  const query = '';
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = useMemo(
    () => planets.filter(planet => planet.includes(query)),
    [planets, query]
  );

  return (
    <div className={styles.container}>
      <div className={styles.planet}>Some prop: {someProp}</div>
      <button className={styles.button} onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div className={styles.container}>
        {filteredPlanets.map(planet => (
          <div className={styles.planet} key={planet}>
            {planet}
          </div>
        ))}
      </div>
    </div>
  );
}
