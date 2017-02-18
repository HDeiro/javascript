/**
 * Arrow Functions, ou funções Lambda, ou
 * funções anônimas podem ser utilizadas a 
 * partir do ES6
 */

function normal() {
    console.log('Oi, sou uma função comum');
}

var lambda = () => console.log('Sou uma função lambda!');

normal();
lambda();

//Coisas legais com lambdas

//1° - Você não precisa usar parênteses se a função só tiver um
var lambda1 = parametro => console.log(parametro);
lambda1('Passei o parâmetro para uma Lambda sem parênteses');

//2° - Se você for retornar um valor derivado de uma operação em uma só linha
//não precisa de {}

var lambda2 = parametro => parametro + '!';
console.log(lambda2('Opa, retornando valores com Lambdas'));