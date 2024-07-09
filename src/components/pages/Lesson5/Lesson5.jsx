import React from 'react';
import ErrorBoundary from './Error';

// import styles from './Lesson5.module.css'

function Lesson5() {
  return (
    <div className="App">
      <h1>Modulul 3 - Lecția 5 - Lifecycle</h1>
      <h2>Lifecycle</h2>
      <p>
        Există mai multe etape de viață pentru o componentă -{' '}
        <b>mounting, updating și unmounting</b>. În timpul fiecăreia, metodele
        moștenite de la React.Component sunt apelate pe clasa componentei. Putem
        modifica comportamentul acestora pentru fiecare etapă, adăugând
        funcționalitatea necesară, în cadrul unor reguli stabilite.
      </p>
      <p>
        Există în total șapte metode pentru ciclul de viață a unei componente,
        fără a lua în considerare render și constructor. În practică, pentru
        majoritatea sarcinilor de zi cu zi se folosesc doar trei:
        <b>componentDidMount, componentDidUpdate și componentWillUnmount</b>.
      </p>
      <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
        Diagrama functionare React
      </a>
      <h3>Etapa de mounting</h3>
      <p>
        Următoarele metode sunt apelate în această ordine, atunci când
        componenta este instanțiată și adăugată la DOM.
      </p>
      <p
        style={{
          color: 'red',
        }}
      >
        <b>constructor() &#123;&#125;</b>
      </p>
      <p>
        Se apelează atunci când componenta este instanțiată, înainte să fie
        plasată în DOM.
      </p>
      <ul>
        <li>Inițializează starea inițială a componentei</li>
        <li>Adaugă contextul în metode</li>
        <li>Nu se poate apela aici setState()</li>
        <li>
          În cele mai multe cazuri, specificarea explicită a unui constructor
          este exagerată
        </li>
      </ul>
      <p
        style={{
          color: 'red',
        }}
      >
        <b>
          static getDerivedStateFromProps(nextProps, prevState) &#123;&#125;
        </b>
      </p>
      <ul>
        <li>Această metodă este rar folosită în practică.</li>
        <li>
          Se apelează înainte de render(), la mounting și înainte de toate
          apelurile render, adică după actualizarea de state sau props
        </li>
        <li>
          Poate fi folosit pentru a seta state, în funcție de props , de fiecare
          dată când acestea se schimbă
        </li>
        <li>
          Ar trebui să returneze un obiect cu care să actualizeze starea sau
          null dacă nu trebuie actualizat nimic
        </li>
        <li>Nu are acces la contextul this.</li>
      </ul>
      <p
        style={{
          color: 'red',
        }}
      >
        <b>render() &#123;&#125;</b>
      </p>
      <ul>
        <li>Permite descrierea declarativă a unei interfețe</li>
        <li>Returnează rezultatul expresiilor JSX, subarborele Virtual DOM</li>
        <li>Nu se poate apela aici setState()</li>
      </ul>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>componentDidMount() &#123;&#125;</b>
      </p>
      <ul>
        <li>Este apelat imediat după ce componenta face mounting în DOM</li>
        <li>
          Aici se efectuează solicitări HTTP, se agață custom listeners pe
          evenimente și se efectuează operații pe arborele DOM
        </li>
        <li>
          Apelul de setState() va provoca un re-render în această metodă - acest
          lucru este perfect normal
        </li>
      </ul>

      <h3>Etapa de actualizare</h3>
      <p>
        O actualizare poate fi declanșată de o schimbare în state a componentei
        în sine sau de datele modificate din props transmise acesteia. La
        actualizare, componenta trebuie redată din nou, ceea ce duce la apelarea
        următoarelor metode.
      </p>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>shouldComponentUpdate(nextProps, nextState) &#123;&#125;</b>
      </p>
      <ul>
        <li>Nu este apelată când componenta se inițializează</li>
        <li>
          Este apelată înainte de a face re-render la o componentă deja
          "mounted"
        </li>
        <li>Este necesar exclusiv pentru optimizarea procesului de randare</li>
        <li>
          În mod implicit, render se execută atunci când sunt modificări în
          props sau state
        </li>
        <li>
          Permite compararea vechiului și noului state și props , returnând true
          sau false, iar pe baza acestui rezultat React știe dacă componenta
          trebuie actualizată
        </li>
        <li>
          Dacă returnează false, atunci render() și componentDidUpdate() nu vor
          avea loc
        </li>
        <li>Nu se poate apela setState()</li>
        <li>
          Trebuie folosit cu mare atenție, numai dacă ajută la performanță.
          Astfel, poate duce la un efect opus
        </li>
        <li>
          Ar putea fi înlocuit cu <b>React.PureComponent</b> care va face o
          comparație superficială a datelor din props. Doar dacă ajută la
          performanță.
        </li>
      </ul>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>getSnapshotBeforeUpdate(prevProps, prevState) &#123;&#125;</b>
      </p>

      <ul>
        <li>Această metodă este rar folosită în practică.</li>
        <li>
          Este apelată înainte ca modificările care sunt gata să fie adăugate la
          DOM
        </li>
        <li>
          Poate fi folosit pentru a obține valori DOM pre-actualizare, cum ar fi
          poziția curentă a scroll-bar-ului sau dimensiunea elementului înainte
          de actualizare
        </li>
        <li>
          Ceea ce returnează această metodă va fi transmis ca al treilea
          parametru snapshot în componentDidUpdate()
        </li>
      </ul>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>componentDidUpdate(prevProps, prevState, snapshot) &#123;&#125;</b>
      </p>

      <ul>
        <li>Este apelată imediat după actualizarea componenței în DOM</li>
        <li>Nu este apelată când componenta execută primul render</li>
        <li>
          Se poate apela setState(), însă trebuie să ne asigurăm neapărat că îl
          includem într-o condiție pentru a verifica dacă datele din props sau
          state s-au modificat, astfel încât să nu existe un ciclu nesfârșit de
          rendering (tab-ul va îngheța sau se va închide).
        </li>
        <li>Se pot face cereri HTTP</li>
        <li>
          Dacă componenta are <b>getSnapshotBeforeUpdate()</b>, atunci valoarea
          returnată de aceasta va fi transmisă ca al treilea argument snapshot.
          În caz contrar, valoarea sa va fi undefined
        </li>
      </ul>

      <h3>Etapa de unmounting</h3>
      <p>
        La un moment dat, componenta va fi eliminată din DOM. Aici se va apela
        următoarea metodă.
      </p>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>componentWillUnmount() &#123;&#125;</b>
      </p>

      <ul>
        <li>
          Este apelată înainte ca elementul să fie unmounted (eliminat) și scos
          din DOM
        </li>
        <li>
          Este excelent pentru a curăța anumite elemente: listeners,
          temporizatoare, solicitări HTTP. În caz contrar, vor exista scurgeri
          de memorie
        </li>
        <li>
          Aici nu are sens apelul lui setState(), deoarece componenta nu va face
          re-render
        </li>
      </ul>

      <h3>Gestionarea erorilor de rendering</h3>
      <p>
        React iubește să definească comportamentul întregii aplicații în cazul
        unei erori. Metoda <b>componentDidCatch</b> se declanșează atunci când
        apare o eroare într-o componentă copil. Astfel, permite componentei
        părinte să detecteze erori la copii și să afișeze o interfață de
        rezervă. Prin urmare, atunci când apare o eroare, interfața de UI nu se
        blochează.
      </p>

      <p
        style={{
          color: 'red',
        }}
      >
        <b>componentDidCatch(error, info) &#123;&#125;</b>
      </p>

      <ul>
        <li>Se folosește pentru controlul erorilor</li>
        <li>Captează erori doar la copii, nu și la componenta părinte</li>
        <li>
          <b>error</b> - rezultatul <b>toString()</b> pentru obiectul de eroare
        </li>
        <li>
          <b>info</b> - obiect ce descrie <b>stack trace</b>
        </li>
      </ul>

      <ErrorBoundary />

      <h3>Materiale adiționale</h3>
      <a href="https://legacy.reactjs.org/docs/react-component.html#the-component-lifecycle">
        Documentation - The component lifecycle
      </a>
      <a href="https://legacy.reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">
        Error Handling in React 16+
      </a>
    </div>
  );
}

export default Lesson5;
