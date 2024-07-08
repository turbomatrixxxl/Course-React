import React from "react";
import PropTypes from "prop-types";

import NewProduct from "./NewProduct.jsx";
import Product from "./Product.jsx";
import Profile from "./children.jsx";
import Mailbox from "./if-&&.jsx";
import BookList from "./map.jsx";
import NumberList from "./keys.jsx";
import lesson1Image1 from "../images/Modul1-Lesson1/image1.png";
import lesson1Image2 from "../images/Modul1-Lesson1/image2.png";
import lesson1Image3 from "../images/Modul1-Lesson1/image3.png";
import lesson1Image4 from "../images/Modul1-Lesson1/image4.png";
import lesson1Image5 from "../images/Modul1-Lesson1/image5.png";
import lesson1Image6 from "../images/Modul1-Lesson1/image6.png";
import lesson1Image7 from "../images/Modul1-Lesson1/image7.png";
import lesson1Image8 from "../images/Modul1-Lesson1/image8.png";
import lesson1Image9 from "../images/Modul1-Lesson1/image9.png";
import lesson1Image10 from "../images/Modul1-Lesson1/image10.png";
import lesson1Image11 from "../images/Modul1-Lesson1/image11.png";

const newProductDetails = {
  imgUrl:
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  name: "Tacos With Lime",
  price: 10.99,
};

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const messages = ["alfa", "beta", "gamma", "teta"];
// let messages = [];

const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const numbers = [1, 8, 9, 11, 47];

