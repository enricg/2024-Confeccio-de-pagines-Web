//------------------------------------------------------------------------------
// funció per reutilitzar el codi
//------------------------------------------------------------------------------
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("variable");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Pàgina no trobada.";
            }
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("variable");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  }

  //------------------------------------------------------------------------------
// 00-Exercici.js
//------------------------------------------------------------------------------

nom="Jordi";
cognom="Pérez";
edat=21;
tincMascota=false;

function suma(operand1,operand2){
  resultat = operand1+operand2;
  return resultat;
}

function calcula(operand1,operand2, operacio){
  if (operacio == "+")
    resultat = operand1+operand2;
  else 
  if (operacio == "-")
    resultat = operand1-operand2;
  else
  if (operacio == "*")
    resultat = operand1*operand2;
  else
  resultat = operand1/operand2;
return resultat;
}

//------------------------------------------------------------------------------
// 02-Exercicis.js
//------------------------------------------------------------------------------

function areaTriangle(base,altura){
  console.log(arguments);
  console.log(arguments.length)
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments["0"]*arguments[1]);
  
  let resultat=base*altura/2;
  return resultat;
}

//------------------------------------------------------------------------------
// 08-Exercicis RegExp.js
//------------------------------------------------------------------------------

function esCpValid(cp){
  console.log(cp);
  let patro = /^\d{5}$/;
  return patro.test(cp);
}

function esEmailValid(email){
  console.log(email);
  let patro = /[^@ \t\r\n]+\w+@[^@ \t\r\n]+\w+\.[^@ \t\r\n]\w+/;
  return patro.test(email);
}

function extreureNombresTelefon(frase){
  console.log(frase);
  let patro = /((\(\d{3}\){1}\s\d{3}\-{1}\d{4})|(\d{3}\s\d{2}\s\d{2}\s\d{2}))/g;
  return frase.match(patro);
}

function extraureDominiEmail(frase){
  console.log(frase);
  let patro = /(?<=@)[^@ \t\r\n]+\w+\.[^@ \t\r\n]\w+/g;
  return frase.match(patro);
}

function esTargetaCreditValida(frase){
  console.log(frase);
  let patro = /(\d{16})|((\d{4}\s){3}\d{4})/;
  return patro.test(frase);
}

function treureParaulesDuplicades(text) {
  const regex = /\b(\w+)\b(?:\s+\1)+/g;
  return text.replace(regex, '$1');
}

function extraureHashtags(frase){
  console.log(frase);
  let patro = /#[^\s](\w|\d)+/g;
  return frase.match(patro);
}

function esPasswordValida(contrassenya){
  console.log(contrassenya)
  let patro = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;        
  return patro.test(contrassenya);
}

function extraureDates(frase){
  console.log(frase)
  //let patro = /\d{2}\/\d{2}\/\d{4}/g;  
  let patro = /(\d{1,2}\/){2}\d{4}/g;
  return frase.match(patro);
}

function esURLValida(url){
  console.log(url)
  // let patro = /^(http|https|ftp|tftp)\:\/\/\   (\d|\w)+(\.(\w|\d)+)+/;
  let patro = /^(http|https|ftp|tftp)\:\/\/(\w+[./]){2,}\w+/;
  return patro.test(url); 
}
  
//------------------------------------------------------------------------------
// 09-events.js
//------------------------------------------------------------------------------

// Canviar el color comparant directament de l'element
function clicar(){
  alert("El color de fons és:" + document.getElementById("cos").style.backgroundColor);
  if (document.getElementById("cos").style.backgroundColor == "rgb(238, 238, 204)"){
      document.getElementById("cos").style.backgroundColor="#FFFFFF";

      }
  else{
      console.log("adeu");
      document.getElementById("cos").style.backgroundColor="rgb(238, 238, 204)";
  }
}
// Canvia el color comparant el valor de variable de sessió
function clicar2(){
  alert("El color de fons és:" + sessionStorage.getItem("colorFons"));
  if (sessionStorage.getItem("colorFons") == "rgb(238, 238, 204)"){
      sessionStorage.setItem("colorFons","#FFFFFF");
  }
  else{
      sessionStorage.setItem("colorFons","rgb(238, 238, 204)");
      }
  document.getElementById("cos").style.backgroundColor=sessionStorage.getItem("colorFons");
}

