import React from 'react';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';
import image9 from './images/image9.png';
import image10 from './images/image10.png';
import image11 from './images/image11.png';
import image12 from './images/image12.png';
import image13 from './images/image13.png';
import image14 from './images/image14.png';
import image15 from './images/image15.png';
import image16 from './images/image16.png';

import FinalTaskManager from './FinalTaskManager';
import { Provider } from 'react-redux';
import { storeFinalTaskManager } from './FinalTaskManager/redux/store';
import CreateSelectorFinalTaskManager from './CreateSelectorFinalTaskManager';
import { storeCreateSelectorFinalTaskManager } from './CreateSelectorFinalTaskManager/redux/store';

export default function Lesson14() {
  return (
    <div className="App">
      <h1>Modulul 7 - Lecția 14 - Optimizarea selectorilor</h1>

      <h2>Selectors</h2>
      <p>
        Știm deja că selectorii sunt funcții care încapsulează valorile din
        starea Redux. În forma lor cea mai simplă, ele așteaptă starea curentă
        din Redux și returnează partea doar necesară a acesteia.
      </p>

      <img src={image1} alt="Example" />

      <p>
        În componente vom folosi hook-ul <b>useSelector(selector)</b> căruia îi
        trecem o referință la funcția selector.
      </p>

      <img src={image2} alt="Example" />

      <p>
        Astfel, componentele nu știu despre structura state-ului din Redux și
        despre procesul de calcul al valorii de care au nevoie. Când se schimbă
        structura state-ului, doar selectorii vor trebui actualizați și
        componentele nu vor fi afectate. Acest lucru reduce timpul necesar
        pentru refactorizare și crește rezistența la stres a aplicației.
        Selectorii reduc, de asemenea, duplicarea codului atunci când același
        selector este utilizat în mai multe componente.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-14/selectors.png"
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Abstractizarea</b>
      </p>
      <p>
        În esență, selectorii sunt un strat de abstractizare care minimizează
        comunicarea dintre componente și Redux store.
      </p>

      <h2>Naming</h2>
      <p>
        Până acum nu ne-am gândit la numele selectoarelor. Cu toate acestea,
        unul dintre punctele{' '}
        <a href="https://redux.js.org/style-guide">
          ghidului oficial pentru stilul codului Redux
        </a>
        conține informații despre cele mai bune practici pentru denumirea
        selectorilor. Se recomandă ca numele funcțiilor să înceapă cu{' '}
        <b>select</b>, urmat de o descriere a valorii care trebuie selectată.
      </p>
      <p>
        Acum fișierul funcțiilor selectori arată așa. Am început numele fiecărui
        selector cu prefixul <b>get</b>. Nu este nimic în neregulă cu asta, vel
        mai important aspect fiind uniformitatea codului în proiect.
      </p>

      <img src={image3} alt="Example" />

      <p>
        Cu toate acestea, vom urma cele mai bune practici din ghidul menționat
        mai sus și vom înlocui acel prefix cu <b>select</b>.
      </p>

      <img src={image4} alt="Example" />

      <p>
        După modificarea numelor, trebuie să actualizăm codul pentru importul
        fișierelor în componente.
      </p>

      <img src={image5} alt="Example" />

      <h2>Compound selectors</h2>
      <p>
        În forma sa cea mai simplă, selectorul preia starea curentă și
        returnează partea necesară a acesteia. Selectoarele sunt funcții
        obișnuite, ceea ce înseamnă că putem face și alte acțiuni în afară de a
        returna o valoare. Un selector poate calcula o valoare, folosind părțile
        state-ului și poate returna rezultatul acelui calcul.
      </p>

      <img src={image6} alt="Example" />

      <h3>Lista de sarcini</h3>
      <p>
        În componenta <b>TaskList</b>, avem codul pentru calcularea listei de
        sarcini care se potrivesc cu condiția curentă din filtru. Ceea ce face
        funcția
        <b>getVisibleTasks</b> poate fi făcut de un selector, ascunzând astfel
        de componentă logica de calculare a listei filtrate.
      </p>

      <img src={image7} alt="Example" />

      <p>
        Să declarăm selectorul <b>selectVisibleTasks</b> și să transferăm în el
        logica calculării listei de sarcini filtrate.
      </p>

      <img src={image8} alt="Example" />

      <p>
        Poți observa că folosim alți selectori: <b>selectTasks</b> și
        <b>selectStatusFilter</b> în selectorul <b>selectVisibleTasks</b> pentru
        a obține părțile necesare ale state-ului pentru calculele ulterioare.
      </p>
      <p style={{ color: 'red' }}>
        <b>Terminologie</b>
      </p>
      <p>
        Selectoarele care returnează doar o parte din state, fără calcule
        suplimentare, vor fi numiți <b>«atomici»</b>. Și cele care returnează
        niște valori calculate - <b>«composite»</b>.
      </p>
      <p>
        Acum codul pentru componenta <b>TaskList</b> va fi mult mai simplu,
        deoarece am mutat toată logica în selector. Componenta trebuie doar să
        apeleze selectorul și să folosească valoarea rezultată.
      </p>

      <img src={image9} alt="Example" />

      <h3>Task counter</h3>
      <p>
        Aceeași situație este și în componenta <b>TaskCounter</b> unde se
        calculează numărul de sarcini active și finalizate.
      </p>

      <img src={image10} alt="Example" />

      <p>
        Să declarăm un selector compus <b>selectTaskCount</b> care va folosi un
        selector atomic <b>selectTasks</b> pentru a obține lista tuturor
        sarcinilor și a returna rezultatul calculului.
      </p>

      <img src={image11} alt="Example" />

      <p>
        Acum codul pentru componenta <b>TaskCounter</b> va fi mult mai simplu,
        deoarece am mutat toata logica in selector. Componenta trebuie doar să
        apeleze selectorul și să folosească valoarea rezultată.
      </p>

      <img src={image12} alt="Example" />

      <p>
        Analizează codul din exemplul live care folosește tot materialul învățat
        până acum.
      </p>

      <Provider store={storeFinalTaskManager}>
        <FinalTaskManager />
      </Provider>

      <h2>Optimizarea selectorilor</h2>
      <p>
        Selectorii atomici returnează părți din state, astfel încât valoarea
        returnată este actualizată numai atunci când partea corespunzătoare a
        stării se modifică, chiar dacă acestea sunt date de tip referință, adică
        o matrice sau un obiect. Selectorii compuși returnează valori calculate,
        iar acele calcule sunt executate de fiecare dată când starea este
        actualizată.
      </p>
      <p>
        Dacă acum adăugăm logarea mesajelor în codul selectorului
        <b>selectTaskCount</b>, o vom vedea prea des. Acest selector calculează
        numărul de sarcini active și finalizate, chiar dacă valoarea filtrului
        de stare se modifică, deși acest lucru nu afectează matricea de sarcini
        în Redux state de care depind calculele.
      </p>

      <img src={image13} alt="Example" />

      <p>
        Să adăugăm logarea string-ului în codul selectorului, apoi vom deschide
        tab-ul <b>Console</b> din devTools, vom modifica valoarea filtrului și
        vom vedea rezultatul - mesaje despre calculul numărului total de
        sarcini, în timp ce matricea de sarcini nu este modificată. La fel și cu
        selectorul
        <b>selectVisibleTasks</b>.
      </p>

      <p style={{ color: 'red' }}>
        <b>Concluzie</b>
      </p>
      <p>
        Dacă selectorul returnează date de tip referință sau efectuează unele
        calcule, acesta trebuie optimizat, astfel încât aceste calcule să fie
        declanșate doar atunci când părțile stării utilizate în selector se
        modifică.
      </p>

      <h3>Funcția createSelector</h3>
      <p>
        Procesul de optimizare a selectoarelor se numește <b>memoization</b> -
        salvarea rezultatelor în urma execuției unei funcții pentru a preveni
        recalcularea.
      </p>
      <p>
        Pentru a memoriza un selector, se folosește funcția{' '}
        <b>createSelector</b> care preia o matrice de selectori ale căror valori
        sunt necesare pentru calculele ulterioare, și o funcție convertor în
        care vor fi efectuate toate calculele.
      </p>

      <img src={image14} alt="Example" />

      <ul>
        <li>
          Matricea de selectoare poate conține orice tip de selectori, atât
          atomici, cât și compuși, inclusiv cei memorați.
        </li>
        <li>
          Rezultatele selectoarelor sunt transmise ca argumente funcției
          convertor, în aceeași ordine în care sunt enumerate.
        </li>
        <li>
          Recalculările se efectuează numai dacă valoarea unui parametru se
          modifică, în caz contrar se returnează rezultatul ultimului apel de
          funcție.
        </li>
      </ul>
      <p>
        Să folosim createSelector și să scriem un selector memorat pentru
        calcularea numărului total de sarcini <b>selectTaskCount</b>. Depinde
        doar de matricea de sarcini, așa că folosim un singur selector{' '}
        <b>selectTasks</b>.
      </p>

      <img src={image15} alt="Example" />

      <p>
        Deschide tab-ul <b>Console</b> în devTools, modifică valoarea filtrului
        și vei vedea rezultatul - nu există niciun mesaj despre calculul
        numărului total de sarcini. Acum calculele sunt efectuate numai dacă se
        modifică matricea de sarcini.
      </p>
      <p>
        La fel și cu selectorul listei de activități, în funcție de valoarea
        filtrului <b>selectVisibleTasks</b>. Acesta depinde de lista de sarcini
        și de filtru, așa că folosim selectoarele <b>selectTasks</b> și{' '}
        <b>selectStatusFilter</b>.
      </p>

      <img src={image16} alt="Example" />

      <p>
        Analizează codul din exemplul live a cărui cod folosește selectori
        memorați.
      </p>

      <Provider store={storeCreateSelectorFinalTaskManager}>
        <CreateSelectorFinalTaskManager />
      </Provider>
    </div>
  );
}
