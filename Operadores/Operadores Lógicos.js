var a = true;
var b = false;

/*  
    Tabla de verdad AND
    true  && true   -> true
    true  && false  -> false
    false && true   -> false
    false && false  -> false

    Tabla de verdad OR
    true  && true   -> true
    true  && false  -> true
    false && true   -> true
    false && false  -> false

    Tabla de verdad NOT
    !true   -> false
    !false  -> true
*/

// En la operación AND solamente da verdad cuando los dos valores son verdaderos, en este caso da falso.
console.log("(a && b) ->", a && b);

//En la operacion OR solamente da verdad cuando uno de los dos valores es verdadero, en este caso da verdad.
console.log("(a || b) ->", a || b);

// El operador ! invierte el valor de una variable o operación, en este caso a es verdadero, pero se invierte a falso.
console.log("!a ->", !a);
// Se invierte la operacion &&.
console.log("!(a && b) -> ", !(a && b));
