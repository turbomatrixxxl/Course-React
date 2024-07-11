import React from 'react';

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
        <span style={{ color: 'red' }}>axios</span>.
      </p>
    </div>
  );
}

export default Lesson6;
