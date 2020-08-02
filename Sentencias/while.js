var contador = 0;

// Nunca olvidar que la sentencia tiene que cumplirse, sino se generará un loop infinito.

// Primero ejecuta la expresión de do y después verifica la condición.
do{
    console.log("Contador: ", contador);
    contador++;
}while(contador < 10);

contador = 0;

// Primero verifica la condición y después ejecuta la expresión.
while(contador < 10){
    console.log("Contador: ", contador);
    contador++;
}

// Primero suma el contador y después verifica la condición para proceder a ejecutar la expresión.
while(++contador < 10){
    console.log("Contador: ", contador);
}