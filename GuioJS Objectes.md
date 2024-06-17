## Objectes
- atributs
- mètodes

## Funcions predefinides
- eval
- parseInt
- parseFloat
- isNan
- isFinite
- Number
- String

---

## Exercicis RegExp
|Flags|Descripció
|-|-|
|g|Explora la cadena completa|
|i|No distingeix majúscules i minúscules|
|m|Permet utilitzar diversos ^ i $ al patró|
|s|Inclou salts de línia al comodí punt|
|x|Ignora els espais al patró|

## Gestió objectes
### 1. `Window`
L'objecte global que representa la finestra del navegador. Tots els altres objectes (com `document`, `history`, etc.) són membres d'aquest.

- **Propietats**:
  - `document`: Referència al document actual carregat.
  - `innerWidth`, `innerHeight`: Dimensions de la finestra interna.
  - `localStorage`, `sessionStorage`: Emmagatzematge web.

- **Mètodes**:
  - `alert()`: Mostra una alerta emergent.
  - `setTimeout()`, `setInterval()`: Funcions de temporització.
  - `open()`, `close()`: Obrir o tancar finestres noves.
- **Exemple**
```javascript
console.log(window.innerWidth); // Mostra l'amplada de la finestra
```
### 2. Objecte `Frame` en JavaScript

L'objecte `frame` en JavaScript es refereix als elements `<iframe>` i `<frame>` en un document HTML. Els `iframe` s'utilitzen per incrustar un altre document HTML dins de l'actual. Els elements `<frame>` s'utilitzaven amb marcs en documents HTML antics, però han estat desaconsellats en favor dels `iframe`.

#### 1. `HTMLIFrameElement`
Representa l'element `<iframe>`, que s'utilitza per inserir contingut d'un altre document o aplicació dins de la pàgina actual.

- **Propietats**
  - **`contentDocument`**: Retorna el document carregat dins de l'iframe.
  - **`contentWindow`**: Retorna la finestra associada a l'iframe, que es pot utilitzar per accedir a l'objecte `Window` del contingut incrustat.
  - **`src`**: Obtén o estableix l'URL del document que es carregarà dins de l'iframe.
  - **`width`**: Amplada de l'iframe.
  - **`height`**: Alçada de l'iframe.

- **Mètodes**
  - **`getAttribute()`**: Retorna el valor d'un atribut especificat en l'iframe.
  - **`setAttribute()`**: Estableix el valor d'un atribut en l'iframe.
  - **`removeAttribute()`**: Elimina un atribut de l'iframe.

- **Exemple**
```html
<iframe id="myIframe" src="https://www.example.com" width="600" height="400"></iframe>
```

### 3. Objecte `Document` en JavaScript

L'objecte `Document` en JavaScript representa el document HTML que es carrega en una finestra o pestanya del navegador. Aquest objecte forma part del Document Object Model (DOM) i permet accedir i manipular el contingut i estructura del document HTML.

- **Propietats**
  - **`body`**: Referència a l'element `<body>` del document.
    ```javascript
    let bodyElement = document.body;
  head: Referència a l'element <head> del document.

```javascript
let headElement = document.head;
title: Obtén o estableix el títol del document.

document.title = 'Nou Títol';
documentElement: Referència a l'element arrel del document (normalment l'element <html>).

let htmlElement = document.documentElement;
URL: Obtén l'URL complet del document.

console.log(document.URL);
cookie: Permet llegir, escriure i esborrar cookies associades al document.

document.cookie = 'username=JohnDoe';
Mètodes
getElementById(id): Retorna un element amb l'ID especificat.

let element = document.getElementById('myId');
getElementsByClassName(className): Retorna una col·lecció de tots els elements que tenen la classe especificada.

let elements = document.getElementsByClassName('myClass');
getElementsByTagName(tagName): Retorna una col·lecció de tots els elements amb el nom d'etiqueta especificat.

let elements = document.getElementsByTagName('div');
querySelector(selector): Retorna el primer element que coincideix amb el selector CSS especificat.

let element = document.querySelector('.myClass');
querySelectorAll(selector): Retorna una llista de tots els elements que coincideixen amb el selector CSS especificat.

let elements = document.querySelectorAll('.myClass');
createElement(tagName): Crea un nou element HTML amb el nom d'etiqueta especificat.

