import React from 'react';
import { RouteExample } from './RouteExample/RouteExample';
import { UrlParams } from './UrlParams/UrlParams';

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

// import { Route } from 'react-router-dom';
// import { Homes } from './RouteExample/RouterPages/Homes';
// import { About } from './RouteExample/RouterPages/About';
// import { Products } from './RouteExample/RouterPages/Products';
// import { NotFound } from './RouteExample/RouterPages/NotFound';

// import { Outlet } from 'react-router-dom';

function Lesson9() {
  return (
    <div className="App">
      <h1>Modulul 5 - Lecția 9 - Routing/partea 1</h1>

      <h2>Routing</h2>
      <p>
        Avantajul principal al unei aplicații web față de una desktop este
        prezența unui URL pe care accesându-l, utilizatorul poate deschide o
        anumită parte a aplicației. Astfel, putem salva un marcaj sau transfera
        un link către alt utilizator, iar aceeași interfață îi va fi afișată (cu
        excepția datelor private).
      </p>
      <p style={{ color: 'red' }}>
        <b>În primul rând</b>
      </p>

      <p>
        Rutarea (routing) nu este un efect secundar atunci când scriem o
        aplicație. Dimpotrivă, structura de navigare și setul de pagini trebuie
        gândite mai întâi.
      </p>

      <h3>Structura șirului URL</h3>
      <p>
        O analogie pentru un șir URL poate fi adresa unde locuiți: strada,
        blocul, etajul etc. Fiecare stare a interfeței trebuie să aibă propria
        sa adresă, în cazul nostru un URL. Ceea ce vede utilizatorul, adică
        starea interfeței, trebuie descrisă în URL.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image1}
        alt="Example"
      />

      <p>Să analizăm ce secțiuni poate conține un URL.</p>
      <ul>
        <li>
          <b>https://</b> - protocol
        </li>
        <li>
          <b>mysite.com/</b> - host
        </li>
        <li>
          <b>books/e3q76gm9lzk</b> - calea, acolo unde ne aflăm în aplicație
        </li>
        <li>
          <b>e3q76gm9lzk</b> - parametru url. Parametrii sunt dinamici sau
          statici
        </li>
        <li>
          <b>?</b> - caracter de început al șirului de interogare
        </li>
        <li>
          <b>?category=adventure&status=unread</b> - șir de interogare
        </li>
        <li>
          <b>category=adventure</b> - pereche de parametru=valoare
        </li>
        <li>
          <b>&</b> - caracterul "<b>AND</b>", separă parametrii șirului de
          interogare
        </li>
        <li>
          <b>#comments</b> - ancoră (hash), determină poziția în pagină
        </li>
      </ul>

      <h3>Istoricul navigației</h3>
      <p>
        Istoricul de navigare descrie modul în care navigăm rutele (linkurile)
        aplicației în tab-ul curent al browserului, precum și cum sunt stocate
        și procesate aceste navigații. Imaginați-vă un teanc de foi. De fiecare
        dată când dăm click pe un link, o altă foaie de informații este adăugată
        în partea de sus a teancului. Aceasta se numește stiva de istorie
        (stack). Folosind proprietățile și metodele HTML5 History API, putem
        naviga înainte și înapoi prin istoricul unui utilizator și să manipulăm
        conținutul acestuia.
      </p>

      <p style={{ color: 'red' }}>
        <b>HTML5 History API</b>
      </p>

      <p>
        Dacă îți dorești o înțelegere mai profundă a React Router, după ce te-ai
        familiarizat cu conceptele de bază, îți recomandăm să revii și să
        analizezi articolul{' '}
        <a href="https://blog.pshrmn.com/a-little-bit-of-history/">
          A Little Bit of History
        </a>
        .
      </p>

      <h3>Rutarea în React</h3>
      <p>
        React nu are un modul de rutare încorporat, așa că folosește{' '}
        <a href="https://reactrouter.com/en/main">React Router</a> - o
        bibliotecă de rutare pentru React. În același mod în care React ne oferă
        un set de date primitive pentru crearea unei interfețe și utilizarea
        state, React Router oferă un set de componente și hook-uri pentru
        crearea rutelor, gestionarea istoricului de navigare al utilizatorului
        și afișarea diferitelor componente, în funcție de valoarea actuală a
        URL-ului.
      </p>

      <p style={{ color: 'red' }}>
        <b>npm install react-router-dom</b>
      </p>

      <h2>Componenta BrowserRouter</h2>
      <p>
        Un centru de comandă a rutelor care ascunde toată logica interacțiunii
        cu istoricul browser-ului. Creează un router și un obiect de navigation
        history pentru a menține interfața sincronizată cu adresa URL. Folosind
        React, contextul transmite informații tuturor descendenților despre
        starea actuală a istoricului de navigare . Tot ce trebuie să facem este
        să acoperim întreaga aplicație cu componenta BrowserRouter.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image2}
        alt="Example"
      />

      <p>
        În continuare ne vom uita la cum se crează rutele unei aplicații web.
      </p>

      <h2>Componentele Route și Routes</h2>
      <p>
        Componenta <b>Route</b> permite asocierea unei adrese URL cu o anumită
        componentă. De exemplu, dacă dorim să afișăm componenta <b>About</b>{' '}
        atunci când utilizatorul navighează la <b>/about</b>, ar trebui să
        descriem o astfel de rută.
      </p>
      <p style={{ color: 'red' }}>
        <b>
          &lt;Route path="/about" element= &#123;&lt;About /&gt;&#125; /&gt;
        </b>
      </p>

      <p>
        Valoarea prop-ului element poate fi orice cod JSX valid, dar în
        practică, sunt folosite doar componente.
      </p>

      <p style={{ color: 'red' }}>
        <b>Cum funcționează?</b>
      </p>

      <p>
        Componenta <b>Route</b> întotdeauna efectuează un render la ceva. Fie la
        ceea ce este specificat în prop-ul <b>element</b>, dacă <b>path</b> se
        potrivește cu valoarea actuală a segmentului <b>pathname</b> din adresa
        de căutare a browser-ului, fie <b>null</b>, dacă nu se potrivește.
      </p>
      <p>
        Pot exista oricâte rute dorim, însă mereu va fi cel puțin una pentru
        fiecare pagină a aplicației. Să presupunem că vrem să creăm un magazin
        online de îmbrăcăminte, așa că vom descrie traseele a trei pagini.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image3}
        alt="Example"
      />

      <p>
        Un grup de rute trebuie să fie acoperit de o componentă Routes, chiar
        dacă există o singură rută. Deci, Route nu poate fi folosit în afara
        Routes. Această componentă realizează logica selectării celei mai
        potrivite Route pentru valoarea URL actuală din bara de căutare a
        browser-ului.
      </p>

      <p style={{ color: 'red' }}>
        <b>Componentele paginii</b>
      </p>
      <p>
        Convenția de structurare a fișierelor aplicației este de a stoca toate
        componentele în folderul src/components. O componentă de pagină este o
        componentă React care specifică rutele unei pagini întregi dintr-o
        aplicație. Pentru o structură mai bine definită, astfel de componente
        sunt stocate separat de celelalte, în folderul src/pages.
      </p>

      <h3>Navigation Error Page</h3>
      <p>
        Ce se întâmplă dacă utilizatorul urmează linkul /
        <b>non-existing-route</b> sau oricare altul ce nu există în aplicația
        noastră? Va vedea un tab de browser, fără conținut, deoarece niciunul
        dintre <b>Route</b> descrise de noi nu vor fi apelate. Din acest motiv,
        la sfârșitul listei de rute, vom adăuga o altă <b>Route</b> care se va
        potrivi cu orice adresă URL, dar va fi selectată numai dacă nicio altă
        rută nu se potrivește.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image4}
        alt="Example"
      />

      <h2>Componentele Link și NavLink</h2>
      <p>
        Acum să ne uităm cum să creăm link-uri către diverse pagini din
        aplicația noastră. Nu putem utiliza tag-ul HTML{' '}
        <b>&lt;a href="/about"&gt;</b> pentru a crea o navigare între pagini.
        Când se dă click, în loc să schimbe adresa URL de pe pagina curentă și
        să lase router-ul să navigheze, browser-ul doar vă reîncărca pagina
        (reload).
      </p>
      <p>
        Componentele <b>Link</b> și <b>NavLink</b> sunt folosite pentru a crea
        link-uri. Acestea fac render la eticheta &lt;a&gt;, dar comportamentul
        implicit al link-ului este modificat, astfel încât, atunci când se dă
        click, pur și simplu actualizează adresa URL din adresa de căutare a
        browser-ului, fără a da refresh la pagină.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image5}
        alt="Example"
      />

      <p>
        Componenta <b>NavLink</b> diferă doar prin faptul că poate avea stiluri
        suplimentare dacă URL-ul actual se potrivește cu valoarea la prop-ul{' '}
        <b>to</b>. În mod implicit, elementului de legătură activ îi este
        adăugată clasa
        <b>active</b>. Acesta poate fi folosit pentru a-l stiliza.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image6}
        alt="Example"
      />

      <p>
        Aruncă o privire la codul live al aplicației noastre de mai jos, pentru
        crearea unui magazin online care folosește toate informațiile pe care
        le-am explicat până acum.
      </p>

      <RouteExample />

      <h2>Parametrii unui URL</h2>
      <p>
        Parametrii dinamici sunt similari cu parametrii unei funcții - au
        întotdeauna același nume, dar pot avea valori diferite. Acestea permit
        să declarăm un șablon de adresă URL unde unele părți pot avea o valoare
        arbitrară. De exemplu, nu are sens să definim o rută separată pentru
        fiecare postare pe blog, fiindcă ar putea exista mii de postări. Din
        punct de vedere al structurii de conținut, astfel de pagini vor fi
        identice. Doar titlul, imaginea, autorul, textul și alte elemente vor fi
        diferite. În loc să definim o rută pentru fiecare articol, putem declara
        o rută cu un parametru dinamic prin care vom stabili ce postare ar
        trebui să fie afișată. Pentru a indica faptul că o parte a adresei este
        un parametru URL, se folosesc două puncte <b>(:)</b> înaintea numelui
        parametrului.
      </p>

      <p style={{ color: 'red' }}>
        <b>
          &lt;Route path="/blog/:postId" element=&#123;&lt;BlogPost /&gt;&#125;
          /&gt;
        </b>
      </p>

      <p>
        De fiecare dată când un utilizator vizitează o adresă care se potrivește
        cu șablonul <b>/blog/:postId</b>, cum ar fi
        <b> /blog/react-fundamentals</b> sau
        <b>/blog/top-5-css-tricks</b>, i se va afișa pagina pentru acea postare.
      </p>

      <p style={{ color: 'red' }}>
        <b>Numele parametrului</b>
      </p>

      <p>
        Numele parametrului URL poate fi ales în mod arbitrat, dar ar trebui să
        fie clar și descriptiv. În continuare, vom vedea cum să obținem valoarea
        unui parametru URL. Spoiler - după numele său.
      </p>

      <p>
        Să adăugăm o singură rută pentru pagina de produs cu adresa
        <b>/products/:productId</b>. Aceasta este o pagină separată care nu are
        legătură în niciun fel cu /products - pagina pentru afișarea tuturor
        produselor.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image7}
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Unicitatea valorilor</b>
      </p>

      <p>
        Valoarea unui parametru URL trebuie să fie unică în cadrul colecției,
        astfel încât identificatorii de obiect pe care îi stabilește baza de
        date sunt cel mai frecvent utilizați (numere sau șiruri). Prin urmare,
        adresa poate arăta astfel: <b>/products/1, /proudcts/2</b> și așa mai
        departe.
      </p>

      <h3>useParams hook</h3>
      <p>
        Returnează un obiect cu toți parametrii dinamici care se află în adresa
        URL actuală. Numele parametrului va fi numele proprietății din obiect,
        iar valoarea sa curentă din adresa URL va fi valoarea proprietății. De
        exemplu, presupunem că următoarea rută este declarată
        <b>/books/:genreId/:authorName</b>, iar utilizatorul se află la
        <b>/books/adventure/herman-melville</b>.
      </p>

      <p style={{ color: 'red' }}>
        <b>
          const &#123;(genreId, authorName)&#125; = useParams(); <br />
          console.log(genreId, authorName); // adventure, herman-melville
        </b>
      </p>

      <p>
        Pentru a obține valoarea părții dinamice a URL-ului, în cazul nostru va
        fi id-ul produsului. Folosim hook-ul <b>useParams</b> în componenta care
        execută render la pagina unui produs.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image8}
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Ce urmează?</b>
      </p>

      <p>
        Având valoarea parametrului, putem, de exemplu, să facem o solicitare
        către backend și să obținem informații suplimentare despre produs,
        folosind id-ul său și apoi vom randa pagina.
      </p>

      <p>
        Aruncă o privire la codul live al aplicației noastre pentru crearea unui
        magazin online care folosește tot materialul pe care l-am acoperit până
        în acest moment.
      </p>

      <UrlParams />

      <h2>Rute imbricate</h2>
      <p>
        Rutele suprapuse permit să descriem logica «subpaginilor», adică o
        adresă URL la care, pe lângă componenta părinte a întregii pagini, va fi
        afișată și o altă componentă copil, suprapusă.
      </p>
      <p>
        De exemplu, avem nevoie de{' '}
        <b>/about/mission, /about/team și /about/reviews</b>
        pentru a afișa câteva informații suplimentare, mai specifice, pe lângă
        conținutul paginii «About us». Să presupunem că acestea sunt componente
        diferite: un articol despre misiunea companiei noastre, o galerie cu
        informații despre angajați și recenziile utilizatorilor.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image9}
        alt="Example"
      />

      <p>
        Dacă descriem rutele astfel, obținem patru pagini independente. La
        /about va fi afișată doar pagina de informații, iar pe about/team , o
        galerie cu angajați, dar nu de asta avem nevoie. Folosim sintaxa de
        declarare a rutelor suprapuse și astfel, componenta va fi afișată în
        pagina părinte.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image10}
        alt="Example"
      />

      <p>Acordă atenție câtorva aspecte:</p>
      <ul>
        <li>
          Am suprapus declarativ rutele copil în interiorul unei <b>Route</b>{' '}
          părinte. Această sintaxă indică o rută suprapusă a cărei componentă va
          fi randată undeva în interiorul componentei părinte.
        </li>
        <li>
          Valoarea prop-ului <b>path</b> în rutele suprapuse este{' '}
          <b>relativă la părinte</b>, motiv pentru care am scris{' '}
          <b>path="mission"</b> și nu calea completă
          <b>path="/about/mission"</b> .
        </li>
        <li>
          Căile relative sunt scrise fără <b>/</b>, adică <b>path="mission"</b>,
          nu
          <b>path="/mission"</b>. Dacă adăugăm o bară oblică, vom crea o rută
          separată
          <b>/mission</b> și vom întrerupe logica de rutare.
        </li>
      </ul>
      <p>
        Configurația completă a rutelor din aplicața noastră va arăta astfel:
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image11}
        alt="Example"
      />

      <p>
        Ultimul lucru care trebuie făcut este să specificăm exact unde în ruta
        părinte About dorim să randăm rutele copii. Pentru a face acest lucru,
        React Router are componenta Outlet.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image12}
        alt="Example"
      />

      <p>
        Dacă adresa URL actuală din bara de căutare a browser-ului se potrivește
        cu path-ul unei rute suprapuse, <b>Outlet</b> va randa componenta sa.
        Altfel va fi <b>null</b> și nu va avea niciun efect asupra marcajului
        din componenta părinte.
      </p>

      <p style={{ color: 'red' }}>
        <b>Link-uri relative</b>
      </p>

      <p>
        Reține valoarea prop-ului <b>to</b> din componenta <b>Link</b>. La fel
        ca <b>path</b>-ul unei rute suprapuse, valoarea prop-ului <b>to</b> a
        linkurilor suprapuse este relativă la adresa URL actuală. Componenta{' '}
        <b>About</b> se randează la adresa
        <b>/about</b>, deci, un link cu <b>to="mission"</b> va indica{' '}
        <b>/about/mission</b>. Dacă trebuie să creați un link către o altă
        pagină, atunci e nevoie să specificăm calea completă. De exemplu,{' '}
        <b>to="/products"</b>.
      </p>
      <p>
        Aruncă o privire la codul de mai jos pentru crearea unui magazin online.
      </p>
    </div>
  );
}

export default Lesson9;
