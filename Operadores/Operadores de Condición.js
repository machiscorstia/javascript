var a = 1;
var b = 2;

/*
    Condicional ternario

    condición ? expr1 : expr2 
*/

resultado = (a > b) ? "A > B verdad" : "A < B verdad";
console.log(resultado);


(a > b) ? (
    console.log("A es mayor a B"),
    console.log("Otro mensaje")
):
    console.log("A es menor a B"),
    console.log("Otro mensaje")
