/*
    JavaScript é uma linguagem que possui tipagem dinâmica
    e, portanto, suas variáveis tem tipos definidos a partir
    do valor que referencia.

    Os tipos primitivos da linguagem são:
        - Number
        - String
        - Boolean
        - Null
        - Undefined

    Há outros tipos que são interpretados como objetos:
        - Objetos (duh?)
        - Funções
        - Arrays
        - Regex

    É importante ter em mente que os tipos passados por valor (primitivos) são imutáveis. 
    Já os de referência (objetos) são mutáveis. 

    Isso é comprovado a partir do momento em que você tenta comparar dois valores primitivos
    e dois valores mutáveis.

    Por exemplo: 10 === 10 resulta em true, enquanto {} === {} resultam em false (pois se referem)
    a objetos diferentes.

    Outra forma de verificar a referência é:
        var a = {};
        var b = a;
        a.property = 'Any Value';
        console.log(b.property);
*/

//Declaração de variável
var a = 10;

//console.log tem função de exibir alguma mensagem em console
//typeof tem a função de retornar o tipo de uma determinada variável
console.log('01 ' + typeof a);

a = 'Estou aprendendo JavaScript';

console.log('02 ' + typeof a);

a = true;

console.log('03 ' + typeof a);

a = new Object();

console.log('04 ' + typeof a);

a = {};

console.log('05 ' + typeof a);

a = [];

console.log('06 ' + typeof a);

a = null; //Referência de Objeto, mas se você tentar atribuir algum valor (tipo: a.propriedade = 10) vai dar erro.

console.log('07 ' + typeof a);

a = undefined;

console.log('08 ' + typeof a);