function Lesson1() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <main>
        <Product
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={10.99}
        />

        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Fries and Burger"
          price={14.29}
        />

        <NewProduct {...newProductDetails} />

        <div>
          <Panel title="User profile">
            <Profile name="Mango" email="mango@mail.com" />
          </Panel>
        </div>

        <Mailbox unreadMessages={messages} username={"Radu"} />

        <div>
          <BookList books={favoriteBooks} />
        </div>

        <NumberList numbers={numbers} />

        <h1>Modulul 1 - Lecția 1</h1>

        <h2>Introducere în React</h2>

        <h3>Aplicații web</h3>
        <p>
          În dezvoltarea web modernă s-au modificat nu doar tehnicile care fac
          site-urile să arate mai bine, să se încarce mai repede și să fie mai
          plăcut de utilizat. În primul rând, lucruri fundamentale s-au
          schimbat, mai exact modul în care proiectăm și construim o aplicație
          web.
        </p>
        <p>
          Să luăm ca exemplu orice site web. Există întotdeauna un set de
          pagini, cum ar fi un landing page, o pagină de profil, o pagină de
          colecție și o pagină cu detalii ale articolului de colecție.
        </p>
        <img src={lesson1Image1} alt="example" />

        <h3>Multiple-page Application</h3>
        <p>
          În trecut am fi folosit abordarea care implică mai multe pagini HTML
          separate.
        </p>
        <img src={lesson1Image2} alt="example" />
        <ul>
          <li>Arhitectura client-server</li>
          <li>Backend-ul este responsabil pentru toată logica</li>
          <li>
            Pentru fiecare solicitare, backend-ul trimite un document HTML gata
            făcut
          </li>
          <li>Reîncărcarea paginii la fiecare solicitare</li>
          <li>Interactivitate scăzută</li>
          <li>SEO excelent</li>
        </ul>

        <h3>Single-page Application</h3>
        <p>
          O abordare modernă este acel site în care utilizatorul nu navighează
          niciodată la alte pagini HTML. Interfața, în loc să solicite documente
          HTML de la server, este redesenată pe client, pe aceeași pagină, fără
          a avea loc reloading la pagina web.
        </p>
        <img src={lesson1Image3} alt="example" />
        <ul>
          <li>Arhitectura client-server.</li>
          <li>
            La încărcarea unui site, backend-ul returnează întotdeauna pagina
            HTML de pornire index.html.
          </li>
          <li>
            Fiecare cerere ulterioară către backend primește numai date în
            format JSON.
          </li>
          <li>Interfața este actualizată dinamic în browser.</li>
          <li>Încărcarea primei pagini poate fi destul de lentă.</li>
          <li>
            Clientul este responsabil pentru orice altă logică, mai puțin cea de
            securitate.
          </li>
          <li>SEO slab.</li>
          <li>
            Complexitatea codului și mentenanța acestuia crește odată cu
            extinderea funcționalității aplicației.
          </li>
        </ul>
        <a href="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58">
          Single-page application vs. multiple-page application
        </a>

        <h2>React framework</h2>
        <img src={lesson1Image4} alt="example" />
        <p>
          React este o bibliotecă pentru crearea elementelor de interfață. Nu
          are încorporate funcționalități de rutare sau modulul HTTP. Cu toate
          acestea, există un ecosistem bogat care poate rezolva orice problemă.
        </p>
        <p>
          Când se creează o aplicație, folosind React, developerul nu
          interacționează direct cu arborele DOM. Sarcina sa este de a descrie
          interfața, folosind componente (șabloane) și de a gestiona schimbarea
          datelor (modele). Atunci când datele modelului se schimbă, React va
          actualiza interfața, conform șablonului.
        </p>
        <p>
          React este multiplatform, însemnând că un markup HTML poate fi randat
          pe server (<a href="https://nextjs.org/">Next.js</a>), poate fi scris
          cod nativ (<a href="https://reactnative.dev/">React Native</a>) sau
          aplicații desktop, folosind (
          <a href="https://www.electronjs.org/">Electron</a>).
        </p>

        <h3>Browser DOM și Virtual DOM</h3>
        <p>
          <b>Browser DOM</b> - o reprezentare arborescentă a unui document HTML
          în care fiecare element al documentului este reprezentat ca un nod
          DOM. Este stocat în browser și legat direct de ceea ce vedem pe
          pagină.
        </p>
        <p>
          De fiecare dată când DOM-ul este modificat, browser-ul efectuează mai
          multe operații care necesită timp. Actualizările frecvente ale unui
          astfel de arbore afectează negativ performanța și capacitatea de
          răspuns a interfeței. Prin urmare, este lent și trebuie actualizat
          eficient.
        </p>
        <img src={lesson1Image5} alt="example" />
        <p>
          <b>Virtual DOM</b> - abstracție; o copie ușoară a arborelui DOM real
          ca obiect JSON.
        </p>
        <ul>
          <li>Există doar în memorie și nu este randat în browser.</li>
          <li>Nu depinde de implementarea internă a browser-ului,</li>
          <li>
            Utilizează cele mai bune practici de actualizare a DOM-ului real.
          </li>
          <li>
            Adună toate actualizările de DOM în grupuri pentru a optimiza
            randarea (batching).
          </li>
        </ul>

        <h3>Algoritmul de actualizare DOM</h3>
        <p>
          În React, fiecare element de interfață este o componentă
          (personalizată sau încorporată) care depinde de datele din{" "}
          <b>props</b> sau starea sa și este reprezentată de noduri virtuale ale
          arborelui DOM. Interacțiunea utilizatorului cu interfața schimbă
          starea aplicației.
        </p>
        <img src={lesson1Image6} alt="example" />
        <p>
          În cazul în care o componentă se modifică, este creat un nou arbore
          DOM virtual. Apoi, utilizând un algoritm de tip "<b>breadth-first</b>
          ", se efectuează o comparație (diferențiere sau "diffing") între cei
          doi arbori DOM virtuali - cel de dinainte și cel de după actualizare.
        </p>
        <img src={lesson1Image7} alt="example" />
        <p>
          Nodurile roșii reprezintă elementele care s-au modificat. Se
          calculează diferența dintre versiunile anterioare și cele noi ale
          arborelui DOM virtual. Se aplică cel mai bun mod de a face modificări
          la DOM-ul real. Acest lucru asigură că se face un număr minim de
          actualizări la arborele DOM real, îmbunătățind, astfel, performanța
          interfeței.
        </p>
        <img src={lesson1Image8} alt="example" />
        <p>
          <b>MAI MULTE DETALII </b>
        </p>
        <p>
          Acest mecanism se numește reconciliation. Un programator începător nu
          trebuie să-și facă griji cu privire la modul în care este actualizată
          interfața web. Cu toate acestea, dacă ești interesat să afli mai
          multe, îți recomandăm să citești
          <a href="https://legacy.reactjs.org/docs/reconciliation.html">
            documentația oficială
          </a>
          .
        </p>

        <h2>Tools</h2>
        <p>
          Pentru a crea o aplicație React, e nevoie de <b>Node.js</b>,
          <b>Webpack</b>, <b>Babel</b>, <b>ESLint</b>, <b>React</b> și
          <b>DevTools</b>. Poți scrie propria ta versiune de Webpack sau poți
          lua oricare dintre cele mai populare de pe GitHub.
        </p>

        <h3>Create React App</h3>
        <p>
          Pentru proiecte mici și mijlocii, se recomandă utilizarea pachetului
          utilitar de la autorii React. Este obligatoriu de a cunoaște
          documentația
          <a href="https://create-react-app.dev/">Create React App</a>.
        </p>
        <ul>
          <li>
            Abstractizează toată configurația, astfel încât să ne putem
            concentra pe scrierea codului.
          </li>
          <li>
            Include automat toate instrumentele necesare: Webpack, Babel, ESLint
            etc.
          </li>
          <li>
            Poate fi extins cu pachete suplimentare din ecosistemul React.
          </li>
          <li>
            Are o funcție de extragere care elimină abstracția și deschide
            configurația.
          </li>
        </ul>
        <p>
          Rulează următoarea comandă într-un terminal pentru a începe crearea
          fișierelor de pornire a proiectului.
        </p>
        <p>
          <b>npx create-react-app nume_proiectului</b>
        </p>
        <p>
          Pentru a crea o aplicație în folderul curent, se folosește un punct în
          locul numelui proiectului. De exemplu npx <b>'create-react-app .'</b>.
          Acesta poate fi folosit atunci când repository-ul a fost clonat și
          aplicația este inițializată în versiunea locală.
        </p>

        <p>
          <b>NPX </b>
        </p>
        <p>
          Un instrument conceput pentru a standardiza utilizarea pachetelor npm.
          Este livrat începând cu versiunea npm <b>5.2.0. npm</b> gestionează
          dependențele plasate în registry, iar <b>npx</b> facilitează
          utilizarea utilitarelor <b>CLI</b> și a altor executabile, fără a fi
          nevoie să le instalezi într-un sistem sau proiect.
        </p>

        <h3>React DevTools</h3>
        <p>
          În devTools ne putem uita la componente, starea și props-urile
          acestora. Profiler-ul este util în optimizarea unei aplicații.
        </p>
        <ul>
          <li>
            <a href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
              Devtools in Chrome Web Store
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/blog/2019/08/15/new-react-devtools.html">
              Introducing the New React DevTools
            </a>
          </li>
        </ul>

        <h2>JSX</h2>
        <p>
          <b>
            const link = &lt;a href="https://reactjs.org/"&gt;React
            website&lt;/a&gt;;
          </b>
        </p>
        <p>
          Acesta nu este un string sau cod HTML. Această sintaxă asemănătoare
          XML, se numește JSX (JavaScript Syntax Extension) - o extensie a
          sintaxei JavaScript care este utilizată pentru a descrie markup-ul a
          ceea ce vrem să vedem pe ecran.
        </p>
        <ul>
          <li>
            Ne permite să folosim sintaxa în formă de XML, direct în JavaScript.
          </li>
          <li>Simplifică codul, îl face declarativ și lizibil.</li>
          <li>Descrie obiecte - elementele Virtual DOM.</li>
          <li>
            Nu este HTML. Babel transformă sintaxa JSX în apeluri de funcție.
          </li>
          <li>În JSX se pot folosi toate funcționalitățile JavaScript.</li>
        </ul>
        <p>
          <b>ELEMENTELE REACT </b>
        </p>
        <p>
          JSX creează cele mai mici elemente de bază ale React. DOM virtual sunt
          obiecte JavaScript obișnuite, astfel încât crearea lor este foarte
          rapidă.
        </p>
        <p>
          Folosind JSX, markup-ul devine similar cu șabloanele HTML deja
          familiare.
        </p>
        <ul>
          <li>
            În JSX, poți utiliza orice expresie validă prin includerea acesteia
            în acolade.
          </li>
          <li>
            Valorile atributelor sunt specificate între ghilimele dacă este un
            șir obișnuit și între acolade dacă valoarea este calculată sau nu
            este de tip string.
          </li>
          <li>
            Toate atributele elementului React sunt denumite, folosind notația
            camelCase.
          </li>
          <li>
            Tag-urile JSX pot fi părinți ai altor tag-uri JSX. Dacă tag-ul este
            gol sau se închide automat, acesta trebuie închis, folosind /&gt;.
          </li>
        </ul>

        <h3>Randarea elementelor în arborele DOM</h3>
        <p>
          Pentru a randa un element în arborele DOM, pachetul react-dom are
          metode
          <b>createRoot(container)</b> și <b>render(element)</b> care
          funcționează împreună.
        </p>
        <ul>
          <li>
            Primul preia o referință la un element DOM existent, cum ar fi
            div#root din index.html și creează o rădăcină în care va fi randată
            întreaga aplicație.
          </li>
          <li>
            Al doilea așteaptă o referință la un element sau componentă React
            (la ce să facă render).
          </li>
        </ul>
        <p>
          <b>UN render() PER APLICAȚIE </b>
        </p>
        <p>
          React folosește un model de relație strămoș-copil, deci este nevoie
          doar de un singur apel render() per aplicație. Randarea elementului
          cel mai de sus din ierarhie va face ca întregul subarbore să fie
          randat.
        </p>

        <h3>Regula părintelui comun</h3>
        <p>
          Partea dreaptă a expresiei de atribuire trebuie să returneze o singură
          valoare. Să analizăm următorul cod cu marcaj JSX invalid.
        </p>
        <p>
          const post = (<br />
          &lt;h2&gt;Post Header&lt;/h2&gt;
          <br />
          &lt;p&gt;Post text&lt;/p&gt; <br />
          );
        </p>

        <p>
          O expresie este doar o singură valoare (rezultatul unor calcule), de
          aici și regula unui părinte comun.
        </p>

        <p>
          const post = (<br />
          &lt;div&gt; <br />
          &lt;h2&gt;Post Header&lt;/h2&gt;
          <br />
          &lt;p&gt;Post text&lt;/p&gt; <br />
          &lt;/div&gt; <br />
          );
        </p>

        <p>
          Dacă în marcaj nu este necesar tag-ul suplimentar cu funcție de
          wrapper, atunci sunt folosite fragmentele care sunt similare cu
          DocumentFragment. Această componentă încorporată se dizolvă la
          randare, afișând doar conținutul său.
        </p>
        <p>
          {/* import {Fragment} from "react"; <br /> */}
          <br />
          const post = ( <br />
          &lt;Fragment&gt; <br />
          &lt;h2&gt;Post Header&lt;/h2&gt; <br />
          &lt;p&gt;Post text&lt;/p&gt;
          <br />
          &lt;/Fragment&gt; <br />
          );
        </p>

        <p>
          Sintaxa fragmentului poate fi scurtată și nu mai e necesară adăugarea
          importurilor Fragment. Babel va face toate transformările necesare,
          înlocuind etichetele JSX goale cu React.Fragment.
        </p>
        <p>
          const post = ( <br />
          &lt;&gt; <br />
          &lt;h2&gt;Post Header&lt;/h2&gt; <br />
          &lt;p&gt;Post text&lt;/p&gt;
          <br />
          &lt;/&gt; <br />
          );
        </p>

        <h3>Materiale suplimentare</h3>
        <a href="https://react.dev/learn/writing-markup-with-jsx">
          Documentație{" "}
        </a>

        <h2>Componente</h2>
        <p>
          <b>Componente</b> - secțiunile de bază ale aplicațiilor React, cu
          ajutorul cărora interfața este împărțită în părți independente.
        </p>
        <p>
          Programatorul creează componente mici care pot fi combinate pentru a
          forma altele mai mari sau utilizate ca elemente UI de sine stătătoare.
          Cel mai important lucru la acest concept este că atât componentele
          mari, cât și cele mici pot fi refolosite în proiectul actual și în
          unul complet nou.
        </p>
        <img src={lesson1Image9} alt="example" />
        <p>
          Gândește-te la o aplicație React ca la un arbore de componente. La
          nivelul superior se află componenta rădăcină care are un anumit număr
          de alte componente. Fiecare componentă trebuie să returneze un markup
          JSX, indicând, astfel, ce cod HTML dorim să randăm în DOM.
        </p>

        <h3>Componente funcționale</h3>
        <p>
          În forma sa cea mai simplă, o componentă este o funcție JavaScript cu
          un contract foarte simplu: funcția preia un obiect cu proprietăți
          numite props și returnează un arbore de elemente React.
        </p>
        <img src={lesson1Image10} alt="example" />
        <p>
          <b>NUMELE COMPONENTEI </b>
        </p>
        <p>
          Numele componentei trebuie să înceapă cu o literă mare. Numele
          componentelor cu minuscule sunt rezervate pentru elementele HTML. Dacă
          încercăm să denumim o componentă card în defavoarea Card, la randare
          React o va ignora și va crea un tag &lt;card&gt;&lt;/card&gt;.
        </p>
        <p>
          const MyFunctionalComponent = props =&gt; &lt;div&gt;Functional
          Component&lt;/div&gt;;
        </p>
        <p>
          Componentele funcționale reprezintă cea mai mare parte a unei
          aplicații React.
        </p>
        <ul>
          <li>Mai puțin cod boilerplate</li>
          <li>Mai ușor de perceput</li>
          <li>Mai ușor de testat</li>
          <li>Nu are context (this)</li>
        </ul>
        <p>Să facem din cardul produsului o componentă funcțională.</p>

        <h3>Proprietățile unei componente (props)</h3>
        <p>
          Proprietățile (props) reprezintă unul dintre conceptele de bază ale
          React-ului. Componentele acceptă proprietăți și returnează elemente
          React care descriu ceea ce ar trebui să fie randat către DOM.
        </p>
        <ul>
          <li>Este folosit pentru a transfera date de la părinte la copil.</li>
          <li>
            Se transmite în jos, de-a lungul arborelui, doar de la componenta
            părinte.
          </li>
          <li>
            Când datele din props se schimbă, React randează din nou componenta
            și, eventual, actualizează DOM-ul.
          </li>
          <li>
            Datele din props sunt doar pentru citire, nu se pot modifica în
            copil.
          </li>
        </ul>
        <img src={lesson1Image11} alt="example" />
        <p>
          Props pot fi un text al unui buton, o imagine, un url sau orice alte
          date, necesare componentei. Acestea mai pot fi string-uri sau un
          rezultat al unei expresii JS. Dacă este transmis doar numele unui
          prop, valoarea acestuia va fi, implicit, true.
        </p>
        <p>
          Componenta &lt;Product&gt; declară un parametru props. Acesta va fi
          întotdeauna un obiect care va conține toate elementele props parsate
          acestei componente.
        </p>
        <p>
          Vom folosi un pattern simplu atunci când vom lucra cu props. Datorită
          faptului că props este un obiect, îl putem destructura într-o
          semnătură de funcție. Acest lucru va face codul mai curat și mai
          lizibil.
        </p>
        <p>
          Drept urmare, am creat o componentă personalizată care poate fi
          folosită pentru a afișa un produs. Îi transmitem date, folosind props
          și, în schimb, obținem un arbore de elemente React cu valori
          substituite.
        </p>
        <ul>
          <li>
            <a href="https://legacy.reactjs.org/docs/components-and-props.html">
              Components and props
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/docs/jsx-in-depth.html">
              JSX in depth
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/docs/jsx-in-depth.html#spread-attributes">
              Spread Attributes
            </a>
          </li>
        </ul>

        <h3>Valori implicite pentru props</h3>
        <p>
          Ce se întâmplă dacă componenta așteaptă o valoare, dar nu a fost
          trecută? La accesarea proprietății obiectului props, obținem
          undefined.
        </p>
        <p>
          Pentru a specifica valorile implicite ale proprietăților, sintaxa
          valorii implicite este utilizată la destructurarea elementelor din
          props.
        </p>

        <h3>Proprietatea children</h3>
        <p>
          Conceptul de elemente copil face foarte ușoară compunerea
          componentelor. Sub formă de copii, putem trece componente, atât
          încorporate, cât și personalizate. Acest lucru este foarte util atunci
          când se lucrează cu componente compuse complexe.
        </p>
        <ul>
          <li>
            Proprietatea children este disponibilă automat în fiecare
            componentă, conținutul său este orice se află între eticheta JSX de
            deschidere și închidere.
          </li>
          <li>
            În componentele funcționale putem accesa folosind props.children.
          </li>
          <li>Valoarea props.children poate fi aproape orice.</li>
        </ul>
        <p>
          De exemplu, avem o componentă de profil &lt;Profile&gt; și o
          componentă de secțiune &lt;Panel&gt; în care putem plasa conținutul.
        </p>
        <p>
          În caz contrar, ar fi trebuit să trecem datele din props pentru
          &lt;Profile&gt; prin &lt;Panel&gt;. Aceasta leagă componentele mai
          strâns și îngreunează reutilizarea.
        </p>

        <h3>Proprietatea propTypes</h3>
        <p>
          Verificarea tipurilor de date primite ca props va prinde o mulțime de
          erori. Acest lucru economisește timp, ajută la neatenție și salvează
          atunci când aplicația crește. În viitor, va fi necesar să-ți faci timp
          pentru a cunoaște TypeScript, dar pentru început va fi suficient o
          bibliotecă mică care va face aceste verificări.
        </p>
        <p>
          Pachetul prop-types ne furnizează un număr de validatori pentru a
          verifica corectitudinea tipurilor de date primite în timpul execuției
          codului, notificând despre inconsecvențele acestea în consolă. Tot ce
          trebuie făcut este să descrii tipurile de date primite de componentă
          în proprietatea statică specială propTypes. Verificarea la props cu
          prop-types are loc numai în timpul dezvoltării și nu este necesară în
          producție.
        </p>
        <p>
          <b>npm install --save-dev prop-types</b>
        </p>
        <p>
          Folosim prop-types și descriem datele din props pentru componenta
          Product.
        </p>
        <p>
          Valorile implicite specificate în defaultProps sunt aplicate în primul
          rând. După aceea, verificarea tipului este începută cu propTypes.
          Deci, verificarea tipului se extinde și la valorile implicite.
        </p>
        <a href="https://legacy.reactjs.org/docs/typechecking-with-proptypes.html">
          Verificarea tipului cu PropTypes
        </a>

        <h2>Randare condiționată</h2>
        <p>
          Pentru a randa în mod condiționat un markup, se folosesc operatorii de
          condiții și ramificare. Condițiile pot fi verificate, fie înainte ca
          marcajul să fie returnat, fie direct în JSX.
        </p>
        <p>
          <b>VALORI GOALE </b>
        </p>
        <p>
          Dacă condiția spune că nimic nu trebuie randat, putem returna{" "}
          <b>null</b>,<b>undefined</b> sau <b>false</b>, iar acestea nu vor fi
          randate.
        </p>

        <h3>if folosind operatorul logic &&</h3>
        <p>
          Se citește astfel: dacă condiția este evaluată la true, atunci va fi
          randat marcajul.
        </p>

        <h3>if...else folosind operatorul ternar</h3>
        <p>
          Se citește astfel: dacă condiția se evaluează la true, atunci marcajul
          după '<b>?</b>' va fi randat, în caz contrar, redă marcajul după '
          <b>:</b>'.
        </p>

        <h3>Materiale suplimentare</h3>
        <ul>
          <li>
            <a href="https://legacy.reactjs.org/docs/conditional-rendering.html">
              Conditional rendering
            </a>
          </li>
          <li>
            <a href="https://www.robinwieruch.de/conditional-rendering-react/">
              All the Conditional Renderings in React
            </a>
          </li>
        </ul>

        <h2>Colecții</h2>
        <p>
          Pentru a randa o colecție de elemente de același tip, se folosește
          metoda Array.prototype.map() a cărei funcții callback returnează un
          markup JSX pentru fiecare element al colecției. Astfel, obținem o
          serie de elemente React care pot fi randate.
        </p>

        <h3>Keys</h3>
        <p>
          Când dai la execuție codul din exemplul de mai sus, apare un
          avertisment în care se specifică faptul că elementele din listă
          necesită o cheie. React nu poate distinge elementele din colecție,
          redesenând, astfel, întreaga colecție la orice modificare.
        </p>
        <p>
          <b>Key</b> — este un prop special care trebuie setată la crearea
          elementelor din colecție.
        </p>
        <p>
          Elementele dintr-o colecție trebuie să fie prevăzute cu chei pentru a
          avea o identitate stabilă. React folosește chei pentru a determina ce
          elemente din colecție trebuie să fie recreate și randate din nou, dar
          nu să folosească elemente dintr-o randare anterioară. Astfel, evităm
          să recreăm toate elementele colecției de fiecare dată când se schimbă
          ceva.
        </p>
        <p>Cheile trebuie să fie:</p>
        <ul>
          <li>
            <b>Unice</b> - cheia unui element trebuie să fie unică numai între
            vecinii săi. Nu are rost să fie chei unice la nivel global.
          </li>
          <li>
            <b>Stabile</b> - cheia unui element nu trebuie să se schimbe în
            timp, la modificarea ordinii elementelor sau după o reîmprospătare a
            paginii.
          </li>
        </ul>
        <p>
          <b>INFO </b>
        </p>
        <p>
          Fiecare index dintr-o matrice e unic, dar toți indecșii sunt stabili;
          atunci când colecția este amestecată, cheile se schimbă. Data și ora
          sunt unice, dar nu stabile, deoarece cresc constant. Astfel, cu
          fiecare randare, se obțin chei noi. Folosirea unui număr aleatoriu
          echivalează cu a nu folosi cheile deloc, deoarece numerele aleatorii
          nu sunt unice sau stabile.
        </p>
        <p>
          Cel mai bun mod de a seta o cheie este să folosești un șir static care
          identifică în mod unic elementul din listă, de restul. Cel mai adesea,
          identificatorii obiectelor create de baza de date sunt utilizați ca
          chei - o valoare constantă care nu se schimbă. Dar va funcționa și
          orice valoare unică a unei proprietăți din obiect.
        </p>
        <p>
          Dacă obiectele din matrice nu au proprietăți cu valori unice, iar
          colecția nu este editabilă, adică utilizatorul nu are capacitatea de a
          șterge sau de a schimba ordinea elementelor, cu excepția adăugării
          unora noi, putem folosi indecși de matrice.
        </p>
        <p>
          <b>INDEXES CA NIȘTE CHEI !!!</b>
        </p>
        <p>
          Utilizarea indecșilor pentru chei este un caz extrem. Marea majoritate
          a datelor vor avea identificatori unici sau alte proprietăți.
        </p>

        <h3>Materiale suplimentare</h3>
        <ul>
          <li>
            <a href="https://legacy.reactjs.org/docs/lists-and-keys.html">
              Liste și chei
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  element: PropTypes.string,
};

export default Lesson1;
