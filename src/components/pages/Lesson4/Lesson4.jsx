import React from 'react';
import LoginForm from './LoginForm';
import SetStateForm from './SetStateForm';
import SignUpForm from './ComplexForms';
import IdForm from './IdForm';
import Checkbox from './Checkbox';
import RadioBtnForm from './RadioBtnForm';
import SelectForm from './SelectForm/SelectForm';

import image1 from './images/image1.png';

// import styles from './Lesson4.module.css'

function Lesson4() {
  return (
    <div className="App">
      <h1>Modulul 2 - Lecția 4 - Forms</h1>

      <h2>Forms</h2>

      <h3>Elemente necontrolate</h3>
      <p>
        Scopul principal al oricărui formular este obținerea datelor
        utilizatorului. Pentru a face acest lucru, în timpul trimiterii, putem
        obține valorile câmpurilor din proprietatea elements sau folosind
        FormData. Această tehnică este folositoare atunci când datele din
        câmpurile formularului sunt necesare numai în timpul transmiterii sale.
      </p>

      <LoginForm onSubmit={values => console.log(values)} />

      <h3>Elemente controlate</h3>
      <p>
        Dacă valorile elementelor din formular trebuie să fie preluate în
        momentul modificării câmpului și să facă ceva dinamic, acestea trebuie
        controlate. Adică, valorile tuturor câmpurilor trebuie să fie plasate în
        state. Această tehnică de lucru cu elementele formularului este destul
        de simplă.
      </p>

      <img src={image1} alt="example" />
      <ul>
        <li>
          Proprietatea stocată în state definește valoarea atributului value al
          câmpului din formular
        </li>
        <li>
          Evenimentului onChange i se transmite o metodă care schimbă valoarea
          câmpului în state
        </li>
      </ul>
      <p>Ne confruntăm cu un cerc vicios.</p>
      <ul>
        <li>
          La evenimentul onChange, metoda clasei actualizează state-ul cu
          valoarea câmpului
        </li>
        <li>Când starea se schimbă, are loc re-render</li>
        <li>Input-ul afișează datele actualizate</li>
      </ul>
      <p>
        Dezavantajul este că întregul formular va fi randat din nou de fiecare
        dată când orice câmp se modifică, dar pentru formularele mici nu este o
        problemă.
      </p>

      <SetStateForm />

      <h3>Formulare complexe</h3>
      <p>Să creăm un formular de înregistrare.</p>

      <SignUpForm onSubmit={values => console.log(values)} />

      <h3>Generarea ID-ului pentru elementele formularului</h3>
      <p>
        Accessibility (a11y) - un subiect foarte important în industria web de
        astăzi. Atributul <b>for HTML</b> al etichetei label ajută tehnologia de
        asistență și alte tool-uri care sunt folosite în același scop. În React,
        acest atribut este reprezentat de <b>htmlFor</b>.
      </p>
      <p>
        Pentru a genera identificatori unici elementelor din formular, se
        folosește următoarea abordare: pentru fiecare instanță de componentă,
        atunci când este inițializată, un set de identificatori unici este creat
        și stocat pe instanță. Astfel, obținem un id unic pentru diferite
        formulare.
      </p>

      <IdForm
        onSubmit={values =>
          console.log(
            `values.login = ${values.login},values.cucu = ${values.cucu}`
          )
        }
      />

      <h3>Checkbox</h3>
      <p>
        Utilizarea casetelor checkbox este destul de simplă. O casetă de
        selectare poate avea doar 2 stări: true sau false.
      </p>
      <p>Caracteristicile casetelor de selectare:</p>
      <ul>
        <li>
          Numele atributului căruia i se transmite valoarea curentă din state
          este <b>checked</b>. Aici trecem o valoare de tip boolean.
        </li>
        <li>
          La procesarea evenimentului onChange, pentru a obține valoarea, în
          obiectul de eveniment, putem accesa proprietatea{' '}
          <b>event.target.checked</b>.
        </li>
        <li>
          Dacă caseta de selectare trebuie să stocheze o valoare, aceasta poate
          fi, de asemenea, atașată de atributul <b>value</b> și citită din
          obiectul de eveniment.
        </li>
      </ul>
      <p>
        Să adăugăm un checkbox la formularul nostru de înregistrare pentru a
        confirma acordul utilizatorului și să facem butonul de trimitere
        inactiv, în timp ce caseta este inactivă.
      </p>

      <Checkbox
        onSubmit={values =>
          console.log(
            `values.login = ${values.login},values.email = ${values.email}, values.password = ${values.password}, values.agreed = ${values.agreed}`
          )
        }
      />

      <h3>Radiobuttons</h3>
      <p>
        Spre deosebire de gruparea obișnuită a elementelor după valoarea
        atributului name, un radio button este doar un element de interfață în
        React, iar acesta:
      </p>
      <ul>
        <li>Știe dacă a fost selectat</li>
        <li>
          Poate cere formularului să modifice ceea ce a selectat un utilizator
        </li>
      </ul>
      <p>
        De obicei, butoanele radio au atât atributul checked, cât și value. De
        exemplu, un buton radio responsabil de selectarea sexului
        utilizatorului.
      </p>
      <p style={{ color: 'red' }}>
        <b>
          &lt;input <br />
          type="radio" <br />
          checked=&#123;this.state.gender === 'male'&#125; <br />
          value="male" <br /> onChage= &#123;this.handleGenderChange&#125;{' '}
          <br /> /&gt;
        </b>
      </p>
      <p>Să adăugăm un grup de butoane radio la formularul nostru.</p>

      <RadioBtnForm
        onSubmit={values =>
          console.log(
            `values.login = ${values.login}, values.email = ${values.email}, values.password = ${values.password}, values.gender = ${values.gender}, values.agreed = ${values.agreed}`
          )
        }
      />

      <h3>Select</h3>
      <p>
        Aici totul e simplu - există un selector care are opțiuni, elementul de
        select are value și onChange. Să adăugăm un select cu o categorie de
        vârstă.
      </p>

      <SelectForm
        onSubmit={values =>
          console.log(
            `values.login = ${values.login}, values.email = ${values.email}, values.password = ${values.password}, values.gender = ${values.gender}, values.age = ${values.age}, values.agreed = ${values.agreed}`
          )
        }
      />
    </div>
  );
}

export default Lesson4;
