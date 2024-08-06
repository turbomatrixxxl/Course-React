import React from 'react';
// import { RouteExample } from './RouteExample/RouteExample';
// import { UrlParams } from './UrlParams/UrlParams';
import { SearchParams } from './SearchParams/SearchParamsComponents/SearchParams';

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
import image17 from './images/image17.png';
import image18 from './images/image18.png';
import image19 from './images/image19.png';
import image20 from './images/image20.png';
import image21 from './images/image21.png';
import image22 from './images/image22.png';
import image23 from './images/image23.png';

import { UseLocation } from './UseLocation/UseLocationComponents/UseLocation';
import { LazySuspense } from './LazySuspense/LazySuspenseComponents/LazySuspense';

function Lesson10() {
  return (
    <div className="App">
      <h1>Modulul 5 - Lecția 10 - Routing/partea 2</h1>
      <h2>Navigarea aplicației</h2>
      <p>
        React Router permite executarea navigației nu numai când se dă click pe
        un <b>Link</b>, ci și pe o anumită acțiune a utilizatorului, eveniment
        sau efect. De exemplu: când se dă click pe un buton, la trimiterea unui
        formular, la rezultatul unei solicitări HTTP și așa mai departe. Să
        folosim procesul de login a utilizatorului ca și exemplu. După
        trimiterea formularului pe pagina de autentificare, navigăm la pagina de
        profil, dar numai dacă solicitarea HTTP a avut succes.
      </p>
      <p>
        Prima modalitate este hook-ul <b>useNavigate</b> care ne pune la
        dispoziție funcția <b>navigate</b>. La apelul său se trece calea în care
        vrem să navigăm. Acest mod este imperativ, dar foarte flexibil și
        necesită mai puțin cod.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image1}
        alt="Code Example"
      />
      <p style={{ color: 'red' }}>
        <b>Obiect cu parametri</b>
      </p>
      <p>
        Poți observa faptul că al doilea argument opțional al funcției{' '}
        <b>navigate</b> este un obiect cu parametri. Proprietatea <b>replace</b>{' '}
        are în mod implicit valoarea <b>false</b>. Aceasta controlează modul în
        care o nouă valoarea este adăugată la istoric. Să revenim la analogia
        teancului de hârtii. În mod implicit, noua foaie va fi adăugată în
        partea de sus a grămezii, fără a afecta restul foilor. Dacă este setată
        la <b>true</b>, atunci noua foaie o va înlocui pe cea de sus. Acest
        lucru este folosit destul de rar. De exemplu, la login, astfel încât
        utilizatorul să nu se poată întoarce folosind butonul «back» la pagina
        de autentificare după ce s-a logat, pentru că el este deja logat în
        sistem.
      </p>
      <p>
        A doua modalitate este componenta <b>Navigate</b> - un wrapper peste
        hook-ul
        <b>useNavigate</b>. Efectuează navigarea în timpul randării. Calea de
        navigare și parametrii opționali sunt transmise ca props. Acest mod este
        mai declarativ, dar mai puțin flexibil și necesită mai mult cod.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image2}
        alt="Code Example"
      />
      <p style={{ color: 'red' }}>
        <b>Care este mai bun?</b>
      </p>
      <p>
        Depinde numai de preferințele tale metoda pe care o alegi și cerințele
        sarcinii în cauză. Într-un caz, va fi mai convenabil să folosești
        declarativul <b>Navigate</b>, iar în altul, imperativul{' '}
        <b>useNavigate</b>.
      </p>
      <h2>Șiruri de interogare</h2>
      <p>
        Șirurile de interogare și parametrii săi sunt un aspect fundamental al
        web-ului. Acestea permit să transmitem starea aplicației printr-o adresă
        URL. Șirul de interogare este atașat la adresa URL de bază, începe cu{' '}
        <b>?</b>
        și conține unul sau mai mulți parametri în format cheie-valoare,
        separați prin <b>&</b>.
      </p>
      <p>https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500</p>
      <p>
        Un astfel de șir de interogare conține trei parametri cu valori: numele
        produsului, culoarea și prețul maxim. Când se accesează această adresă
        URL, utilizatorul va vedea lista corespunzatoare cererii, adică filtrată
        după acele trei criterii.
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
        Utilizarea stării locale prin hook-ul <b>useState</b> este bună pentru
        un singur utilizator, dar nepotrivită pentru interacțiunea cu alți
        utilizatori. Dacă starea aplicației este în adresa URL, aceasta poate fi
        partajată cu alți utilizatori. De exemplu, atunci când un utilizator
        caută anumite produse, valoarea căutată este adăugată la adresa URL ca
        parametru într-un șir de interogare (<b>/products?name=hoodie</b>). Un
        alt utilizator care primește acest link va vedea aceeași listă filtrată
        de produse pe pagina sa, deoarece toate datele de care are nevoie
        aplicația pentru a afișa corect interfața sunt chiar acolo în URL.
      </p>
      <h3>Preluarea parametrilor</h3>
      <p>
        Pentru a citi și a modifica șirul de interogare în React Router, există
        hook-ul <b>useSearchParams</b> , care este un mic wrapper peste clasa
        <b>URLSearchParams</b> încorporată în browser.
      </p>
      <p style={{ color: 'red' }}>
        <b>const [searchParams, setSearchParams] = useSearchParams();</b>
      </p>
      <p>
        Returnează o matrice de două valori: un obiect cu parametrii șirului de
        interogare (o instanță a URLSearchParams) pentru adresa URL actuală și o
        funcție pentru a actualiza șirul de interogare. Pentru a obține valorile
        parametrilor, există metoda <b>URLSearchParams.get(key)</b> care
        așteaptă un nume de parametru și returnează valoarea acestuia sau{' '}
        <b>null</b>, dacă nu există un astfel de parametru în șirul de
        interogare.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image4}
        alt="Example"
      />
      <h4>Tipul valorilor</h4>
      <p>
        Metoda <b>get()</b> va returna întotdeauna un string, indiferent de
        valoarea parametrului specificată în șirul de interogare. De exemplu,
        pentru un șir de interogare ca{' '}
        <b>?name=hoodie&maxPrice=500&inStock=true</b>, obținem următoarele
        valori ale parametrilor:
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image5}
        alt="Example"
      />
      <p style={{ color: 'red' }}>
        <b>Casting</b>
      </p>
      <p>
        Dacă parametrii sunt valori numerice sau boolean, atunci trebuie
        efectuată o transformare pentru a obține valoarea tipului corect. Acest
        lucru se poate face cu clasele <b>Number(value)</b> și{' '}
        <b>Boolean(value)</b>
        încorporate.
      </p>
      <h4>Parametrii ca un obiect</h4>
      <p>
        Dacă șirul de interogare conține mai mulți parametri, atunci utilizarea
        constantă a metodei <b>get()</b> poate fi incomodă. Iată o modalitate
        simplă de a converti o instanță a clasei <b>URLSearchParams</b> într-un
        obiect obișnuit cu proprietăți.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image6}
        alt="Example"
      />
      <p style={{ color: 'red' }}>
        <b>Memoization</b>
      </p>
      <p>
        Memorizăm operația de transformare a obiectului de parametri pentru a
        obține o referință la noul obiect numai dacă parametrii șirului de
        interogare se modifică, nu de fiecare dată când componenta este randată.
      </p>
      <h3>Modificarea șirului de interogare</h3>
      <p>
        Pentru a modifica parametrii, folosim funcția pe care{' '}
        <b>useSearchParams</b> o returnează ca al doilea element al
        matricei.Acestei funcții trebuie să i se treacă un obiect de parametri
        noi care va înlocui complet șirul de interogare curent.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image7}
        alt="Example"
      />
      <p>
        Uită-te peste codul complet al paginii cu toate produsele din exemplul (
        <b>Products</b>), în care este implementată modificarea șirului de
        interogare și filtrarea listei. Vei observa cum parametrul <b>name</b>{' '}
        este eliminat dacă valoarea sa este un șir gol.
      </p>

      <h4>SearchParams</h4>
      <SearchParams />

      <h3>Urmărirea modificărilor</h3>
      <p>
        Dacă șirul de interogare se modifică, hook-ul <b>useSearchParams</b> va
        returna noua valoare a parametrului și componenta va fi actualizată,
        astfel încât, să putem reacționa la aceasta și să declanșăm efectul.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image8}
        alt="Example"
      />
      <h2>Obiect de localizare</h2>
      <p>
        Fiecare valoare din istoricul de navigare este descrisă de un obiect
        <b>location</b> cu un set standard de proprietăți care stochează
        informații complete despre adresa URL. Când utilizatorul dă click pe un
        link și navighează prin aplicație, locația curentă se schimbă și se
        adaugă un nou record în istoric.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image9}
        alt="Example"
      />
      <ul>
        <li>
          <b>pathname</b> - un șir care conține o porțiune a URL-ului (de la
          caracterul <b>/</b> până la <b>?</b>).
        </li>
        <li>
          <b>search</b> - conține întregul șir de interogare. Dacă nu există
          parametri, valoarea va fi un șir gol.
        </li>
        <li>
          <b>hash</b> - un șir care conține o parte din adresa URL, mai exact de
          la sfârșitul șirului de interogare și simbolul <b>#</b>, care este
          urmat de identificatori ai fragmentelor URL. Dacă nu există un id de
          fragment, aceasta va fi un șir gol.
        </li>
        <li>
          <b>state</b> - o valoare aleasă în mod arbitrar, care conține
          informații suplimentare legate de locație, dar nu este afișată în
          adresa URL. Este setat de programator și folosit pentru a transfera
          date între rute.
        </li>
        <li>
          <b>key</b> - un șir unic de identificare asociat cu această locație.
          Este o proprietate utilitară a cărei valoare este setată automat
          pentru fiecare valoare nou adăugată în istoricul de navigare.
        </li>
      </ul>
      <p>
        De exemplu, pentru o astfel de adresă URL, obiectul localization ar
        arăta astfel:
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image10}
        alt="Example"
      />
      <h3>useLocation hook</h3>
      <p>
        Returnează un obiect de localizare, de fiecare dată când navigăm pe o
        rută nouă sau actualizăm o parte din URL, reprezentând adresa URL
        actuală. Putem aplica asta în cazul în care dorim să efectuăm un anumit
        efect atunci când se modifică locația curentă. De exemplu, atunci când
        trimitem date către un serviciu de analiză a datelor.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image11}
        alt="Example"
      />
      <h3>Proprietatea location.state</h3>
      <p>
        Imaginează-ți următorul scenariu în aplicația magazinului nostru.
        Utilizatorul se află pe o pagină cu o listă de produse și a căutat un
        anumit produs după nume, presupunem că URL-ul curent este
        <b>/products?name=hoodie</b>. După aceea, utilizatorul dă click pe
        prezentarea produsului și merge la pagina cu informații despre acel
        produs. Presupunem că URL-ul curent este <b>/products/h-1</b>.
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
        Proprietatea <b>state</b> a obiectului de localizare permite
        transmiterea de date atunci când navigăm de la o rută la alta. Pentru a
        face acest lucru, folosim prop-ul <b>state</b> din componenta{' '}
        <b>Link</b> și îi transmitem un obiect cu proprietatea <b>from</b> - de
        unde a venit utilizatorul. Valoarea prop-ului <b>state</b> nu are o
        structură predefinită și poate fi aleasă în mod aleatoriu de către
        programator.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image13}
        alt="Example"
      />
      <p>
        Valoarea prop-ului <b>state</b> va fi disponibilă pe obiectul de
        localizare al rutei către care s-a efectuat navigația. Tot ce trebuie să
        facem este să folosim hook-ul <b>useLocation</b>, să obținem obiectul{' '}
        <b>location</b> și să accesăm proprietatea lui <b>state</b>.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image14}
        alt="Example"
      />
      <p>
        Nu trebuie să calculăm adresa URL curentă pentru a forma valoarea
        proprietății from. Obiectul location descrie deja toate părțile URL-ului
        pentru ruta curentă, astfel încât, să-l putem transmite prop-ului{' '}
        <b>state</b>.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image15}
        alt="Example"
      />
      <p>
        Proprietatea <b>location.state</b> va conține o referință la obiectul
        location al rutei de pe care a avut loc navigarea. Prop-ului <b>to</b> a
        componentei Link îi poate fi transmis nu numai un string care descrie{' '}
        <b>href</b> pentru viitorul <b>link</b>, ci și un întreg obiect{' '}
        <b>location</b>.
      </p>
      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image16}
        alt="Example"
      />
      <p>
        Ultimul lucru de luat în considerare este momentul când utilizatorul a
        dat click pe link-ul salvat anterior, al unui produs, într-un tab nou de
        browser, mai degrabă decât din pagina tuturor produselor. În acest caz,
        valoarea lui <b>location.state</b> va fi <b>null</b>, iar la accesarea
        proprietății
        <b>location.state.from</b>, aplicația se va bloca. Prin urmare, trebuie
        să avem grijă de valoarea implicită pentru prop-ul <b>to</b>.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image17}
        alt="Example"
      />

      <p>
        Aruncă o privire la codul complet pentru un exemplu de magazin de haine
        cu funcționalitate de returnare dintr-o singură pagină de produs. Codul
        componentelor{' '}
        <a href="https://codesandbox.io/p/sandbox/goit-textbook-lesson-10-location-state-92mvqh?from-embed=">
          ProductList
        </a>{' '}
        și{' '}
        <a href="https://codesandbox.io/s/goit-textbook-lesson-10-location-state-92mvqh?from-embed=&file=/src/pages/ProductDetails.jsx">
          ProductDetails
        </a>
        . s-au modificat.
      </p>

      <h4>UseLocation</h4>
      <UseLocation />

      <h2>Divizarea codului</h2>
      <p>
        În mod implicit, toate dependențele proiectului sunt adăugate într-un
        singur fișier. Cu cât e mai mult cod, cu atât se va încărca, compila și
        executa mai lent în browser-ul utilizatorului. Pe computere slabe sau
        telefoane cu o conexiune slabă la internet, poate dura zeci de secunde.
      </p>
      <p>
        În timpul development-ului pe un server local (<b>localhost</b>), toate
        fișierele sunt distribuite de pe computerul nostru. În acest caz, viteza
        conexiunii la Internet nu contează și, prin urmare, fișierele de proiect
        se încarcă foarte repede. Cu toate acestea, în producție, încărcarea
        fișierelor mari poate fi o problemă, deoarece nu toată lumea are
        internet de mare viteză și computere foarte performante.
      </p>
      <p>
        Soluția problemei este una clară - împărțirea proiectului în fișiere mai
        mici și încărcarea lor numai atunci când este necesar. Acesta este
        conceptul de divizare a codului. Dacă utilizatorul intră pe pagina de
        autentificare, nu este nevoie de întregul cod al aplicației. Va fi
        suficientă doar partea responsabilă de randarea componentelor specifice
        acestei pagini.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image18}
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Create React App</b>
      </p>

      <p>
        Divizarea codului în mai multe fișiere este sarcina unui{' '}
        <b>builder tool</b>, precum Webpack, nu a unui framework de front-end. C
        <b>reate React App</b> utilizează intern <b>Webpack</b> ca builder și
        acceptă divizarea codului fără vreo configurație suplimentară.
      </p>
      <p>
        Codul aplicației trebuie împărțit după rute și încărcat doar când este
        necesar. Acest lucru este suficient pentru majoritatea aplicațiilor.
        Atunci când navigăm pe o pagină nouă - codul necesar este încărcat
        pentru a-și afișa componentele. Această abordare se numește separare de
        cod în baza rutelor (route-centric).
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image19}
        alt="Example"
      />

      <p>
        Interfețele UI pot fi foarte complexe. Mergând mai departe, putem
        optimiza încărcarea componentelor individuale care sunt foarte mari și
        nu sunt necesare până la o anumită acțiune a utilizatorului. De exemplu,
        o componentă a unei ferestre modale care utilizează o bibliotecă mare
        pentru editarea textului. Această abordare se numește separare de cod
        bazată pe componente.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image20}
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Totuși ce să folosim?</b>
      </p>

      <p>
        Programatorul decide cum, ce și unde să divizeze. Cu toate acestea, iată
        câteva dintre cele mai bune practici.
      </p>
      <ul>
        <li>
          Împărțirea codului pe baza rutelor este necesar în orice aplicație.
        </li>
        <li>
          Împărțirea codului pe baza componentelor merită făcut doar în cazult
          interfețelor UI mari și complexe, cu sute de componente și biblioteci
          mari.
        </li>
        <li>
          De asemenea, împărțirea excesivă a codului nu este o idee bună. O
          solicitare HTTP pentru un fișier poate fi mai lungă decât greutatea
          adăugată la prima descărcare.
        </li>
      </ul>

      <h3>React.lazy() și React.Suspense</h3>
      <p>
        Știi deja că modulele ES sunt statice, ceea ce înseamnă că importurile
        și exporturile se fac în timpul compilării, nu în timpul execuției.
        Importurile trebuie declarate în partea de sus a fișierului, altfel va
        apărea o eroare de compilare. Asta înseamnă că nu putem importa în mod
        dinamic o dependență pe baza unei anumite condiții.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image21}
        alt="Example"
      />

      <p>
        ES2020 a introdus posibilitatea de a importa dinamic un modul. Diferența
        este că în loc de obișnuitul <b>import</b> care e static, putem folosi
        funcția
        <b>import()</b> care returnează un promise a cărei valoare va fi
        fișierul modului.
      </p>

      <p style={{ color: 'red' }}>
        <b>
          import("path/to/MyComponent").then(module =&gt; console.log(module));
        </b>
      </p>

      <p>
        React oferă un API pentru specificarea codului care trebuie separat
        într-un alt fișier și apoi încărcat și randat numai atunci când este
        necesar. Funcția <b>React.lazy()</b> este responsabilă pentru încărcarea
        asincronă a componentei, în timp ce <b>Suspense</b> își suspendă
        afișarea până când încărcarea este completă.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image22}
        alt="Example"
      />

      <p>
        Metoda <b>lazy()</b> așteaptă o funcție de încărcare care returnează
        rezultatul unui import dinamic - un promise a cărei valoare va fi{' '}
        <b>exportul implicit</b>
        al modulului (componentei). Dacă componenta MyComponent nu este încă
        încărcată la momentul randării, ar trebui să fie afișat un stub. Pentru
        asta este folosită componenta <b>Suspense</b>. Prop-ul <b>fallback</b>{' '}
        acceptă orice element sau componentă React. <b>Suspense</b> poate fi
        plasat oriunde, deasupra unei componente asincrone sau a unui grup de
        componente.
      </p>

      <p style={{ color: 'red' }}>
        <b>Importul dinamic</b>
      </p>

      <p>
        Poți observa absența unui import static al componentei{' '}
        <b>MyComponent</b> în ultimul exemplu. În schimb, este folosită funcția{' '}
        <b>import()</b>. Dacă vom lăsa importul static, atunci Webpack nu va
        efectua divizarea codului și va adăuga tot codul <b>MyComponent</b> la
        fișierul JavaScript principal al proiectului.
      </p>

      <h3>Suspense și tehnica «shared layout»</h3>
      <p>
        Dacă folosim tehnica <b>«shared layout»</b>, atunci <b>Suspense</b>{' '}
        trebuie plasat direct în componenta <b>SharedLayout</b>. În caz contrar,
        la fiecare încărcare a paginii, componentele comune a paginilor, cum ar
        fi header și navigation, vor dispărea și vor fi randate din nou.
      </p>

      <img
        style={{
          width: '100%',
          height: 'fit-content',
        }}
        src={image23}
        alt="Example"
      />

      <p>
        Analizează codul complet al aplicației după divizarea codului pe rute.
        Codul componentelor{' '}
        <a href="https://codesandbox.io/s/goit-textbook-lesson-10-code-splitting-7wjxvr?file=/src/components/App.jsx">
          App
        </a>
        ,{' '}
        <a href="https://codesandbox.io/p/sandbox/goit-textbook-lesson-10-code-splitting-7wjxvr?file=%2Fsrc%2Fcomponents%2FSharedLayout.jsx%3A22%2C16">
          SharedLayout
        </a>{' '}
        și
        <a href="https://codesandbox.io/p/sandbox/goit-textbook-lesson-10-code-splitting-7wjxvr?file=%2Fsrc%2Fpages%2FAbout.jsx">
          About
        </a>{' '}
        s-au modificat, iar restul componentelor din pagină au devenit{' '}
        <b>exporturi implicite</b>.
      </p>

      <h4>Nu merge ???!!!</h4>
      <LazySuspense />
    </div>
  );
}

export default Lesson10;