let newDiv = document.createElement('div');
createTextNode(text): Crea un nou node de text amb el text especificat.

let textNode = document.createTextNode('Hola, món!');
appendChild(node): Afegeix un node com a últim fill d'un element.

document.body.appendChild(newDiv);
removeChild(node): Elimina un node fill d'un element.

document.body.removeChild(newDiv);
addEventListener(type, listener): Afegeix un esdeveniment al document.

document.addEventListener('click', function(event) {
  console.log('Document clicat!');
});

- **Exemple**
  A continuació es mostra un exemple que utilitza diverses propietats i mètodes de l'objecte Document per manipular el document HTML.

```html
Copiar código
<!DOCTYPE html>
<html>
<head>
  <title>Exemple de Document</title>
</head>
<body>
  <div id="myDiv" class="myClass">Aquest és un div</div>
  <script>
    // Canviar el títol del document
    document.title = 'Nou Títol';

    // Seleccionar un element per ID
    let myDiv = document.getElementById('myDiv');

    // Canviar el contingut HTML d'un element
    myDiv.innerHTML = 'Contingut nou';

    // Crear un nou element
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Aquest és un nou paràgraf';

    // Afegir el nou element al cos del document
    document.body.appendChild(newParagraph);

    // Afegir un esdeveniment de clic al document
    document.addEventListener('click', function() {
      console.log('Document clicat!');
    });
  </script>
</body>
</html>
```
  Aquest exemple canvia el títol de la pàgina, selecciona un element per ID, canvia el seu contingut, crea un nou paràgraf i l'afegeix al cos del document, i afegeix un esdeveniment de clic al document.

### 4. Objecte `Location` en JavaScript

L'objecte `Location` en JavaScript conté informació sobre l'URL actual de la pàgina i proporciona mètodes per redirigir el navegador a una altra pàgina o per refrescar la pàgina actual. L'objecte `Location` és una propietat de l'objecte `Window` i de l'objecte `Document`.

- **Propietats**

**`href`**: Obtén o estableix l'URL complet de la pàgina.

```javascript
console.log(location.href); // Mostra l'URL complet
location.href = 'https://www.example.com'; // Redirigeix a una nova URL
protocol: Obtén o estableix el protocol de l'URL (ex. http:, https:).

console.log(location.protocol); // Mostra 'https:'
location.protocol = 'http:'; // Canvia el protocol a 'http:'
host: Obtén o estableix el nom de domini i el número de port de l'URL.

console.log(location.host); // Mostra 'www.example.com:8080'
location.host = 'www.anotherexample.com:8080'; // Canvia el nom de domini i port
hostname: Obtén o estableix el nom de domini de l'URL.

console.log(location.hostname); // Mostra 'www.example.com'
location.hostname = 'www.anotherexample.com'; // Canvia el nom de domini
port: Obtén o estableix el número de port de l'URL.

console.log(location.port); // Mostra '8080'
location.port = '9090'; // Canvia el port a '9090'
pathname: Obtén o estableix el camí de l'URL.

console.log(location.pathname); // Mostra '/path/page'
location.pathname = '/newpath/newpage'; // Canvia el camí de l'URL
search: Obtén o estableix la part de consulta (query string) de l'URL.

console.log(location.search); // Mostra '?query=example'
location.search = '?newquery=example2'; // Canvia la consulta de l'URL
hash: Obtén o estableix l'ancoratge (fragment) de l'URL.

console.log(location.hash); // Mostra '#section1'
location.hash = '#newsection'; // Canvia l'ancoratge de l'URL
origin: Obtén l'origen de l'URL, que inclou el protocol, el nom de domini i el port.

console.log(location.origin); // Mostra 'https://www.example.com:8080'
Mètodes
assign(url): Carrega un nou document des de l'URL especificat.

location.assign('https://www.example.com'); // Redirigeix a una nova URL
replace(url): Reemplaça l'URL actual per un nou URL. Aquesta acció no guarda l'entrada a l'historial del navegador.

location.replace('https://www.example.com'); // Reemplaça l'URL actual
reload(forcedReload): Recarrega la pàgina actual. Si forcedReload és true, la pàgina es recarregarà del servidor en lloc de la memòria cau.

location.reload(); // Recarrega la pàgina
location.reload(true); // Força la recàrrega des del servidor
Exemple
A continuació es mostra un exemple que utilitza diverses propietats i mètodes de l'objecte Location per manipular l'URL de la pàgina.
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemple de Location</title>
</head>
<body>
  <button id="changeUrl">Canvia l'URL</button>
  <button id="reloadPage">Recarrega la Pàgina</button>

  <script>
    document.getElementById('changeUrl').addEventListener('click', function() {
      // Canvia l'URL de la pàgina
      location.href = 'https://www.example.com';
    });

    document.getElementById('reloadPage').addEventListener('click', function() {
      // Recarrega la pàgina
      location.reload();
    });

    // Mostrar diferents parts de l'URL
    console.log('Protocol:', location.protocol);
    console.log('Host:', location.host);
    console.log('Pathname:', location.pathname);
    console.log('Search:', location.search);
    console.log('Hash:', location.hash);
    console.log('Origin:', location.origin);
  </script>
</body>
</html>
```

