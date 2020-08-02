/*
    for ([expresion-inicial]; [condicion]; [expresion-final]){
        sentencia
    }
*/

var n = 0;

for (var i = 0; i < 9; i++) {
    n += i;
    console.log(n);
 }

// break se usa para terminar el ciclo dentro de una sentencia.
for (var i = 0; i < 9; i++) {
    console.log(i);
    if(i == 5){
        console.log("se llego a 5 y termina el bucle")
        break;
    }
}