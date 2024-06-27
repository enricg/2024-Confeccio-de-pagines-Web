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