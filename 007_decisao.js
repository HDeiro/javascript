/*
    Assim como grande parte das linguagens de programação
    (na realidade, acho que todas), o JavaScript tem suporte
    à estruturas de decisão a partir de if/else, switch/case/default
    e operadores ternários.
*/

if(20 % 2 === 0)
    console.log('É par');
else
    console.log('É ímpar');

switch(2) {
    case 1 : console.log('Opção 1'); break;
    case 2 : console.log('Opção 2'); break;
    case 3 : console.log('Opção 3'); break;
    default: console.log('Opção Default');
}

console.log(20 % 2 === 0 ? 'Par' : 'Ímpar');