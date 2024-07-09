import React from 'react';
import Counter from './Counter';
import Anonymous from './Anonymous';
import ClassMethods from './ClassMethods';
import BindRender from './BindRender';
import BindConstructor from './BindConstructor';
import PublicClassProps from './PublicClassProps';
import InternalState from './InternalState';
import InitialState from './InitialState';
import InitialStateSimplifyed from './InitialStateSimplifyed';
import Toggle from './Toggle';
import ToggleState from './ToggleState';
import CounterFinal from './CounterFinal';
import StateAscension from './StateAscension';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

import styles from './Lesson3.module.css';

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
      <img className={styles.img} src={image1} alt="example" />
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
      <p>
        Inline callbacks sunt considerate anti-pattern. De fiecare dată când
        componenta face re-render, va fi creată o nouă funcție callback. În
        multe cazuri, acest lucru este normal. Dar, dacă callback-ul este
        transmis ca props la componentele subiacente din arbore, acestea vor
        face și ele re-render, deoarece sosesc date noi în props de tip
        referință (funcție). În plus, funcțiile inline cu o logică mare în JSX
        interferează cu lizibilitatea codului de markup a componentei.
      </p>

      <Anonymous step={5} />

      <h3>Metodele clasei</h3>
      <p>
        Cel mai adesea, handlerii de evenimente sunt declarați ca metode de
        clasă, după care o referință la metodă este transmisă atributului jsx.
      </p>

      <ClassMethods step={5} />

      <h3>Legarea contextului</h3>
      <p>
        Ar trebui să ținem întotdeauna cont de semnificația lui this în metodele
        utilizate ca callback functions. În JavaScript, contextul în metodele de
        clasă nu este adăugat în mod implicit. Dacă uitați să legați contextul
        și să transmiteți metoda ca funcție callback la handler-ul de
        evenimente, în timpul apelului funcției, this va fi nedefinit
        (undefined).
      </p>

      <h4>Legarea contextului la transmiterea funcției callback</h4>
      <p>
        Evitați legarea contextului în metoda render(). Ori de câte ori o
        componentă face re-render, Function.prototype.bind() returnează o nouă
        funcție și o transmite în jos peste toate componentele arborelui,
        determinând re-randarea componentelor copil. Atunci când sunt multe
        componente, acest lucru are un impact semnificativ asupra performanței.
      </p>

      <BindRender step={5} />

      <h4>Legarea contextului de constructor</h4>
      <p>
        O altă modalitate de a lega un context este în constructorul clasei.
        Dacă există o mulțime de funcții callback, vă puteți imagina cât de mare
        poate să devină constructorul.
      </p>
      <ul>
        <li>
          Constructorul este executat o dată, deci bind va fi apelat o dată
        </li>
        <li>
          Metodele de clasă sunt scrise în proprietatea prototype a
          funcției-constructor
        </li>
      </ul>

      <BindConstructor step={5} />

      <h4>Proprietățile publice dintr-o clasă</h4>
      <p>
        Deși aceasta este modalitatea recomandată de a lega un context, sintaxa
        pentru metodele publice nu a fost încă standardizată. Dar ele sunt deja
        atât de utilizate încât, chiar dacă există modificări sintactice,
        transpilerul Babel va face totul pentru noi.
      </p>

      <PublicClassProps step={5} />

      <h3>Materiale suplimentare</h3>
      <a href="https://legacy.reactjs.org/docs/events.html">
        Documentație pentru SyntheticEvent
      </a>

      <h2>Starea internă a componentei</h2>
      <p>
        Obiectul <b>state</b> este o proprietate de clasă care nu trebuie
        modificată direct de către programator.
      </p>
      <ul>
        <li>
          Datele din <b>state</b> controlează ceea ce este afișat în interfață.
        </li>
        <li>
          Datele stocate în <b>state</b> ar trebui să fie informații care vor fi
          actualizate prin metodele componentei.
        </li>
        <li>
          Nu este nevoie ca datele să fie duplicate din <b>props</b> în{' '}
          <b>state</b>.
        </li>
        <li>
          De fiecare dată când se modifică starea componentei (sau props), se
          apelează metoda render().
        </li>
      </ul>
      <p>
        State-ul stochează setul minim necesar de date pe baza căruia putem
        calcula tot ce e nevoie pentru a desena interfața. Acest lucru se face
        prin apelarea selectoarelor (funcții care compun datele pentru
        interfața, bazată pe stare) în metoda render(). Așa obținem datele
        calculate.
      </p>
      <img className={styles.img} src={image2} alt="Example" />
      <ul>
        <li>Interfața depinde de starea componentei.</li>
        <li>
          State-ul se poate schimba ca răspuns la acțiunile utilizatorului.
        </li>
        <li>
          Când state-ul se schimbă, datele sunt transmise în jos pe toate
          componentele arborelui.
        </li>
        <li>
          Componentele returnează un markup actualizat și modificări ale
          interfeței.
        </li>
      </ul>
      <p>
        State-ul aparține componentei și este schimbată doar prin metodele sale
        interne. Schimbarea stării unei componente nu va afecta niciodată
        părintele, vecinii sau orice altă componentă din aplicație, ci doar pe
        copiii acesteia. Cu acest model, datele din aplicație sunt transmise
        într-un singur mod, strict limitat. Acesta se numește flux de date
        unidirecțional.
      </p>
      <img className={styles.img} src={image3} alt="Example" />
      <p>
        Starea este declarată în constructor, deoarece este primul lucru care se
        întâmplă atunci când clasa este instanțiată.
      </p>

      <InternalState step={5} value={7} />

      <h3>Initial state based on props</h3>
      <p>
        Uneori, starea inițială depinde de date primite din props, cum ar fi
        valoarea inițială a contorului nostru. În acest caz, trebuie declarat în
        mod explicit parametrul props în constructor și trebuie transmis
        apelului super(props). Apoi, this.props va fi disponibil în constructor.
      </p>

      <InitialState step={5} value={7} initialValue={3} />

      <p>
        Deoarece în spate este folosit Babel, putem sări peste declarările
        plictisitoare ale constructorului și să specificăm state-ul ca
        proprietate publică a clasei, iar transpilerul se va ocupa de restul
        pentru noi.
      </p>

      <InitialStateSimplifyed step={5} initialValue={3} />

      <h3>Modificarea state-ului unei componente</h3>
      <p>
        Pentru a actualiza starea unei componente este utilizată metoda
        încorporată, <b>setState()</b>.
      </p>
      <ul>
        <li>
          Primul argument obligatoriu este un obiect cu câmpuri care indică ce
          parte a stării trebuie schimbată.
        </li>
        <li>
          Al doilea argument este opțional - putem trece o funcție callback care
          va fi executată după schimbarea stării.
        </li>
      </ul>
      <p style={{ color: 'red' }}>
        <b>PERICOL</b>
      </p>
      <p>
        Nu puteți schimba starea direct prin referință. Fiți foarte atenți, mai
        ales când lucrați cu tipuri de referință (matrice, obiect).
      </p>
      <p>
        state = &#123; fullName: "Poly" &#125;;
        <br />
        <br /> ❌ Bad <br /> this.state.fullName = "Mango";
        <br />
        <br /> ✅ Good <br />
        this.setState(&#123; fullName: "Mango", &#125;);
      </p>
      <p>
        Această abordare este utilizată atunci când noua stare nu este calculată
        pe baza celei anterioare. Adică, atunci când ceva nou se scrie în state,
        suprascriindu-l pe cel existent. Să facem o componentă cu un comutator
        ale cărui metode vor suprascrie valoarea lui isOpen în state.
      </p>

      <Toggle>Vizibil</Toggle>

      <h3>Cum se actualizează state-ul?</h3>
      <p>
        La apelul lui setState(), nu trebuie să trecem toate proprietățile
        stocate în state. Este suficient să specificam doar acea parte (slice) a
        stării pe care dorim să o modificăm în această operație. React preia,
        apoi, starea curentă și obiectul care a fost transmis la setState(),
        concatenându-le astfel:
      </p>
      <p
        style={{
          color: 'red',
        }}
      >
        <b>
          state-ul înainte de fuzionare <br />
          const currentState = &#123; a: 2, b: 3, c: 7, d: 9 &#125;; <br />
          <br />
          obiectul transmis în setState <br />
          const updateSlice = &#123; b: 5, d: 4 &#125;; <br />
          <br />
          noua valoare lui this.state dupa concatenare <br />
          const nextState = &#123; ...currentState, ...updateSlice &#125;;{' '}
          <br /> &#123;a: 2, b: 5, c: 7, d: 4&#125;
        </b>
      </p>

      <h3>Actualizare asincronă a stării</h3>
      <p>
        Metoda setState() înregistrează o operație asincronă de actualizare a
        stării 4 care este pusă într-o coadă. React nu schimbă starea pentru
        fiecare apel al funcției setState(), dar poate combina mai multe apeluri
        într-o singură actualizare pentru a îmbunătăți performanța. Din acest
        motiv, accesând this.state în cod sincron după apelarea acestei metode,
        va fi returnată valoarea de dinaintea actualizării.
      </p>
      <p>
        Să ne imaginăm că atunci când modificăm starea, ne bazăm pe valoarea
        actuală a acesteia pentru a o calcula următoarea. Folosim o buclă for
        pentru a crea (înregistra) mai multe actualizări.
      </p>
      <p style={{ color: 'red' }}>
        <b>
          Să presupunem că avem o astfel de stare <br />
          state = &#123; value: 0 &#125;; <br />
          <br />
          Executăm o buclă și creăm 3 operații de actualizare <br />
          for (let i = 0; i &lt; 3; i += 1) &#123; <br />
          Dacă ne uităm la state, la toate iterațiile va fi 0 <br />
          Deoarece acesta este un cod sincron și actualizarea de stare nu a avut
          loc încă <br />
          console.log(this.state.value); <br />
          <br />
          this.setState(&#123; value: this.state.value + 1 &#125;); <br />
          &#125;
        </b>
      </p>
      <p>
        Valoarea proprietății this.state.value este reținută în momentul în care
        obiectul transmis către setState() este creat, nu în momentul
        actualizării stării. Adică, dacă în momentul creării obiectului,
        this.state.value conținea 0, obiectul &#123;value: 0 + 1&#125; este
        transmis funcției setState().
      </p>
      <p>
        Ca rezultat al buclei, obținem o coadă de 3 obiecte &#123; value: 0 + 1
        &#125;, &#123; value: 0 + 1 &#125;, &#123; value: 0 + 1 &#125; și starea
        inițială la momentul actualizării &#123; value: 0 &#125;. După toate
        actualizările, obținem starea &#123; value: 1 &#125;.
      </p>
      <p>
        Prin urmare, nu ne putem baza pe starea curentă atunci când o calculăm
        pe următoarea care depinde de cea anterioară la momentul actualizării.
        Acest lucru poate duce la erori. Prin urmare, există o a doua modalitate
        de a actualiza starea.
      </p>

      <h3>setState cu o funcție</h3>
      <p style={{ color: 'red' }}>
        <b>
          Să presupunem că există o astfel de stare <br />
          state = &#123; value: 0 &#125;; <br />
          <br />
          Executăm o buclă și creăm 3 operații de actualizare <br />
          for (let i = 0; i &lt; 3; i += 1) &#123; <br />
          Dacă ne uităm la state, la toate iterațiile va fi 0 <br />
          Deoarece acesta este un cod sincron și actualizarea de stare nu a avut
          loc încă <br />
          console.log(this.state.value); este 0 <br />
          <br />
          this.setState(prevState =&gt; &#123; Dacă ne uităm la starea transmisă
          funcției callback în timpul apelului acesteia, <br />
          vom obține starea curentă la momentul actualizării. <br />
          console.log(prevState.value); va fi diferit la fiecare iterație <br />
          <br />
          return &#123; value: prevState.value + 1 &#125;; <br />
          &#125;); <br />
          &#125; <br />
        </b>
      </p>
      <p>
        De fiecare dată când funcția transmisă la setState() este apelată, o
        referință la starea curentă la momentul actualizării va fi transmisă
        parametrului prevState. Vom obține obiectele actualizate &#123;value: 0
        + 1&#125;, &#123;value: 1 + 1&#125;, &#123;value: 2 + 1&#125; și, ca
        rezultat, this.state.value va fi 3 .
      </p>
      <p>
        Acum putem înlocui funcționalitatea de deschidere/închidere din
        componenta &lt;Toggle&gt;.
      </p>

      <ToggleState>Visible</ToggleState>

      <p>Iar contorul va arăta astfel.</p>

      <CounterFinal step={5} initialValue={3} />

      <h3>Ascensiunea state-ului</h3>
      <p>
        Deoarece React utilizează un flux de date unidirecțional de sus în jos,
        pentru a schimba starea părintelui la un eveniment din copil, este
        utilizat următorul pattern cu o funcție callback.
      </p>
      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-03/state-hoisting.gif"
        alt="Gif"
      />
      <ul>
        <li>Părintele are un state și o metodă care o poate schimba.</li>
        <li>
          Copilului, sub formă de props, i se transmite metoda părintelui care
          schimbă starea acestuia.
        </li>
        <li>În componenta copil se apelează metoda transmisă.</li>
        <li>
          Când această metodă este apelată, starea părintelui este schimbată.
        </li>
        <li>Se întâmplă re-render la toate componentele de sub părinte.</li>
      </ul>
      <p>Să ne uitam la un exemplu simplu, dar sugestiv.</p>

      {/* <Button /> */}

      <StateAscension />

      <p>
        Când se dă click pe buton, starea din App este actualizată folosind o
        funcție callback al cărei context este legat de App. Acest pattern
        stabilește o linie clară între componentele "inteligente" și "stupide".
      </p>
      <p>
        Pattern-ul de modificare a stării prin ascensiune poate avea orice
        suprapunere.
      </p>
      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-03/deep-state-hoisting.gif"
        alt="Gif"
      />

      <h3>Tipuri de date interne ale unei componente class based</h3>
      <ul>
        <li>
          <b>static data</b> - proprietăți și metode statice care trebuie
          accesate fără o instanță.
        </li>
        <li>
          <b>this.state.data</b> - modificarea dinamică a datelor prin metodele
          componentei, stare.
        </li>
        <li>
          <b>this.data</b> - date care vor fi diferite pentru fiecare instanță.
        </li>
        <li>
          <b>const DATA</b> - constante ale căror date nu se modifică și sunt
          aceleași pentru toate instanțele.
        </li>
      </ul>
    </div>
  );
}

export default Lesson3;
