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