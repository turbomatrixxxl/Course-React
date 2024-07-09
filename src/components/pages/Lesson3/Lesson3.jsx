import React from 'react';
import Counter from './Counter';
import image1 from './images/image1.png';

// import styles from './Lesson3.module.css';

function Lesson3() {
  return (
    <div className="App">
      <h1>Modulul 2 - Lecția 3 - Events și state</h1>

      <h2>Componente class based</h2>
      <p>
        Dacă trebuie să adăugam dinamică, atunci componentele sunt create ca
        clase, deoarece componentele funcționale (înainte de hooks) sunt
        limitate la capacitatea de a crea markup doar pe baza datelor din props
        primite.
      </p>
      <img src={image1} alt="example" />
      <ul>
        <li>
          O clasă ES6 obișnuită, deci se aplică toate regulile: constructor,
          metode, context (this).
        </li>
        <li>Obligatoriu extinde clasa de bază React.Component. </li>
        <li>
          Acționează ca o funcție care primește props, dar și implementează o
          stare internă privată.
        </li>
        <li>
          Trebuie declarată o metodă obligatorie render() care este apelată
          implicit și returnează un markup JSX
        </li>
        <li>
          De fiecare dată când folosim o componentă class based, React va crea o
          instanță a componentei (clasei), de aceea datele sunt accesate prin
          this.props.
        </li>
        <li>
          Putem defini metode de clasă personalizate și le putem utiliza
          oriunde, inclusiv în interiorul JSX, le putem apela sau transmite
          copiilor ca props.
        </li>
        <li>
          Când starea sau datele din props ale unei componente se modifică,
          aceasta este re-randată (re-render).
        </li>
      </ul>
      <p
        style={{
          color: 'red',
        }}
      >
        <b>
          import React, &#123; Component &#125; from "react"; <br /> class
          MyClassComponent extends Component &#123; <br /> static defaultProps =
          &#123; &#125; ;
          <br />
          static propTypes = &#123;&#125;;
          <br />
          render() &#123;
          <br />
          return &lt;div&gt;Class Component&lt;/div&gt;;
          <br />
          &#125; &#125; <br />
        </b>
      </p>

      <h2>Events</h2>
      <p>
        Pentru un eveniment nativ din browser, React creează un obiect wrapper
        <b>SyntheticEvent</b> Object cu o interfață identică. Acest lucru este
        necesar pentru a oferi cross-browser compatibility și pentru a optimiza
        performanța.
      </p>

      <p>
        <b>Uita-te in consola !!!</b>
      </p>

      <button
        style={{
          background: 'red',
          color: 'white',
          padding: '30px',
          fontSize: '20px',
        }}
        onClick={event => console.log(event)}
      >
        Click me!
      </button>

      <ul>
        <li>
          Adăugarea unui handler de evenimente cu EventTarget.addEventListener()
          nu este folosit aproape niciodată, excepțiile fiind rare.
        </li>
        <li>
          Props events nu sunt o excepție și vor fi denumite folosind camelCase.
          De exemplu: onClick, onChange, onSubmit, onMouseEnter.
        </li>
        <li>
          În props se transmite o referință la funcția callback care va fi
          apelată atunci când are loc evenimentul.
        </li>
        <li>Events Handler primesc o instanță a SyntheticEvent Object.</li>
      </ul>
      <p>
        În spate, React implementează, de fapt, delegarea evenimentului. Event
        Listeners nu sunt adăugați direct pe elementele din DOM. Transmiterea
        unui callback înseamnă pur și simplu înregistrarea unei funcții care va
        fi apelată de un mecanism intern din React atunci când are loc un
        eveniment.
      </p>

      <h3>Counter</h3>
      <p>
        Să creăm o componentă de contor cu capacitatea de a mări și micșora
        valoarea sa.
      </p>

      <Counter step={5} />

      <h3>Anonymous callback function</h3>
    </div>
  );
}

export default Lesson3;
