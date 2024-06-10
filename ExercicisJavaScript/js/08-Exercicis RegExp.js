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