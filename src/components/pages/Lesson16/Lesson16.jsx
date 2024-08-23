import React from 'react';

import image1 from './images/image1.png';
import image2 from './images/image2.png';

export default function Lesson16() {
  return (
    <div className="App">
      <h1>Modulul 9- Informații adiționale</h1>

      <h2>Portals</h2>
      <p>
        Portalurile oferă o modalitate de a randa elementele copil într-un nod
        DOM care se află în afara ierarhiei DOM din componenta părinte.
      </p>

      <img src={image1} alt="Example" />

      <ul>
        <li>
          Primul argument poate fi un subarbore Virtual DOM de orice
          complexitate.
        </li>
        <li>
          Al doilea argument este nodul DOM în care va fi randat primul
          argument.
        </li>
      </ul>

      <a href="https://legacy.reactjs.org/docs/portals.html">
        Documentația oficială
      </a>

      <h3>Utilizare</h3>

      <img src={image2} alt="Example" />

      <p>
        Un caz tipic de utilizare a portalurilor este atunci când componenta
        părinte are <b>overflow: hidden</b> sau <b>z-index</b>, iar componenta
        secundară trebuie să «părăsească» vizual containerul. De exemplu, pentru
        ferestre modale sau pop-up-uri.
      </p>
      <p>
        Chiar dacă portalul poate fi oriunde în arborele DOM, acesta se comportă
        ca un element copil React. Lucruri precum props sau context funcționează
        la fel, indiferent dacă elementul copil este un portal deoarece portalul
        încă există în arborele de componente React, indiferent de poziția sa în
        arborele DOM.
      </p>
      <p>
        Același lucru este valabil și pentru event bubbling. Un eveniment
        declanșat în interiorul portalului se va propaga la strămoși în arborele
        React, chiar dacă aceștia nu sunt strămoși în arborele DOM.
      </p>
    </div>
  );
}
