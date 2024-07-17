import React from 'react';
import HttpSimpleReq from './HttpSimpleReq';
import HttpErrLoading from './HttpErrLoading';
import HttpLoading from './HttpLoading';
import HttpErr from './HttpErr';
import HttpApiService from './HttpApiService';

function Lesson6() {
  return (
    <div className="App">
      <h1>Modulul 3 - Lecția 6 - Cereri HTTP</h1>

      <h2>Cereri HTTP</h2>
      <p>
        Să presupunem că avem deja un arbore de componente care are mai multe
        niveluri de ierarhie și trebuie să obținem o colecție de elemente din
        API. Ce componentă din ierarhie ar trebui să fie responsabilă pentru
        solicitările HTTP și pentru stocarea rezultatului răspunsului? Dacă nu
        folosim biblioteca de management a state-ului, atunci aceasta depinde de
        trei criterii.
      </p>
      <ul>
        <li>Ce componente vor avea nevoie de datele primite?</li>
        <li>
          Unde se va face rendering la indicatorul de încărcare, în timp ce se
          face o solicitare HTTP?
        </li>
        <li>
          Unde se va face rendering la mesaj, în cazul unei erori de solicitare
          HTTP?
        </li>
      </ul>
      <p>
        Metodele componentDidMount și componentDidUpdate sunt ideale pentru
        solicitările HTTP. Când componentDidMount() este apelat, componenta a
        fost deja randată în DOM și este gata pentru o actualizare ulterioară a
        stării. Când se apelează componentDidUpdate(), elementele din props sau
        starea componentei s-a schimbat și poate fi necesar să se facă o nouă
        solicitare, comparându-le mai întâi pentru a nu repeta randarea
        componentei.
      </p>
      <p>
        Pentru o solicitare HTTP poate fi folosit orice: XMLHTTPRequest, fetch,
        axios, superagent etc. Noi vom folosi{' '}
        <span style={{ color: 'red', fontWeight: 900 }}>axios</span>.
      </p>
      <p style={{ color: 'red' }}>
        <b>npm install axios</b>
      </p>
      <p>
        Vom face solicitări către{' '}
        <a href="https://hn.algolia.com/api">Hacker News API</a>. După
        finalizarea solicitării HTTP, stocăm rezultatul în starea componentei.
        În metoda render folosim starea.
      </p>

      <HttpSimpleReq />

      <p>
        Pe lângă câmpul de stocare a datelor, putem adăuga un câmp pentru a
        stoca indicatorul de încărcare și eroare. Acest lucru va face utilizarea
        interfeței mai plăcută pentru utilizator.
      </p>

      <h3>Indicatorul de încărcare</h3>
      <p>
        În timp ce așteptăm un răspuns la cererea HTTP, arătăm un indicator de
        progres. De îndată ce vine răspunsul, vom ascunde indicatorul. Pentru a
        face acest lucru, la începutul cererii, vom seta isLoading la true, iar
        la răspuns vom seta valoarea proprietății la false.
      </p>

      <HttpErrLoading />

      <p>
        În metoda render e nevoie să returnăm condiționat markup-ul componentei.
        Dacă datele sunt în curs de încărcare, arătăm indicatorul respectiv și
        în caz contrar, lista cu rezultatele primite.
      </p>

      <HttpLoading />

      <p>
        Indicatorul de încărcare poate fi orice, de la un text simplu sau
        spinner la o componentă custom, dcum ar fi{' '}
        <a href="https://github.com/danilowoz/react-content-loader">
          react-content-loader
        </a>
        .
      </p>

      <h3>Gestionarea erorilor</h3>
      <p>
        O solicitare HTTP nu este întotdeauna executată cu succes, de aceea
        utilizatorului trebuie să-i fie clar dacă ceva a mers prost. Pentru a
        face acest lucru, vom adăuga la state o proprietate de stocare a
        erorilor.
      </p>
      <p>
        Când se folosesc promises, blocul catch este folosit pentru a gestiona
        erorile. Așadar, dacă este executat, atunci a apărut o eroare. Mutăm
        setarea indicatorului de încărcare în blocul finally pentru a nu duplica
        codul care oricum va fi executat.
      </p>
      <p>Mai trebuie adăugată logica necesară în metoda render.</p>

      <HttpErr />

      <h3>Separarea responsabilităților</h3>
      <p>
        Nu este o practică bună stocarea codului legat de cererea HTTP direct în
        componentă. În aplicație vor exista multe solicitări API diferite și vor
        fi utilizate în diferite componente. În plus, codul de solicitare HTTP
        poate fi complex și greoi. Pentru confortul refactorizării ulterioare,
        vom stoca totul într-un singur loc.
      </p>
      <p>
        Să creăm un folder suplimentar în src. Numele folderului poate fi ales
        în mod arbitrar, atâta timp cât are logică. De exemplu: helpers, api,
        services, etc. În acest folder vom stoca un fișier cu funcții pentru
        solicitările HTTP.
      </p>
      <p>Importăm serviciul în fișierul componentei și apelăm metoda dorită.</p>

      <HttpApiService />

      <h2 style={{ color: 'red' }}>Nu Merge !!!</h2>
    </div>
  );
}

export default Lesson6;
