/*
    É possível extrair os valores de objetos
    e arrays de forma mais simples
    utilizando o destructuring
 */

const array = [1, 2, 3];
const [a, b] = array;

console.log(a);
console.log(b);
console.log(array);

//Você também pode desestrutura com rest parameters
const [c, ...rest] = array;

console.log(c);
console.log(rest);
console.log(array);

//Para objetos, pode ser feito da seguinte forma

const pessoa = {
    nome: 'Maria',
    idade: 29
};

const {nome, idade, naoexiste} = pessoa; //Os receptores devem ter os mesmos nomes das propriedades

console.log(nome, idade, naoexiste);