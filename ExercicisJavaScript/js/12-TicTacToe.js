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