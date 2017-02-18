/**
 * O Symbol é um novo tipo de dado no JavaScript.
 * Ele é imutável e único, podendo ser utilizado como identificador
 * para propriedades de objetos, por exemplo.
 * 
 * Propriedades de objetos com Symbol são ignoradas por
 * JSON.stringfy()
 */

const symbol1 = Symbol('Meu Symbol') //A string é opcional
const symbol2 = Symbol('Meu Symbol') //A string é opcional

console.log(symbol1 === symbol1);
console.log(symbol1 === symbol2);

//Testando com Objetos!

const idade = Symbol('idade');
let pessoa = {
    idade: 25
};

console.log(pessoa[idade]);
console.log(pessoa['idade']);