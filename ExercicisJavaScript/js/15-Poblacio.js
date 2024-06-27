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