function areaTriangle(base,altura){
    console.log(arguments);
    console.log(arguments.length)
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments["0"]*arguments[1]);

    let resultat=base*altura/2;
    return resultat;
}