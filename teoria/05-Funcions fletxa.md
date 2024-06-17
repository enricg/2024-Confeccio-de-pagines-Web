# Funcions fletxa
En JavaScript, l'operador **=>** es coneix com a "funció fletxa" (arrow function) i és una sintaxi més concisa per escriure funcions. Les funcions fletxa es van introduir en l'ECMAScript 6 (ES6) i tenen una sèrie de característiques que les fan diferents de les funcions tradicionals.

Aquí tens un exemple d'una funció tradicional i una funció fletxa equivalent:

### Funció Tradicional
```javascript
var suma = function(a, b) {
    return a + b;
};
```

### Funció Fletxa
```javascript
var suma = (a, b) => {
    return a + b;
};
```

### Funció Fletxa amb Retorn Implícit
Si la funció fletxa només té una expressió, pots ometre les claus **{}** i el **return**:

```javascript
var suma = (a, b) => a + b;
```
### Diferències Clau entre Funcions Tradicionals i Funcions Fletxa
1. **Sintaxi Més Concisa**: Les funcions fletxa són més curtes i netes.
2. **No Tenen this Propi**: Les funcions fletxa no tenen el seu propi context **this**; hereten el **this** del context on es van definir. Això és útil en situacions com els callbacks o les funcions en mètodes de classe.
2. **No Es Pueden Utilizar com Constructors**: No es poden utilitzar amb **new** per crear instàncies d'objectes.
### Exemples Addicionals
#### Funció Fletxa Sense Paràmetres
```javascript
var saludar = () => {
    console.log("Hola!");
};
```

#### Funció Fletxa amb un Sol Paràmetre
Quan hi ha només un paràmetre, es poden ometre els parèntesis:

```javascript
var doble = x => x * 2;
```
En resum, l'operador **=>** en JavaScript s'utilitza per definir funcions fletxa, oferint una manera més breu i sovint més llegible d'escriure funcions, especialment en situacions en què el maneig del context ***this*** és crític.