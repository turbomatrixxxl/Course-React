import React from "react";
// import PropTypes from "prop-types";

import InlineStyle from "./InlineStyle";
import InlineStyleVar from "./InlineStyleVar";
import Alert from "./InlineStyleAlertVar";
import { AlertClass } from "./CssClass";
import AlertMultiClasses from "./AlertMultiClasses";
import AlertClsx from "./AlertClsx";
import AlertClsxObj from "./AlertClsxObj";
import Button from "./PreprocesoareButt";
import AlertModuleCss from "./AlertModule/moduleCss";
import AlertCompose from "./AlertCompose/AlertCompose";
import ClsxModule from "./ClsxModule/ClsxModule";

function Lesson2() {
  return (
    <div className="App">
      <h1>Modulul 1 - Lecția 2 - Stilizarea</h1>
      <h2>Stiluri integrate</h2>
      <p>
        Există mai multe moduri de a stiliza componentele, cel mai simplu, dar
        și cel mai limitat fiind stilul inline. Pentru aceasta se folosește
        atributul style care în React nu ia un string, ci un obiect de stiluri.
      </p>
      <InlineStyle />
      <p>
        În exemplul dat putem evidenția câteva reguli obligatorii pentru
        stilurile inline:
      </p>
      <ul>
        <li>
          Deoarece numele proprietăților sunt compuse din două sau mai multe
          cuvinte, de exemplu background-color, acestea trebuie scrise cu
          notația <b>camelCase</b> (backgroundColor), ca și atunci când accesăm
          proprietățile obiectului style ale unui element DOM.
        </li>
        <li>
          Valorile numerice ale proprietăților vor avea automat adăugat sufixul
          <b>px</b>. Dacă trebuie folosite alte unități decât <b>px</b> sau dacă
          valoarea are mai multe părți, este specificată ca string.
        </li>
      </ul>
      <p>
        Să mutăm obiectul de stiluri într-o variabilă pentru a îmbunătăți
        lizibilitatea marcajului JSX.
      </p>
      <InlineStyleVar />
      <p>
        Să creăm o componentă <b>Alert</b> care va randa un paragraf text și va
        ascunde viitoarea logică de selectare a culorii de fundal.
      </p>
      <p>
        Folosim componenta <b>Alert</b> pentru a randa mai multe alerte.
      </p>
      <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert>
      <p>
        Să facem astfel încât, în funcție de tipul de alertă, culoarea de fundal
        a paragrafului din componenta Alert să se schimbe. Pentru a face acest
        lucru, vom adăuga un props obligatoriu, numit variant cu mai multe
        valori posibile.
      </p>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <p>
        Vom muta logica de selectare a culorii în funcția <b>getBgColor</b>
        (variant), care va returna un string cu numele culorii, în funcție de
        valoarea parametrului variant.
      </p>
      <p>
        <b>STILURILE DINAMICE</b>
      </p>
      <p>
        Pe linia 25 a exemplului este creată valoarea finală a atributului style
        - stilurile de bază din alertStyles și valoarea dinamică
        backgroundColor, în funcție de prop variant. Această abordare este
        utilizată atunci când valoarea uneia sau mai multor proprietăți depinde
        de props. De exemplu, dacă link-ul către imagine pentru background-image
        este transmisă ca props.
      </p>
      <p>
        Stilurile inline pot părea convenabile din cauza ușurinței lor de
        utilizare, dar au o serie de dezavantaje semnificative.
      </p>
      <ul>
        <li>Scalabilitatea și reutilizarea stilurilor e foarte slabă</li>
        <li>
          Caracteristici limitate (pseudo-clase, pseudo-elemente, proprietăți
          adaptative)
        </li>
        <li>Performanță slabă la randarea unui număr mare de elemente</li>
        <li>Lipsa instrumentelor devTools convenabile</li>
        <li>
          Nu există suport în instrumentele populare, precum <b>autoprefixer</b>
        </li>
      </ul>
      <p>
        <b>CONCLUZIE</b>
      </p>
      <p>
        În practică, stilurile inline sunt utilizate numai pentru valorile
        proprietăților calculate dinamic, asociate cu foi de stil externe. Ca
        modalitate principală de stilizare a componentelor, stilurile inline nu
        sunt folosite în proiecte și, prin urmare, nu sunt recomandate.
      </p>
      <h2>Vanilla CSS</h2>
      <p>
        Designul unei componente poate fi preluat într-o foaie de stil. În acest
        caz, stilurile fiecărei componente sunt declarate într-un fișier CSS,
        separat cu extensia .css. Numele fișierului e format din numele și
        extensia componentei. De exemplu, pentru componenta Alert, fișierul cu
        stiluri va fi numit Alert.css.
      </p>
      <p>
        <b>ACESTA ESTE UN CSS OBIȘNUIT.</b>
      </p>
      <p>
        Poți scrie orice cod CSS valid în interiorul fișierului de stiluri. Este
        o practică bună de a scrie cod CSS numai pentru markup-ul HTML al acelei
        componente căreia îi aparține fișierul de stiluri.
      </p>
      <p>
        Stilurile unei componente sunt importate în fișierul său unde se
        declară, după care sunt disponibile spre utilizare clasele CSS descrise
        în fișierul de stiluri. În React, atributul HTML <b>class</b> corespunde
        atributului JSX <b>className</b>, unde putem trece un string care
        listează toate clasele acelui element.
      </p>
      <AlertClass>This is React with class CSS style</AlertClass>
      <p>
        <b>AUTOMATIZARE</b>
      </p>
      <p>
        În etapa de construire a unui proiect, Create React App minimizează CSS
        și adaugă automat prefixe, folosind{" "}
        <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>.
        Sintaxa și funcțiile CSS moderne sunt completate pentru a putea suporta
        browsere mai vechi. Astfel, dezvoltatorul nu trebuie să își facă griji
        în această privință.
      </p>
      <h3>Compunerea claselor</h3>
      <p>
        Să adăugăm clase CSS pentru fiecare tip de alertă pentru a controla
        culoarea de fundal a paragrafului pe baza valorii props variant. Pentru
        simplitate, să numim clasele în mod similar cu variantele valorii props.
      </p>
      <p>
        Să adăugăm două proprietăți opționale în props pentru componenta Alert:
        <b>outlined</b> și <b>elevated</b>. Valorile lor pot fi doar <b>true</b>
        , <b>false</b>
        sau <b>undefined</b>. Dacă valorile acestora sunt true, vom adăuga
        clasele <b>is-outlined</b> și <b>is-elevated</b> la elementul &lt;p&gt;.
      </p>
      <p>
        Procesul de calcul al valorii finale pentru atributul className depinde
        de dezvoltator și de sarcina curentă. De exemplu, folosim o matrice de
        string-uri și un bloc <b>if</b>. Clasa alert și una dintre opțiuni vor
        fi întotdeauna acolo, iar clasele din props <b>elevated</b> și{" "}
        <b>outlined</b> sunt adăugate numai atunci când sunt necesare.
      </p>
      <AlertMultiClasses variant="info">
        Would you like to browse our recommended products?
      </AlertMultiClasses>
      <AlertMultiClasses variant="error" outlined>
        There was an error during your last transaction
      </AlertMultiClasses>
      <AlertMultiClasses variant="success" elevated>
        Payment received, thank you for your purchase
      </AlertMultiClasses>
      <AlertMultiClasses variant="warning" outlined elevated>
        Please update your profile contact information
      </AlertMultiClasses>
      <p>
        <b>NU EXISTĂ UN STANDARD</b>
      </p>
      <p>
        Pentru a calcula valoarea finală a atributului className, am putea
        folosi un bloc if...else, o instrucțiune switch, un operator ternar sau
        orice altă sintaxă JavaScript care ne-ar da același rezultat. Cel mai
        important lucru este ca clasa să fie compusă corect și să nu aibă valori
        suplimentare sau chiar invalide.
      </p>
      <h3>Biblioteca clsx</h3>
      <p>
        Pentru a rezolva majoritatea problemelor legate de multitudinea de clase
        care sunt specificate în anumite condiții, folosește clsx. Desigur,
        JavaScript oferă o sintaxă bogată, dar în cele mai multe cazuri sunt
        scrise soluții neproductive sau coduri slab lizibile. Biblioteca
        standardizează acest proces și îl face mai convenabil printr-o sintaxă
        bine gândită.
      </p>
      <p>
        <b style={{ color: "red" }}>npm install clsx</b>
      </p>
      <p>
        Funcțiilor clsx li se poate transmite o listă de expresii ca un set de
        argumente. Expresiile care se evaluează la true și au ca rezultat un
        string sau un număr vor fi adăugate la string-ul final a claselor.
      </p>
      <p>
        Iată cum ar arăta codul pentru componenta Alert, folosind biblioteca
        clsx. Chiar și într-un caz relativ simplu, codul este mai simplu și mai
        lizibil.
      </p>
      <AlertClsx variant="info">
        Would you like to browse our recommended products?
      </AlertClsx>
      <AlertClsx variant="error" outlined>
        There was an error during your last transaction
      </AlertClsx>
      <AlertClsx variant="success" elevated>
        Payment received, thank you for your purchase
      </AlertClsx>
      <AlertClsx variant="warning" outlined elevated>
        Please update your profile contact information
      </AlertClsx>
      <p>
        Putem combina mai multe forme pentru funcția <b>clsx</b>. În primul
        rând, se transferă clasele care vor fi întotdeauna, după care enumerăm
        valorile dinamice ale claselor din obiectul de setări, în funcție de
        unele calcule.
      </p>
      <AlertClsxObj variant="info">
        Would you like to browse our recommended products?
      </AlertClsxObj>
      <AlertClsxObj variant="error" outlined>
        There was an error during your last transaction
      </AlertClsxObj>
      <AlertClsxObj variant="success" elevated>
        Payment received, thank you for your purchase
      </AlertClsxObj>
      <AlertClsxObj variant="warning" outlined elevated>
        Please update your profile contact information
      </AlertClsxObj>
      <h3>Global namespace</h3>
      <p>
        Importul stilurilor unei componente direct în fișierul său unde are loc
        declararea este o practică bună. De exemplu, dacă vom importa stilurile
        Alert.css în componenta App, atunci nimic nu se va strica. Ca urmare a
        importului, tot codul CSS declarat al fișierului este pur și simplu
        adăugat la un singur fișier de stiluri comune împreună cu restul codului
        CSS al proiectului din alte componente.
      </p>
      <p>
        În codul din exemplu va exista o problemă de conflict din cauza
        regulilor CSS cu selectorul de clasă .text. În funcție de ordinea în
        care aceste două fișiere CSS sunt importate în aplicație, stilurile
        finale ale clasei text pot arăta diferit.
      </p>
      <p>
        <b>UNICITATEA DENUMIRILOR</b>
      </p>
      <p>
        Numele selectoarelor de clasă trebuie să fie unice în întreaga
        aplicație, astfel încât să nu existe conflicte din cauza regulilor CSS
        cu aceiași selectori în diferite componente.
      </p>
      <h3>Preprocesoare</h3>
      <p>
        Putem folosi preprocesoare, dar abilitatea de a îmbina componente le
        face mai puțin utile, deoarece înlocuiește concepte precum mix-in-uri,
        funcții și altele. Nu este recomandat să folosim aceleași clase CSS în
        diferite componente. Pentru aceasta există compoziția componentelor.
      </p>
      <p>
        De exemplu, în loc să folosim clasa de bază CSS .button, în componentele
        &lt;LoginButton&gt;și &lt;FollowButton&gt;, este mai bine să creăm o
        componentă &lt;Button&gt; cu propriile stiluri, care să poată fi afișate
        în câteva modalități. Apoi componentele &lt;LoginButton&gt; și
        &lt;FollowButton&gt; pot folosi componenta &lt;Button&gt;, și nu doar o
        clasă CSS.
      </p>
      <Button />
      <p>
        Regulile de denumire a fișierelor sunt aceleași ca pentru vanilla CSS,
        doar extensia fiinf diferită, ca .scss pentru SASS. În rest,
        preprocesoarele au aceleași caracteristici, concepte și dezavantaje ca
        vanilla CSS. Pentru a adăuga posibilitatea de a utiliza SASS, e necesar
        să se instaleze compilatorul acestuia în proiect.
      </p>
      <p style={{ color: "red" }}>
        <b>npm install sass</b>
      </p>
      <h4>Concluzie</h4>
      <p>
        Folosirea Vanilla CSS nu este cea mai bună abordare și are o serie de
        dezavantaje, în special în proiectele mari.
      </p>
      <ul>
        <li>Scalabilitate slabă</li>
        <li>Reutilizarea stilurilor este limitată</li>
        <li>Valorile dinamice trebuie să utilizeze stiluri inline</li>
        <li>Problema spațiului global</li>
        <li>
          Necesitatea de a folosi o convenție pentru denumirea selectorilor de
          clasă
        </li>
        <li>Niciun mecanism de ștergere automată a codului neutilizat</li>
      </ul>
      <h2>Module CSS</h2>
      <p>
        Modulele CSS nu sunt o specificație oficială și nu sunt implementate în
        browsere. Acesta este un proces care este început în etapa de construire
        a unui proiect (de exemplu, folosind Webpack), în urma căruia numele
        claselor sunt înlocuite cu unele unice. Acest lucru permite să utilizăm
        același nume de clasă în fișiere CSS diferite, fără a ne face griji cu
        privire la conflictele de nume. Această abordare a fost concepută pentru
        a rezolva problema domeniului global în CSS.
      </p>
      <p>
        Create React App suportă modulele CSS în mod implicit. Tot ce trebuie să
        facem este să creăm fișiere de stiluri cu o extensie <b>.module.css</b>,
        cum ar fi <b>Alert.module.css</b>. În interiorul unui modul CSS se poate
        folosi orice cod CSS valid.
      </p>
      <p>
        <b>INFORMAȚII SUPLIMENTARE</b>
      </p>
      <p>
        Deși un modul CSS arată ca orice CSS obișnuit, acesta, de fapt, este
        compilat într-un format numit ICSS (Interoperable CSS), care este
        destinat dezvoltatorilor de instrumente, precum Webpack, nu
        utilizatorilor finali.
      </p>
      <p>
        Sintaxa pentru importul unui modul CSS este similară cu importul unui
        modul de JavaScript. Modulul CSS are un export implicit - un obiect care
        se potrivește cu numele claselor originale și generate. Fișierul de stil
        final va avea un nume unic de clasă în formatul [nume fișier]_[nume
        clasă]__[hash].
      </p>

      <AlertModuleCss variant="info">
        Would you like to browse our recommended products?
      </AlertModuleCss>
      <AlertModuleCss variant="error">
        There was an error during your last transaction
      </AlertModuleCss>
      <AlertModuleCss variant="success">
        Payment received, thank you for your purchase
      </AlertModuleCss>
      <AlertModuleCss variant="warning">
        Please update your profile contact information
      </AlertModuleCss>

      <p>
        <b>STILURI GLOBALE</b>
      </p>
      <p>
        Selectorii de etichete (tag-uri) vor fi în sfera globală în mod implicit
        și modulele CSS generează doar nume unice ale selectoarelor de clasă.
      </p>

      <h3>Proprietatea composes</h3>
      <p>
        Compoziția selectorului este una dintre caracteristicile cheie ale
        modulelor CSS care permite crearea unei clase ce moștenește stilurile
        unei alte clase, fără a le duplica. Să folosim compoziția clasei și să
        refactorizăm stilurile componentei Alert. Moștenim stilurile clasei de
        bază .alert în toate variantele clasei. Proprietatea composes trebuie,
        însă, să urmărească alte reguli, astfel încât stilurile să fie
        suprascrise dacă e necesar.
      </p>
      <p>
        În cazurile simple, compoziția o putem face fără biblioteca clsx. Nu
        setăm clasa de bază alert, deoarece din ea se realizează alcătuirea
        variantelor de clasă. Ca rezultat, elementul &lt;p&gt; va avea două
        clase, alert de bază și o variantă de clasă care suprascrie valoarea
        culorii de fundal.
      </p>

      <AlertCompose>Radu</AlertCompose>
      <AlertCompose variant="info">
        Would you like to browse our recommended products?
      </AlertCompose>
      <AlertCompose variant="error">
        There was an error during your last transaction
      </AlertCompose>
      <AlertCompose variant="success">
        Payment received, thank you for your purchase
      </AlertCompose>
      <AlertCompose variant="warning">
        Please update your profile contact information
      </AlertCompose>

      <h3>Librăria clsx</h3>
      <p>
        Să adăugăm clase CSS pentru datele din props outlined și elevated.
        Numele unei clase este constituit din mai multe cuvinte scrise cu{" "}
        <b>camel case</b>. În caz contrar, deoarece acestea sunt proprietăți ale
        unui obiect, ele vor trebui accesate prin paranteze pătrate, de exemplu{" "}
        <b>css["is-outlined"]</b>, ceea ce este mai puțin convenabil.
      </p>
      <p>
        Acum folosim din nou biblioteca clsx pentru a compune valoarea finală a
        proprietății className.
      </p>

      <ClsxModule>Radu</ClsxModule>
      <ClsxModule outlined>Radu Outlined</ClsxModule>
      <ClsxModule elevated>Radu Elevated</ClsxModule>

      <ClsxModule variant="info">
        Would you like to browse our recommended products?
      </ClsxModule>
      <ClsxModule variant="error">
        There was an error during your last transaction
      </ClsxModule>
      <ClsxModule variant="success">
        Payment received, thank you for your purchase
      </ClsxModule>
      <ClsxModule variant="warning">
        Please update your profile contact information
      </ClsxModule>

      <h2>Normalizarea stilurilor</h2>
      <p>
        Stilurile elementelor pot varia în browsere diferite. Pentru a le aduce
        la un aspect standard, este necesară adăugarea unui set de reguli care
        să corecteze cât mai mult posibil diferențele de stil ale elementelor,
        între diferite tipuri de browsere.
      </p>
      <p>
        În Create React App avem posibilitatea de a folosi{" "}
        <a href="https://github.com/csstools/postcss-normalize">
          PostCSS Normalize
        </a>{" "}
        - un amestec de mai multe fișiere cu stiluri populare (
        <a href="https://github.com/csstools/normalize.css">normalize.css</a> și{" "}
        <a href="https://github.com/csstools/sanitize.css">sanitize.css</a>) cu
        cele mai bune practici de normalizare. Tot ce trebuie să facem este să
        adăugăm directiva @import-normalize; oriunde în fișierul de stiluri sau
        în modulul CSS. Importurile duplicate vor fi eliminate automat, așa că e
        suficientă adăugarea directivei doar la un singur fișier, cum ar fi
        index.css.
      </p>
      <p style={{ color: "red" }}>
        <b>
          @import-normalize; <br />
          <br />
          Restul codului a acestui fișier
        </b>
      </p>
      <p>
        <b>SETĂRILE VSCODE</b>
      </p>
      <p>
        Dacă vedeți un avertisment în VSCode ca «Unknown at rule
        @import-normalize css(unknownAtRules)», modificați valoarea lui
        css.lint.unknownAtRules la ignore în setările editorului.
      </p>
      <p>
        Rămâne să importăm fișierul index.css cu normalizarea activată în
        modulul JavaScript. De exemplu, în fișierul rădăcină al aplicației
        index.js sau în fișierul componentei App.js.
      </p>
      <p style={{ color: "red" }}>
        <b>
          import "./index.css"; <br />
          <br />
          Restul codului a acestui fișier
        </b>
      </p>
      <p>
        Pe lângă standardizarea aspectului elementelor, poate fi utilă resetarea
        sau adăugarea unor stiluri globale. De exemplu, margin pentru elementele
        listei, stiluri pentru imagini, stiluri pentru &lt;body&gt; și altele.
        Va fi logic să facem acest lucru în același fișier în care a fost
        adăugată normalizarea.
      </p>
    </div>
  );
}

export default Lesson2;