Aquest exemple mostra com es poden utilitzar les propietats i mètodes de l'objecte Location per canviar l'URL, recarregar la pàgina i obtenir informació sobre l'URL actual.

### 5. Objecte `History` en JavaScript

L'objecte `History` en JavaScript permet la manipulació de l'historial de navegació del navegador. Aquest objecte proporciona mètodes per moure's cap endavant o cap enrere en l'historial, així com per afegir, reemplaçar i obtenir informació sobre les entrades de l'historial.

- **Propietats**

  **`length`**: Retorna el nombre d'entrades en l'historial de navegació.
  ```javascript
  console.log(history.length); // Mostra el nombre d'entrades en l'historial
  scrollRestoration: Permet establir si la posició de desplaçament (scroll) es restaurarà automàticament quan es navegui cap enrere o endavant.
  
console.log(history.scrollRestoration); // Mostra l'estat actual ('auto' o 'manual')
history.scrollRestoration = 'manual'; // Canvia a la restauració manual del desplaçament
Mètodes
back(): Navega a l'entrada anterior de l'historial (equivalent a fer clic al botó "Endarrere" del navegador).

history.back(); // Va a l'entrada anterior
forward(): Navega a l'entrada següent de l'historial (equivalent a fer clic al botó "Endavant" del navegador).

history.forward(); // Va a l'entrada següent
go(delta): Navega a una posició específica en l'historial, relativa a la posició actual. delta és un nombre enter: un valor negatiu va cap enrere i un valor positiu va cap endavant.

history.go(-1); // Va a l'entrada anterior (equivalent a history.back())
history.go(2); // Va dues entrades endavant
pushState(state, title, url): Afegeix una nova entrada a l'historial.

state: Un objecte d'estat associat amb la nova entrada de l'historial.
title: Un títol (actualment ignorat per la majoria de navegadors).
url: Un nou URL per la nova entrada (pot ser relatiu o absolut).

history.pushState({page: 1}, 'Títol', '/page1');
replaceState(state, title, url): Reemplaça l'entrada actual de l'historial amb una nova.

state: Un objecte d'estat associat amb la nova entrada de l'historial.
title: Un títol (actualment ignorat per la majoria de navegadors).
url: Un nou URL per la nova entrada (pot ser relatiu o absolut).
history.replaceState({page: 2}, 'Títol Nou', '/page2');

- **Exemple**
  A continuació es mostra un exemple que utilitza les propietats i mètodes de l'objecte History per navegar per l'historial i modificar les entrades de l'historial.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemple de History</title>
</head>
<body>
  <button id="backButton">Endarrere</button>
  <button id="forwardButton">Endavant</button>
  <button id="pushStateButton">Afegir Nova Entrada</button>
  <button id="replaceStateButton">Reemplaçar Entrada Actual</button>

  <script>
    document.getElementById('backButton').addEventListener('click', function() {
      // Navega a l'entrada anterior
      history.back();
    });

    document.getElementById('forwardButton').addEventListener('click', function() {
      // Navega a l'entrada següent
      history.forward();
    });

    document.getElementById('pushStateButton').addEventListener('click', function() {
      // Afegeix una nova entrada a l'historial
      history.pushState({page: 1}, 'Nou Títol', '/newpage1');
      console.log('Nova entrada afegida a l\'historial');
    });

    document.getElementById('replaceStateButton').addEventListener('click', function() {
      // Reemplaça l'entrada actual de l'historial
      history.replaceState({page: 2}, 'Títol Reemplaçat', '/newpage2');
      console.log('Entrada actual reemplaçada a l\'historial');
    });

    // Mostrar el nombre d'entrades en l'historial
    console.log('Nombre d\'entrades en l\'historial:', history.length);
  </script>
</body>
</html>
```

