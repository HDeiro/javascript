/**
    EcmaScript 6, ou ES6, ou ES2015 é, basicamente, 
    uma nova versão do JavaScript.

    Os principais objetivos do ES6 são:
        - Ser uma linguagem melhor para construção de aplicações complexas;
        - Resolver antigos problemas do JavaScript;
        - Facilidade no desenvolvimento de libs.

    Boa parte dos browsers da atualidade conseguem interpretar o EcmaScript 6.
    Contudo, caso haja necessidade de retrocompatibilidade, pode-se utilizar
    uma ferramenta para transpilar ("converter") o código ES6 para ES5, que é
    suportado por quase todos navegadores. Para isso, você pode utilizar uma
    ferramenta chamada Babel.

    Uma das grandes mudanças foi a mudança na forma de se declarar variáveis,
    utilizando let e const. Essa mudança resolve o problema de escopo trazido
    a partir do hoisting.

    Referência ES6: https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f#.k5py5rkx6
 */

function doThingWithFunctionScope() {
    var a = 1;

    if(true) 
        var b = 2;

    console.log(' A = ' + a + ' e B = ' + b);
}

function doThingWithBlockScope() {
    let a = 1;

    if(true) {
        let b = 2;
        console.log(b);
    }

    console.log(' A = ' + a + ' e B = ' + b); //B é indefinido, então, haverá uma exception;
}

doThingWithFunctionScope();
doThingWithBlockScope(); 

//Outro exemplo de let

for(var i = 0; i < 5; i++) {}
for(let j = 0; j < 5; j++) {}

console.log(i);
console.log(j);//Exception porque J é indefinido

/**
    O const é utilizado para criar valores que não 
    podem ser alterados.
 */

let a = 1;
a = 2;

const b = 1;
b = 2; //Exceção, porque B é apenas para leitura (constante)

//Contudo, com objetos, você pode mudar propriedades DO OBJETO, mas a constante sempre será aquele objeto

const c = {
    'abc' : 123
};
c.efg = 456;

console.log(c);