//------------------------------------------------------------------------------
// 10-calculadora.js
//------------------------------------------------------------------------------

function afegir(caracter){
  let cadena = sessionStorage.getItem("resultat");
  if(isFinite(caracter) || isFinite(cadena[cadena.length-1])){
      cadena+=caracter;
      }
      else{
          cadena=cadena.substring(0,cadena.length-1);
          cadena+=caracter;

      //cadena[cadena.length-1]=caracter;
  }
  sessionStorage.setItem("resultat",cadena);
  document.getElementById("display").value=cadena;
}

alerta = (missatge) => alert(missatge);

resol = () => {
  try{
      let cadena = sessionStorage.getItem("resultat");
      document.getElementById("display").value=eval(cadena);
  }catch(e){
      //alert("Alguna cosa no ha anat bé");
      alerta("Hola bon dia");
  }
}

function netejar(opcio){
  switch(opcio){
      case 'C':
          //console.log("C");
          esborraTot();
          break;
          case 'CE':
          //console.log("CE");
          esborraOperador();
          break;
          case '<':
          //console.log("<");
          esborraCaracter();
          break;
  }
}

function esborraTot(){
  sessionStorage.setItem("resultat","");
  document.getElementById("display").value="";
}

function esborraCaracter(){
  let cadena = sessionStorage.getItem("resultat");
  //console.log("Longitud:"+cadena.length);
  //console.log(cadena);
  if(cadena.length>0){
      sessionStorage.setItem("resultat",cadena.substring(0,cadena.length-1));
      document.getElementById("display").value=cadena;
  }
  else{
      alert("No hi ha més digits per esborrar!");
  }
}

//------------------------------------------------------------------------------
// 12-TicTacToe.js
//------------------------------------------------------------------------------

let tauler= [["b","b","b"],["b","b","b"],["b","b","b"]]; // guarda les posicions de les fitxes
let torn = 0; // controla a qui li toca tirar

turn = (coordenada) => {
    // Valida si ja hi ha alguna fitxa
    //console.log(document.getElementById('pos'+coordenada).className);
    if(tauler[coordenada[0]][coordenada[1]]=="b"){
        eliminaClasse(coordenada); // Eliminem la classe
        (torn%2==0)? // Controla quina fitxa (X o O) ha de registrar-se
            afegeixClasse(coordenada, "vermella", "X"): // Afegim classe de forma torn de div
            afegeixClasse(coordenada, "verda", "O"); // Afegim classe de forma torn de div
        let guanyador = validar();
        torn++;
        if(guanyador) alert("Has guanyat!");
        console.log(torn);
        if(torn==9&&guanyador==false) alert("Partida finalitzada");
    }
    else alert("Ja hi ha una fitxa a la posició");
}

inicialitzar = () => {
    // Eliminem classe de fitxa
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            //tauler[[i],[j]]="b";
            console.log(tauler[i][j])
            if(tauler[i][j]!="b"){
                    eliminaClasse("ver")
            }
            //afegeixClasse(i&&j,"casella","b"); // Afegim classe de forma buida de div
        }
    }
}

// Funció que elimina la classe
eliminaClasse = (coordenada) => {
    // Eliminem classe de forma buida de div
    document.getElementById('pos'+coordenada).className = document.getElementById('pos'+coordenada).className.replace(/(?:^|\s)casella(?!\S)/g, '')
}

// Funció que afegeix la classe que representa la fitxa (verda o vermella)
afegeixClasse = (coordenada, color, lletra) => {
    tauler[coordenada[0]][coordenada[1]]=lletra;
    document.getElementById('pos'+coordenada).className += color;
}

function validar(){
    let guanyador = false;
    for(let i=0;i<3;i++){
        // Recorrem files
        if((tauler[i][0]==tauler[i][1])&&(tauler[i][0]==tauler[i][2])&&(tauler[i][0]!="b")){
            guanyador = true;
        }
        // Recorrem columnes
        if((tauler[0][i]==tauler[1][i])&&(tauler[0][i]==tauler[2][i])&&(tauler[0][i]!="b")){
            guanyador = true;
        }
    }
    // Validem diagonals
    if(     (((tauler[0][0]==tauler[1][1])&&(tauler[0][0]==tauler[2][2]))
        ||  ((tauler[0][2]==tauler[1][1])&&(tauler[0][2]==tauler[2][0])))
        &&  (tauler[1][1]!="b")){
        guanyador = true;
    }
    return guanyador;
}

