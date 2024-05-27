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

