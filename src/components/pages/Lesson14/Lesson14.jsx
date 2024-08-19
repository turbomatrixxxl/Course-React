import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Register_Login/redux/store';
import { RegisterLogin } from './Register_Login/components/Register_Login';

export default function Lesson14() {
  return (
    <div className="App">
      <h1>Modulul 8 - Lecția 15-16 - Users</h1>

      <h2>Accounts</h2>
      <p>
        Marea majoritate a aplicațiilor permit utilizatorului să creeze un cont,
        ceea ce face posibil ca partea de front-end și back-end să facă
        distincția între utilizatori. Datorită acestuia, un utilizator
        înregistrat poate lucra cu date care sunt disponibile numai pentru el.
        De exemplu, într-o aplicație de planificare a sarcinilor, fiecare
        utilizator înregistrat va avea propria sa colecție personală de sarcini.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-15/users.png"
        alt="Example"
      />

      <p>
        În plus, aplicația poate avea rute private, disponibile numai pentru
        utilizatorii înregistrați. Dacă utilizatorul nu este autentificat în
        contul său, acesta va fi redirecționat către pagina de autentificare sau
        de înregistrare atunci când încearcă să acceseze o rută
        privată/securizată.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-15/redirects.png"
        alt="Example"
      />

      <h2>Access rights</h2>
      <p>
        Procesul de verificare a validității datelor în timpul conectării și
        verificările ulterioare pentru disponibilitatea drepturilor de acces la
        date se realizează pe backend și este descris de doi termeni.
      </p>
      <ul>
        <li>
          <b>Authentication</b> - este procesul de verificare a credențialelor
          utilizatorului (login/parolă). Autentificarea utilizatorului se face
          prin compararea login-ului/parolei introduse de acesta cu datele
          stocate în baza de date.
        </li>
        <li>
          <b>Authorization</b> - este o verificare a drepturilor utilizatorului
          de a accesa anumite resurse. Dreptul de acces poate fi o valoare unică
          pe care front-end-ul o transmite cu fiecare solicitare HTTP către
          backend.
        </li>
      </ul>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-15/auth.png"
        alt="Example"
      />

      <p>
        De exemplu, după autentificare, utilizatorul are dreptul de a solicita
        și de a primi unele date din resursa <b>my-api.com/tasks</b>. De fiecare
        dată când utilizatorul accesează resursa tasks, sistemul de autorizare
        va verifica dacă are dreptul de a accesa această resursă, drept urmare,
        fie va admite sau va întrerupe cererea. Dreptul de acces la o resursă
        este determinat de prezența unei valori unice în cerere (token).
      </p>

      <h2>JSON Web Token</h2>
      <p>
        Unul dintre mecanismele de autorizare este utilizarea unui JWT (JSON Web
        Token). Token-urile oferă un mijloc de autorizare pentru fiecare
        solicitare din front-end către back-end. Token-urile sunt create pe
        backend pe baza unei chei secrete care este stocată pe server și a unor
        date unice pentru utilizator, cum ar fi e-mail-ul etc. Token-ul este în
        cele din urmă stocat pe front-end și este folosit atunci când este
        necesar să se autorizeze o solicitare.
      </p>
      <p>
        Fiecare token este un string unic criptat care conține trei elemente:
        header, payload și o semnătură. Dacă o persoană cu rea intenție încearcă
        să schimbe datele din header sau din payload, token-ul va deveni
        invalid, deoarece semnătura nu se va potrivi cu valorile originale.
        Astfel, atacatorul nu are posibilitatea de a genera o nouă semnătură,
        deoarece cheia secretă pentru criptare se află pe server.
      </p>

      <img
        src="https://textbook.edu.goit.global/react-zr7b4k/v1/ro/img/lesson-15/jwt.png"
        alt="Example"
      />

      <h2>Task Manager</h2>
      <p>
        Mai jos poți observa un exemplu complet al aplicației de planificare a
        sarcinilor care are deja procesul de înregistrare, autentificare,
        actualizare a utilizatorului, redirecționare și care lucrează cu o
        colecție securizată de date. Exemplul folosește un backend complet care
        creează un JWT pentru fiecare utilizator. Secțiunea state-ului
        state.auth este responsabilă pentru interacțiunea cu utilizatorul, dar
        și a JTW-ului.
      </p>

      <Provider store={store}>
        <RegisterLogin />
      </Provider>
    </div>
  );
}
