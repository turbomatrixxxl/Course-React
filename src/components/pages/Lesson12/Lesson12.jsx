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

import { Provider } from 'react-redux';
import { store } from './ConfigureStore/redux/store';
import ConfigureStore from './ConfigureStore';
import CreateAction from './CreateAction';
import { storeAction } from './CreateAction/redux/store';
import CreateReducer from './CreateReducer';
import { storeReducer } from './CreateReducer/redux/store';
import CreateSlice from './CreateSlice';
import { storeSlice } from './CreateSlice/redux/store';

export default function Lesson12() {
  return (
    <div className="App">
      <h1>Modulul 6 - Lecția 12 - Redux Toolkit</h1>

      <h2>Redux Toolkit</h2>
      <p>Există trei probleme principale când folosim biblioteca Redux:</p>
      <ul>
        <li>Un proces inutil de complicat de configurare a store-ului</li>
        <li>
          Necesitatea instalării unui set standard de biblioteci suplimentare
          pentru a extinde capabilitățile Redux
        </li>
        <li>
          O cantitate mare de cod boilerplate pentru crearea acțiunilor,
          reducers etc.
        </li>
      </ul>
      <p>
        <a href="https://redux-toolkit.js.org/">Redux Toolkit</a> - este
        biblioteca oficială pentru dezvoltarea eficientă a aplicațiilor,
        folosind Redux. Are ca scop standardizarea și simplificarea logicii
        Redux.
      </p>
      <ul>
        <li>
          Permite focusarea pe scrierea logicii principale necesară aplicației,
          fără a pierde timpul cu setările.
        </li>
        <li>
          Include pachete utilitare pentru simplificarea sarcinilor de bază, cum
          ar fi înființarea unui store, crearea de acțiuni și reducers,
          actualizări imutabile a datelor și multe altele.
        </li>
        <li>
          Oferă un set standard de setări a store-ului și include cele mai
          frecvent utilizate biblioteci din ecosistemul Redux.
        </li>
      </ul>
      <p>
        Biblioteca nu este destinată să rezolve toate problemele posibile și
        este limitată în mod intenționat. Deciziile precum cererile HTTP,
        structura de foldere și fișiere, gestionarea relațiilor dintre
        entitățile din store, etc., cad pe umerii dezvoltatorului. Cu toate
        acestea, setul de instrumente Redux va fi util pentru toate sarcinile
        obișnuite, ajutând la simplificarea și îmbunătățirea codului Redux.
      </p>

      <h2>Instalarea</h2>
      <p>Redux Toolkit poate fi instalat ca un pachet NPM standard.</p>

      <p style={{ color: 'red' }}>
        <b>npm install @reduxjs/toolkit</b>
      </p>

      <p>
        Folosind Redux Toolkit, nu este necesară adăugarea pachetului redux la
        proiect, decât dacă ai nevoie de funcția combineReducers(). Este
        suficientă instalarea @reduxjs/toolkit pentru a scrie logica Redux și
        react-redux pentru comunicarea componentelor cu store.
      </p>

      <p style={{ color: 'red' }}>
        <b>npm install @reduxjs/toolkit react-redux</b>
      </p>

      <p>
        Dacă creezi aplicația utilizând Create React App, fără un șablon de
        proiect prestabilit, atunci ar trebui să utilizezi șablonul oficial.
        Pentru a face acest lucru, comanda <b>npx create-react-app</b> trebuie
        rulată cu marcajul <b>--template</b>, având valoarea redux.
      </p>

      <p style={{ color: 'red' }}>
        <b>npx create-react-app my-app --template redux</b>
      </p>

      <h2>configureStore</h2>
      <p>
        Redux Toolkit furnizează funcția <b>configureStore(options)</b>, care
        include deja originalul <b>createStore()</b>, dar așteaptă un obiect cu
        opțiuni ca argument și setează câteva instrumente utile de dezvoltare ca
        parte a procesului de creare a store-ului.
      </p>
      <p>
        Vom refactoriza codul aplicației de planificare a sarcinilor din lecția
        anterioară.
      </p>

      <img src={image1} alt="Example" />

      <p>
        La prima vedere, este aproape același lucru. Totuși, Redux DevTools și
        alte funcții utile au fost imediat configurate. De exemplu, verificarea
        erorilor des întâlnite, cum ar fi mutarea stării în reducers sau
        utilizarea valorilor nevalide în state.
      </p>
      <p>
        De asemenea, funcția <b>configureStore()</b> poate crea automat un
        reducer rădăcină. Pentru a face acest lucru, trebuie să-i trecem la
        proprietatea
        <b>reducer</b> un obiect ca în <b>combineReducers</b>.
      </p>
      <p>
        În primul rând, să eliminăm crearea reducer-ului rădăcină din codul
        aplicației noastre și să adăugăm importul la reducers pentru sarcini și
        filtre din fișierul <b>src/redux/reducer.js</b>. Omitem codul sursă
        necritic pentru a reduce cantitatea de exemple.
      </p>

      <img src={image2} alt="Example" />

      <p>
        Acum, în fișierul de creare a store-ului, importăm și folosim separat
        funcțiile reducers.
      </p>

      <img src={image3} alt="Example" />

      <p>
        Analizează exdemplul de planificare a activităților de mai jos cu codul
        actualizat de creare a store-ului.
      </p>

      <Provider store={store}>
        <ConfigureStore />
      </Provider>

      <h2>createAction</h2>
      <p>
        Funcția{' '}
        <a href="https://redux-toolkit.js.org/api/createAction">
          createAction(type)
        </a>{' '}
        simplifică procesul de declarare a acțiunilor. Este nevoie de un string
        care descrie tipul de acțiune ca argument și returnează generatorul de
        acțiuni.
      </p>

      <img src={image4} alt="Example" />

      <p>
        Să adăugăm codul pentru crearea celorlalte generatoare de acțiuni pentru
        aplicația noastră. Folosind createAction(), ne va salva de la codul
        repetitiv pentru declararea generatoarelor de acțiuni.
      </p>

      <img src={image5} alt="Example" />

      <h3>Action Type</h3>
      <p>
        Există două moduri de a obține tipul acțiunii, de exemplu, pentru
        utilizarea lui într-un reducer.
      </p>

      <img src={image6} alt="Example" />

      <p>
        În reducer, importăm acțiunile și folosim proprietatea <b>type</b> a lor
        pentru a înlocui string-ul în interiorul instrucțiunii <b>switch</b>.
      </p>

      <img src={image7} alt="Example" />

      <h3>Conținutul la payload</h3>
      <p>
        În mod implicit, generatorii de acțiuni preiau un argument care devine
        valoarea proprietății <b>payload</b>. Dacă trebuie să scriem o logică
        suplimentară pentru crearea unei valori <b>payload</b> custom, cum ar fi
        adăugarea unui id unic, putem transmite un al doilea argument opțional
        la <b>createAction</b> - funcția de creare a acțiunii.
      </p>

      <p style={{ color: 'red' }}>
        <b>createAction(type, prepareAction)</b>
      </p>

      <p>
        Argumentele generatorului de acțiuni vor fi transmise funcției
        <b>prepareAction</b> care ar trebui să returneze un obiect cu
        proprietatea
        <b>payload</b>. Proprietatea <b>type</b> va fi adăugată automat.
      </p>

      <img src={image8} alt="Example" />

      <p>
        Mai jos poți vedea un exemplu de planificare a sarcinilor cu codul
        actualizat de creare a store-ului și a generatoarelor de acțiuni.
      </p>

      <Provider store={storeAction}>
        <CreateAction />
      </Provider>

      <h2>createReducer</h2>
      <p>
        Orice reducer primește Redux state și action, verifică tipul acțiunii în
        interiorul instrucțiunii <b>switch</b> și execută logica de actualizare
        a stării pentru acțiunea respectivă. În plus, reducer-ul determină
        valoarea inițială a stării și returnează starea rezultată dacă nu ar
        trebui să gestioneze acea acțiunea. Această metodă necesită prea mult
        cod boilerplate și este predispusă la erori. Funcția{' '}
        <b>createReducer()</b>
        simplifică procesul de declarare a funcțiilor reducers.
      </p>

      <p style={{ color: 'red' }}>
        <b>createReducer(initialState, actionsMap)</b>
      </p>

      <p>
        Ca prim argument se așteaptă starea inițială a reducer-ului, apoi un
        obiect cu proprietăți care are un format special unde fiecare cheie este
        un tip de acțiune, iar valoarea sa este o funcție reducer pentru acel
        tip. Adică, fiecare <b>case</b> devine cheie a obiectului pentru care
        este scris propriul său mini-reducer.
      </p>
      <p>
        Să înlocuim codul de declarare a reducer-ului de sarcini din aplicația
        noastră cu <b>createReducer</b>.
      </p>

      <img src={image9} alt="Example" />

      <p>
        Poți observa că nu este necesar niciun cod pentru blocul <b>default</b>.
        Funcția <b>createReducer</b> adaugă automat procesarea implicită a
        comportamentului la reducer.
      </p>

      <p style={{ color: 'red' }}>
        <b>Casting to a string</b>
      </p>

      <p>
        Sintaxa pentru proprietățile calculate a obiectului transformă valoarea
        într-un string, așa că putem utiliza doar numele funcției fără a
        specifica proprietatea <b>type</b>, deoarece metoda <b>toString()</b> a
        generatorului de acțiuni a fost suprascrisă pentru a returna tipul
        acțiunii
      </p>
      <p>
        În interiorul fiecărui mini-reducer, adăugăm codul de actualizare a
        state-ului pentru acțiunea care are tipul (<b>type</b>) corespunzător.
      </p>

      <img src={image10} alt="Example" />

      <p>
        Unul dintre principiile fundamentale ale Redux este faptul că funcțiile
        reducer ar trebui să fie funcții pure care nu schimbă starea curentă, ci
        returnează una nouă. Acest lucru permite să scriem cod previzibil, dar
        uneori îl face foarte dificil. Codul pentru o actualizare imediată a
        stării poate fi destul de confuz.
      </p>

      <h3>Librăria Immer</h3>
      <p>
        Redux Toolkit folosește defapt librăria{' '}
        <a href="https://immerjs.github.io/immer/">Immer</a>, ceea ce simplifică
        foarte mult logica de lucru cu state-ul, permițându-ne să scriem codul
        de actualizare a stării în reducer ca și cum am schimba direct starea.
        De fapt, funcțiile reducers primesc o copie a stării, iar Immer
        convertește toate mutațiile în operații de actualizare echivalente.
      </p>

      <img src={image11} alt="Example" />

      <p>
        Scrierea funcțiilor reducers care schimbă starea, face codul mai scurt
        și elimină greșelile comune, făcute atunci când se lucrează cu starea
        suprapusă. Cu toate acestea, acest lucru adaugă «un farmec» și încalcă
        vizual unul dintre principiile fundamentale ale Redux.
      </p>

      <h4>Modificarea sau actualizarea</h4>
      <p>
        Uneori, codul pentru o actualizare imediată a stării este mai concis
        decât alternativa sa. De exemplu, în reducer la procesarea acțiunilor de
        ștergere a unei sarcini. În acest caz, este necesară returnarea noului
        state.
      </p>

      <img src={image12} alt="Example" />

      <h4>Modificarea sau returnarea</h4>
      <p>
        Unul dintre capcanele bibliotecii Immer este faptul că în codul unui
        reducer, fie se modifică starea, fie se returnează pe cea actualizată,
        dar nicidecum ambele, simultan.
      </p>

      <img src={image13} alt="Example" />

      <h3>Task Manager</h3>
      <p>
        Iată la final un exemplu de planificare a sarcinilor cu codul actualizat
        de creare a store-ului și a generatoarelor de acțiuni.
      </p>

      <Provider store={storeReducer}>
        <CreateReducer />
      </Provider>

      <h2>createSlice</h2>
      <p>
        La proiectare, structura Redux state este împărțită în mai multe părți (
        <b>slice</b>), fiecare dintre acestea fiind responsabile pentru un
        reducer separat. În aplicația noastră de planificare a sarcinilor,
        există două părți (slices) - sarcini (tasks) și filtre (filters).
      </p>

      <img src={image14} alt="Example" />

      <p>
        Pentru fiecare slice este creat un set standard de entități: action
        types, generatoare de acțiuni și un reducer. Funcțiile definesc starea
        inițială a unui slice, lista de acțiuni care o afectează și operațiile
        de actualizare a stării.
      </p>
      <p>
        Funcția <b>createSlice()</b> este un add-on pentru <b>createAction()</b>{' '}
        și
        <b>createReducer()</b> care standardizează și simplifică în continuare
        declarația unui slice. Primește ca parametru un obiect cu setări.
        Aceasta creează și returnează action types, generatoare de acțiuni și un
        reducer. Să analizăm crearea unui slice, folosind ca exemplu o listă de
        sarcini.
      </p>

      <img src={image15} alt="Example" />

      <p>
        Proprietatea <b>name</b> definește numele slice-ului care va fi adăugat
        la crearea acțiunilor ca prefix la numele reducer-ului declarat în
        proprietatea <b>reducers</b>. Deci, obținem acțiuni cu type{' '}
        <b>tasks/addTask</b>,<b>tasks/deleteTask</b> și{' '}
        <b>tasks/toggleCompleted</b>.
      </p>
      <p>
        Funcția <b>createSlice()</b> folosește <b>createReducer</b> și
        biblioteca <b>Immer</b>, astfel încât să putem scrie logica de
        actualizare a stării ca și cum am fi schimbat-o direct.
      </p>

      <img src={image16} alt="Example" />

      <h3>Conținutul la payload</h3>
      <p>
        Generatorul de acțiuni <b>addTask</b> așteaptă doar un string cu textul
        sarcinii, iar apoi schimbă valoarea lui <b>payload</b>, folosind funcția
        acțiunii. Iată cum arată asta în codul nostru.
      </p>

      <img src={image17} alt="Example" />

      <p>
        Pentru a face același lucru atunci când se crează un slice, în
        proprietatea obiectului reducer, în cazul nostru <b>addTask</b>, trebuie
        să fie transmisă nu o funcție, ci un obiect cu alte două proprietăți -{' '}
        <b>reducer</b>
        și <b>prepare</b>.
      </p>

      <img src={image18} alt="Example" />

      <h3>Slice files</h3>
      <p>
        Nu mai avem nevoie de fișierul <b>reducer.js</b>. Vom crea un fișier
        separat pentru fiecare slice. Pentru slice-ul sarcinilor, acesta ar fi
        fișierul
        <b>tasksSlice.js</b>.
      </p>

      <img src={image19} alt="Example" />

      <p>
        Și fișierul <b>filtersSlice.js</b> pentru slice-ul filtrelor.
      </p>

      <img src={image20} alt="Example" />

      <h3>Crearea store-ului</h3>
      <p>
        În fișierul de creare a store-ului, trebuie modificat codul de import al
        reducer-ului.
      </p>

      <img src={image21} alt="Example" />

      <h3>Generatoarele de acțiune</h3>
      <p>
        Generatoarele de acțiuni sunt acum generate automat pentru fiecare
        slice. Asta înseamnă că nu mai trebuie să le declarăm manual într-un
        fișier separat, folosind <b>createAction()</b>. Putem elimina fișierul
        <b>actions.js</b> și actualiza importurile generatorului de acțiuni în
        fișierele componentelor. Structura fișierului de proiect va arăta
        astfel:
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-12/file-structure.png"
        alt="example"
      />

      <p>
        Importurile generatorului de acțiuni se fac din fișierul slice-ului
        corespunzător.
      </p>

      <img src={image22} alt="Example" />

      <h3>Task Manager</h3>
      <p>
        Analizează un exemplu live de planificare a sarcinilor cu codul
        actualizat de creare a store-ului și a generatoarelor de acțiuni.
        Iată-l:
      </p>

      <Provider store={storeSlice}>
        <CreateSlice />
      </Provider>
    </div>
  );
}
