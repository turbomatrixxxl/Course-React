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
import image17 from './images/image17.png';
import image18 from './images/image18.png';
import image19 from './images/image19.png';
import image20 from './images/image20.png';
import image21 from './images/image21.png';
import image22 from './images/image22.png';
import image23 from './images/image23.png';
import image24 from './images/image24.png';
import image25 from './images/image25.png';
import image26 from './images/image26.png';
import image27 from './images/image27.png';
import image28 from './images/image28.png';
import image29 from './images/image29.png';
import image30 from './images/image30.png';

import InitialCode from './InitialCode';
import TaskManager from './TaskManager';
import { Provider } from 'react-redux';
import { store } from './TaskManager/redux/store';
import TaskManager2 from './TaskManager2';
import { store2 } from './TaskManager2/redux/store2';
import TaskManager3 from './TaskManager3';
import { store3 } from './TaskManager3/redux/store3';

import styles from './Lesson11.module.css';

export default function Lesson11() {
  return (
    <div className="App">
      <h1>Modulul 6 - Lecția 11 - Bazele Redux</h1>

      <h2>State management</h2>
      <p>
        Cerințele pentru funcționalitatea aplicației sunt în continuă creștere,
        astfel încât, numărul de stări a interfețelor este și el în creștere:
        încărcarea asincronă a datelor, indicatorii de încărcare a datelor,
        valorile de filtrare la sortare, starea formularului etc. Bibliotecile
        de management a state-ului standardizează stocarea și lucrează cu
        state-ul aplicației, simplificând astfel procesul de development.
      </p>

      <img src={image1} alt="Example" />

      <p>
        Redux este una dintre cele mai populare biblioteci de gestionare a
        stării aplicațiilor.
      </p>
      <ul>
        <li>
          <b>Predictibilitatea rezultatului</b> - există întotdeauna o singură
          sursă de adevăr - un store (depozit) care ascunde starea aplicației și
          metodele de lucru cu acesta.
        </li>
        <li>
          <b>Mentenabilitatea</b> - există un set de reguli și "good practices"
          despre modul în care codul ar trebui să fie structurat, făcându-l mai
          consistent și mai ușor de înțeles.
        </li>
        <li>
          <b>DevTools</b> - o extensie de browser convenabilă care oferă
          informații despre starea aplicației în timp real.
        </li>
      </ul>

      <h3>Fluxul de date</h3>

      <img src={image2} alt="Example" />

      <p>
        Fără a utiliza biblioteca de management a state-ului, procesul de
        actualizare a datelor ar arăta astfel:
      </p>
      <ul>
        <li>
          State-ul este stocat în cea mai apropiată componentă a strămoșului
          comun.
        </li>
        <li>
          O componentă suprapusă inițializează schimbarea stării, apelând o
          metodă primită ca props.
        </li>
        <li>
          State-ul modificat este propulsat prin arborele de componente,
          folosind props.
        </li>
      </ul>
      <p>
        Aruncă o privire la ilustrația animată a acestui proces care arată un
        exemplu de modificare a stării în diferite părți ale aplicației.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/vanilla-flow.gif"
        alt="Example"
      />

      <p>
        Unele componente acționează ca conductori, adică primesc date ca props,
        doar pentru a le înainta și mai adânc către componenta care chiar are
        nevoie de ea. Mai întâi, trebuie să trecem metoda de schimbare a stării
        prin întregul arbore de componente, apoi starea în sine. Acesta este
        mecanismul standard pentru parsarea prop-ului la mai multe niveluri și
        nu poate fi schimbat.
      </p>
      <p>
        Redux rezolvă această problemă prin crearea unui <b>store</b> (depozit,
        magazin) care este responsabil pentru stocarea centralizată a tuturor
        stărilor și oferă un set de reguli și metode pentru modificarea
        acestuia. Componentele mai trebuie doar să apeleze metodele necesare
        pentru a actualiza datele și pentru a se abona la actualizări. Așa
        rezolvă Redux problema trecerii datelor ca props prin întregul arbore de
        componente.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/redux-flow.gif"
        alt="Example"
      />

      <p>
        Fluxul de date în Redux este întotdeauna unidirecțional, de la
        componente către store și de la store către componente, fără
        intermediari. Acest lucru face ca logica aplicației să fie mai
        previzibilă și mai ușor de înțeles.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/redux-data-flow.gif"
        alt="Examole"
      />

      <ul>
        <li>
          Utilizatorul, lucrând cu interfața UI, inițializează trimiterea de
          <b>actions</b> (acțiuni).
        </li>
        <li>
          <b>Store</b> apelează toți <b>reducers</b> declarați, funcții pentru
          schimbarea stării, transmițându-le <b>state</b> (starea) curentă și{' '}
          <b>actions</b> (acțiunea).
        </li>
        <li>
          <b>Store</b> salvează state (starea) actualizată care s-a returnat din
          <b>reducers</b>.
        </li>
        <li>
          La actualizarea <b>state</b> (starea), componentele dependente de
          acesta sunt re-randate.
        </li>
      </ul>
      <h3>Avantaje și dezavantaje</h3>
      <p>
        Redux este doar un instrument pentru gestionarea stării aplicației care
        este conceput pentru a ajuta în a răspunde la întrebarea «Când și cum
        s-a modificat o anumită parte a stării». Dacă nu ai probleme în
        gestionarea stării folosind ceea ce oferă React, s-ar putea să-ți fie
        mai greu să înțelegi beneficiile Redux. Poate că React State este tot ce
        ai nevoie pentru a crea o aplicație.
      </p>
      <p>
        Necesitatea utilizării unei biblioteci de management a state-ului nu
        este mereu prezentă. Dacă aplicația ta devine atât de complexă încât nu
        mai înțelegi unde este stocată starea, cum se schimbă și descoperi că
        stocarea datelor în starea componentei React nu mai este suficientă,
        atunci este timpul să introduci Redux.
      </p>
      <p>
        Cu toate acestea, utilizarea Redux vine cu compromisuri. Nu este
        conceput pentru a fi cel mai scurt sau mai rapid mod de a scrie cod.
        Redux impune anumite cerințe: stochează starea aplicației sub forma unei
        structuri de date simple (store), descrie modificările obiectelor
        (actions) și procesează aceste modificări, folosind funcții pure
        (reducers).
      </p>
      <h2>Task manager</h2>
      <p>
        Vom învăța Redux pe baza unei aplicații de task management în care putem
        crea, șterge, marca o sarcină ca finalizată și filtra sarcinile după
        stare. Acest lucru ne va permite să luăm în considerare cazurile des
        întâlnite atunci când lucrăm cu o colecție de date.
      </p>
      <p>
        Întâi de toate, să scriem cerințele de bază pentru interfața și logica
        aplicației:
      </p>
      <ul>
        <li>
          Interfața ar trebui să conțină mai multe părți:
          <ul style={{ listStyleType: 'circle' }}>
            <li>Un antent (header) cu informații despre sarcini și filtre</li>
            <li>Un formular pentru crearea de noi sarcini</li>
            <li>Lista sarcinilor</li>
          </ul>
        </li>
        <li>
          Antetul ar trebui să afișeze:
          <ul style={{ listStyleType: 'circle' }}>
            <li>Numărul sarcinilor finalizate și restante</li>
            <li>
              Filtre pentru lista de sarcini cu valorile «All», «Active» și
              «Completed»
            </li>
          </ul>
        </li>
        <li>
          Fiecare element din lista de sarcini ar trebui să aibă:
          <ul>
            <li>
              Un paragraf cu textul introdus de utilizator în formular la
              crearea sarcinii
            </li>
            <li>Căsuță de selectare pentru a comuta starea «Completed»</li>
            <li>Butonul de ștergere a sarcinii</li>
          </ul>
        </li>
      </ul>
      <p>Scopul final este o aplicație a cărei interfață va arăta astfel:</p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/app-preview.png"
        alt="Example"
      />

      <h3>State Design</h3>
      <p>
        Interfața aplicației ar trebui să se bazeze pe starea sa. Prin urmare,
        în primul rând, este necesar să se proiecteze starea aplicației care va
        conține un număr minim de valori suficiente pentru a descrie toate
        funcționalitățile necesare. Acest lucru va reduce cantitatea de date
        care trebuie monitorizate și actualizate.
      </p>
      <p>
        Aplicația noastră are două părți principale: lista de sarcini, din care
        putem obține toate datele necesare despre numărul și starea sarcinilor,
        precum și valorile filtrelor pentru lista de sarcini. Aceasta va fi
        starea minimă necesară.
      </p>
      <img src={image3} alt="Example" />
      <p style={{ color: 'red' }}>
        <b>Structura state-ului</b>
      </p>
      <p>
        Redux State este întotdeauna un obiect în interiorul căruia sunt
        adăugate proprietăți pentru starea aplicației. Prin urmare, am declarat
        o proprietate tasks pentru matricea cu toate sarcinile și filters pentru
        posibilele filtre. Starea Redux poate fi la fel de simplă sau la fel de
        complexă pe cât o cere funcționalitatea aplicației.
      </p>
      <p>
        Fiecare sarcină va fi reprezentată de un obiect cu următoarele
        proprietăți:
      </p>
      <ul>
        <b>
          <li>
            <b>id</b> - identificator unic
          </li>
        </b>
        <li>
          <b>text</b> - textul introdus de utilizator la creare
        </li>
        <li>
          <b>completed</b> - o valoare care va indica dacă sarcina este
          finalizată sau nu
        </li>
      </ul>
      <p>
        Iată cum ar putea arăta un exemplu de stare a aplicației noastre cu
        sarcini multiple:
      </p>
      <img src={image4} alt="Example" />

      <h3>Proiectarea acțiunilor</h3>
      <p>
        Acțiunile sunt evenimente care pot apărea într-o aplicație, inclusiv ca
        reacție la acțiunile utilizatorului. Să facem o listă de evenimente care
        pot fi în aplicația noastră:
      </p>
      <ul>
        <li>Adăugarea unei noi sarcini cu text introdus de utilizator</li>
        <li>Ștergerea sarcinei</li>
        <li>Comutarea stării sarcinii</li>
        <li>Schimbarea valorii filtrului pentru starea sarcinilor</li>
      </ul>

      <h3>Structura fișierului proiectului</h3>
      <p>
        Redux nu are o structură standard de fișiere pentru proiect, ci doar
        instrucțiuni generale și exemple, astfel încât fiecare poate alege ceva
        după bunul plac. Cu toate acestea, este important să ne gândim la
        șablonul de structură a fișierelor unui proiect, înainte de a scrie
        orice cod.
      </p>
      <p>
        Pentru a separa logica Redux de codul componentei, va fi suficient să
        facem un folder <b>src/redux</b> cu mai multe fișiere. Într-o aplicație
        mică, cum ar fi acest task management, acest lucru va fi suficient.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/basic-structure.png"
        alt="Example"
      />

      <ul>
        <li>
          <b>actions.js</b> - fișier pentru declararea acțiunilor
        </li>
        <li>
          <b>reducer.js</b> - fișier pentru declararea funcțiilor reducers care
          vor actualiza starea
        </li>
        <li>
          <b>constants.js</b> - fișier pentru stocarea constantelor (de exemplu,
          valorile filtrelor de stare a sarcinilor)
        </li>
        <li>
          <b>selectors.js</b> - fișier pentru declarare a funcțiilor selectors
        </li>
        <li>
          <b>store.js</b> - fișier pentru crearea magazinului redux (store)
        </li>
      </ul>
      <p>
        Dacă aplicația are o mulțime de date diferite, atunci abordarea «feature
        based» este perfectă. În folderul <b>redux</b> este creat un alt folder
        separat pentru fiecare entitate. În interiorul fiecărei entități există
        un set standard de fișiere. Ca urmare, există mai multe fișiere, dar
        codul Redux este împărțit în entități și devine mult mai structurat.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/feature-based-structure.png"
        alt="Example"
      />

      <h3>Initial code</h3>
      <p>
        În acest sandbox, puteți lua codul inițial al planificatorului de
        activități cu componente React gata făcute și îl puteți completa cu
        logica <b>Redux</b> în timp ce învățați materialul.
      </p>

      <InitialCode />

      <h2>Installation</h2>
      <p>
        Să adăugăm la proiectul nostru librăria{' '}
        <a href="https://redux.js.org/">Redux</a> - un set de funcții pentru
        crearea unui depozit (store), utilizarea stării aplicației (state) și
        trimiterea de acțiuni (actions).
      </p>

      <p style={{ color: 'red' }}>
        <b>npm install redux</b>
      </p>

      <p>
        Pentru a utiliza React și Redux împreună, trebuie adăugată librăria
        <a href="https://react-redux.js.org/">React Redux</a>. Acesta este un
        set de componente și hooks care conectează componentele React și Redux
        store.
      </p>

      <p style={{ color: 'red' }}>
        <b>npm install react-redux</b>
      </p>

      <p style={{ color: 'red' }}>
        <b>Redux vs Redux Toolkit</b>
      </p>

      <p>
        În materialele acestei lecții, ne vom familiariza cu conceptele
        fundamentale ale bibliotecii Redux și ne vom asigura că le vom analiza
        cu exemple reale. Dar, în viitor, vom folosi Redux Toolkit - un add-on
        la conceptele și construcțiile de bază ale Redux care se bazează pe cele
        mai bune practici, simplifică codul legat de Redux și previne erorile
        des întâlnite. Aceasta este abordarea recomandată oficial pentru
        scrierea logicii Redux.
      </p>

      <h2>Store</h2>
      <p>
        Un obiect care conține starea completă a aplicației, metode de acces la
        stare și metode de trimitere a acțiunilor. O aplicație poate avea doar
        un singur store. Pentru a crea un astfel de depozit, există o funcție
        <b>createStore()</b> care preia mai mulți parametri și returnează un nou
        obiect store.
      </p>

      <p style={{ color: 'red' }}>
        <b>createStore(reducer, preloadedState, enhancer)</b>
      </p>

      <ul>
        <li>
          <b>reducer</b> - o funcție care conține logica de modificare a stării
          Redux. Este un parametru obligatoriu.
        </li>
        <li>
          <b>preloadedState</b> - starea inițială a aplicației. Trebuie să fie
          un obiect asemănător cu cel puțin o parte din state. Este un parametru
          opțional.
        </li>
        <li>
          <b>enhancer</b> - o funcție responsabilă de extinderea
          caracteristicilor pentru store. Este un parametru opțional.
        </li>
      </ul>

      <img src={image5} alt="Example" />

      <p>
        După crearea depozitului, trebuie să-l conectăm cu componentele React,
        astfel încât acestea să-l poată accesa prin metodele acestuia. Pentru a
        face acest lucru, biblioteca React Redux are o componentă{' '}
        <a href="https://react-redux.js.org/api/provider">Provider</a> care
        așteaptă un props cu același nume - <b>store</b>. Pentru ca orice
        componentă din aplicație să poată folosi store-ul, învelim întregul
        arbore de componente cu <b>Provider</b>.
      </p>

      <img src={image6} alt="Example" />

      <h2>Redux DevTools</h2>
      <p>
        DevTools este o extensie de browser care adaugă o interfață UI destul de
        comodă pentru depanarea modificărilor de stare a aplicației și urmărirea
        fluxului de date în Redux, de la trimiterea acțiunilor până la
        modificările de stare.
      </p>
      <p>Mai întâi trebuie adăugată extensia în browser:</p>
      <ul>
        <li>
          <a href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">
            Chrome Web Store
          </a>
        </li>
        <li>
          <a href="https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/">
            Firefox Add-ons
          </a>
        </li>
        <li>
          <a href="https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei">
            Edge Add-ons
          </a>
        </li>
      </ul>
      <p>
        Apoi, vom instala o bibliotecă care va permite să inițializăm{' '}
        <b>Redux DevTools</b> și să o asociem cu extensia din browser.
      </p>

      <p style={{ color: 'red' }}>
        <b>npm install @redux-devtools/extension</b>
      </p>

      <p>
        Nu folosim încă nicio funcționalitate avansată din Redux, așa că
        importăm funcția <b>devToolsEnhancer</b> și o folosim la crearea
        depozitului, trecând rezultatul său ca al treilea argument, în loc de
        starea inițială.
      </p>

      <img src={image7} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Ordinea argumentelor</b>
      </p>

      <p>
        Dacă nu ai nevoie de starea inițială <b>preloadedState</b>, atunci
        valoarea lui
        <b>enhancer</b> este transmisă ca al doilea argument. Altfel, al
        treilea.
      </p>
      <p>
        După pornirea proiectului cu comanda <b>npm start</b>, o nouă filă{' '}
        <b>Redux</b> va apărea în <b>devTools</b>. Când o vom deschide,{' '}
        <b>Redux DevTools</b> se va deschide în stânga cu o listă de acțiuni
        care au fost trimise și în dreapta cu informații detaliate despre state
        și acțiuni.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/devtools.png"
        alt="Example"
      />

      <h2>Store subscription</h2>
      <p>
        Pentru a primi date din store, componentele trebuie să se aboneze la
        părțile din starea Redux de care au nevoie. Există un hook în biblioteca
        React Redux pentru asta - <b>useSelector(selector)</b>. Ia ca argument o
        funcție care declară un parametru <b>state</b> - întregul obiect de
        stare Redux care va fi transmis automat funcției de către hook-ul{' '}
        <b>useSelector</b>. Această funcție se numește selector și ar trebui să
        returneze doar partea din stare de care are nevoie componenta.
      </p>

      <img src={image8} alt="Example" />

      <p>
        Să adăugăm codul necesar pentru abonarea componentelor aplicației
        noastre. Pentru a ne concentra pe logica codului de abonare, vom omite
        stilurile. Poți vedea codul complet al aplicației în exemplul live de la
        sfârșitul acestei secțiuni.
      </p>

      <h3>Filtrarea după stare</h3>
      <p>
        Să stocăm posibilele valori ale filtrelor ca obiect pentru a le
        reutiliza în diferite locuri în aplicație. Vom crea: componenta
        <b>StatusFilter</b> pentru a calcula filtrul activ curent și trimite
        acțiuni pentru modificarea filtrului; componenta <b>TaskList</b> pentru
        a calcula lista de sarcini vizibile și funcția de reducere în care apoi
        vom procesa acțiunea de schimbare a filtrului.
      </p>

      <img src={image9} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Object.freeze()</b>
      </p>

      <p>
        Folosim metoda <b>Object.freeze()</b> pentru a «îngheța» obiectul cu
        valorile filtrelor și pentru a preveni modificarea accidentală prin
        referință, în locurile unde se importă.
      </p>
      <p>
        Componenta <b>StatusFilter</b> are nevoie de valoarea filtrului din
        proprietatea <b>statusFilter</b> a stării Redux, astfel încât funcția de
        selecție ar arăta astfel: <b>state =&gt; state.filters.status</b>.
      </p>

      <img src={image10} alt="Example" />

      <h3>Lista de sarcini</h3>
      <p>
        Componenta <b>TaskList</b> are nevoie de matricea cu sarcini din
        proprietatea tasks și valoarea filtrului din proprietatea{' '}
        <b>statusFilter</b>. Pe baza acestor valori, putem calcula o serie de
        sarcini care trebuie randate în interfață.
      </p>

      <img src={image11} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Unde sunt props?</b>
      </p>

      <p>
        Componenta <b>TaskList</b> nu are props, așa cum ar fi cu React State.
        Componenta <b>App</b> nu mai trebuie să știe că <b>TaskList</b> este
        abonată la datele din store. Folosind Redux, orice componentă poate
        accesa direct valorile din starea Redux, dacă este necesar.
      </p>

      <h3>Contorul de sarcini</h3>
      <p>
        Componenta <b>TaskCounter</b> are nevoie de o matrice de sarcini din
        proprietatea <b>tasks</b> a stării Redux. Astfel, funcția de selectare
        va arăta ca <b>state =&gt; state.tasks</b>. Pe baza acestor date, putem
        calcula datele derivate pentru numărul de sarcini active și finalizate.
      </p>

      <img src={image12} alt="Example" />

      <h3>Funcții selector</h3>
      <p>
        Același selector poate fi utilizat în mai multe locuri din aplicație,
        ceea ce duce la duplicarea codului, cum ar fi în componentele{' '}
        <b>TaskList, StatusFilter și TaskCounter</b>. Pentru a evita acest lucru
        și pentru a structura codul și mai bine, toate funcțiile selectorului
        sunt declarate într-un fișier separat. De exemplu, în
        <b>src/redux/selectors.js</b>, după care sunt importate în componente.
      </p>

      <img src={image13} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>O singură sursă de adevăr</b>
      </p>

      <p>
        Declararea funcțiilor selectorului în afara componentelor este, de
        asemenea, bună, deoarece componentele nu știu despre forma stării Redux,
        iar dacă se schimbă, va fi suficientă editarea codului unui singur
        fișier și să nu căutăm funcțiile în codul tuturor componentelor.
      </p>

      <h3>Task Manager</h3>
      <p>
        Iată mai jos exemplul aplicației noastre. În acest moment, aplicația
        implementează inițializarea depozitului, folosind devTools și
        abonamentele de componente la store. Următorul pas este adăugarea
        acțiunilor.
      </p>

      <Provider store={store}>
        <TaskManager />
      </Provider>

      <h2>Actions</h2>
      <p>
        <b>Actions</b> - obiecte care transmit date de la componentă la store,
        semnalând, astfel, ce eveniment a avut loc în interfață. Reprezintă
        singura sursă de informații pentru store.
      </p>

      <img src={image14} alt="Example" />

      <p>
        Acțiunile trebuie să aibă o proprietate obligatorie <b>type</b> - un
        string care descrie tipul de eveniment din interfață. În plus, comparatv
        cu proprietatea <b>type</b>, structura obiectului poate fi aleasă în mod
        arbitrar. Cu toate acestea, datele sunt de obicei transmise în
        proprietatea opțională <b>payload</b>. Datele acțiunii pot fi orice
        valoare, cu excepția funcțiilor și a claselor.
      </p>

      <p>
        Să creăm acțiuni care vor descrie adăugarea, ștergerea și schimbarea
        stării unei sarcini, precum și modificarea valorii filtrului.
      </p>

      <img src={image15} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Best Practices - Naming</b>
      </p>

      <p>
        Una dintre cele mai populare convenții pentru crearea tipului de acțiune
        este utilizarea a două părți ca valoare a câmpului <b>type</b> în
        formatul
        <b>domain/eventName</b>. Primul este numele categoriei (entității)
        căreia îi aparține acțiunea (sarcini și filtre), de regulă fiind același
        cu numele proprietății din starea Redux, iar al doilea este evenimentul
        care descrie acțiunea (addTask, deleteTask, toggleCompleted,
        setStatusFilter).
      </p>

      <p style={{ color: 'red' }}>
        <b>Best Practices - Minimalism</b>
      </p>

      <p>
        Acțiunile ar trebui să conțină un set minim de informații care va fi
        suficient pentru a schimba starea. De exemplu, atunci când ștergem o
        sarcină, este suficient să transmitem id-ul acesteia și nu întregul
        obiect.
      </p>

      <h3>Action Creators</h3>
      <p>
        Acțiunile sunt obiecte statice a căror proprietate <b>payload</b> nu
        poate fi setată dinamic. Creatorii de acțiuni (Action Creators) sunt
        funcții care pot prelua argumente și apoi pot crea și returna acțiuni cu
        aceeași valoare a proprietății <b>type</b>, dar <b>payload</b> diferit.
        Ele pot avea efecte secundare, cum ar fi popularea proprietăților
        implicite sau generarea unui identificator unic pentru obiectul
        sarcinei. Să creăm generatoare de acțiuni pentru aplicația noastră.
      </p>

      <img src={image16} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Id-ul sarcinei</b>
      </p>

      <p>
        Să ne uităm un pic la generatorul de acțiuni pentru crearea unei sarcini
        <b>addTask</b>. În viitor, backend-ul va fi responsabil pentru alocarea
        identificatorului, dar deocamdată, să o facem în codul nostru. Pentru
        asta, folosim librăria{' '}
        <a href="https://www.npmjs.com/package/nanoid">nanoid</a>.
      </p>

      <h3>Trimiterea acțiunilor</h3>
      <p>
        Pentru a notifica store-ul că a avut loc un eveniment în interfața UI,
        trebuie să trimitem o acțiune. Există un hook pentru asta în biblioteca
        React Redux <b>useDispatch()</b> care returnează o referință la funcția
        de trimitere a acțiunii <b>dispatch</b> din obiectul pe care l-am creat
        mai devreme.
      </p>

      <img src={image17} alt="Example" />

      <p>
        Să adăugăm codul de trimitere a acțiunilor proiectate anterior. Pentru a
        ne concentra asupra acțiunilor, în exemplul nostru vom omite codul
        pentru stiluri. Poți vedea codul complet al aplicației în exemplul live
        de la sfârșitul acestei secțiuni.
      </p>

      <h3>Crearea unei sarcini</h3>
      <p>
        Când trimitem un formular, în componenta <b>TaskForm</b> trebuie să
        trimitem acțiunea de creare a unei noi sarcini, trecându-i valoarea
        introdusă de utilizator.
      </p>

      <img src={image18} alt="Example" />

      <p>
        La trimiterea formularului, în lista de acțiuni din partea stângă a
        <b>Redux DevTools</b>, se adaugă acțiunea de creare a sarcinii trimise.
        Dând click acolo și selectând tab-ul <b>Actions</b> din partea dreaptă,
        putem vizualiza informații mai detaliate.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/add-task-action.png"
        alt="Example"
      />

      <h3>Ștergerea unei sarcini</h3>
      <p>
        Când dăm click pe butonul de ștergere din componenta <b>Task</b> este
        necesar să trimitem o acțiune de ștergere a sarcinii, trecându-i id-ul
        sarcinii. Aceste date vor fi suficiente pentru a elimina sarcina din
        matricea de obiecte.
      </p>

      <img src={image19} alt="Example" />

      <p>
        Când se dă click pe butonul de ștergere, o acțiune de ștergere a
        sarcinii este adăugată în Redux DevTools. Dând click acolo, putem vedea
        informații mai detaliate.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/delete-task-action.png"
        alt="Example"
      />

      <h3>Modificarea stării (status)</h3>
      <p>
        Atunci când dăm click pe checkbox-ul din componenta <b>Task</b> este
        necesar să trimitem acțiunea de comutare a stării sarcinii,
        transmițându-i id-ul sarcinii. Aceste date vor fi suficiente pentru a
        găsi sarcina în matricea de obiecte și pentru a schimba valoarea
        proprietății.
      </p>

      <img src={image20} alt="Example" />

      <p>
        Când se dă click pe checkbok, o acțiune de modificare a sarcinii este
        adăugată în Redux DevTools. Dând click acolo, putem vedea informații mai
        detaliate.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/toggle-task-action.png"
        alt="Example"
      />

      <p style={{ color: 'red' }}>
        <b>Fără props-uri suplimentare</b>
      </p>

      <p>
        Poți observa cum componenta <b>Task</b> nu are props, precum metode de
        ștergere și modificare a stării, așa cum ar fi în cazul în care am fi
        folosit React state. De asemenea, face componenta listei de sarcini mai
        simplă, nu trebuie să accepte date din props inutile și să le transmită
        componentei de sarcini. Folosind Redux, orice componentă poate accesa
        direct funcția de expediere a acțiunilor.
      </p>

      <h3>Modificarea filtrului</h3>
      <p>
        Când se dă click pe butoanele din componenta <b>StatusFilter</b>,
        trebuie să trimitem o acțiune de schimbare a filtrului, transmițându-i o
        nouă valoare. Folosim obiectul cu valorile filtrului din fișierul de
        constante.
      </p>

      <img src={image21} alt="Example" />

      <p>
        Când se dă click pe butoanele din filtru, o acțiune de modificare a
        filtrului este adăugată în Redux DevTools. Dând click acolo, putem vedea
        informații mai detaliate.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-11/filter-task-action.png"
        alt="Example"
      />

      <h3>Task Manager2</h3>
      <p>
        Analizează un exemplu live din aplicația noastră. În acest moment,
        aplicația inițializează store-ul, abonează componentele la store și
        trimite acțiuni cu ajutorul devTools. Următorul pas este să adăugăm
        logica necesară pentru actualizarea stării Redux, folosind funcții
        reducers.
      </p>

      <Provider store={store2}>
        <TaskManager2 />
      </Provider>

      <h2>Reducers</h2>
      <p>
        Am proiectat starea aplicației, am conectat componentele cu store-ul și
        am adăugat trimiterea acțiunilor. Este timpul să scriem codul pentru
        schimbarea stării Redux.
      </p>
      <p>
        <b>Reducer</b> - este o funcție care ia ca argumente starea curentă și o
        acțiune și astfel, returnează noua stare. Reducer-ul determină modul în
        care starea aplicației se schimbă ca răspuns la acțiunile trimise către
        store. Nu uita că acțiunile descriu doar ceea ce s-a întâmplat, nu și
        cum se schimbă starea aplicației.
      </p>
      <p style={{ color: 'red' }}>
        <b>(state, action) =&gt; nextState</b>
      </p>

      <h3>Root reducer</h3>
      <p>
        În aplicație va exista întotdeauna un singur reducer care trebuie trecut
        ca parametru funcției <b>createStore</b>. Acest reducer este responsabil
        pentru procesarea tuturor acțiunilor expediate, precum și calcularea
        noii stări.
      </p>

      <img src={image22} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Starea inițială</b>
      </p>

      <p>
        În momentul inițializării unui store (acțiunea @@<b>INIT</b> din Redux
        DevTools), tuturor reducer-ilor li se trec <b>undefined</b> ca valoare
        pentru state. Prin urmare, pentru fiecare reducer trebuie furnizat o
        valoare implicită pentru parametrul <b>state</b> care va deveni starea
        inițială a aplicației.
      </p>
      <p>
        Să adăugăm logica pentru procesarea acțiunii de creare a sarcinii.
        Verificăm dacă tipul acțiunii trimise se potrivește cu string-ul "
        <b>tasks/addTask</b>" și returnăm un nou obiect care conține toată
        starea, chiar și pentru proprietățile care nu s-au schimbat.
      </p>

      <img src={image23} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>State immutability</b>
      </p>

      <p>
        Scrierea manuală a codului de actualizare a stării nu este cea mai
        ușoară sarcină, așa că schimbarea accidentală a stării în reducers este
        o greșeală comună. În practică, nu va trebui să scriem manual
        actualizări suprapuse complicate. În lecția următoare vom învăța cum să
        folosim setul de instrumente Redux pentru a facilita scrierea logicii
        actualizării stării.
      </p>
      <p>
        Codul fișierului de creare a store-ului importă și folosește reducer-ul
        rădăcină.
      </p>

      <img src={image24} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Actualizarea interfeței</b>
      </p>

      <p>
        Dacă acum încercăm să adăugăm o nouă sarcină folosind interfața
        aplicației noastre, atunci un nou element va fi afișat în lista de
        sarcini. Ideea este că hook-ul <b>useSelector</b> forțează componenta să
        efectueze re-render de fiecare dată când acea parte a stării la care
        este abonată componenta se schimbă.
      </p>

      <h3>Regulile unui reducer</h3>
      <p>
        Reducer-ele trebuie să fie funcții pure și să urmeze o listă de reguli:
      </p>
      <ul>
        <li>
          Nu se pot schimba argumentele (state și action). Reducers ar trebui să
          calculeze doar o nouă valoare pentru state pe baza acestor argumente.
        </li>
        <li>
          Nu se poate modifica starea (state) existentă. În schimb, reducers
          trebuie să facă actualizări prin copierea stării existente și
          modificând copia.
        </li>
        <li>
          Reducers nu ar trebui să producă «efecte secundare». De exemplu,
          pornirea unui cronometru, efectuarea unei cereri HTTP, modificarea
          unei valori în afara unei funcții sau a argumentelor acesteia,
          generarea de numere sau șiruri aleatorii etc.
        </li>
      </ul>
      <p>
        Ne vom uita la metoda de evitare a efectelor secundare mai târziu, dar
        pentru moment, amintiți-vă că un reducer trebuie să fie o funcție pură.
        Primind argumentele, trebuie să calculeze următoarea stare și să o
        returneze. Fără efecte secundare. Fără mutații. Doar calculând o nouă
        versiune a state-ului.
      </p>

      <h3>Prelucrarea acțiunilor</h3>
      <p>
        Să adăugăm codul pentru gestionarea tuturor acțiunilor din aplicația
        noastră la reducer-ul rădăcină.
      </p>

      <h4>Ștergerea unei sarcini</h4>
      <p>
        La ștergere, avem acces la id-ul sarcinii din proprietatea payload, așa
        că folosim metoda <b>Array.filter()</b> pentru a crea o nouă matrice
        fără această sarcină. Verifică dacă tipul acțiunii trimise se potrivește
        cu șirul "<b>tasks/deleteTask</b>" și returnează un nou obiect al
        stării.
      </p>

      <img src={image25} alt="Example" />

      <h4>Schimbarea status-ului unei sarcini</h4>
      <p>
        Când comutăm starea, avem acces la id-ul sarcinii din proprietatea
        <b>payload</b>, așa că folosim metoda <b>Array.map()</b> pentru a crea
        un nou array cu valoarea modificată a proprietății <b>completed</b> a
        sarcinii cu id-ul corespunzător. Verifică dacă tipul acțiunii trimise se
        potrivește cu șirul "<b>tasks/toggleCompleted</b>" și returnează un nou
        obiect al stării.
      </p>

      <img src={image26} alt="Example" />

      <h3>Modificarea filtrului</h3>
      <p>
        Când filtrul se schimbă, noua valoare a filtrului <b>payload</b> ne este
        disponibilă, așa că verificăm dacă tipul acțiunii trimise se potrivește
        cu șirul "<b>filters/setStatusFilter</b>" și returnăm un nou obiect al
        stării.
      </p>

      <img className={styles.img} src={image27} alt="Example" />

      <p>
        Am adăugat cod pentru procesarea a doar patru acțiuni, iar codul
        reducer-ului devine deja greoi. Dacă vom încerca să procesăm toate
        acțiunile din aplicație într-o singură funcție reducer, codul va fi
        destul de greu de înțeles. Prin urmare, reducers sunt de obicei
        împărțite în câteva mai mici pentru a face codul mai ușor de înțeles și
        de întreținut.
      </p>

      <h3>Compunerea de reducer</h3>
      <p>
        De obicei, reducers sunt împărțite în funcție de părțile din starea
        Redux pe care le actualizează. Să împărțim procesarea acțiunilor pentru
        sarcini și modificarea filtrului în două funcții reducer independente.
        Fiecare reducer va fi responsabil doar pentru propria sa parte din
        starea Redux, astfel încât codul de actualizare a stării va fi mult mai
        simplu.
      </p>

      <img className={styles.img} src={image28} alt="Example" />

      <p>
        Acum avem două funcții reducer separate, dar atunci când creăm store-ul,
        trebuie să trecem un singur reducer rădăcină care este responsabil
        pentru toată starea Redux. Putem scrie reducer-ul rădăcină, astfel încât
        să apeleze pur și simplu alți doi reducers și să le transmită partea din
        state necesar și acțiunea. Aceasta este compoziția funcțiilor reducers.
      </p>

      <img className={styles.img} src={image29} alt="Example" />

      <p>
        Pentru a nu crea manual un reducer rădăcină, biblioteca Redux are
        funcția <b>combineReducers</b> care face același lucru, dar mai concis.
      </p>

      <img className={styles.img} src={image30} alt="Example" />

      <h3>Task Manager3</h3>
      <p>Explorează un exemplu live complet al aplicației noastre.</p>

      <Provider store={store3}>
        <TaskManager3 />
      </Provider>
    </div>
  );
}
