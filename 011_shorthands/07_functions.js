/*
    Eventualmente pode-se utilizar 
    a ideia do operador || (explicada no 
    02_checking.js)
 */

//Opção 1
function exemplo(parametro) {
    if(parametro === undefined)
        return 'parametro undefined';
    else 
        return parametro
}

console.log(exemplo());
console.log(exemplo('exemplo'));

//Opção 2
function exemplo(parametro) {
    return parametro || 'parametro undefined';
}

console.log(exemplo());
console.log(exemplo('exemplo'));

//Opção 3
function exemplo(parametro) {
    return parametro === undefined ? 'parametro undefined' : parametro;
}

console.log(exemplo());
console.log(exemplo('exemplo'));

/**
    Caso você precise fazer chamadas
    de duas (ou mais) funções diferentes
    ao mesmo tempo você pode fazê-lo da
    seguinte forma
 */

function a() {
    console.log('a');
}

function b() {
    console.log('b');
}

var x = 3;

//Opção 1
if(x === 3)
    a();
else
    b();

//Opção 2
(x === 3 ? a : b)();