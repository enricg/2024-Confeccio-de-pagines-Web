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