Aquest exemple permet a l'usuari navegar cap enrere i cap endavant en l'historial, afegir una nova entrada i reemplaçar l'entrada actual de l'historial utilitzant els botons de la pàgina.

### 6. Objecte `Navigator` en JavaScript

L'objecte `Navigator` en JavaScript proporciona informació sobre el navegador i el sistema operatiu de l'usuari. També ofereix mètodes per interactuar amb certes funcionalitats del navegador, com ara la geolocalització, l'estat en línia i les credencials de l'usuari.

- **Propietats**

  **`appName`**: Retorna el nom del navegador.
  ```javascript
  console.log(navigator.appName);
appVersion: Retorna una cadena que conté informació sobre la versió del navegador.

console.log(navigator.appVersion);
userAgent: Retorna l'agent d'usuari del navegador.

console.log(navigator.userAgent);
platform: Retorna la plataforma del sistema operatiu.

console.log(navigator.platform);
language: Retorna el codi de llengua de l'idioma preferit de l'usuari.

console.log(navigator.language);
onLine: Retorna un valor booleà que indica si el navegador està en línia.

console.log(navigator.onLine);
geolocation: Proporciona accés a l'objecte Geolocation per obtenir la ubicació de l'usuari.

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Latitude: ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
  });
} else {
  console.log('Geolocation no està suportada pel navegador');
}
cookieEnabled: Retorna un valor booleà que indica si les cookies estan habilitades al navegador.

console.log(navigator.cookieEnabled);
storage: Proporciona accés a l'objecte StorageManager, que permet gestionar l'emmagatzematge del navegador.

if (navigator.storage && navigator.storage.estimate) {
  navigator.storage.estimate().then(function(estimate) {
    console.log(`Quota: ${estimate.quota}`);
    console.log(`Uso: ${estimate.usage}`);
  });
}

mediaDevices: Proporciona accés als dispositius multimèdia (com ara càmeres i micròfons) disponibles.

navigator.mediaDevices.enumerateDevices().then(function(devices) {
  devices.forEach(function(device) {
    console.log(device.kind + ": " + device.label);
  });
});

Mètodes
javaEnabled(): Retorna un valor booleà que indica si Java està habilitat al navegador.

console.log(navigator.javaEnabled());
sendBeacon(url, data): Envia de manera asíncrona una petició HTTP POST a una URL especificada, generalment utilitzat per enviar dades analítiques.

navigator.sendBeacon('/analytics', JSON.stringify({event: 'page_load'}));

- **Exemple**
A continuació es mostra un exemple que utilitza diverses propietats i mètodes de l'objecte Navigator per obtenir informació sobre el navegador i el sistema operatiu de l'usuari.
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemple de Navigator</title>
</head>
<body>
  <h1>Informació del Navegador</h1>
  <ul>
    <li><strong>Nom del Navegador:</strong> <span id="appName"></span></li>
    <li><strong>Versió del Navegador:</strong> <span id="appVersion"></span></li>
    <li><strong>Agent d'Usuari:</strong> <span id="userAgent"></span></li>
    <li><strong>Plataforma:</strong> <span id="platform"></span></li>
    <li><strong>Idioma:</strong> <span id="language"></span></li>
    <li><strong>En Línia:</strong> <span id="onLine"></span></li>
    <li><strong>Cookies Habilitades:</strong> <span id="cookieEnabled"></span></li>
  </ul>

  <script>
    document.getElementById('appName').textContent = navigator.appName;
    document.getElementById('appVersion').textContent = navigator.appVersion;
    document.getElementById('userAgent').textContent = navigator.userAgent;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('language').textContent = navigator.language;
    document.getElementById('onLine').textContent = navigator.onLine ? 'Sí' : 'No';
    document.getElementById('cookieEnabled').textContent = navigator.cookieEnabled ? 'Sí' : 'No';
  </script>
</body>
</html>
```

Aquest exemple mostra com es poden utilitzar les propietats i mètodes de l'objecte Navigator per mostrar informació sobre el navegador i el sistema operatiu de l'usuari en una pàgina web.