//------------------------------------------------------------------------------
// 13-json.js
//------------------------------------------------------------------------------

function nomHeroi(i){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      document.write(data.members[i].name);
  })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}

function llistaHerois(){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {        
      data.members.forEach(element => {
          novaTargeta(element);
      });
  })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}

function novaTargeta(element){
  // Creació nova targeta
  let novaTargeta = document.createElement("div");
  novaTargeta.className+= "targeta";
  
  // DIV del títol
  let nouHeroi = document.createElement("div");
  nouHeroi.className+= "heroi";
  
  // let nouTextHeroi = document.createTextNode(element.name);
  nouHeroi.appendChild(document.createTextNode(element.name)); // afegeix el nom del superheroi.
  novaTargeta.appendChild(nouHeroi);
  
  // DIV d'habilitats
  novaTargeta.appendChild(afegeixHabilitats(element.powers));

  // Afegeix al final
  const list = document.getElementById("contenidor");
  list.insertBefore(novaTargeta, list.lastChild);
}

// Funció que afegeix les habilitats d'un heroi
function afegeixHabilitats(poders){
  let nouHabilitats = document.createElement("div");
  nouHabilitats.className+= "poders";
  
  poders.forEach(poder => {
      //let nouTextHabilitats = document.createTextNode(poder);
      nouHabilitats.appendChild(document.createTextNode(poder)); // afegeix el nom d'habilitats.
      nouHabilitats.appendChild(document.createElement("br")); // afegeix un salt de línia
  });
  return nouHabilitats;
}

function canviaColor(color){
  const conjuntPoders = document.getElementsByClassName("poders");
  for(i=0;i<conjuntPoders.length;i++){
      conjuntPoders[i].style.backgroundColor=color;
  }
}

//------------------------------------------------------------------------------
// 14-API Star Wars.js
//------------------------------------------------------------------------------

// Declaració de variables globals
let categories = ["films", "people", "planets", "species", "starships", "vehicles"]; // llista de categories

// fa petició a API i mostra informació
// Inicialitzar components
function inicialitzar(){
    afegeixElementsDesplegable(categories, "sCategories");
}

// afegeix llista d'elements (elements) a un select (desplegable)
function afegeixElementsDesplegable(llista, desplegable){
    document.getElementById(desplegable);
    llista.forEach(element =>{
        nouElement(element,desplegable);
    })
}

// afegeix un nou element al select (id) que decidim
function nouElement(element, id){
    const llista = document.getElementById(id);
    llista.appendChild(new Option(element,element));
}

function fetchSWCategoria(){
    const contenidor = document.getElementById("contenidor"); // posició on s'afegiran les dades
    const url = 'https://swapi.dev/api/'

    contenidor.innerHTML = "S'està recuperant la informació...";
    fetch(url+document.getElementById("sCategories").value)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
        contenidor.innerHTML = "";
        data.results.forEach(element => {
            novaTargeta(element);
        });                    
    })
    .catch((error) => {
        console.error("Error al llegir l'arxiu JSON: ", error);
    })
}


// Crea una nova targeta
function novaTargeta(element){
    // Creació nova targeta
    let novaTargeta = document.createElement("div");
    novaTargeta.className+= "targeta";
    
    // DIV del títol
    let nouTitol = document.createElement("div");
    nouTitol.className+= "titol";

    // Afegim el títol. Si és film-->title, sinó-->name
    (Object.keys(element).includes("name"))?
    nouTitol.appendChild(document.createTextNode(element.name)):
    nouTitol.appendChild(document.createTextNode(element.title))
    novaTargeta.appendChild(nouTitol);
    
    // DIV d'altre camps
    altres(element.planets);
    // element.planets.forEach(planeta => {
    //     console.log(planeta);
    // })
    
    // Afegeix al final
    const list = document.getElementById("contenidor");
    list.insertBefore(novaTargeta, list.lastChild);
}

function altres(elements){
    console.log(elements[0].split("/").slice(-3));
    let [categoria, element] = elements[0].split("/").slice(-3);
    console.log(categoria);
    console.log(element);
}


