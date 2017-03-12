/**
  Em JavaScript não há encapsulamento. Contudo,
  pode-se criar uma restrição de escopo a partir
  de funções de forma que simule um encapsulamento. 
 */

//Exemplo de Contador sem closure
var counter1 = {
    value: 0,
    add: function() {
        return ++this.value;
    }
}

console.log('COUNTER 1');
console.log(counter1.add());
console.log(counter1.add());
console.log(counter1.add());

//Value está visível para o contexto externo
console.log('Valor do counter: ' + counter1.value);
counter1.value = "Buguei seus esquemas";

//Ou seja, quando tenta-se incrementar uma string, obtém-se um NaN (Not a Number)
console.log(counter1.add());

/**
    Contudo, é possível forçar um escopo a partir do closure de função, que não
    permite visualizar o escopo interno a partir do escopo externo. Desta forma, 
    utiliza-se do retorno de um objeto para apresentar os atributos ou funções
    que você queira deixar global.

    Estas funções são conhecidas como Factory Functions.
 */
console.log('\nCOUNTER 2');
function createCounter() {
    var value = 0;
    return {
        add: function() {
            return ++value; //Note que não utilizo o this porque não me refiro ao escopo do objeto e sim da função
        }
    }
}

var counter2 = createCounter();

console.log(counter2.add());
console.log(counter2.add());
console.log(counter2.add());

//Value não está visível para o contexto externo
console.log('Valor do counter: ' + counter2.value);
counter2.value = "Buguei seus esquemas";

//Ou seja o incremento acontece sem problemas
console.log(counter2.add());

/**
    Este mesmo comportamento pode ser obtido a partir
    de uma Constructor Function, que simula um construtor
    e demanda o uso da palavra-chave new
 */

var Counter = function() {
    var value = 0;

    //Como é uma constructor function, não é necessário retornar valores
    this.add = function() {
        return ++value;
    }
}

var counter3 = new Counter();

console.log('\nCOUNTER 3');
console.log(counter3.add());
console.log(counter3.add());
console.log(counter3.add());
console.log('Valor do counter: ' + counter3.value);
counter3.value = "Buguei seus esquemas";
console.log(counter3.add());

/**
 Também é possível utilizar as Factory Functions em uma 
 IIFE (Immediately Invoked Function Expression), de forma
 que reduz-se o código e não precisa se preocupar em referenciar
 a função depois
 */

console.log('\nCOUNTER 4');


var counter4 = (function() {
    var value = 0;
    return {
        add: function() {
            return ++value; //Note que não utilizo o this porque não me refiro ao escopo do objeto e sim da função
        }
    }
})();

console.log(counter4.add());
console.log(counter4.add());
console.log(counter4.add());

//Value não está visível para o contexto externo
console.log('Valor do counter: ' + counter4.value);
counter4.value = "Buguei seus esquemas";

//Ou seja o incremento acontece sem problemas
console.log(counter4.add());