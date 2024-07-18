import React, { useState } from 'react';

import styles from './WithoutMemo.module.css';

export default function WithoutMemo() {
  const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
  const [query, setQuery] = useState('');

  const filteredPlanets = planets.filter(planet => planet.includes(query));

  return (
    <div className={styles.container}>
      {filteredPlanets.map(planet => (
        <div className={styles.planet} key={planet}>
          {planet}
        </div>
      ))}
    </div>
  );
}
