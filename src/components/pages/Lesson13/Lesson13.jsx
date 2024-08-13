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

import { Mounting } from './Mounting/Mounting';
import { Provider } from 'react-redux';
import { store } from './Mounting/redux/store';
import { storeAsyncThunk } from './CreateAsyncThunk/redux/store';
import { CreateAsyncThunk } from './CreateAsyncThunk/CreateAsyncThunk';
import { storeTaskManager } from './TaskManager/redux/store';
import TaskManager from './TaskManager';
import { storeFinalTaskManager } from './FinalTaskManager/redux/store';
import FinalTaskManager from './FinalTaskManager';

export default function Lesson13() {
  return (
    <div className="App">
      <h1>Modulul 7 - Lecția 13 - Async Redux</h1>

      <h2>Operații asincrone</h2>
      <p>
        Până acum, am lucrat cu date locale stocate în memoria unui tab de
        browser sau în localStorage. În practică, marea majoritate a datelor din
        aplicație sunt stocate într-o bază de date pe backend și orice operație
        pe acestea sunt efectuate folosind cereri HTTP.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-13/client-server-architecture.png"
        alt="Example"
      />

      <p>
        Solicitările HTTP sunt operații asincrone care sunt reprezentate de
        promise-uri, deci pot fi împărțite în trei componente: procesul de
        solicitare (pending), finalizarea cu succes a cererii (fulfilles) și
        finalizarea cererii cu o eroare (rejected). Acest model se aplică
        oricăror solicitări de citire, creare, ștergere și actualizare.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-13/request-states.png"
        alt="Example"
      />

      <h2>Operații</h2>
      <p>
        Să ne uitam la un task des întâlnit, și anume încărcarea datelor,
        procesarea unui indicator de loading și procesarea unei erori de cerere.
        Să declarăm un slice pentru lista de sarcini, în starea căreia vom stoca
        o matrice de sarcini, un steag al stării de încărcare și datele unei
        posibile erori.
      </p>

      <img src={image1} alt="Example" />

      <p>
        Să adăugăm un reducer pentru a procesa fiecare dintre stările posibile a
        unei solicitări.
      </p>

      <img src={image2} alt="Example" />

      <p>
        În reducers, schimbăm părțile corespunzătoare ale stării. Indicatorul de
        loading <b>isLoading</b> este setat la <b>true</b> la începutul cererii,
        iar <b>false</b> în orice alt caz, deoarece cererea va fi finisată. Când
        o cerere se execută cu o eroare, schimbăm valoarea proprietății{' '}
        <b>error</b>, scriind în ea ceea ce va veni în <b>action.payload</b> -
        informații despre eroare. Dacă solicitarea e cu succes, vom reseta
        valoarea erorii și vom scrie în items datele primite de la{' '}
        <b>action.payload</b> - o matrice cu sarcini.
      </p>

      <img src={image3} alt="Example" />

      <p>
        Pentru a executa codul asincron la trimiterea unei acțiuni, este necesar
        să se declare o «operație» - un generator asincron de acțiuni în corpul
        căruia vor fi chemați alți generatori sincroni de acțiuni. Operația nu
        returnează o acțiune, ci returnează o altă funcție care ia ca argument
        <b>dispatch</b>. În corpul acestei funcții, putem efectua acțiuni
        asincrone, cum ar fi o solicitare HTTP. Vom folosi biblioteca{' '}
        <a href="https://axios-http.com/">axios</a> pentru a efectua cereri.
      </p>

      <img src={image4} alt="Example" />

      <p style={{ color: 'red' }}>
        <b>Redux thunk</b>
      </p>

      <p>
        Capacitatea de a declara generatoare asincrone de acțiuni și de a
        efectua acțiuni asincrone este oferită de o extensie a store-ului, mai
        exact <a href="https://github.com/reduxjs/redux-thunk">redux-thunk</a>{' '}
        care include implicit și Redux Toolkit.
      </p>
      <p>
        Acum, în cadrul operației, trimitem acțiuni sincrone pentru a gestiona
        trei situații: setarea unui indicator de loading, primirea datelor la o
        solicitare reușită și gestionarea unei erori.
      </p>

      <img src={image5} alt="Example" />

      <p>
        Apoi, adăugăm codul minim necesar pentru apelarea generatorului asincron
        de acțiuni în componentă, randarea indicatorul de loading, a datelor și
        gestionarea erorilor.
      </p>

      <img src={image6} alt="Example" />

      <p>
        Analizează codul din exemplul live. Atunci când componenta App execută
        faza de mounting, este afișat întâi un indicator de loading și, după un
        timp, o matrice de sarcini. Pentru a da refresh la pagina exemplu din
        sandbox, dă-i click pe butonul de refresh din partea de jos a ferestrei.
      </p>

      <Provider store={store}>
        <Mounting />
      </Provider>

      <h2>createAsyncThunk</h2>
      <p>
        Redux Toolkit simplifică procesul de declarare a unui generator asincron
        de acțiuni cu ajutorul funcției createAsyncThunk(). Primul argument pe
        care îl ia este action type, iar al doilea este o funcție care ar trebui
        să execute o cerere HTTP și să returneze un promise ce va conține datele
        trimise. Datele vor deveni valoarea obiectului payload. Funcția
        returnează un generator asincron de acțiuni (operații) care, atunci când
        este lansat, va executa funcția cu codul cererii HTTP.
      </p>

      <img src={image7} alt="Example" />

      <p>
        Funcția <b>createAsyncThunk()</b> creează automat acțiuni reprezentând
        ciclul de viață al unei solicitări HTTP și le trimite în ordinea
        corectă, în funcție de starea solicitării. Tipul acțiunii create e
        compus dintr-un string care e specificat ca prim argument ("
        <b>tasks/fetchAll</b>"), urmat de postfixele "<b>pending</b>", "
        <b>fulfilled</b>" sau "<b>rejected</b>", în funcție de starea cererii pe
        care o descrie acțiunea.
      </p>
      <ul>
        <li>
          "<b>tasks/fetchAll/pending</b>" - începutul solicitării HTTP
        </li>
        <li>
          "<b>tasks/fetchAll/fulfilled</b>" - finalizarea cu succes a cererii
        </li>
        <li>
          "<b>tasks/fetchAll/rejected</b>" - încheierea cererii cu o eroare
        </li>
      </ul>
      <p>
        Înlocuind în exemplul nostru codul care declară operația fetchTasks și
        dând click pe butonul de refresh al paginei, putem vedea în devTools că
        payload și acțiunile sunt trimise cu tipul corect atunci când componenta
        App execută faza de mounting.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-13/thunk-actions.png"
        alt="Example"
      />

      <p>
        Funcția <b>createAsyncThunk</b> nu creează un reducer, deoarece nu poate
        ști cum vrem să ținem evidența stării de loading, cu ce date se va
        încheia cererea și cum să o procesăm corect. Deci, următorul pas este
        modificarea codului de la secțiunea tasksSlice pentru ca acesta să poată
        gestiona noile acțiuni.
      </p>

      <img src={image8} alt="Example" />

      <p>
        Proprietatea <b>extraReducers</b> este folosită pentru a declara
        funcțiile reducers pentru tipurile de acțiuni «externe», adică cele care
        nu sunt generate din proprietatea <b>reducers</b>. Deoarece aceste
        funcții reducers se ocupă de acțiunile «externe», nu vor fi create
        generatoare de acțiuni în
        <b>slice.actions</b> și nici nu e nevoie de acest lucru.
      </p>

      <p style={{ color: 'red' }}>
        <b>Operation Actions</b>
      </p>

      <p>
        Generatoarele de acțiuni care prezintă ciclul de viață al unei cereri
        sunt stocate în obiectul operației ca proprietăți: <b>pending</b>,{' '}
        <b>fulfilled</b> și
        <b>rejected</b>. Acestea sunt create automat de <b>createAction</b> și,
        prin urmare, au o proprietate <b>type</b> și o metodă <b>toString()</b>{' '}
        suprascrisă, care returnează un string cu tipul acțiunii.
      </p>
      <p>
        Nu mai avem nevoie de proprietatea <b>reducers</b>, așa că mutăm toată
        logica pentru procesarea acțiunilor de solicitare în noile funcții
        reducers..
      </p>

      <img src={image9} alt="Example" />

      <p>
        Rămâne de adăugat procesarea cererii în cazul unei erori. Pentru a face
        acest lucru, mai trebuie adăugat un cod la crearea operației{' '}
        <b>fetchTasks</b>, astfel încât, în cazul unei erori de solicitare, să
        fie returnat un promise, care mai apoi va fi respins. Proprietatea{' '}
        <b>payload</b> va apărea apoi pe acțiunea de eroare a cererii.
      </p>

      <img src={image10} alt="Example" />

      <p>
        Funcția callback, în care se execută cererea, se numește{' '}
        <b>payloadCreator</b>
        și este responsabilă de compilarea valorii de la proprietatea{' '}
        <b>payload</b>. Va fi apelată cu două argumente: <b>arg</b> și{' '}
        <b>thunkAPI</b>.
      </p>

      <p style={{ color: 'red' }}>
        <b>payloadCreator(arg, thunkAPI)</b>
      </p>

      <ul>
        <li>
          <b>arg</b> - valoarea care a fost transmisă operației atunci când a
          fost apelată. Este folosit, de exemplu, pentru a transmite: id-ul
          obiectelor la ștergere, textul unui câmp la creare etc.
        </li>
        <li>
          <b>thunkAPI</b> - un obiect care este transmis generatorului asincron
          de acțiuni în <b>redux-thunk</b>. Conține proprietăți și metode pentru
          accesarea store-ului, trimiterea de acțiuni și alte informații
          suplimentare.
        </li>
      </ul>
      <p>
        Analizează codul din exemplul live care folosește tot materialul învățat
        până acum.
      </p>

      <Provider store={storeAsyncThunk}>
        <CreateAsyncThunk />
      </Provider>

      <h2>Task Manager</h2>
      <p>
        Să modificăm codul aplicației noastre pentru ca aceasta să funcționeze
        cu date din backend. Vom folosi serviciul{' '}
        <a href="https://mockapi.io/">mockapi.io</a> care oferă o interfață
        vizuală pentru crearea unei baze de date simple. Acest lucru ne va
        permite să efectuăm operații CRUD pentru o matrice de obiecte.
      </p>
      <p>
        Poți lua din sandbox codul inițial al aplicației de planificare a
        sarcinilor cu componente React gata făcute și logica Redux de bază,
        adăugând restul codului, în timp ce vei învăța materialul.
      </p>

      <Provider store={storeTaskManager}>
        <TaskManager />
      </Provider>

      <h3>Selectori</h3>
      <p>
        Datorită faptului că am modificat forma state-ului, acum e necesară
        completarea fișierului cu selectori.
      </p>

      <img src={image11} alt="Example" />

      <h3>Citirea sarcinilor</h3>
      <p>
        Avem deja o operație și un reducer pentru citirea unei matrice de
        sarcini. Să adăugăm componenta App, astfel încât atunci când va executa
        faza de mounting, operația de cerere HTTP din spatele listei de sarcini
        să fie declanșată.
      </p>

      <img src={image12} alt="Example" />

      <p>
        După faza de mounting a componentei App și finalizarea cererii,
        interfața va afișa o listă de sarcini - componenta TaskList care
        folosește selectori pentru a obține o matrice de sarcini din Redux
        state.
      </p>

      <h3>Indicatorul cererii HTTP</h3>
      <p>
        Să afișăm un indicator pentru solicitarea executată deasupra listei de
        sarcini.
      </p>

      <img src={image13} alt="Example" />

      <h3>Adăugarea unei sarcini</h3>
      <p>
        Să declarăm o operație de adăugare a unei sarcini care așteaptă doar
        textul introdus de utilizator. Backend-ul va fi acum responsabil pentru
        crearea unui id unic și adăugarea proprietății completed.
      </p>

      <img src={image14} alt="Example" />

      <p>
        În componenta <b>TaskForm</b>, vom adăuga codul pentru lansarea
        operației de adăugare a unei sarcini la trimiterea formularului.
      </p>

      <img src={image15} alt="Example" />

      <p>
        Să adăugăm în slice-ul <b>tasksSlice</b> codul pentru procesarea
        acțiunilor la adăugarea unei sarcini.
      </p>

      <img src={image16} alt="Example" />

      <h3>Ștergerea unei sarcini</h3>
      <p>
        Să declarăm o operație de ștergere care va aștepta doar id-ul sarcinii.
      </p>

      <img src={image17} alt="Example" />

      <p>
        În componenta <b>Task</b>, vom adăuga codul pentru lansarea operației de
        ștergere a sarcinii, iar atunci când se va da click pe butonul de
        ștergere, îi vom transmite id-ul sarcinei.
      </p>

      <img src={image18} alt="Example" />

      <p>
        Să adăugăm în slice-ul <b>tasksSlice</b> codul pentru gestionarea
        acțiunilor de ștergere a sarcinilor.
      </p>

      <img src={image19} alt="Example" />

      <h3>Comutarea stării unei sarcine</h3>
      <p>
        Să declarăm o operație de schimbare a stării care va aștepta întregul
        obiect.
      </p>

      <img src={image20} alt="Example" />

      <p>
        În componenta <b>Task</b>, vom adăuga codul pentru lansarea operației de
        modificare a stării, iar atunci când se dă click pe căsuța de selectare,
        îi vom transmite întregul obiect.
      </p>

      <img src={image21} alt="Example" />

      <p>
        Să adăugăm în slice-ul <b>tasksSlice</b> codul pentru procesarea
        acțiunilor la schimbarea stării unei sarcini.
      </p>

      <img src={image22} alt="Example" />

      <h3>Să scurtăm codul funcțiilor reducers</h3>
      <p>
        Codul funcțiilor reducers care procesează acțiunile <b>pending</b> și{' '}
        <b>rejected</b>
        ale tuturor operațiilor este identic. Să mutăm logica acestor în
        funcții, ceea ce ne va ajuta să reducem duplicarea codului.
      </p>

      <img style={{ objectFit: 'cover' }} src={image23} alt="Example" />

      <h3>Codul final</h3>
      <p>
        Vezi codul din exemplul live de mai jos care folosește tot materialul
        învățat până acum.
      </p>

      <Provider store={storeFinalTaskManager}>
        <FinalTaskManager />
      </Provider>
    </div>
  );
}
