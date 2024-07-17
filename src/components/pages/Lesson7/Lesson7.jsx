import React from 'react';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';

import FirstHook from './FirstHook';

import UseEffectHook from './UseEffectHook';
import UseEffectDidMount from './UseEffectDidMount';
import UseEffectDidUpdate from './UseEffectDidUpdate';

import styles from './Lesson7.module.css';
import Dependencies from './Dependencies';
import UseEffectWillUnmount from './UseEffectWillUnmount';
import ComponentASimple from './ToggleHook/ComponentASimple';
import ComponentBSimple from './ToggleHook/ComponentBSimple';
import ComponentAUseToggle from './ToggleHook/ComponentAUseToggle';
import ComponentBUseToggle from './ToggleHook/ComponentBUseToggle';

function Lesson7() {
  return (
    <div className="App">
      <h1>Modulul 4 - Lecția 7 - React hooks</h1>

      <h2>Introducere</h2>

      <img src={image1} alt="template" />

      <p>
        Anterior, componentele funcționale erau folosite doar pentru a randa un
        markup HTML pe baza datelor din props și a șablonului primit. Nu aveau
        stare interioară și nici ciclu de viață. Erau niște componente de bază.
        Adesea, în timpul dezvoltării unui proiect, apare o situație în care o
        componentă funcțională are nevoie de stare sau de metode specifice
        ciclului de viață. Până acum a trebuit să rescriem componenta
        funcțională în una de tipul class based, dar acest lucru necesită timp,
        deoarece pe lângă adăugarea de noi funcționalități, programatorul
        trebuie să refactorizeze codul deja scris.
      </p>
      <p>
        Necesitatea de a standardiza componentele în același stil, precum și
        creșterea oportunităților de reutilizare a codului, i-au determinat pe
        dezvoltatorii React să creeze <b>hooks</b>. Acest lucru a extins
        capacitățile componentelor funcționale. Hook-urile s-au dovedit a fi
        atât de convenabile încât au devenit baza dezvoltării React.
      </p>
      <p>
        Acestea rezolvă o mulțime de probleme cu care s-au confruntat
        dezvoltatorii în React, de la lansarea acestei biblioteci.
      </p>
      <ul>
        <li>
          Dificultate în reutilizarea logicii de state între componente. Pentru
          a face acest lucru, putem crea <b>custom hooks</b>.
        </li>
        <li>
          Utilizarea unor patterns care sunt incomode, precum «render props» și
          «higher order component» care schimbă foarte mult structura
          componentelor și fac codul greoi.
        </li>
        <li>
          Suport pentru logica fără legătură în metodele ciclului de viață, dar
          și viceversa, împărțirea logicii asociate în mai multe metode. De
          exemplu, abonarea la un eveniment în <b>componentDidMount</b> și
          dezabonarea în <b>componentWillUnmount</b>.
        </li>
        <li>
          Incapacitatea de a împărți o componentă mare în altele mai mici din
          cauza logicii legate de sintaxa clasei.
        </li>
        <li>
          Diferite particularități legate de comportamentul cuvântului cheie,
          <b>this</b> , atunci când se leagă un context și se trece o metodă de
          clasă ca <b>prop</b>.
        </li>
      </ul>
      <p style={{ color: 'red' }}>
        <b>COMPATIBILITATE RECIPROCĂ</b>
      </p>
      <p>
        Hook-urile sunt complet compatibile cu clasele. În proiectele mai vechi,
        funcționalitățile noi pot fi scrise cu hooks, fără a schimba codul deja
        existent în clase. Acestea nu conțin modificări care pot sparge codul
        existent. Pentru a le utiliza nu sunt necesare cunoștințe noi despre
        React. În schimb, hooks oferă acces la API mai direct pentru conceptele
        deja familiare: <b>props, state, context, ref și lifecycle</b>.
      </p>

      <h2>useState hook</h2>
      <p>
        Acesta este primul hook. E destul de simplu, dar totuși, cel mai
        important. Din denumire este clar că este asociat cu starea componentei.
        Datorită lui, componentele funcționale au o stare internă.
      </p>

      <FirstHook />

      <p>
        <b>useState</b> creează o stare și o metodă care va modifica valoarea
        acesteia. Ca parametru, acest hook ia o stare inițială. În cazul nostru,
        numărul 0. Aici poate fi stocat orice tip de date.
      </p>
      <p>
        Hook-ul <b>useState</b> returnează o matrice de două elemente: primul
        este valoarea stării curente, iar al doilea este o funcție de modificare
        a stării care poate fi folosită oriunde. De exemplu, într-un handler de
        evenimente. React va stoca această stare între randări. Folosind
        destructurarea, putem specifica orice nume de variabilă.
      </p>
      <p style={{ color: 'red' }}>
        <b>CE ESTE, DE FAPT, UN HOOK?</b>
      </p>
      <p>
        <b>Hooks</b> - sunt funcții pe care le putem folosi pentru «a ne
        conecta» la starea interioară a unei componente și la metodele din
        ciclul de viață a acesteia, dar și pentru a utiliza React fără clase.
        Hooks nu funcționează în cadrul claselor.
      </p>

      <h3>Diferența între class based components</h3>
      <p>
        Funcția de actualizare a stării este similară cu this.setState în clase,
        dar nu îmbină starea nouă cu cea veche dacă starea conține un obiect. În
        rest, totul este la fel ca în starea componentei class based. Principala
        diferență este faptul că într-o componentă class based putem crea o
        singură stare comună, iar într-una funcțională, câte dorim, iar acestea
        vor fi independente unele de altele.
      </p>

      <img className={styles.image} src={image2} alt="example" />

      <p style={{ color: 'red' }}>
        <b>GOOD PRACTICE</b>
      </p>
      <p>
        Nu stoca un obiect cu mai multe proprietăți necorelate în aceeași stare.
        Este mai bine să facem mai multe stări independente și să le actualizăm
        în mod atomic, ca în exemplul de mai sus. Acest lucru nu afectează cu
        nimic performanța.
      </p>

      <h3>Limitele la hooks</h3>
      <p>
        Hooks pot fi folosite numai în componentele funcționale. Orice hook
        poate fi apelat numai la nivelul superior al unei componente. Deci, nu
        pot fi apelate în bucle, condiții, funcții suprapuse, etc. Asta înseamnă
        că hook-ul, fie există în componentă, fie nu. Astfel de restricții,
        poate par ciudate, dar standardizează modul în care este scrisă logica
        componentei și fac codul mai puțin confuz.
      </p>

      <img className={styles.image} src={image3} alt="example" />

      <h2>useEffect hook</h2>
      <p>
        Metodele ciclului de viață sunt utilizate pentru a efectua unele
        operații în diferite etape ale vieții componentei. De exemplu,
        solicitări de date către backend, adăugarea de listeners la anumite
        evenimente etc. Toate acestea se numesc «efecte secundare». Folosind{' '}
        <b>useEffect</b> în componente funcționale, putem realiza toate aceste
        «efecte», simulând trei metode din lifecycle -{' '}
        <b>componentDidMount, componentDidUpdate, componentWillUnmount</b>,
        combinându-le într-un singur API.
      </p>

      <UseEffectHook />

      <p>
        <b>useEffect(callback, deps)</b> ia două argumente:
      </p>
      <ul>
        <li>
          <b>callback</b> - o funcție în interiorul căreia se execută toată
          logica unui efect. De exemplu, solicitări către server, setarea
          handler-ului de evenimente pentru un document etc.
        </li>
        <li>
          <b>dependencies</b> - o matrice de variabile. Atunci când oricare
          dintre variabile se modifică, efectul va fi lansat și callback-ul va
          fi executat. Acestea pot fi date din state, props sau orice valoare
          locală din cadrul componentei.
        </li>
      </ul>
      <p style={{ color: 'red' }}>
        <b>DEPENDENȚE</b>
      </p>
      <p>
        Dacă nu vom trece o matrice de dependențe, efectul se va executa pentru
        fiecare randare a componentei. Tocmai datorită acestei matrice putem
        imita metode din lifecycle.
      </p>

      <h3>Echivalentul lui componentDidMount</h3>
      <p>
        <b>useEffect</b> este declanșat nu numai atunci când elementele matricei
        de dependență se schimbă, ci și imediat după etapa de mounting a
        componentei. Dacă specificăm o matrice goală ca al doilea argument,
        callback-ul va rula doar în etapa de mounting a componentei și niciodată
        nu se va repeta.
      </p>

      <UseEffectDidMount />

      <h3>Echivalentul lui componentDidUpdate</h3>
      <p>
        În matrice trebuie să enumerăm toate dependențele efectului. Așa că
        obținem un analog cu mult mai flexibil al metodei componentDidUpdate
        care va fi lansată numai atunci când anumite valori se modifică. În
        același timp, este important să ținem cont de faptul că un astfel de
        efect este lansat și în faza de montare, ceea ce este absolut normal în
        majoritatea cazurilor.
      </p>

      <UseEffectDidUpdate />

      <h3>Lista dependențelor</h3>
      <p>
        Într-o aplicație creată cu ajutorul Create React App, setările ESLint
        includ regula react-hooks/exhaustive-deps care verifică prezența
        obligatorie a tuturor variabilelor externe utilizate (state, props etc.)
        în matricea de dependențe. Dacă ai scris un efect și linter-ul indică
        probleme cu lista de dependențe, atunci efectul este instabil și
        imprevizibil. Este necesară adăugarea tuturor dependențelor efectului.
      </p>

      <img className={styles.image} src={image4} alt="example" />

      <Dependencies />

      <h3>Echivalentul lui componentWillUnmount</h3>
      <p>
        Pentru a executa codul atunci când componenta este demontată, sau în
        general înainte de fiecare apel al efectului, returnăm din useEffect o
        funcție de curățare cu codul necesar. Acesta este și echivalentul lui
        componentWillUnmount. În acest mod putem elimina handler-ii de
        evenimente, să oprim temporizatoarele și să anulăm solicitările HTTP.
      </p>

      <img className={styles.image} src={image5} alt="example" />

      <UseEffectWillUnmount />

      <h3>Efecte multiple</h3>
      <p>
        Hook-urile ne permit să divizăm și să grupăm logica componentei prin
        crearea unui «efect» pentru fiecare operație independentă.
      </p>

      <img className={styles.image} src={image6} alt="example" />

      <img className={styles.image} src={image7} alt="example" />

      <h2>Custom hooks</h2>
      <p style={{ color: 'red' }}>
        <b>ATENŢIE</b>
      </p>
      <p>
        Crearea propriilor hook-uri necesită experiență cu hook-urile de bază și
        în general, cu React. Nu ar trebui în mod special să creezi propriile
        hook-uri în proiect. Dacă vezi clar posibilitatea de reutilizare a
        codului, atunci e cazul de a crea un hook custom. În caz contrar, este
        mai bine să te concentrezi pe învățarea materialului de bază și pe
        utilizarea hook-urilor încorporate în React sau a celor gata făcute deja
        în librării, precum{' '}
        <a href="https://github.com/streamich/react-use">react-use</a>.
      </p>
      <p>
        Scopul principal al hook-urilor este de a face mai ușoară reutilizarea
        codului (logica) pentru dezvoltatori. Crearea propriilor hook-uri este
        procesul de extragere a logicii componentelor în funcții reutilizabile.
        Acest lucru va face codul proiectului mai curat și mai ușor de
        întreținut.
      </p>
      <p>
        Un hook este pur și simplu o funcție al cărei nume începe cu prefixul
        <b>use</b>. Aici React va determina dacă este o funcție obișnuită sau un
        hook. De exemplu:{' '}
        <b>useState, useEffect, useToggle, useDevice, useImages</b>Un hook este
        pur și simplu o funcție al cărei nume începe cu prefixul use. Aici React
        va determina dacă este o funcție obișnuită sau un hook. De exemplu:
        <b>useState, useEffect, useToggle, useDevice, useImages</b> și așa mai
        departe. Hook-urile personalizate sunt create în afara corpului
        componentei, adesea chiar și în fișiere separate, și pot apela alte
        hook-uri, realizând, astfel, reutilizarea ușoară a codului. și așa mai
        departe. Hook-urile personalizate sunt create în afara corpului
        componentei, adesea chiar și în fișiere separate, și pot apela alte
        hook-uri, realizând, astfel, reutilizarea ușoară a codului.
      </p>

      <h3>
        <span
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            border: '1px solid black',
            padding: '2px 3px',
            borderRadius: '4px',
          }}
        >
          useToggle
        </span>{' '}
        hook
      </h3>
      <p>
        Să ne uităm la un exemplu în care logica pentru deschiderea, închiderea
        și comutarea unui element de interfață, cum ar fi o fereastră modală,
        este necesară în două componente.
      </p>

      <h4>Fara useToggle</h4>

      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ComponentASimple />
        <ComponentBSimple />
      </div>

      <p>
        Crearea stării și a metodelor de deschidere/închidere a ferestrei modale
        este identică în fiecare componentă, adică există duplicarea codului.
        Imaginează-ți ce se va întâmpla într-un proiect în care ferestrele
        modale se deschid de zeci sau sute de ori în diferite componente. Aici e
        cazul să creăm propriul hook useToggle în care vom ascunde crearea
        stării și a metodelor de lucru cu acesta.
      </p>
      <p style={{ color: 'red' }}>
        <b>HOOK SIGNATURE</b>
      </p>
      <p>
        Un hook personalizat poate prelua orice număr de argumente și poate
        returna orice. Nu există reguli în acest sens, depinde doar de
        implementare. În cazul nostru, acesta va fi un obiect cu patru
        proprietăți.
      </p>
      <p>Codul din exemplul anterior va arăta astfel:</p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <ComponentAUseToggle />
        <ComponentBUseToggle />
      </div>

      <p style={{ color: 'red' }}>
        <b>REZULTAT</b>
      </p>
      <p>
        Chiar și într-un caz atât de simplu, am redus semnificativ duplicarea
        codului, am structurat fișierele proiectului, am făcut componente mai
        curate și am simplificat viitorul refactoring la componente și logica
        hook-ului.
      </p>
      <p>
        Deoarece hook-urile sunt funcții obișnuite, li se pot transmite
        argumente. De exemplu, pentru valoarea inițială a state-ului. Să
        extindem hook-ul useToggle astfel încât să putem face ca fereastra
        modală să fie deschisă la început. În mod implicit, fereastra va fi
        închisă.
      </p>

      <img className={styles.image} src={image8} alt="Example Code" />
    </div>
  );
}

export default Lesson7;
