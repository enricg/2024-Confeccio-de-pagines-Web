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