## $
L'ús del signe del dòlar no és molt comú a JavaScript, però els programadors professionals sovint l'utilitzen com a àlies per a la funció principal d'una biblioteca de JavaScript.

A la biblioteca JavaScript jQuery, per exemple, la funció principal \$ s'utilitza per seleccionar elements HTML. A jQuery $("p"); significa "seleccionar tots els p elements".

## Strings
La cadena de plantilla ofereix una manera senzilla d'interpolar variables i expressions en cadenes.

El mètode s'anomena interpolació de cadenes.

La sintaxi és:
```Javascript
${...}
```

## Substitucions de variables
Les cadenes de plantilla permeten variables en cadenes:

```Javascript
let firstName = "Joan";
let lastName = "Doe";

let text = `Benvingut ${nom}, ${cognom}!`;
```

## Substitució d'expressions
Les cadenes de plantilla permeten expressions en cadenes:

```Javascript
deixar preu = 10;
deixem IVA = 0,25;

Let total = `Total: ${(preu * (1 + IVA)).toFixed(2)}`;
```

## Plantilles HTML
```Javascript
let header = "Cadenes de plantilla";
let tags = ["cadenes de plantilla", "javascript", "es6"];

deixa html = `<h2>${header}</h2><ul>`;
per (const x d'etiquetes) {
 html += `<li>${x}</li>`;
}

html += `</ul>`;
```

## JSON
[W2schools JSON](https://www.w3schools.com/js/js_json.asp)