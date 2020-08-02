var a = 2; // Representa 0010 bits.
var b = 3; // Representa 0011 bits.

/*
    Resolución operador AND
        a  -> 0010
        b  -> 0011
    Resultado 0010 = 2 en decimal.
*/
console.log("(a & b) ->", a & b);

/*
    Resolución operador OR
        a  -> 0010
        b  -> 0011
    Resultado 0011 = 3 en decimal.
*/
console.log("(a | b) ->", a | b);

/*
    Resolución operador XOR
        a  -> 0010
        b  -> 0011
    Resultado 0001 = 1 en decimal.
*/
console.log("(a ^ b) ->", a ^ b);

/*
    Resolución operador NOT (invierte los bits del operando)
*/
console.log("~b ->", ~b);

console.log("(a << b)", a << b);

console.log("(a >> b)", a >> b);