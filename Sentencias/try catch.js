/*
    La declaración try catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).
*/

var n = 0
try{
    n = -2
    if(n < 0)
        throw "No se permiten numeros negativos"; // genera una excepción
}catch(error){
    // sentencias para manejar cualquier excepción
    console.log(error); //muestra la excepcion
}


function excepcionNumero(mensaje){
    this.mensaje = mensaje;
    this.nombre = "excepcionNumero";
}

try {
    n = -5
    if(n < 0){
        excepcionNumero = new excepcionNumero("Numero no valido");
        throw excepcionNumero;
    }
} catch (error) {
    console.log(error.nombre, error.mensaje);
}