// Funció que afegeix els altres camps
// function afegeixAltres(altres){
//     let nouAltres = document.createElement("div");
//     nouAltres.className+= "altres";
//     console.log(altres);
//     // altres.forEach(altre => {
//     //     nouAltres.appendChild(document.createTextNode(altre)); // afegeix el nom.
//     //     nouAltres.appendChild(document.createElement("br")); // afegeix un salt de línia
//     // });
//     return nouAltres;
// }

//---------------------------------------------------------------------------
function mostrarGats(){
    // const API_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = "live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM";
    
    const contenidor2 = document.getElementById("contenidor2"); // posició on s'afegiran les dades
    const url = 'https://api.thecatapi.com/v1/images/search'

    contenidor2.innerHTML = "S'està recuperant la informació...";
    fetch(url,{headers: {
        'x-api-key': API_KEY
    }})
    .then((response) => {return response.json();})
    .then((data) => {
        document.getElementById("breed_image").src = data[0].url;
    })
    .catch((error) => {
        console.error("Error al llegir l'arxiu JSON: ", error);
    })
}

//------------------------------------------------------------------------------
// 14-apis.js
//------------------------------------------------------------------------------

// API dels gats. Cal registrar-se per obtenir la api-key
// live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM 
// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM"
// let storedBreeds = []

// fetch(url, {
// headers: {
//     'x-api-key': api_key
// }
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {

//     //filter to only include those with an `image` object
//     data = data.filter(img => img.image?.url != null)

//     storedBreeds = data;

//     for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');

//     //skip any breeds that don't have an image
//     if (!breed.image) continue

//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
//     document.getElementById('breed_selector').appendChild(option);
//     }
//     //show the first breed by default
//     showBreedImage(0)
// })
// .catch(function (error) {
//     console.log(error);
// });

// function showBreedImage(index) {
// document.getElementById("breed_image").src = storedBreeds[index].image.url;
// document.getElementById("breed_json").textContent = storedBreeds[index].temperament;
// }

// API Star Wars
function mostraInfoSW(){
  fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then((data) => {
          console.log(data);
          document.write(data.results[1].title);
          console.log(data.results[1].title);
          console.log(data.count);
          // for(i=0;i<data.count;i++){
          //     //getElementById("sortida").innerHTML = `<p>${data[i]}</p>`;
          //     document.write("${data[i].title}<br>");
          //     document.write("Hola<br>");
          // }
      })
      .catch(error => {
          console.log(error.message);
          // getElementById("sortida").innerHTML = `<p>Error: ${error.message}</p>`;
      });
}

//------------------------------------------------------------------------------
// 15-Poblacio.js
//------------------------------------------------------------------------------

let districtes = [];
let barris =[];

// afegeix els districtes a una llista
function nouDistricte(districte){
    let trobat = -1;
    if(!districtes.includes(districte)){
        districtes.push(districte);
        barris.push([]);
        nouElement(districte, "districtes");
    }
    trobat = districtes.indexOf(districte);
    return trobat;
}

// afegeix els barris a una llista de llistes
function nouBarri(id,barri){
    if(!barris[id].includes(barri)) barris[id].push(barri);
}

// afegeix un nou element a la llista que decidim
function nouElement(element, id){
    const llista = document.getElementById(id);
    llista.appendChild(new Option(element,element));
}

// carrega el select amb els noms dels barris
function carregaBarris(valor){
    esborraBarris();
    barris[districtes.indexOf(valor)].forEach(element => nouElement(element,"barris"));
}

// esborra els barris de la llista del select
function esborraBarris(){
    let llista = document.getElementById("barris");
    while (llista.firstChild) llista.removeChild(llista.firstChild);
}

//------------------------------------------------------------------------------
// 16-validaForms.js
//------------------------------------------------------------------------------

// concentra totes les validacions
function valida(valor,control){
  switch(control){
      case "CP":
          validaCP(valor);
      }
  }
  
// valida control de Codi Postal
function validaCP(valor){
  console.log(valor);
  let patro =/^\d{5}$/;
  missatge(patro.test(valor),"missatge");
}

// mostra missatge
function missatge(msg, posicio){
  const punt = document.getElementById(posicio);
  if(msg){
      punt.classList.remove("alert-danger");
      punt.classList.add("alert-primary");
      punt.innerHTML="Correcte";
  }else{
      punt.classList.remove("alert-primary");
      punt.classList.add("alert-danger");
      punt.innerHTML="ERROR!!!";
  }
}