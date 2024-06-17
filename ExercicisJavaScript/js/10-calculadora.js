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

// function resol(){
//     try{
//         let cadena = sessionStorage.getItem("resultat");
//     document.getElementById("display").value=eval(cadena);
//     }catch(e){
//         alert("Alguna cosa no ha anat bé");
//     }
// }

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