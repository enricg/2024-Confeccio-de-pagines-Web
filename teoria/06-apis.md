# Exemples APIs gratuïtes
1. **OpenWeatherMap API**
**Descripció**: Proporciona informació meteorològica.
```javascript
const apiKey = 'EL_TEU_API_KEY';
const city = 'Barcelona';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```
2. **NASA API**
**Descripció**: Ofereix accés a diverses dades relacionades amb l'espai.
```javascript
const apiKey = 'EL_TEU_API_KEY';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```
3. **The Cat API**
**Descripció**: Proporciona imatges de gats.
```javascript
// https://api.thecatapi.com/v1/images/search?limit=5
const url = 'https://api.thecatapi.com/v1/images/search';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data[0].url);
  })
  .catch(error => console.error('Error:', error));
```
4. **CoinGecko API**
**Descripció**: Proporciona informació sobre criptomonedes.
```javascript
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```
5. **OpenLibrary API**
**Descripció**: Ofereix dades sobre llibres.
```javascript
const isbn = '9780140328721';
const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```
6. **JokeAPI**
**Descripció**: Proporciona acudits.
```javascript
const url = 'https://v2.jokeapi.dev/joke/Any';

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.type === 'single') {
      console.log(data.joke);
    } else {
      console.log(`${data.setup} - ${data.delivery}`);
    }
  })
  .catch(error => console.error('Error:', error));
```
7. **Dog CEO's Dog API**
**Descripció**: Proporciona imatges de gossos.
```javascript
const url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
  })
  .catch(error => console.error('Error:', error));
```
## 



















Notes Generals:
Per a algunes API, necessitaràs obtenir una clau API (EL_TEU_API_KEY). Pots aconseguir-la registrant-te a la pàgina web del proveïdor de l'API.
Les crides fetch són asíncrones, així que assegura't de manejar les promeses correctament per obtenir les dades desitjades.
Pots substituir console.log amb qualsevol altra lògica que necessitis, com actualitzar l'UI d'una pàgina web.