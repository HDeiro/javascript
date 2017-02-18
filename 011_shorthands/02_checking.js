/**
    É possível realizar checagem de
    valores nulos, indefinidos, vazios
    e similares utilizando o operador
    lógico ||.

    Além disso, outro atalho bastante
    comum é a declaração contínua de
    variáveis separados por vírgulas.

    Essa possibilidade de verificação é possível
    a partir da verificação trusty values do 
    JavaScript, que avalia qualquer valor como um
    booleano. Normalmente, os valores análogos à false
    são '', null, undefined, false. Todos os demais
    são true por default.
 */

//Exemplo com Null
var variable1 = null;
var variable2 = variable1  || 'vazio';
console.log(variable2);

//Exemplo com Undefined
var variable1 = undefined;
var variable2 = variable1  || 'vazio';
console.log(variable2);

//Exemplo com String Vazia
var variable1 = '';
var variable2 = variable1  || 'vazio';
console.log(variable2);

//Exemplo com valor numérico 0
var variable1 = 0;
var variable2 = variable1  || 'vazio';
console.log(variable2);

//Exemplo com valor numérico 1
var variable1 = 1;
var variable2 = variable1  || 'vazio';
console.log(variable2);

//Exemplo com valor string
var variable1 = 'huebr';
var variable2 = variable1  || 'vazio';
console.log(variable2);