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

import styles from './Lesson8.module.css';
import { UserMenu } from './UserContext/userMenu';
import { UserProvider } from './UserContext/userContext';
import Ref from './images/Ref';
import MissingReact from './MissingReact';
import Player from './Player';
import ForwardRef from './ForwardRef';
import WithoutMemo from './WithoutMemo';
import SomeProps from './SomeProps';
import SomePropsMemo from './SomePropsMemo';

export default function Lesson8() {
  return (
    <div className="App">
      <h1>Modulul 4 - Lecția 8 - React hooks</h1>

      <h2>Context și useContext</h2>
      <p>
        Datele sunt transmise de sus în jos prin props, dar acest lucru poate fi
        incomod pentru anumite date globale care sunt solicitate de multe
        componente la diferite niveluri ale aplicației (localization, design
        theme, starea autorizării etc.).
      </p>

      <img src={image1} alt="bubbles" />

      <p>
        Contextul oferă o modalitate de a transmite datele adânc în componentele
        arborelui, fără a fi nevoie să le transmitem manual în mod explicit prin
        props, către toate componentele intermediare la fiecare nivel.
      </p>
      <p style={{ color: 'red' }}>
        <b>ATENŢIE</b>
      </p>
      <p>
        Nu folosi contextul pentru a evita parsarea props-urilor pe câteva
        niveluri. Acest mecanism este conceput pentru o gamă restrânsă de
        sarcini.
      </p>
      <a href="https://legacy.reactjs.org/docs/context.html">
        Context API documentation
      </a>

      <h3>Funcția createContext()</h3>

      <p>
        <b>
          import &#123;createContext&#125; from "react"; <br />
          const MyContext = <br />
          createContext(defaultValue);
        </b>
      </p>
      <ul>
        <li>
          Creează un obiect context care conține o pereche de componente:
          <b>&lt;Context.Provider&gt;</b> (furnizor) și{' '}
          <b>&lt;Context.Consumer&gt;</b>
          (consumator).
        </li>
        <li>
          La randare, consumatorul va citi valoarea curentă a contextului de la
          cel mai apropiat furnizor, în sus, pe arborele componentelor.
        </li>
        <li>
          Argumentul <b>defaultValue</b> este folosit de consumator dacă nu are
          un furnizor corespunzător deasupra lui în arbore. În practică, putem
          să o omitem pentru că nu are sens să accesăm un context care nu
          există.
        </li>
      </ul>

      <h3>Componenta &lt;Provider&gt;</h3>
      <p>
        Permite consumatorilor să se aboneze la schimbările de context. Este
        folosit pentru a crea și transmite un context.
      </p>

      <img className={styles.image} src={image2} alt="printscreen" />

      <ul>
        <li>
          Acceptă props <b>value</b> - valoarea contextului, care va fi
          transmisă copiilor-consumatori ai acestui context.
        </li>
        <li>
          Permite consumatorilor să se aboneze la schimbările de context,
          indiferent de adâncimea suprapunerii.
        </li>
        <li>Un singur furnizor poate fi asociat cu mai mulți consumatori.</li>
        <li>Furnizorii pot fi îmbinați unul în altul.</li>
      </ul>

      <h3>useContext() hook</h3>
      <p>
        Permite accesarea valorii contextului curent. Obține contextul curent
        din cel mai apropiat &lt;Provider&gt; de mai sus, în arbore.
      </p>
      <ul>
        <li>
          Așteaptă un singur argument - o referință către contextul creat.
        </li>
        <li>
          Returnează valoarea contextului celui mai apropiat furnizor, mai sus
          în arbore, pentru acest context.
        </li>
        <li>
          De fiecare dată când valoarea contextului este actualizată, componenta
          dependentă execută un re-render cu noua valoare.
        </li>
      </ul>

      <h4>Custom context hook</h4>
      <p>
        Nu este prea convenabilă importarea unei referințe la obiectul context,
        de fiecare dată când e nevoie de acesta. Prin urmare, se face un hook
        personalizat pentru a accesa contextul.
      </p>
      <p>
        <b>
          import &#123;(createContext, useContext)&#125; from "react"; <br />
          <br />
          const MyContext = createContext(); <br />
          <br /> Vom importa și folosi acest hook în componente <br /> export
          const useMyContext = () =&gt; useContext(MyContext);
        </b>
      </p>

      <h3>Contextul utilizatorului</h3>
      <p>
        Să scriem un context pentru stocarea informațiilor despre starea curentă
        a utilizatorului - starea de login și a informațiilor personale.
      </p>
      <p>
        <b>
          import &#123;(createContext, useContext)&#125; from "react"; <br />
          <br />
          const userContext = createContext(); <br />
          <br />
          export const useUser = () =&gt; useContext(userContext);
        </b>
      </p>
      <p>
        Acoperim întregul arbore de componente cu un furnizor. Acest lucru se
        poate face în componenta App sau chiar direct în fișierul index.js.
      </p>

      <img className={styles.image} src={image3} alt="printscreen" />

      <p>
        Să adăugăm o componentă de meniu a utilizatorului, suprapusă în
        &lt;App&gt;. În ea vom obține valoarea contextului și vom afișa numele
        utilizatorului.
      </p>

      <img className={styles.image} src={image4} alt="printscreen" />

      <p>
        Să folosim hook-ul nostru personalizat, useUser, pentru a accesa
        valoarea contextului.
      </p>

      <img className={styles.image} src={image6} alt="printscreen" />
      {/* <img className={styles.image} src={image5} alt="printscreen" /> */}

      <h3>Custom provider component</h3>
      <p>
        Momentan, valoarea contextului nu este dinamică. Utilizatorul se poate
        autentifica și deconecta și astfel, vom stoca acest lucru în starea
        componentei. În plus, sunt necesare metode pentru a-l modifica. Să creăm
        o componentă &lt;UserProvider&gt; de furnizor personalizată în care vom
        ascunde logica lucrului cu state-ul.
      </p>

      <img className={styles.image} src={image7} alt="printscreen" />

      <p>
        Acoperim întregul arbore de componente cu un furnizor personalizat.
        Acest lucru se poate face în componenta App sau direct în fișierul
        index.js.
      </p>

      <img className={styles.image} src={image8} alt="printscreen" />

      <p>
        În continuare, componenta &lt;App&gt; randează componenta de meniu a
        utilizatorului.
      </p>

      <img className={styles.image} src={image9} alt="printscreen" />

      <p>
        Folosim <b>useUser</b> pentru a accesa valoarea contextului
        utilizatorului.
      </p>

      <img className={styles.image} src={image5} alt="printscreen" />

      <p style={{ color: 'red' }}>
        <b>ALL TOGETHER</b>
      </p>
      <p>
        Rezultatul tuturor pașilor de construire a unui context de utilizator
        poate fi văzut în exemplul de mai jos.
      </p>

      <UserProvider>
        <UserMenu />
      </UserProvider>

      <h2>useRef hook</h2>
      <p>
        References permit accesul direct la nodurile DOM sau la elementele React
        din șablonul unei componente. Sunt folosite atunci când este necesară
        accesarea metodelor și a proprietăților imperative ale unui element.
      </p>
      <ul>
        <li>Focusul pe element în urma unui eveniment, selectarea textului</li>
        <li>Controlul redării de conținut media</li>
        <li>Integrarea cu bibliotecile DOM</li>
        <li>
          Accesarea proprietăților DOM ale căror valori nu pot fi obținute
          altfel - dimensiunile elementelor, valoarea scroll bar-ului etc.
        </li>
      </ul>

      <h3>Crearea</h3>
      <p>
        Referințele sunt create de hook-ul useRef() și atașate elementelor
        React, folosind atributul ref care va stoca o referință la elementul
        DOM.
      </p>

      <img className={styles.image} src={image10} alt="printscreen" />

      <h3>Ciclul de viață a unei referințe</h3>
      <p>
        React setează proprietatea <b>current</b> cu o referință la elementul
        DOM când componenta este montată și <b>null</b> când este demontată,
        astfel încât, valoarea ref este disponibilă numai după montare
        (mounting).
      </p>

      <Ref />

      <h3>Lipsa reactivității</h3>
      <p>
        Ref-urile nu sunt state, ceea ce înseamnă că nu sunt reactive, deci
        modificarea valorii unei referințe nu afectează actualizările
        componentelor și nu provoacă re-rendering.
      </p>

      <MissingReact />

      <p style={{ color: 'red' }}>
        <b>VALOAREA INIȚIALĂ</b>
      </p>
      <p>
        Ref-urile pot fi, de asemenea, folosite pentru stocarea valorilor
        arbitrare care nu se modifică între randările unei componente și nu o
        afectează. Prin urmare, în exemplul anterior, useRef primește o valoare
        inițială a proprietății curent - numărul 0. Această caracteristică este
        utilizată pentru clasa de sarcini atunci când se creează componente mai
        complexe.
      </p>

      <p>
        <b>const valueRef = useRef(0);</b>
      </p>

      <h3>Crearea unui player video simplu</h3>
      <p>
        Să creăm o componentă <b>Player</b> pentru redarea videoclipurilor,
        folosind tag-ul <b>&lt;video&gt;</b>. Pentru a porni și opri redarea,
        vom apela metodele
        <b>HTMLMediaElement.play()</b> și <b>HTMLMediaElement.pause()</b>, unde
        <b>HTMLMediaElement</b> este elementul <b>&lt;video&gt;</b>. Folosim{' '}
        <b>ref</b> pentru a accesa elementul DOM și metodele acestuia.
      </p>

      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />

      <h3>Redirecționare referințelor</h3>
      <p>
        Când folosim ref pe o componentă, prop-ul <b>ref</b> nu este transmisă
        automat. Acest lucru creează probleme atunci când vrem să accesăm un
        element din componentă și nu la componenta în sine. Funcția{' '}
        <b>forwardRef</b> transmite automat elementele din prop-urile primite de
        la componenta părinte către copiii săi.
      </p>

      <ForwardRef children={'<<== This button is focussed !'} />

      <p>
        Această abordare permite să obținem în componenta părinte o referință
        către un element DOM din interiorul unei alte componente. De exemplu,
        creăm o galerie și astfel, putem obține referințe către elemente DOM din
        exterior și să lucrăm cu proprietățile acestora, folosind metoda
        <b>Element.getBoundingClientRect()</b> și altele asemănătoare.
      </p>

      <h2>useMemo hook</h2>
      <p>
        Uneori, componentele trebuie să efectueze calcule costisitoare. De
        exemplu, atunci când lucrăm cu o listă mare de angajați ai unei companii
        și avem un searchbar, componenta ar trebui să filtreze numele
        angajaților la cerere. În astfel de cazuri, putem încerca să îmbunătățim
        performanța componentei, folosind <b>memorizarea</b>.
      </p>
      <p style={{ color: 'red' }}>
        <b>MEMORIZAREA</b>
      </p>
      <p>
        O tehnică de optimizare folosită pentru a accelera programele de
        calculator prin stocarea rezultatelor din apelurile de funcții și
        returnarea unui rezultat din cache, atunci când se repetă aceeași
        acțiune. O funcție memorată «își amintește» rezultatul calculului unei
        funcții dacă setul de argumente este același. Apelurile ulterioare cu
        aceleași valori ale argumentelor returnează rezultatul amintit, însă
        nu-l recalculează.
      </p>
      <p>
        Hook-ul <b>useMemo()</b> folosește conceptul de memorare, adică
        returnează un rezultat stocat (în cache) al unui calcul. Acest lucru
        poate îmbunătăți performanța aplicației dacă este utilizat pentru a
        preveni calculele costisitoare la fiecare randare.
      </p>
      <p>
        <b>
          const memoizedValue = React.useMemo( <br />
          compute <br /> () =&gt; computeExpensiveValue(a, b), <br />
          deps <br />
          [a, b] );
        </b>
      </p>
      <p>
        Acest hook ia două argumente - o funcție anonimă care ar trebui să
        returneze o valoare (<b>compute</b>) ce va fi memorată și o serie de
        dependențe (<b>deps</b>). Dacă nu este specificată o matrice de
        dependențe, valoarea va fi calculată pentru fiecare randare, ceea ce
        invalidează complet ideea de a folosi <b>useMemo()</b>.
      </p>
      <p>
        Când componenta este randată pentru prima dată, funcția (<b>compute</b>)
        este apelată și rezultatul acesteia este memorat și returnat ca rezultat
        al hook-ului. Dacă dependențele nu se schimbă în timpul următoarelor
        randări, atunci hook-ul nu apelează funcția, ci pur și simplu returnează
        rezultatul salvat al execuției sale. Dacă vreuna dintre dependențe s-a
        modificat, atunci hook-ul apelează din nou funcția, salvează noua
        valoare și o returnează.
      </p>
      <p style={{ color: 'red' }}>
        <b>REZUMAT</b>
      </p>
      <ul>
        <li>
          Memorizarea este stocarea în cache a unei valori, astfel încât să nu
          fie nevoie să fie recalculată.
        </li>
        <li>
          Memorizarea ar trebui folosită numai pentru calcule costisitoare.
        </li>
        <li>
          <b>useMemo()</b> efectuează calculul valorii cel puțin o dată.
        </li>
        <li>
          <b>useMemo()</b> returnează valoarea stocată.
        </li>
        <li>
          <b>useMemo()</b> declanșează o recalculare numai atunci când una
          dintre dependențe este actualizată.
        </li>
        <li>
          Este obligatoriu să trecem dependențele, altfel nu are rost să folosim
          <b>useMemo()</b>.
        </li>
      </ul>
      <p>
        Există două probleme pe care <b>useMemo()</b> le rezolvă:
      </p>
      <ul>
        <li>Identitatea referinţei</li>
        <li>Calcule costisitoare</li>
      </ul>
      <p>
        Să ne uităm la codul din exemplul următor. State-ul stochează o matrice
        de string-uri și valoarea ce trebuie căutată. Să omitem codul pentru
        adăugarea elementelor în matrice și modificarea valorii interogate.
      </p>

      <img className={styles.image} src={image11} alt="printscreen" />

      <WithoutMemo />

      <p>
        De fiecare dată când se schimbă valoarea lui planets sau query,
        componenta va executa un re-render, ceea ce înseamnă că valoarea lui
        filteredPlanets va fi recalculată. Asta este absolut normal! În acest
        caz, nu este necesară memorarea.
      </p>
      <p>
        Prespunem următorul lucru - componenta &lt;App&gt; conține un state
        suplimentar sau primește un props care nu afectează cu nimic planetele.
      </p>

      <img className={styles.image} src={image12} alt="printscreen" />

      <SomeProps />

      <p>
        Ori de câte ori state-ul clicks sau prop-ul someProp se schimbă,
        componenta va executa un re-render, rezultând recalcularea lui
        filteredPlanets, chiar dacă valorile planets și query nu s-au schimbat!
        Deoarece metoda filter va returna o referință la noua matrice, React va
        trata aceasta ca date complet noi și lista de planete va fi randată din
        nou. În acest caz, merită memorarea calculului filteredPlanets.
      </p>

      <img className={styles.image} src={image13} alt="printscreen" />

      <SomePropsMemo />

      <p>
        Este același lucru și cu operațiile costisitoare, cum ar fi utilizarea
        unei bucle lungi. Calculele costisitoare pot consuma mult timp, ceea ce
        garantează degradarea performanței.
      </p>
      <p style={{ color: 'red' }}>
        <b>MAI MULT NU ÎNSEAMNĂ MAI BINE</b>
      </p>
      <p>
        Nu trebuie să memorați totul, ci dimpotrivă, poate duce la o pierdere a
        performanței, deoarece memorarea ocupă resurse. De cele mai multe ori,
        calculele simple repetate sunt mai ieftine decât memorarea lor. Hook-ul
        <b>useMemo()</b> se folosește limitat. În primul rând, atunci când e
        necesară interacțiunea cu matrici și calcule costisitoare.
      </p>
    </div>
  );
}
